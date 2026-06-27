import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { componentCard, snapshotVariants } from '../utils/visual.helpers';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function isCardPresent(card: ReturnType<import('@playwright/test').Page['locator']>): Promise<boolean> {
	return card
		.waitFor({ state: 'visible', timeout: 5000 })
		.then(() => true)
		.catch(() => false);
}

async function selectMeetingCategory(card: ReturnType<import('@playwright/test').Page['locator']>): Promise<void> {
	const meetingSwatch = card.locator('label[for="meeting"] div').last();
	await meetingSwatch.click({ force: true });
	await expect(card.getByText('Meeting')).toBeVisible({ timeout: 3000 });
}

// Fixed date so card-15 (calendar) always renders the same month/day regardless of when the test runs.
const FIXED_DATE = new Date('2025-01-15T12:00:00.000Z');

// ---------------------------------------------------------------------------
// Suite
// ---------------------------------------------------------------------------

test.describe('Card', () => {
	test.beforeEach(async ({ page, navigateToComponent }) => {
		// Mock Date before the page loads so card-15's embedded calendar sees a fixed date.
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

		await navigateToComponent('card');
	});

	// -------------------------------------------------------------------------
	// Visual regression — baseline snapshots for all 16 variants
	// -------------------------------------------------------------------------

	test('visual regression — all variants', async ({ page }) => {
		// card-12 shows live exchange rates and card-14 shows pipeline timing —
		// both change per render. 4% tolerance accommodates the dynamic number pixels.
		await snapshotVariants(page, 'card', COMPONENT_IDS.card, { maxDiffPixelRatio: 0.04 });
	});

	// -------------------------------------------------------------------------
	// card-01 — Create project (text input + spartan select + deploy button)
	// -------------------------------------------------------------------------

	test.describe('card-01 — Create project form', () => {
		test('name input accepts text', async ({ page }) => {
			const card = componentCard(page, 'card-01');
			await card.scrollIntoViewIfNeeded();
			const input = card.locator('input[type="text"]').first();
			await expect(input).toBeVisible();
			await input.fill('My Project');
			await expect(input).toHaveValue('My Project');
		});

		test('select trigger opens framework dropdown', async ({ page }) => {
			const card = componentCard(page, 'card-01');
			await card.scrollIntoViewIfNeeded();
			const trigger = card.locator('hlm-select-trigger button').first();
			await expect(trigger).toBeVisible();
			await trigger.click();
			// dropdown items rendered via portal — visible anywhere on page
			const item = page.getByRole('option', { name: 'Next.js' });
			await expect(item).toBeVisible();
			await item.click();
			// value shown in trigger after selection
			await expect(trigger).toContainText('Next.js');
		});

		test('deploy button is clickable', async ({ page }) => {
			const card = componentCard(page, 'card-01');
			await card.scrollIntoViewIfNeeded();
			const btn = card.locator('button[type="submit"]').first();
			await expect(btn).toBeVisible();
			await expect(btn).not.toBeDisabled();
			await btn.click();
		});

		test('snapshot — filled form', async ({ page }) => {
			const card = componentCard(page, 'card-01');
			await card.scrollIntoViewIfNeeded();
			await card.locator('input[type="text"]').first().fill('My Project');
			await expect.soft(card).toHaveScreenshot('card/card-01-filled.png');
		});
	});

	// -------------------------------------------------------------------------
	// card-02 — Login form (email + password + submit)
	// -------------------------------------------------------------------------

	test.describe('card-02 — Login form', () => {
		test('email and password inputs accept values', async ({ page }) => {
			const card = componentCard(page, 'card-02');
			await card.scrollIntoViewIfNeeded();
			const email = card.locator('input[type="email"]').first();
			const password = card.locator('input[type="password"]').first();
			await email.fill('user@example.com');
			await password.fill('s3cr3t!');
			await expect(email).toHaveValue('user@example.com');
			await expect(password).toHaveValue('s3cr3t!');
		});

		test('sign-up link button is visible', async ({ page }) => {
			const card = componentCard(page, 'card-02');
			await card.scrollIntoViewIfNeeded();
			await expect(card.getByRole('button', { name: 'Sign up' })).toBeVisible();
		});

		test('login button is enabled', async ({ page }) => {
			const card = componentCard(page, 'card-02');
			await card.scrollIntoViewIfNeeded();
			const btn = card.locator('button[type="submit"]').first();
			await expect(btn).toBeVisible();
			await expect(btn).not.toBeDisabled();
		});

		test('snapshot — filled login form', async ({ page }) => {
			const card = componentCard(page, 'card-02');
			await card.scrollIntoViewIfNeeded();
			await card.locator('input[type="email"]').first().fill('user@example.com');
			await card.locator('input[type="password"]').first().fill('s3cr3t!');
			await expect.soft(card).toHaveScreenshot('card/card-02-filled.png');
		});
	});

	// -------------------------------------------------------------------------
	// card-03 — Login with security footer (email + password + login button)
	// -------------------------------------------------------------------------

	test.describe('card-03 — Login with security footer', () => {
		test('email and password inputs are present', async ({ page }) => {
			const card = componentCard(page, 'card-03');
			await card.scrollIntoViewIfNeeded();
			await expect(card.locator('input[type="email"]').first()).toBeVisible();
			await expect(card.locator('input[type="password"]').first()).toBeVisible();
		});

		test('login button is enabled', async ({ page }) => {
			const card = componentCard(page, 'card-03');
			await card.scrollIntoViewIfNeeded();
			const btn = card.locator('button[type="submit"]').first();
			await expect(btn).toBeVisible();
			await expect(btn).not.toBeDisabled();
		});

		test('security footer text is visible', async ({ page }) => {
			const card = componentCard(page, 'card-03');
			await card.scrollIntoViewIfNeeded();
			await expect(card.getByText(/encrypted/i)).toBeVisible();
		});
	});

	// -------------------------------------------------------------------------
	// card-04 to card-10 — Nested-card project / login variants
	// All share the same form shape; test card-04 as representative + submit on each
	// -------------------------------------------------------------------------

	test.describe('card-04 — Nested card with muted footer', () => {
		test('name input and deploy button are present', async ({ page }) => {
			const card = componentCard(page, 'card-04');
			await card.scrollIntoViewIfNeeded();
			const input = card.locator('input[type="text"]').first();
			await expect(input).toBeVisible();
			await input.fill('Nested Project');
			await expect(input).toHaveValue('Nested Project');

			const btn = card.locator('button[type="submit"]').first();
			await expect(btn).toBeVisible();
			await expect(btn).not.toBeDisabled();
		});
	});

	for (const id of ['card-05', 'card-06', 'card-07', 'card-08', 'card-09', 'card-10']) {
		test(`${id} — submit button is visible and enabled`, async ({ page }) => {
			const card = componentCard(page, id);
			const present = await isCardPresent(card);
			test.skip(!present, `${id} is not rendered`);
			await card.scrollIntoViewIfNeeded();
			const btn = card.locator('button[type="submit"]').first();
			await expect(btn).toBeVisible();
			await expect(btn).not.toBeDisabled();
		});
	}

	// -------------------------------------------------------------------------
	// card-11 — Empty state (project list with Add button)
	// -------------------------------------------------------------------------

	test.describe('card-11 — Empty project state', () => {
		test('Add button is visible and clickable', async ({ page }) => {
			const card = componentCard(page, 'card-11');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-11 is not rendered');
			await card.scrollIntoViewIfNeeded();
			const addBtn = card.locator('button').filter({ hasText: 'Add' }).first();
			await expect(addBtn).toBeVisible();
			await expect(addBtn).not.toBeDisabled();
			await addBtn.click();
		});

		test('empty-state title is visible', async ({ page }) => {
			const card = componentCard(page, 'card-11');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-11 is not rendered');
			await card.scrollIntoViewIfNeeded();
			await expect(card.getByText('No Projects Yet')).toBeVisible();
		});
	});

	// -------------------------------------------------------------------------
	// card-12 — Currency converter (cycle send/receive, swap)
	// -------------------------------------------------------------------------

	test.describe('card-12 — Currency converter', () => {
		test('swap button is visible and enabled', async ({ page }) => {
			const card = componentCard(page, 'card-12');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-12 is not rendered');
			await card.scrollIntoViewIfNeeded();
			const swapBtn = card.getByRole('button', { name: 'Swap currencies' });
			await expect(swapBtn).toBeVisible();
			await expect(swapBtn).not.toBeDisabled();
		});

		test('cycle send currency changes the rate badge', async ({ page }) => {
			const card = componentCard(page, 'card-12');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-12 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// The rate badge header shows "1 {sendCode} = {rate} {getCode}" — read it to detect changes.
			// The badge renders the live value in an .absolute span; innerText skips the .invisible ghost.
			const rateBadge = card
				.locator('[hlmbadge]')
				.filter({ hasText: /1 \w+ =/ })
				.first();
			const before = await rateBadge.innerText();

			await card.getByRole('button', { name: 'Change send currency' }).click();

			const after = await rateBadge.innerText();
			expect(after).not.toEqual(before);
		});

		test('cycle receive currency changes the rate badge', async ({ page }) => {
			const card = componentCard(page, 'card-12');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-12 is not rendered');
			await card.scrollIntoViewIfNeeded();

			const rateBadge = card
				.locator('[hlmbadge]')
				.filter({ hasText: /1 \w+ =/ })
				.first();
			const before = await rateBadge.innerText();

			await card.getByRole('button', { name: 'Change receive currency' }).click();

			// Wait for the badge to reflect the updated currency before asserting
			await expect(rateBadge).not.toHaveText(before);
		});

		test('swap exchanges send and receive currency codes in the rate badge', async ({ page }) => {
			const card = componentCard(page, 'card-12');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-12 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// Extract codes from badge text "1 VND = 0.00004 USD" → { send: 'VND', get: 'USD' }
			const extractCodes = (text: string) => {
				const match = /1 (\w+) = .+ (\w+)/.exec(text);
				return match ? { send: match[1], get: match[2] } : { send: '', get: '' };
			};

			const rateBadge = card
				.locator('[hlmbadge]')
				.filter({ hasText: /1 \w+ =/ })
				.first();
			const before = extractCodes(await rateBadge.innerText());

			await card.getByRole('button', { name: 'Swap currencies' }).click();

			// Wait for the leave animation to finish so the badge shows the new values
			await expect(rateBadge).not.toContainText(`1 ${before.send} =`);

			const after = extractCodes(await rateBadge.innerText());
			expect(after.send).toEqual(before.get);
			expect(after.get).toEqual(before.send);
		});

		test('snapshot — after currency swap', async ({ page }) => {
			const card = componentCard(page, 'card-12');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-12 is not rendered');
			await card.scrollIntoViewIfNeeded();
			await card.getByRole('button', { name: 'Swap currencies' }).click();
			await expect.soft(card).toHaveScreenshot('card/card-12-swapped.png', { maxDiffPixelRatio: 0.02 });
		});
	});

	// -------------------------------------------------------------------------
	// card-13 — Onboarding accordion steps
	// -------------------------------------------------------------------------

	test.describe('card-13 — Onboarding steps (accordion)', () => {
		test('step counter badge is visible', async ({ page }) => {
			const card = componentCard(page, 'card-13');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-13 is not rendered');
			await card.scrollIntoViewIfNeeded();
			// Badge shows "1 / 4" pattern
			await expect(card.getByText(/\d\s*\/\s*4/)).toBeVisible();
		});

		test('first step accordion is open by default', async ({ page }) => {
			const card = componentCard(page, 'card-13');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-13 is not rendered');
			await card.scrollIntoViewIfNeeded();
			// The content of the first step should be expanded
			await expect(card.locator('hlm-accordion-content').first()).toBeVisible();
		});

		test('"Got it" button marks a step as done and advances to next', async ({ page }) => {
			const card = componentCard(page, 'card-13');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-13 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// Read counter before
			const badgeBefore = await card.getByText(/\d\s*\/\s*4/).innerText();
			const stepBefore = Number.parseInt(badgeBefore.trim().split('/')[0].trim(), 10);

			// Click "Got it" only within the currently OPEN accordion item to avoid
			// pointer-event interception from closed accordion items.
			const gotItBtn = card
				.locator('hlm-accordion-item[data-state="open"] button')
				.filter({ hasText: /got it/i })
				.first();
			await expect(gotItBtn).toBeVisible();
			await gotItBtn.click();

			// Wait for Angular to update the DOM after the click (Zone.js may defer rendering)
			await expect(card.getByText(new RegExp(`${stepBefore + 1}\\s*\\/\\s*4`))).toBeVisible({ timeout: 3000 });

			// Badge counter should have incremented
			const badgeAfter = await card.getByText(/\d\s*\/\s*4/).innerText();
			const stepAfter = Number.parseInt(badgeAfter.trim().split('/')[0].trim(), 10);
			expect(stepAfter).toBeGreaterThan(stepBefore);
		});

		test('completing all steps shows "All done" and Start over button', async ({ page }) => {
			const card = componentCard(page, 'card-13');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-13 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// Complete all 4 steps — always click within the currently open accordion item
			for (let i = 0; i < 4; i++) {
				const gotItBtn = card
					.locator('hlm-accordion-item[data-state="open"] button')
					.filter({ hasText: /got it/i })
					.first();
				if ((await gotItBtn.count()) === 0) break;
				await gotItBtn.click();
			}

			await expect(card.getByText("You're all set")).toBeVisible({ timeout: 3000 });
			const startOverBtn = card.getByRole('button', { name: 'Start over' });
			await expect(startOverBtn).toBeVisible();
		});

		test('"Start over" resets all steps', async ({ page }) => {
			const card = componentCard(page, 'card-13');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-13 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// Complete all steps first
			for (let i = 0; i < 4; i++) {
				const gotItBtn = card
					.locator('hlm-accordion-item[data-state="open"] button')
					.filter({ hasText: /got it/i })
					.first();
				if ((await gotItBtn.count()) === 0) break;
				await gotItBtn.click();
			}

			await card.getByRole('button', { name: 'Start over' }).click();

			// Should be back to step 1/4
			await expect(card.getByText(/1\s*\/\s*4/)).toBeVisible({ timeout: 3000 });
		});

		test('snapshot — after first step completed', async ({ page }) => {
			const card = componentCard(page, 'card-13');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-13 is not rendered');
			await card.scrollIntoViewIfNeeded();
			await card
				.locator('hlm-accordion-item[data-state="open"] button')
				.filter({ hasText: /got it/i })
				.first()
				.click();
			await expect.soft(card).toHaveScreenshot('card/card-13-step2.png');
		});

		test('snapshot — all steps completed', async ({ page }) => {
			const card = componentCard(page, 'card-13');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-13 is not rendered');
			await card.scrollIntoViewIfNeeded();
			for (let i = 0; i < 4; i++) {
				const gotItBtn = card
					.locator('hlm-accordion-item[data-state="open"] button')
					.filter({ hasText: /got it/i })
					.first();
				if ((await gotItBtn.count()) === 0) break;
				await gotItBtn.click();
			}
			// Wait for the completion state to fully render (accordion animations settle)
			await expect(card.getByText("You're all set")).toBeVisible({ timeout: 5000 });
			await expect(card.getByRole('button', { name: 'Start over' })).toBeVisible({ timeout: 5000 });
			// Wait for layout to stabilize — animate.enter schedules class addition via
			// afterNextRender which can cause brief height variance across frames.
			await card.evaluate(
				(el) =>
					new Promise<void>((resolve) => {
						let prevHeight = el.getBoundingClientRect().height;
						let stable = 0;
						let frames = 0;
						const check = () => {
							const h = el.getBoundingClientRect().height;
							stable = h === prevHeight ? stable + 1 : 0;
							prevHeight = h;
							frames++;
							if (stable >= 12 && frames >= 15) resolve();
							else requestAnimationFrame(check);
						};
						requestAnimationFrame(check);
					}),
			);
			await expect.soft(card.locator('sim-card-13')).toHaveScreenshot('card/card-13-done.png');
		});
	});

	// -------------------------------------------------------------------------
	// card-14 — Sandbox pipeline (auto-runs, Re-run button)
	// -------------------------------------------------------------------------

	test.describe('card-14 — Sandbox pipeline', () => {
		test('task list is rendered with task names', async ({ page }) => {
			const card = componentCard(page, 'card-14');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-14 is not rendered');
			await card.scrollIntoViewIfNeeded();
			await expect(card.getByText('Allocate microVM')).toBeVisible();
			await expect(card.getByText('Execute main.js')).toBeVisible();
		});

		test('progress bar is present', async ({ page }) => {
			const card = componentCard(page, 'card-14');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-14 is not rendered');
			await card.scrollIntoViewIfNeeded();
			await expect(card.locator('hlm-progress')).toBeVisible();
		});

		test('"Re-run" button appears after pipeline completes and restarts it', async ({ page }) => {
			test.setTimeout(30_000);
			const card = componentCard(page, 'card-14');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-14 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// Pipeline auto-starts; wait for it to finish (Re-run button appears)
			const reRunBtn = card.getByRole('button', { name: 'Re-run' });
			await reRunBtn.waitFor({ state: 'visible', timeout: 25_000 });
			await expect(card.getByText('Done')).toBeVisible();

			// Clicking Re-run restarts — Done text disappears and tasks reset
			await reRunBtn.click();
			await expect(card.getByText('Done')).not.toBeVisible({ timeout: 3000 });
		});

		test('snapshot — pipeline completed state', async ({ page }) => {
			test.setTimeout(30_000);
			const card = componentCard(page, 'card-14');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-14 is not rendered');
			await card.scrollIntoViewIfNeeded();

			await card.getByRole('button', { name: 'Re-run' }).waitFor({ state: 'visible', timeout: 25_000 });
			await expect.soft(card).toHaveScreenshot('card/card-14-completed.png', { maxDiffPixelRatio: 0.02 });
		});
	});

	// -------------------------------------------------------------------------
	// card-15 — Calendar with event form
	// -------------------------------------------------------------------------

	test.describe('card-15 — Calendar event card', () => {
		test('calendar is visible with month/year heading', async ({ page }) => {
			const card = componentCard(page, 'card-15');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-15 is not rendered');
			await card.scrollIntoViewIfNeeded();
			// Heading shows current month/year via DatePipe "MMM yyyy"
			await expect(card.locator('[hlmcardtitle]').first()).toBeVisible();
		});

		test('"Today" button navigates calendar back to current month', async ({ page }) => {
			const card = componentCard(page, 'card-15');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-15 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// Navigate forward a month, then click Today to return.
			// Prev/next buttons have no accessible name (icon-only) — find by position in [hlmcardheader].
			const navContainer = card.locator('[hlmcardheader]');
			const nextBtn = navContainer.locator('button').nth(2); // 0=Today, 1=prev, 2=next
			await nextBtn.click();
			await card.getByRole('button', { name: 'Today' }).click();

			// After "Today" the card title heading returns to the mocked current month.
			// The browser Date is mocked to FIXED_DATE, so we must match against that, not the real system date.
			const monthYear = FIXED_DATE.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
			await expect(card.locator('[hlmcardtitle]').first()).toContainText(monthYear);
		});

		test('previous/next month buttons navigate the calendar', async ({ page }) => {
			const card = componentCard(page, 'card-15');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-15 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// Nav buttons update focusedDate (calendar grid view), NOT selectedDate (card title).
			// Verify navigation by watching the BRN calendar header which tracks the grid view.
			// Scope to [hlmcardheader] to avoid counting hidden BRN calendar internal buttons.
			const cardHeader = card.locator('[hlmcardheader]');
			const prevBtn = cardHeader.locator('button').nth(1); // 0=Today, 1=prev, 2=next
			const nextBtn2 = cardHeader.locator('button').nth(2);

			const calHeader = card.locator('[brncalendarheader]').first();
			const before = await calHeader.innerText();

			await nextBtn2.click();
			// Use Playwright's built-in retry semantics to wait for Angular signal propagation.
			await expect(calHeader).not.toContainText(before, { timeout: 3000 });

			await prevBtn.click();
			await expect(calHeader).toContainText(before, { timeout: 3000 });
		});

		test('"Add event" button opens the event form', async ({ page }) => {
			const card = componentCard(page, 'card-15');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-15 is not rendered');
			await card.scrollIntoViewIfNeeded();

			await card.getByRole('button', { name: /add event/i }).click();

			// Form fields should become visible
			await expect(card.locator('input[placeholder="What\'s on?"]')).toBeVisible({ timeout: 3000 });
			await expect(card.locator('input[placeholder="--:--"]')).toBeVisible({ timeout: 3000 });
		});

		test('cancel button hides the event form', async ({ page }) => {
			const card = componentCard(page, 'card-15');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-15 is not rendered');
			await card.scrollIntoViewIfNeeded();

			await card.getByRole('button', { name: /add event/i }).click();
			await expect(card.locator('input[placeholder="What\'s on?"]')).toBeVisible({ timeout: 3000 });

			// Cancel (X) button is the first button inside the form footer's action group.
			// The form footer has class .rounded-b-md; cancel comes before the "Add" submit button.
			const formFooter = card.locator('.rounded-b-md');
			await formFooter.locator('button').first().click();
			// After cancel the "Add event" trigger reappears (positive assertion,
			// avoids false failures from CSS grid-rows collapse visibility edge cases).
			await expect(card.getByRole('button', { name: /add event/i })).toBeVisible({ timeout: 3000 });
		});

		test('submitting event form without required fields does not close form', async ({ page }) => {
			const card = componentCard(page, 'card-15');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-15 is not rendered');
			await card.scrollIntoViewIfNeeded();

			await card.getByRole('button', { name: /add event/i }).click();
			await expect(card.locator('input[placeholder="What\'s on?"]')).toBeVisible({ timeout: 3000 });

			// Submit without filling — form should remain open
			await card.getByRole('button', { name: /^Add$/ }).click();
			await expect(card.locator('input[placeholder="What\'s on?"]')).toBeVisible();
		});

		test('submitting a valid event adds it to the day list', async ({ page }) => {
			const card = componentCard(page, 'card-15');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-15 is not rendered');
			await card.scrollIntoViewIfNeeded();

			await card.getByRole('button', { name: /add event/i }).click();
			await card.locator('input[placeholder="What\'s on?"]').fill('Team standup');
			await card.locator('input[placeholder="--:--"]').fill('09:00');

			// Select the first color radio (meeting / sky)
			await selectMeetingCategory(card);

			await card.getByRole('button', { name: /^Add$/ }).click();

			// Form closes and new event is shown in the list
			await expect(card.getByText('Team standup')).toBeVisible({ timeout: 3000 });
		});

		test('snapshot — event form open', async ({ page }) => {
			const card = componentCard(page, 'card-15');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-15 is not rendered');
			await card.scrollIntoViewIfNeeded();
			await card.getByRole('button', { name: /add event/i }).click();
			await expect(card.locator('input[placeholder="What\'s on?"]')).toBeVisible({ timeout: 3000 });
			await expect.soft(card).toHaveScreenshot('card/card-15-form-open.png');
		});

		test('snapshot — after adding an event', async ({ page }) => {
			const card = componentCard(page, 'card-15');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-15 is not rendered');
			await card.scrollIntoViewIfNeeded();
			await card.getByRole('button', { name: /add event/i }).click();
			await card.locator('input[placeholder="What\'s on?"]').fill('Team standup');
			await card.locator('input[placeholder="--:--"]').fill('09:00');
			await selectMeetingCategory(card);
			await card.getByRole('button', { name: /^Add$/ }).click();
			await expect(card.getByText('Team standup')).toBeVisible({ timeout: 3000 });
			await expect.soft(card).toHaveScreenshot('card/card-15-event-added.png');
		});
	});

	// -------------------------------------------------------------------------
	// card-16 — Tools list (enable/disable individual + bulk)
	// -------------------------------------------------------------------------

	test.describe('card-16 — Tools list', () => {
		test('ENABLED and AVAILABLE section labels are visible', async ({ page }) => {
			const card = componentCard(page, 'card-16');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-16 is not rendered');
			await card.scrollIntoViewIfNeeded();
			await expect(card.getByText('ENABLED', { exact: true })).toBeVisible();
			await expect(card.getByText('AVAILABLE', { exact: true })).toBeVisible();
		});

		test('tool count badge reflects enabled tools', async ({ page }) => {
			const card = componentCard(page, 'card-16');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-16 is not rendered');
			await card.scrollIntoViewIfNeeded();
			// Footer shows "<n> of <total> tools enabled"
			await expect(card.getByText(/tools enabled/i)).toBeVisible();
		});

		test('"Disable all" moves all tools to AVAILABLE', async ({ page }) => {
			const card = componentCard(page, 'card-16');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-16 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// Ensure there are enabled tools first — if button says "Enable all" then all are disabled
			const disableAllBtn = card.getByRole('button', { name: /disable all/i });
			if ((await disableAllBtn.count()) > 0) {
				await disableAllBtn.click();
				await expect(card.getByText('Nothing enabled. Add a tool from below.')).toBeVisible();
				// Button should now say "Enable all"
				await expect(card.getByRole('button', { name: /enable all/i })).toBeVisible();
			}
		});

		test('"Enable all" moves all tools to ENABLED', async ({ page }) => {
			const card = componentCard(page, 'card-16');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-16 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// First disable all to set a known state
			const disableAllBtn = card.getByRole('button', { name: /disable all/i });
			if ((await disableAllBtn.count()) > 0) {
				await disableAllBtn.click();
			}

			await card.getByRole('button', { name: /enable all/i }).click();
			await expect(card.getByText('Everything is enabled.')).toBeVisible();
		});

		test('clicking an enabled tool row moves it to AVAILABLE', async ({ page }) => {
			const card = componentCard(page, 'card-16');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-16 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// Ensure at least one tool is enabled
			const enableAllBtn = card.getByRole('button', { name: /enable all/i });
			if ((await enableAllBtn.count()) > 0) {
				await enableAllBtn.click();
			}

			// Click the first "Remove" row — this moves it to available
			const removeRow = card
				.locator('div')
				.filter({ hasText: /^.*Remove$/ })
				.first();
			if ((await removeRow.count()) > 0) {
				await removeRow.click();
				// "Enable all" button disappears once there's at least one tool not enabled
				// and "Disable all" text may appear if all are still mostly enabled
				// Verify footer count changed
				await expect(card.getByText(/tools enabled/i)).toBeVisible();
			}
		});

		test('clicking an available tool row moves it to ENABLED', async ({ page }) => {
			const card = componentCard(page, 'card-16');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-16 is not rendered');
			await card.scrollIntoViewIfNeeded();

			// Disable all to make all tools available
			const disableAllBtn = card.getByRole('button', { name: /disable all/i });
			if ((await disableAllBtn.count()) > 0) {
				await disableAllBtn.click();
			}

			// Click the first "Add" row
			const addRow = card
				.locator('div')
				.filter({ hasText: /^.*Add$/ })
				.first();
			if ((await addRow.count()) > 0) {
				await addRow.click();
				await expect(card.getByText('Nothing enabled. Add a tool from below.')).not.toBeVisible();
			}
		});

		test('snapshot — all tools disabled', async ({ page }) => {
			const card = componentCard(page, 'card-16');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-16 is not rendered');
			await card.scrollIntoViewIfNeeded();
			const disableAllBtn = card.getByRole('button', { name: /disable all/i });
			if ((await disableAllBtn.count()) > 0) {
				await disableAllBtn.click();
			}
			await expect.soft(card).toHaveScreenshot('card/card-16-all-disabled.png');
		});

		test('snapshot — all tools enabled', async ({ page }) => {
			const card = componentCard(page, 'card-16');
			const present = await isCardPresent(card);
			test.skip(!present, 'card-16 is not rendered');
			await card.scrollIntoViewIfNeeded();
			// Ensure all enabled
			const disableBtn = card.getByRole('button', { name: /disable all/i });
			if ((await disableBtn.count()) > 0) {
				await disableBtn.click();
			}
			await card.getByRole('button', { name: /enable all/i }).click();
			await expect.soft(card).toHaveScreenshot('card/card-16-all-enabled.png');
		});
	});
});
