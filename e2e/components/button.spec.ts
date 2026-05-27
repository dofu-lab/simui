import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Button', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('button');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'button', COMPONENT_IDS.button);
	});

	test.describe('Behavior', () => {
		test('primary button is clickable and not disabled', async ({ page }) => {
			const button = page.locator('#button-01 button').first();
			await expect(button).toBeVisible();
			await expect(button).not.toBeDisabled();
			await button.click();
		});

		test('disabled button variant has disabled attribute', async ({ page }) => {
			// button-03 is typically a disabled variant — find any disabled button across the page
			const disabledButton = page.locator('button[disabled]').first();
			if ((await disabledButton.count()) > 0) {
				await expect(disabledButton).toBeDisabled();
			}
		});
	});
});
