import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './e2e',
	timeout: 120_000,
	fullyParallel: true,
	forbidOnly: !!process.env['CI'],
	retries: process.env['CI'] ? 2 : 0,
	workers: process.env['CI'] ? 1 : undefined,
	reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
	snapshotDir: './e2e/snapshots',
	snapshotPathTemplate: '{snapshotDir}/{arg}-{projectName}{ext}',
	use: {
		baseURL: 'http://localhost:4200',
		trace: 'on-first-retry',
		screenshot: 'only-on-failure',
		viewport: { width: 1280, height: 800 },
	},
	projects: [
		{
			name: 'chromium',
			testIgnore: '**/mcp-*.spec.ts',
			use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:4200' },
		},
		{
			name: 'mcp-enabled',
			testMatch: /mcp-(consent|settings)\.spec\.ts/,
			use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:4200', timezoneId: 'Asia/Ho_Chi_Minh' },
		},
		{
			name: 'mcp-disabled',
			testMatch: '**/mcp-disabled.spec.ts',
			use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:4201' },
		},
	],
	webServer: [
		{
			command: 'ng serve --configuration e2e-mcp-enabled --port 4200',
			url: 'http://localhost:4200',
			reuseExistingServer: false,
			timeout: 120_000,
			stdout: 'ignore',
			stderr: 'pipe',
		},
		{
			command: 'ng serve --configuration e2e-mcp-disabled --port 4201',
			url: 'http://localhost:4201',
			reuseExistingServer: false,
			timeout: 120_000,
			stdout: 'ignore',
			stderr: 'pipe',
		},
	],
});
