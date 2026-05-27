import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Image Cropper', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('image-cropper');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'image-cropper', COMPONENT_IDS['image-cropper']);
	});

	test.describe('Behavior', () => {
		test('upload trigger element is present', async ({ page }) => {
			const card = page.locator('#image-cropper-01');
			await expect(card).toBeVisible();
			const trigger = card.locator('input[type="file"], button, label').first();
			await expect(trigger).toBeVisible();
		});
	});
});
