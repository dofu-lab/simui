import { test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Avatar', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('avatar');
	});

	test('visual regression — all variants', async ({ page }) => {
		// Tolerate minor rasterization differences along avatar photo edges.
		await snapshotVariants(page, 'avatar', COMPONENT_IDS.avatar, { maxDiffPixels: 64 });
	});
});
