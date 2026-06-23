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

		test('Maskito v5 preserves every masked input variant', async ({ page }) => {
			const typeAndExpect = async (selector: string, value: string, expected: string) => {
				const input = page.locator(selector);
				await input.scrollIntoViewIfNeeded();
				await input.fill('');
				await input.pressSequentially(value);
				await expect.poll(async () => (await input.inputValue()).replaceAll('\u00a0', ' ')).toBe(expected);
			};

			await typeAndExpect('sim-input-25 input', '1234.56', '1,234.56');
			await typeAndExpect('sim-input-26 input', '1234.56', '1,234.56');
			await typeAndExpect('sim-input-33 input', '01152025', '01/15/2025');
			await typeAndExpect('sim-input-34 input', '1159PM', '11:59 PM');
			await typeAndExpect('sim-input-35 input', '1159PM', '11:59 PM');
			await typeAndExpect('sim-input-36 input', '1159PM', '11:59 PM');
			await typeAndExpect('sim-input-37 input', '011520251430', '01.15.2025 , 14:30');
			await typeAndExpect('sim-input-38 input', '01152025', '01/15/2025');
			await typeAndExpect('sim-input-39 input', '0115202501202025', '01/15/2025 - 01/20/2025');
			await typeAndExpect('sim-input-40 input', '0115202501202025', '01/15/2025 - 01/20/2025');
			await typeAndExpect('sim-input-44 input', '4242424242424242', '4242 4242 4242 4242');
			await typeAndExpect('sim-input-45 input', '1231', '12 / 31');
			await typeAndExpect('sim-input-46 input', '12a34', '123');
			await typeAndExpect('sim-input-51 input', 'AB12CDE', 'AB12 CDE');
			await typeAndExpect('sim-input-52 input', '235959', '23:59:59');

			const cardDetails = page.locator('sim-input-47');
			await typeAndExpect(
				'sim-input-47 input[formcontrolname="cardNumber"]',
				'4242424242424242',
				'4242 4242 4242 4242',
			);
			await typeAndExpect('sim-input-47 input[formcontrolname="expiryDate"]', '1231', '12 / 31');
			await typeAndExpect('sim-input-47 input[formcontrolname="cvc"]', '12a34', '123');
			await expect(cardDetails.locator('input')).toHaveCount(3);
		});
	});
});
