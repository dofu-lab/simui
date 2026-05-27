import { test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Alert', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('alert');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'alert', COMPONENT_IDS.alert);
	});
});
