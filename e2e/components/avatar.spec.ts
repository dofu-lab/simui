import { test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Avatar', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('avatar');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'avatar', COMPONENT_IDS.avatar);
	});
});
