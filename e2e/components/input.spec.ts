import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

// Fixed date so date-picker inputs (input-38, input-39) always render the same value.
const FIXED_DATE = new Date('2025-01-15T12:00:00.000Z');

test.describe('Input', () => {
	test.beforeEach(async ({ page, navigateToComponent }) => {
		// Mock Date before the page loads so components using `new Date()` see a fixed value.
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

			Object.setPrototypeOf(MockDate, OriginalDate);
			(globalThis as unknown as Record<string, unknown>)['Date'] = MockDate;
		}, FIXED_DATE.toISOString());

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
