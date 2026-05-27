import { test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Event Calendar', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('event-calendar');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'event-calendar', COMPONENT_IDS['event-calendar']);
	});
});
