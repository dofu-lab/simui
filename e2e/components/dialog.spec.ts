import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { componentCard, snapshotVariants } from '../utils/visual.helpers';

test.describe('Dialog', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('dialog');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'dialog', COMPONENT_IDS.dialog);
	});

	test.describe('Open snapshots', () => {
		for (const id of COMPONENT_IDS.dialog) {
			test(`captures open state in ${id}`, async ({ page }) => {
				const card = componentCard(page, id);
				const isPresent = await card
					.waitFor({ state: 'visible', timeout: 5000 })
					.then(() => true)
					.catch(() => false);
				test.skip(!isPresent, `${id} is not rendered on the dialog page`);

				const trigger = card.locator('button').first();
				await trigger.click();

				const dialog = page.locator('[role="dialog"]').first();
				await expect(dialog).toBeVisible({ timeout: 3000 });

				await expect.soft(page).toHaveScreenshot(`dialog-open/${id}.png`, {
					maxDiffPixelRatio: 0.02,
				});

				await page.keyboard.press('Escape');
				await expect(dialog).not.toBeVisible({ timeout: 3000 });
			});
		}
	});

	test.describe('Behavior', () => {
		test('opens dialog on trigger button click', async ({ page }) => {
			const trigger = componentCard(page, 'dialog-01').locator('button').first();
			await trigger.click();
			await expect(page.locator('[role="dialog"]').first()).toBeVisible({ timeout: 3000 });
		});

		test('closes dialog on Escape key', async ({ page }) => {
			const trigger = componentCard(page, 'dialog-01').locator('button').first();
			await trigger.click();
			await expect(page.locator('[role="dialog"]').first()).toBeVisible({ timeout: 3000 });
			await page.keyboard.press('Escape');
			await expect(page.locator('[role="dialog"]').first()).not.toBeVisible({ timeout: 3000 });
		});

		test('closes dialog on close button click', async ({ page }) => {
			const trigger = componentCard(page, 'dialog-01').locator('button').first();
			await trigger.click();
			const dialog = page.locator('[role="dialog"]').first();
			await expect(dialog).toBeVisible({ timeout: 3000 });
			const closeBtn = dialog.locator('button[aria-label*="close" i], button[aria-label*="Close" i]').first();
			if ((await closeBtn.count()) > 0) {
				await closeBtn.click();
				await expect(dialog).not.toBeVisible({ timeout: 3000 });
			}
		});
	});
});
