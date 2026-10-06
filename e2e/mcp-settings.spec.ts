import { expect, Page, test } from '@playwright/test';

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

test.beforeEach(async ({ context }) => {
	await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: 'http://localhost:4200' });
});

test('copies setup, shows quota warning, and revokes a connection with keyboard controls', async ({ page }) => {
	await mockMcpProfile(page);
	await navigateClientSide(page, '/profile?tab=mcp');

	await expect(page.getByRole('heading', { name: 'MCP connections' })).toBeVisible();
	await expect(page.getByText('20% remaining')).toBeVisible();
	await expect(page.getByText('80% used')).toBeVisible();
	await expect(page.getByText(/approaching the monthly limit/i)).toBeVisible();
	await expect(page.getByRole('tab', { name: 'Claude' })).toHaveAttribute('aria-selected', 'true');
	await expect(page.getByText('.mcp.json · json')).toBeVisible();
	await page.getByRole('tab', { name: 'Codex' }).click();
	await expect(page.getByRole('tab', { name: 'Codex' })).toHaveAttribute('aria-selected', 'true');
	await expect(page.getByText('config.toml · toml')).toBeVisible();

	await page.getByRole('button', { name: 'Copy Codex configuration' }).focus();
	await page.keyboard.press('Enter');
	await expect(page.getByText('Copied', { exact: true })).toBeVisible();

	await page.getByRole('button', { name: 'Revoke', exact: true }).focus();
	await page.keyboard.press('Enter');
	await expect(page.getByRole('dialog')).toContainText('Revoke Codex CLI?');
	await page.getByRole('button', { name: 'Revoke access' }).click();
	await expect(page.getByText('No active connections')).toBeVisible();
});

test('renders the exhausted quota CTA and mobile layout without horizontal overflow', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await mockMcpProfile(page, {
		usedPercent: 100,
		warningLevel: 'exhausted',
	});
	await navigateClientSide(page, '/profile?tab=mcp');

	await expect(page.getByText('Monthly MCP quota reached')).toBeVisible();
	await expect(page.getByRole('link', { name: 'View Pro' })).toBeVisible();
	expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(
		true,
	);
});

test('renders never-used activity, an explicit UTC reset, and retryable revoke feedback inside the dialog', async ({
	page,
}) => {
	await mockMcpProfile(page, { lastUsedAtUtc: null, failFirstRevoke: true });
	await navigateClientSide(page, '/profile?tab=mcp');

	await expect(page.getByText(/Resets Aug 1, 2026, 12:00:00\sAM UTC/)).toBeVisible();
	await expect(page.getByText(/Last used\s+Not used yet/)).toBeVisible();

	const revokeButton = page.getByRole('button', { name: 'Revoke', exact: true });
	await revokeButton.click();
	const dialog = page.getByRole('dialog');
	await dialog.getByRole('button', { name: 'Revoke access' }).click();
	await expect(dialog.getByRole('alert')).toContainText('Could not revoke this connection');
	await expect(page.locator('section[aria-labelledby="mcp-settings-title"] [role="alert"]')).toHaveCount(0);

	await dialog.getByRole('button', { name: 'Revoke access' }).click();
	await expect(page.getByText('No active connections')).toBeVisible();
	await expect(revokeButton).toHaveCount(0);
});

async function mockMcpProfile(
	page: Page,
	overrides: {
		usedPercent?: number;
		warningLevel?: string;
		lastUsedAtUtc?: string | null;
		failFirstRevoke?: boolean;
	} = {},
): Promise<void> {
	let revokeAttempts = 0;
	await page.route('**/api/v1/mcp/status', async (route) => {
		await route.fulfill({
			json: {
				enabled: true,
				mcpUrl: 'https://api.simui.dev/mcp',
				plan: 'Free',
				quota: {
					usedPercent: overrides.usedPercent ?? 80,
					periodStartUtc: '2026-07-01T00:00:00Z',
					resetAtUtc: '2026-08-01T00:00:00Z',
				},
				rateLimit: { permitLimit: 60, windowSeconds: 60 },
				warningLevel: overrides.warningLevel ?? 'approaching',
				setupClients: [
					{
						id: 'claude',
						label: 'Claude',
						format: 'json',
						fileName: '.mcp.json',
						configuration: JSON.stringify(
							{
								mcpServers: {
									simui: { type: 'http', url: 'https://api.simui.dev/mcp' },
								},
							},
							null,
							2,
						),
					},
					{
						id: 'codex',
						label: 'Codex',
						format: 'toml',
						fileName: 'config.toml',
						configuration: `[mcp_servers.simui]\nurl = "https://api.simui.dev/mcp"`,
					},
				],
			},
		});
	});
	await page.route('**/api/v1/mcp/connections', async (route) => {
		await route.fulfill({
			json: {
				connections: [
					{
						id: '22222222-2222-4222-8222-222222222222',
						clientId: 'codex-cli',
						clientName: 'Codex CLI',
						createdAtUtc: '2026-07-20T10:00:00Z',
						lastUsedAtUtc: overrides.lastUsedAtUtc === undefined ? '2026-07-27T08:30:00Z' : overrides.lastUsedAtUtc,
						status: 'active',
					},
				],
			},
		});
	});
	await page.route('**/api/v1/mcp/connections/*', async (route) => {
		revokeAttempts++;
		await route.fulfill({ status: overrides.failFirstRevoke && revokeAttempts === 1 ? 500 : 204 });
	});
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
