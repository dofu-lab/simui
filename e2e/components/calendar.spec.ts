import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Calendar', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('calendar');
	});

	test('visual regression — all variants', async ({ page }) => {
		// Calendar components highlight today's date; allow up to 2% pixel diff
		// to tolerate minor rendering variations without masking real regressions.
		await snapshotVariants(page, 'calendar', COMPONENT_IDS.calendar, { maxDiffPixelRatio: 0.02 });
	});

	test.describe('Behavior', () => {
		test('renders calendar grid', async ({ page }) => {
			const calendar = page.locator('component-card#calendar-01 hlm-calendar');
			await expect(calendar).toBeVisible();
		});

		test('navigation buttons are present', async ({ page }) => {
			const card = page.locator('component-card#calendar-01');
			// Spartan calendar renders prev/next navigation buttons
			const buttons = card.locator('button');
			await expect(buttons.first()).toBeVisible();
			const count = await buttons.count();
			expect(count).toBeGreaterThanOrEqual(2);
		});
	});
});
