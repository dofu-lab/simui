import { test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

// Fixed date so the event calendar always renders the same month/day regardless of when the test runs.
const FIXED_DATE = new Date('2025-01-15T12:00:00.000Z');

test.describe('Event Calendar', () => {
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

		await navigateToComponent('event-calendar');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'event-calendar', COMPONENT_IDS['event-calendar'], { maxDiffPixelRatio: 0.02 });
	});
});
