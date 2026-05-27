import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './e2e',
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
			use: { ...devices['Desktop Chrome'] },
		},
	],
	webServer: {
		command: 'node scripts/set-env.js && ng serve',
		url: 'http://localhost:4200',
		reuseExistingServer: !process.env['CI'],
		timeout: 120_000,
		stdout: 'ignore',
		stderr: 'pipe',
	},
});
