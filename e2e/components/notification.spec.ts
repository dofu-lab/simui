import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

const TOAST_TRIGGER_VARIANTS = [
	'notification-27',
	'notification-28',
	'notification-29',
	'notification-30',
	'notification-31',
	'notification-32',
	'notification-33',
];

test.describe('Notification', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('notification');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'notification', COMPONENT_IDS.notification);
	});

	test('visual regression — toast trigger variants', async ({ page }) => {
		for (const variantId of TOAST_TRIGGER_VARIANTS) {
			const trigger = page.locator(`component-card#${variantId} button`).first();
			await expect(trigger).toBeVisible();
			await trigger.click();

			const toast = page.locator('[data-sonner-toast]').first();
			await expect(toast).toBeVisible({ timeout: 5000 });
			await expect.soft(toast).toHaveScreenshot(`notification/${variantId}-toast.png`);

			await page.keyboard.press('Escape');
		}
	});

	test.describe('Behavior', () => {
		test('static notification renders with expected structure', async ({ page }) => {
			// notification-01 is a static alert card; verify it renders
			const card = page.locator('component-card#notification-01');
			await expect(card).toBeVisible();
		});

		for (const variantId of TOAST_TRIGGER_VARIANTS) {
			test(`${variantId} toast trigger button fires a toast`, async ({ page }) => {
				const trigger = page.locator(`component-card#${variantId} button`).first();
				await expect(trigger).toBeVisible();
				await trigger.click();
				await expect(page.locator('[data-sonner-toast]').first()).toBeVisible({ timeout: 5000 });
			});
		}
	});
});
