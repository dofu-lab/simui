import { test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Card', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('card');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'card', COMPONENT_IDS.card);
	});
});
