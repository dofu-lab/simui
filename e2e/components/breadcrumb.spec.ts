import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Breadcrumb', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('breadcrumb');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'breadcrumb', COMPONENT_IDS.breadcrumb);
	});

	test.describe('Behavior', () => {
		test('breadcrumb links have href attributes', async ({ page }) => {
			const links = page.locator('#breadcrumb-01 a');
			const count = await links.count();
			expect(count).toBeGreaterThan(0);
			for (let i = 0; i < count; i++) {
				const href = await links.nth(i).getAttribute('href');
				expect(href).not.toBeNull();
			}
		});

		test('opens the dropdown menu when pressing the breadcrumb ellipsis in breadcrumb-01', async ({ page }) => {
			const trigger = page.locator('#breadcrumb-01 hlm-breadcrumb-ellipsis');
			const menu = page.locator('[role="menu"]').first();
			await trigger.click();
			await expect(menu).toBeVisible({ timeout: 3000 });
			await expect.soft(menu).toHaveScreenshot(`breadcrumb-menu/breadcrumb-01.png`);
		});

		test('opens the dropdown menu when pressing the breadcrumb ellipsis in breadcrumb-02', async ({ page }) => {
			const trigger = page.locator('#breadcrumb-02 [data-slot="dropdown-menu-trigger"]');
			const menu = page.locator('[role="menu"]').first();
			await trigger.click();
			await expect(menu).toBeVisible({ timeout: 3000 });
			await expect.soft(menu).toHaveScreenshot(`breadcrumb-menu/breadcrumb-02.png`);
		});
	});
});
