import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

function oppositeState(state: string | null): 'true' | 'false' {
	return state === 'true' ? 'false' : 'true';
}

async function getSwitchState(switchEl: import('@playwright/test').Locator): Promise<'true' | 'false'> {
	const state = await switchEl.getAttribute('aria-checked');
	return state === 'true' ? 'true' : 'false';
}

async function isDisabledSwitch(switchEl: import('@playwright/test').Locator): Promise<boolean> {
	const ariaDisabled = await switchEl.getAttribute('aria-disabled');
	if (ariaDisabled === 'true') return true;
	const disabledAttr = await switchEl.getAttribute('disabled');
	if (disabledAttr !== null) return true;
	return switchEl.evaluate((el) => Boolean(el.closest('[data-disabled="true"], [aria-disabled="true"], [disabled]')));
}

test.describe('Switch', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('switch');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'switch', COMPONENT_IDS.switch);
	});

	test('visual regression — opposite state for enabled variants', async ({ page }) => {
		for (const id of COMPONENT_IDS.switch) {
			const card = page.locator(`component-card#${id}`);
			const isPresent = await card
				.waitFor({ state: 'visible', timeout: 5000 })
				.then(() => true)
				.catch(() => false);
			if (!isPresent) continue;

			await card.scrollIntoViewIfNeeded();
			const switchEl = card.locator('[role="switch"]').first();
			await expect(switchEl, `${id} should render a switch`).toBeAttached();

			const initialState = await getSwitchState(switchEl);
			const disabled = await isDisabledSwitch(switchEl);
			if (disabled) {
				await expect.soft(card).toHaveScreenshot(`switch-opposite/${id}.png`);
				continue;
			}

			await switchEl.click();
			await expect(switchEl).toHaveAttribute('aria-checked', oppositeState(initialState));
			await expect.soft(card).toHaveScreenshot(`switch-opposite/${id}.png`);
		}
	});

	test.describe('Behavior', () => {
		test('each enabled variant toggles to the opposite of its default state', async ({ page }) => {
			for (const id of COMPONENT_IDS.switch) {
				const card = page.locator(`component-card#${id}`);
				const isPresent = await card
					.waitFor({ state: 'visible', timeout: 5000 })
					.then(() => true)
					.catch(() => false);
				if (!isPresent) continue;

				const switchEl = card.locator('[role="switch"]').first();
				await expect(switchEl, `${id} should render a switch`).toBeAttached();

				const initialState = await getSwitchState(switchEl);
				const disabled = await isDisabledSwitch(switchEl);
				if (disabled) {
					continue;
				}

				await switchEl.click();
				await expect(switchEl, `${id} should toggle opposite to its default state`).toHaveAttribute(
					'aria-checked',
					oppositeState(initialState),
				);
			}
		});

		test('disabled variants keep their default state', async ({ page }) => {
			for (const id of COMPONENT_IDS.switch) {
				const card = page.locator(`component-card#${id}`);
				const isPresent = await card
					.waitFor({ state: 'visible', timeout: 5000 })
					.then(() => true)
					.catch(() => false);
				if (!isPresent) continue;

				const switchEl = card.locator('[role="switch"]').first();
				if ((await switchEl.count()) === 0) continue;

				const disabled = await isDisabledSwitch(switchEl);
				if (!disabled) {
					continue;
				}

				const before = await getSwitchState(switchEl);
				await switchEl.click({ force: true });
				await expect(switchEl, `${id} disabled switch should keep its default state`).toHaveAttribute(
					'aria-checked',
					before,
				);
			}
		});
	});
});
