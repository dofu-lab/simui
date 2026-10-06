import { expect, Page, test } from '@playwright/test';

const origin = 'http://localhost:4201';
const authToken = createJwt({ exp: Math.floor(Date.now() / 1000) + 3600 });
const user = {
	id: '11111111-1111-4111-8111-111111111111',
	email: 'developer@example.com',
	name: 'Disabled Rollout',
	pictureUrl: null,
	role: 'PaidUser',
};

test.use({
	storageState: {
		cookies: [],
		origins: [
			{
				origin,
				localStorage: [
					{ name: 'auth_token', value: authToken },
					{ name: 'user', value: JSON.stringify(user) },
				],
			},
		],
	},
});

test('hides MCP navigation and makes no management request for a direct MCP tab URL', async ({ page }) => {
	const managementRequests: string[] = [];
	page.on('request', (request) => {
		if (request.url().includes('/api/v1/mcp/')) managementRequests.push(request.url());
	});

	await navigateClientSide(page, '/profile?tab=mcp');

	await expect(page.getByRole('button', { name: 'MCP', exact: true })).toHaveCount(0);
	await expect(page.getByRole('heading', { name: 'MCP connections' })).toHaveCount(0);
	await expect(page.getByText('No Themes Yet')).toBeVisible();
	await expect.poll(() => managementRequests).toEqual([]);
});

test('hides account and pricing MCP promotion while retaining legal disclosure', async ({ page }) => {
	await navigateClientSide(page, '/profile?tab=account');
	await expect(page.getByText('MCP for coding tools')).toHaveCount(0);
	await expect(page.getByText(/MCP component calls/i)).toHaveCount(0);

	await navigateClientSide(page, '/pricing');
	await expect(page.getByText(/MCP/i)).toHaveCount(0);

	await navigateClientSide(page, '/privacy-policy');
	await expect(page.getByText(/Model Context Protocol|MCP/i).first()).toBeVisible();
});

test('uses the profile fallback on payment success while MCP promotion is disabled', async ({ page }) => {
	await page.route('**/api/v1/auth/refresh', (route) =>
		route.fulfill({
			json: {
				token: authToken,
				user,
			},
		}),
	);

	await navigateClientSide(page, '/payment/success');

	await expect(page.getByRole('heading', { name: "You're now a Pro member!" })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Set up MCP' })).toHaveCount(0);
	await expect(page.getByRole('button', { name: 'View your profile' })).toBeVisible();
	await expect(page.getByText(/MCP calls/i)).toHaveCount(0);
});

function createJwt(payload: object): string {
	const encode = (value: object) => Buffer.from(JSON.stringify(value)).toString('base64url');
	return `${encode({ alg: 'none', typ: 'JWT' })}.${encode(payload)}.disabled-rollout`;
}

async function navigateClientSide(page: Page, path: string): Promise<void> {
	await page.goto('/');
	await page.evaluate((target) => {
		history.pushState({}, '', target);
		window.dispatchEvent(new PopStateEvent('popstate'));
	}, path);
}
