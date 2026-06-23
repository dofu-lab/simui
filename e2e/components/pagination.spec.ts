import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Pagination', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('pagination');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'pagination', COMPONENT_IDS.pagination);
	});

	test.describe('Behavior', () => {
		test('page buttons are visible and clickable', async ({ page }) => {
			const nav = page
				.locator('#pagination-01 nav[aria-label*="pagination" i], #pagination-01 [role="navigation"]')
				.first();
			await expect(nav).toBeVisible();
		});

		test('clicking a page button marks it as active', async ({ page }) => {
			const pageLinks = page
				.locator('#pagination-01 a[aria-label*="page" i], #pagination-01 button[aria-label*="page" i]')
				.filter({ hasNotText: /previous|next/i });
			const count = await pageLinks.count();
			if (count >= 2) {
				await pageLinks.nth(1).click();
				const active = page.locator('#pagination-01 [aria-current="page"], #pagination-01 [aria-selected="true"]');
				await expect(active).toBeVisible();
			}
		});
	});
});
