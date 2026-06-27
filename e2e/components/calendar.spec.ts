import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { componentCard, snapshotVariants } from '../utils/visual.helpers';

// Fixed date so the calendar always renders the same month/day regardless of when the test runs.
const FIXED_DATE = new Date('2025-01-15T12:00:00.000Z');

test.describe('Calendar', () => {
	test.beforeEach(async ({ page, navigateToComponent }) => {
		// Mock Date before the page loads so Angular sees the fixed date from the start.
		await page.addInitScript((isoDate: string) => {
			const OriginalDate = Date;
			const fixed = new OriginalDate(isoDate);

			class MockDate extends OriginalDate {
				constructor(...args: unknown[]) {
					if (args.length === 0) {
						super(isoDate);
					} else {
						super(...(args as [string | number | Date]));
					}
				}

				static override now(): number {
					return fixed.getTime();
				}
			}

			// Preserve static methods/properties from the original Date.
			Object.setPrototypeOf(MockDate, OriginalDate);
			(globalThis as unknown as Record<string, unknown>)['Date'] = MockDate;
		}, FIXED_DATE.toISOString());

		await navigateToComponent('calendar');
	});

	test('visual regression — all variants', async ({ page }) => {
		// Calendar components highlight today's date; allow up to 2% pixel diff
		// to tolerate minor rendering variations without masking real regressions.
		await snapshotVariants(page, 'calendar', COMPONENT_IDS.calendar, { maxDiffPixelRatio: 0.02 });
	});

	test.describe('Behavior', () => {
		test('renders calendar grid', async ({ page }) => {
			const calendar = componentCard(page, 'calendar-01').locator('hlm-calendar');
			await expect(calendar).toBeVisible();
		});

		test('navigation buttons are present', async ({ page }) => {
			const card = componentCard(page, 'calendar-01');
			// Spartan calendar renders prev/next navigation buttons
			const buttons = card.locator('button');
			await expect(buttons.first()).toBeVisible();
			const count = await buttons.count();
			expect(count).toBeGreaterThanOrEqual(2);
		});
	});
});
