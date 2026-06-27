import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { componentCard, snapshotVariants } from '../utils/visual.helpers';

test.describe('Select', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('select');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'select', COMPONENT_IDS.select);
	});

	test.describe('Behavior', () => {
		test('native select accepts a selection', async ({ page }) => {
			// select-01 uses hlm-native-select (a styled <select> element)
			const nativeSelect = componentCard(page, 'select-01').locator('select').first();
			await expect(nativeSelect).toBeVisible();
			await nativeSelect.selectOption({ index: 1 });
			const value = await nativeSelect.inputValue();
			expect(value).not.toBe('');
		});
	});
});
