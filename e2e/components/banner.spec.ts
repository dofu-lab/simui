import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Banner', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('banner');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'banner', COMPONENT_IDS.banner);
	});

	test.describe('Behavior', () => {
		test('banner renders visible content', async ({ page }) => {
			const banner = page.locator('#banner-01').first();
			await expect(banner).toBeVisible();
		});
	});
});
