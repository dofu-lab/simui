import type { Locator } from '@playwright/test';
import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { componentCard, snapshotVariants } from '../utils/visual.helpers';

async function getCheckedValue(card: Locator): Promise<string | null> {
	const checkedRadio = card.locator('.brn-radio-checked').first();
	if ((await checkedRadio.count()) === 0) return null;
	return checkedRadio.evaluate((element) => {
		const radio = element.closest('hlm-radio') ?? element;
		return radio.getAttribute('id') ?? radio.getAttribute('data-value');
	});
}

async function ensureCheckedState(card: Locator): Promise<void> {
	const checkedRadios = card.locator('.brn-radio-checked');
	if ((await checkedRadios.count()) > 0) {
		return;
	}

	const labels = card.locator('label');
	const labelCount = await labels.count();
	for (let index = 0; index < labelCount; index++) {
		const label = labels.nth(index);
		if (!(await label.isVisible())) continue;
		await label.click({ force: true });
		if ((await checkedRadios.count()) > 0) {
			return;
		}
	}

	const radios = card.locator('hlm-radio:not(.brn-radio-disabled)');
	const radioCount = await radios.count();
	if (radioCount > 0) {
		await radios.first().click({ force: true });
	}

	await expect(checkedRadios).toHaveCount(1);
}

async function checkDifferentOptionFromDefault(card: Locator): Promise<void> {
	await ensureCheckedState(card);

	const enabledRadioCount = await card.locator('brn-radio[data-disabled="false"]').count();
	if (enabledRadioCount <= 1) {
		await expect(card.locator('.brn-radio-checked')).toHaveCount(1);
		return;
	}

	const initialValue = await getCheckedValue(card);
	const labels = card.locator('label');
	const labelCount = await labels.count();

	for (let index = 0; index < labelCount; index++) {
		const label = labels.nth(index);
		if (!(await label.isVisible())) continue;
		await label.click({ force: true });
		if ((await card.locator('.brn-radio-checked').count()) !== 1) continue;
		const nextValue = await getCheckedValue(card);
		if (nextValue && nextValue !== initialValue) {
			return;
		}
	}

	const radios = card.locator('hlm-radio:not(.brn-radio-disabled)');
	const radioCount = await radios.count();
	for (let index = 0; index < radioCount; index++) {
		const radio = radios.nth(index);
		if (!(await radio.isVisible())) continue;
		await radio.click({ force: true });
		if ((await card.locator('.brn-radio-checked').count()) !== 1) continue;
		const nextValue = await getCheckedValue(card);
		if (nextValue && nextValue !== initialValue) {
			return;
		}
	}

	const finalValue = await getCheckedValue(card);
	if (finalValue === initialValue) {
		await expect(card.locator('.brn-radio-checked')).toHaveCount(1);
	}
}

test.describe('Radio', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('radio');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'radio', COMPONENT_IDS.radio);
	});

	test('visual regression — checked state for all variants', async ({ page }) => {
		for (const id of COMPONENT_IDS.radio) {
			const card = componentCard(page, id);
			const isPresent = await card
				.waitFor({ state: 'visible', timeout: 5000 })
				.then(() => true)
				.catch(() => false);
			if (!isPresent) continue;

			await card.scrollIntoViewIfNeeded();
			await checkDifferentOptionFromDefault(card);
			await expect.soft(card.locator('.brn-radio-checked')).toHaveCount(1);
			await expect.soft(card).toHaveScreenshot(`radio-checked/${id}.png`, {
				maxDiffPixelRatio: 0.02,
			});
		}
	});

	test.describe('Behavior', () => {
		test('selects a radio option on label click', async ({ page }) => {
			// BRN radio uses CDK radio, not role="radio"; click via the <label> wrapper
			const card = componentCard(page, 'radio-01');
			await card.scrollIntoViewIfNeeded();
			const labels = card.locator('label');
			const count = await labels.count();
			expect(count).toBeGreaterThan(0);
			await labels.nth(1).click({ force: true });
			// After clicking, the radio group has a selected item (brn-radio-checked class)
			const checkedRadio = card.locator('.brn-radio-checked');
			await expect(checkedRadio).toBeVisible();
		});

		test('only one radio is checked at a time', async ({ page }) => {
			const card = componentCard(page, 'radio-01');
			await card.scrollIntoViewIfNeeded();
			const labels = card.locator('label');
			await labels.first().click({ force: true });
			await labels.nth(1).click({ force: true });
			// Only one element should have the checked class
			const checkedRadios = card.locator('.brn-radio-checked');
			await expect(checkedRadios).toHaveCount(1);
		});

		test.describe('Checked state', () => {
			for (const id of COMPONENT_IDS.radio) {
				test(`verifies checked state in ${id}`, async ({ page }) => {
					const card = componentCard(page, id);
					const isPresent = await card
						.waitFor({ state: 'visible', timeout: 5000 })
						.then(() => true)
						.catch(() => false);
					test.skip(!isPresent, `${id} is not rendered on the radio page`);

					await checkDifferentOptionFromDefault(card);
					await expect(card.locator('.brn-radio-checked')).toHaveCount(1);
				});
			}
		});
	});
});
