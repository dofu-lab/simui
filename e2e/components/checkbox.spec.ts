import { expect, test } from '../fixtures/base.fixture';
import type { Locator } from '@playwright/test';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

async function readStyles(locator: Locator) {
	return locator.evaluate((element) => {
		const styles = getComputedStyle(element);
		return {
			backgroundColor: styles.backgroundColor,
			borderColor: styles.borderColor,
			color: styles.color,
		};
	});
}

test.describe('Checkbox', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('checkbox');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'checkbox', COMPONENT_IDS.checkbox);
	});

	test.describe('Behavior', () => {
		test('toggles checked state on click', async ({ page }) => {
			// Use ARIA role for robust selection
			const checkbox = page.locator('#checkbox-01 [role="checkbox"]').first();
			const initial = await checkbox.getAttribute('aria-checked');
			await checkbox.click();
			const after = await checkbox.getAttribute('aria-checked');
			expect(after).not.toEqual(initial);
		});

		test('disabled checkbox does not change state on click', async ({ page }) => {
			const disabled = page.locator('#checkbox-01 [role="checkbox"][aria-disabled="true"]').first();
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
					const card = page.locator(`#${id}`);
					const isPresent = await card
						.waitFor({ state: 'visible', timeout: 5000 })
						.then(() => true)
						.catch(() => false);
					test.skip(!isPresent, `${id} is not rendered on the checkbox page`);

					const checkboxes = card.getByRole('checkbox');
					const checkboxCount = await checkboxes.count();
					expect(checkboxCount).toBeGreaterThan(0);

					const checkbox = checkboxes.first();
					const checkboxId = await checkbox.getAttribute('id');
					const label = checkboxId ? card.locator(`label[for="${checkboxId}"]`).first() : card.locator('label').first();
					const hasLabel = await label.count() > 0;
					const isDisabled = await checkbox.isDisabled();
					test.skip(isDisabled, `${id} is disabled and is covered by the disabled behavior test`);

					const initialCheckboxState = await checkbox.getAttribute('aria-checked');
					const initialLabelState = hasLabel ? await label.getAttribute('data-state') : null;
					const labelClass = hasLabel ? await label.getAttribute('class') : null;
					const labelUsesCheckedStyles = Boolean(
						labelClass &&
						(labelClass.includes('has-data-[state=checked]') || labelClass.includes('peer-has-data-[state=checked]')),
					);
					const labelTracksStateAttribute = initialLabelState !== null;
					const styleTarget = hasLabel && (labelUsesCheckedStyles || labelTracksStateAttribute) ? label : checkbox;
					const initialStyles = await readStyles(styleTarget);
					const labelHasInteractiveContent =
						hasLabel && (await label.locator('a,button,input,select,textarea,[role="button"],[role="link"]').count()) > 0;

					const clickTarget =
						id === 'checkbox-21'
							? label
							: id === 'checkbox-13'
								? checkbox
								: hasLabel && !labelHasInteractiveContent
									? label
									: checkbox;
					const expectedCheckedState = initialCheckboxState === 'true' ? 'false' : 'true';

					await clickTarget.click();
					await expect(checkbox).toHaveAttribute('aria-checked', initialCheckboxState === 'mixed' ? 'true' : expectedCheckedState);

					if (styleTarget === label && labelTracksStateAttribute) {
						expect(await label.getAttribute('data-state')).not.toBe(initialLabelState);
					} else {
						const checkedStyles = await readStyles(styleTarget);
						expect(
							checkedStyles.backgroundColor !== initialStyles.backgroundColor ||
							checkedStyles.borderColor !== initialStyles.borderColor ||
							checkedStyles.color !== initialStyles.color,
						).toBe(true);
					}

					await expect.soft(card).toHaveScreenshot(`checkbox-checked/${id}.png`);

					if (initialCheckboxState === 'mixed') {
						await clickTarget.click({ force: true });
						await expect(checkbox).toHaveAttribute('aria-checked', 'false');
						return;
					}

					await clickTarget.click({ force: true });
					await expect(checkbox).toHaveAttribute('aria-checked', initialCheckboxState ?? 'false');

					if (styleTarget === label && labelTracksStateAttribute) {
						await expect(label).toHaveAttribute('data-state', initialLabelState ?? '');
					} else {
						await expect(styleTarget).toHaveCSS('background-color', initialStyles.backgroundColor);
						await expect(styleTarget).toHaveCSS('border-color', initialStyles.borderColor);
						await expect(styleTarget).toHaveCSS('color', initialStyles.color);
					}
				});
			}
		});
	});
});
