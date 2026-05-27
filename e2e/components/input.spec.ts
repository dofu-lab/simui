import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Input', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('input');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'input', COMPONENT_IDS.input);
	});

	test.describe('Behavior', () => {
		test('accepts typed text', async ({ page }) => {
			const input = page.locator('#input-01 input[type="text"], #input-01 input:not([type])').first();
			await input.fill('Hello SimUI');
			await expect(input).toHaveValue('Hello SimUI');
		});

		test('input receives focus on click', async ({ page }) => {
			const input = page.locator('#input-01 input').first();
			await input.click();
			await expect(input).toBeFocused();
		});
	});
});
