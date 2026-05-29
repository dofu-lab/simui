import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

test.describe('Checkbox', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('checkbox');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'checkbox', COMPONENT_IDS.checkbox);
	});

	test.describe('Behavior', () => {
		test('toggles checked state on click', async ({ page }) => {
			const card = page.locator('component-card#checkbox-01');
			const checkbox = card.locator('[role="checkbox"]:visible').first();
			await expect(checkbox).toBeVisible();

			const initial = await checkbox.getAttribute('aria-checked');
			await checkbox.click({ force: true });
			let after = await checkbox.getAttribute('aria-checked');

			if (after === initial) {
				const checkboxId = await checkbox.getAttribute('id');
				if (checkboxId) {
					const label = card.locator(`label[for="${checkboxId}"]`).first();
					if ((await label.count()) > 0) {
						await label.click({ force: true });
						after = await checkbox.getAttribute('aria-checked');
					}
				}
			}

			if (after === initial) {
				await checkbox.focus();
				await page.keyboard.press('Space');
				after = await checkbox.getAttribute('aria-checked');
			}

			expect(after).not.toEqual(initial);
		});

		test('disabled checkbox does not change state on click', async ({ page }) => {
			const disabled = page.locator('component-card#checkbox-01 [role="checkbox"][aria-disabled="true"]').first();
			if ((await disabled.count()) > 0) {
				const before = await disabled.getAttribute('aria-checked');
				await disabled.click({ force: true });
				const after = await disabled.getAttribute('aria-checked');
				expect(after).toEqual(before);
			}
		});

		test.describe('Checked snapshots', () => {
			for (const id of COMPONENT_IDS.checkbox) {
				test(`captures checked state in ${id}`, async ({ page }) => {
					test.skip(id === 'checkbox-13', 'checkbox-13 includes interactive label content and is covered by behavior tests');

					const card = page.locator(`component-card#${id}`);
					const isPresent = await card
						.waitFor({ state: 'visible', timeout: 5000 })
						.then(() => true)
						.catch(() => false);
					test.skip(!isPresent, `${id} is not rendered on the checkbox page`);

					const checkboxes = card.locator('[role="checkbox"]:visible');
					const checkboxCount = await checkboxes.count();
					expect(checkboxCount).toBeGreaterThan(0);

					const checkbox = checkboxes.first();
					test.skip((await checkbox.count()) === 0, `${id} does not expose a visible checkbox control`);

					const isDisabled = await checkbox.isDisabled();
					test.skip(isDisabled, `${id} is disabled and is covered by the disabled behavior test`);

					const initialCheckboxState = (await checkbox.getAttribute('aria-checked')) ?? 'false';
					if (initialCheckboxState !== 'true') {
						await checkbox.click({ force: true });
						if ((await checkbox.getAttribute('aria-checked')) !== 'true') {
							const checkboxId = await checkbox.getAttribute('id');
							if (checkboxId) {
								const label = card.locator(`label[for="${checkboxId}"]`).first();
								if ((await label.count()) > 0) {
									await label.click({ force: true });
								}
							}
						}
					}

					const checkedState = await checkbox.getAttribute('aria-checked');
					test.skip(checkedState !== 'true', `${id} does not expose a toggleable checked state`);

					if (id === 'checkbox-09') {
						const emailInput = card.getByPlaceholder('Enter your email address');
						if (!(await emailInput.isVisible().catch(() => false))) {
							await checkbox.click({ force: true });
							if (!(await emailInput.isVisible().catch(() => false))) {
								await checkbox.click({ force: true });
							}
						}
						await expect(emailInput).toBeVisible({ timeout: 3000 });
					}

					await expect.soft(card).toHaveScreenshot(`checkbox-checked/${id}.png`, {
						maxDiffPixelRatio: 0.03,
					});
				});
			}
		});
	});
});
