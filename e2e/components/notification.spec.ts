import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { componentCard, snapshotVariants } from '../utils/visual.helpers';

// Fixed date so notification-27 toast description always renders the same timestamp.
const FIXED_DATE = new Date('2025-01-15T12:00:00.000Z');

const TOAST_TRIGGER_VARIANTS = [
	'notification-27',
	'notification-28',
	'notification-29',
	'notification-30',
	'notification-31',
	'notification-32',
	'notification-33',
];

test.describe('Notification', () => {
	test.beforeEach(async ({ page, navigateToComponent }) => {
		// Mock Date so notification-27 toast description renders a fixed timestamp.
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

		await navigateToComponent('notification');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'notification', COMPONENT_IDS.notification);
	});

	test('visual regression — toast trigger variants', async ({ page }) => {
		for (const variantId of TOAST_TRIGGER_VARIANTS) {
			const trigger = componentCard(page, variantId).locator('button').first();
			await expect(trigger).toBeVisible();
			await trigger.click();

			const toast = page.locator('[data-sonner-toast]').first();
			await expect(toast).toBeVisible({ timeout: 5000 });
			await expect.soft(toast).toHaveScreenshot(`notification/${variantId}-toast.png`, {
				maxDiffPixelRatio: 0.02,
			});

			await page.keyboard.press('Escape');
		}
	});

	test.describe('Behavior', () => {
		test('static notification renders with expected structure', async ({ page }) => {
			// notification-01 is a static alert card; verify it renders
			const card = componentCard(page, 'notification-01');
			await expect(card).toBeVisible();
		});

		for (const variantId of TOAST_TRIGGER_VARIANTS) {
			test(`${variantId} toast trigger button fires a toast`, async ({ page }) => {
				const trigger = componentCard(page, variantId).locator('button').first();
				await expect(trigger).toBeVisible();
				await trigger.click();
				await expect(page.locator('[data-sonner-toast]').first()).toBeVisible({ timeout: 5000 });
			});
		}
	});
});
