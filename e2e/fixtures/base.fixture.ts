import { Page, test as base } from '@playwright/test';

const DISABLE_ANIMATIONS_CSS = `
  *, *::before, *::after {
    animation-duration: 0ms !important;
    animation-delay: 0ms !important;
    transition-duration: 0ms !important;
    transition-delay: 0ms !important;
  }
`;

async function goToComponent(page: Page, type: string): Promise<void> {
	await page.goto(`/components/${type}`);
	await page.waitForLoadState('networkidle');
	await page.locator('sim-component-card').first().waitFor({ state: 'visible', timeout: 10_000 });
	// Wait for all images to be loaded
	await page.waitForFunction(() =>
		Array.from(document.querySelectorAll('img')).every((img) => (img as HTMLImageElement).complete),
	);
}

export type TestFixtures = {
	navigateToComponent: (type: string) => Promise<void>;
};

export const test = base.extend<TestFixtures>({
	page: async ({ page }, use) => {
		await page.addInitScript((css: string) => {
			const style = document.createElement('style');
			style.textContent = css;
			document.head.appendChild(style);
		}, DISABLE_ANIMATIONS_CSS);
		await use(page);
	},
	navigateToComponent: async ({ page }, use) => {
		await use((type: string) => goToComponent(page, type));
	},
});

export { expect } from '@playwright/test';
