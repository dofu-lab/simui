import { expect, Page, test } from '@playwright/test';

const requestId = '33333333-3333-4333-8333-333333333333';
const authToken = createJwt({ exp: Math.floor(Date.now() / 1000) + 3600 });
const user = {
	id: '11111111-1111-4111-8111-111111111111',
	email: 'developer@example.com',
	name: 'Phase Seven',
	pictureUrl: null,
	role: 'FreeUser',
};

test.use({
	storageState: {
		cookies: [],
		origins: [
			{
				origin: 'http://localhost:4200',
				localStorage: [
					{ name: 'auth_token', value: authToken },
					{ name: 'user', value: JSON.stringify(user) },
				],
			},
		],
	},
});

test('allows and denies consent with keyboard interaction', async ({ page }) => {
	const decisions: string[] = [];
	await mockConsent(page, decisions);
	await navigateClientSide(page, `/mcp/authorize?requestId=${requestId}`);
	await expect(page.getByRole('heading', { name: 'Allow Example IDE to use SimUI?' })).toBeVisible();

	await page.getByRole('button', { name: 'Allow access' }).focus();
	await page.keyboard.press('Enter');
	await expect.poll(() => decisions.at(-1)).toBe('allow');
	await expect(page).toHaveURL(/\/connect\/authorize\/continue\?ticket=allow$/);

	await navigateClientSide(page, `/mcp/authorize?requestId=${requestId}`);
	await page.getByRole('button', { name: 'Deny', exact: true }).click();
	await expect.poll(() => decisions.at(-1)).toBe('deny');
});

test('shows expired consent and preserves the Google return target', async ({ page }) => {
	await page.route(`**/api/v1/mcp/authorization-requests/${requestId}`, (route) =>
		route.fulfill({
			status: 410,
			contentType: 'application/problem+json',
			body: JSON.stringify({ title: 'Authorization request expired', status: 410 }),
		}),
	);
	await navigateClientSide(page, `/mcp/authorize?requestId=${requestId}`);
	await expect(page.getByRole('heading', { name: 'This request has expired' })).toBeVisible();

	await page.evaluate(() => {
		localStorage.clear();
		sessionStorage.clear();
	});
	let googleRequest = '';
	let returnTarget: string | null = null;
	await page.exposeFunction('captureMcpReturnTarget', (value: string) => {
		returnTarget = value;
	});
	await page.addInitScript(() => {
		const originalSetItem = Storage.prototype.setItem;
		Storage.prototype.setItem = function (key: string, value: string): void {
			originalSetItem.call(this, key, value);
			if (this === window.sessionStorage && key === 'simui_mcp_return_target') {
				void (
					window as typeof window & { captureMcpReturnTarget: (target: string) => Promise<void> }
				).captureMcpReturnTarget(value);
			}
		};
	});
	await page.route('https://accounts.google.com/**', async (route) => {
		googleRequest = route.request().url();
		await route.fulfill({ contentType: 'text/html', body: '<h1>Google sign-in stub</h1>' });
	});
	await navigateClientSide(page, `/mcp/authorize?requestId=${requestId}`);
	await expect.poll(() => googleRequest).toContain('redirect_uri=');
	await expect.poll(() => returnTarget).toBe(`/mcp/authorize?requestId=${requestId}`);
});

test('renders consent accessibly on a mobile viewport', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await mockConsent(page, []);
	await navigateClientSide(page, `/mcp/authorize?requestId=${requestId}`);
	await expect(page.getByRole('main')).toBeVisible();
	await expect(page.getByRole('button', { name: 'Allow access' })).toBeVisible();
	expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(
		true,
	);
});

async function mockConsent(page: Page, decisions: string[]): Promise<void> {
	await page.route(`**/api/v1/mcp/authorization-requests/${requestId}`, (route) =>
		route.fulfill({
			json: {
				clientName: 'Example IDE',
				requestedScopes: ['mcp:components:read'],
				accountEmail: 'developer@example.com',
				expiresAtUtc: '2026-07-28T08:00:00Z',
			},
		}),
	);
	await page.route(`**/api/v1/mcp/authorization-requests/${requestId}/decision`, async (route) => {
		const body = route.request().postDataJSON() as { decision: string };
		decisions.push(body.decision);
		await route.fulfill({
			json: {
				continuationUrl: `https://localhost:7127/connect/authorize/continue?ticket=${body.decision}`,
			},
		});
	});
	await page.route('https://localhost:7127/connect/authorize/continue?ticket=*', (route) =>
		route.fulfill({ contentType: 'text/html', body: '<h1>Authorization continued</h1>' }),
	);
}

function createJwt(payload: object): string {
	const encode = (value: object) => Buffer.from(JSON.stringify(value)).toString('base64url');
	return `${encode({ alg: 'none', typ: 'JWT' })}.${encode(payload)}.phase-seven`;
}

async function navigateClientSide(page: Page, path: string): Promise<void> {
	await page.goto('/');
	await page.evaluate((target) => {
		history.pushState({}, '', target);
		window.dispatchEvent(new PopStateEvent('popstate'));
	}, path);
}
