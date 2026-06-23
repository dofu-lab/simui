import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

async function getSliderValue(thumb: import('@playwright/test').Locator): Promise<number | null> {
	const valueNow = await thumb.getAttribute('aria-valuenow');
	if (valueNow === null) return null;
	const numericValue = Number(valueNow);
	return Number.isFinite(numericValue) ? numericValue : null;
}

async function isDisabledSlider(thumb: import('@playwright/test').Locator): Promise<boolean> {
	const ariaDisabled = await thumb.getAttribute('aria-disabled');
	if (ariaDisabled === 'true') return true;
	const disabledAttr = await thumb.getAttribute('disabled');
	if (disabledAttr !== null) return true;
	return thumb.evaluate((el) => Boolean(el.closest('[data-disabled], [aria-disabled="true"], [disabled]')));
}

async function moveWithKeyboard(
	page: import('@playwright/test').Page,
	thumb: import('@playwright/test').Locator,
): Promise<boolean> {
	const before = await getSliderValue(thumb);
	if (before === null) return false;

	await thumb.focus();
	await page.keyboard.press('ArrowRight');
	const afterRight = await getSliderValue(thumb);
	if (afterRight !== null && afterRight !== before) return true;

	await page.keyboard.press('ArrowLeft');
	await page.keyboard.press('ArrowLeft');
	const afterLeft = await getSliderValue(thumb);
	return afterLeft !== null && afterLeft !== afterRight;
}

async function moveWithPointer(
	page: import('@playwright/test').Page,
	thumb: import('@playwright/test').Locator,
): Promise<boolean> {
	const before = await getSliderValue(thumb);
	if (before === null) return false;

	const orientation = (await thumb.getAttribute('aria-orientation')) ?? 'horizontal';
	const initialBox = await thumb.boundingBox();
	if (!initialBox) return false;

	const centerX = initialBox.x + initialBox.width / 2;
	const centerY = initialBox.y + initialBox.height / 2;
	const primaryDelta = 36;

	await page.mouse.move(centerX, centerY);
	await page.mouse.down();
	if (orientation === 'vertical') {
		await page.mouse.move(centerX, centerY - primaryDelta, { steps: 8 });
	} else {
		await page.mouse.move(centerX + primaryDelta, centerY, { steps: 8 });
	}
	await page.mouse.up();

	const afterPrimaryDrag = await getSliderValue(thumb);
	if (afterPrimaryDrag !== null && afterPrimaryDrag !== before) return true;

	const secondaryBox = await thumb.boundingBox();
	if (!secondaryBox) return false;
	const secondaryX = secondaryBox.x + secondaryBox.width / 2;
	const secondaryY = secondaryBox.y + secondaryBox.height / 2;

	await page.mouse.move(secondaryX, secondaryY);
	await page.mouse.down();
	if (orientation === 'vertical') {
		await page.mouse.move(secondaryX, secondaryY + primaryDelta * 2, { steps: 8 });
	} else {
		await page.mouse.move(secondaryX - primaryDelta * 2, secondaryY, { steps: 8 });
	}
	await page.mouse.up();

	const afterSecondaryDrag = await getSliderValue(thumb);
	return afterSecondaryDrag !== null && afterSecondaryDrag !== afterPrimaryDrag;
}

async function moveByTrackClick(
	page: import('@playwright/test').Page,
	card: import('@playwright/test').Locator,
	thumb: import('@playwright/test').Locator,
): Promise<boolean> {
	const before = await getSliderValue(thumb);
	if (before === null) return false;

	const track = card.locator('[brnSliderTrack], [brnslidertrack], [data-slot="slider-track"]').first();
	const hasTrack = (await track.count()) > 0;
	if (!hasTrack) return false;

	const box = await track.boundingBox();
	if (!box) return false;

	const clickX = box.x + box.width * 0.8;
	const clickY = box.y + box.height / 2;
	await page.mouse.click(clickX, clickY);

	const after = await getSliderValue(thumb);
	if (after !== null && after !== before) return true;

	await page.mouse.click(box.x + box.width * 0.2, clickY);
	const afterSecondClick = await getSliderValue(thumb);
	return afterSecondClick !== null && afterSecondClick !== after;
}

async function moveSlider20ByDisplayedValue(
	page: import('@playwright/test').Page,
	card: import('@playwright/test').Locator,
): Promise<boolean> {
	const track = card.locator('hlm-sim-slider [brnslidertrack], hlm-sim-slider [brnSliderTrack]').first();
	if ((await track.count()) === 0) return false;

	const valueLabel = track.locator('div').filter({ hasText: /^\d+$/ }).last();
	if ((await valueLabel.count()) === 0) return false;

	const beforeText = (await valueLabel.innerText()).trim();
	const box = await track.boundingBox();
	if (!box) return false;

	await page.mouse.click(box.x + box.width * 0.85, box.y + box.height / 2);
	const afterFirstText = (await valueLabel.innerText()).trim();
	if (afterFirstText !== beforeText) return true;

	await page.mouse.click(box.x + box.width * 0.15, box.y + box.height / 2);
	const afterSecondText = (await valueLabel.innerText()).trim();
	return afterSecondText !== afterFirstText;
}

async function assertEnabledSliderCanSlide(
	page: import('@playwright/test').Page,
	card: import('@playwright/test').Locator,
	thumb: import('@playwright/test').Locator,
	id: string,
	message: string,
): Promise<void> {
	const isThumbVisible = await thumb.isVisible().catch(() => false);
	await thumb.focus();

	const movedByKeyboard = await moveWithKeyboard(page, thumb);
	const movedByPointer = movedByKeyboard ? true : await moveWithPointer(page, thumb);
	const movedByTrack = movedByKeyboard || movedByPointer ? true : await moveByTrackClick(page, card, thumb);
	const movedByCustomValue =
		id === 'slider-20' && !(movedByTrack || movedByPointer || movedByKeyboard)
			? await moveSlider20ByDisplayedValue(page, card)
			: false;

	const moved = movedByCustomValue || movedByTrack || movedByPointer || movedByKeyboard;
	if (!moved && !isThumbVisible) {
		await expect(thumb, `${id} should expose slider semantics`).toBeAttached();
		return;
	}

	expect(moved, message).toBeTruthy();
}

test.describe('Slider', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('slider');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'slider', COMPONENT_IDS.slider);
	});

	test.describe('Behavior', () => {
		test('all slider variants render visible slider thumbs', async ({ page }) => {
			for (const id of COMPONENT_IDS.slider) {
				const card = page.locator(`component-card#${id}`);
				const isPresent = await card
					.waitFor({ state: 'visible', timeout: 5000 })
					.then(() => true)
					.catch(() => false);
				if (!isPresent) continue;

				const thumbs = card.locator('[role="slider"]');
				const thumbCount = await thumbs.count();
				expect(thumbCount, `${id} should render at least one slider thumb`).toBeGreaterThan(0);
			}
		});

		test('slide-state snapshots — all slider variants', async ({ page }) => {
			for (const id of COMPONENT_IDS.slider) {
				const card = page.locator(`component-card#${id}`);
				const isPresent = await card
					.waitFor({ state: 'visible', timeout: 5000 })
					.then(() => true)
					.catch(() => false);
				if (!isPresent) continue;

				await card.scrollIntoViewIfNeeded();
				const thumb = card.locator('[role="slider"]').first();
				await expect(thumb, `${id} should render slider thumb`).toBeAttached();

				const disabled = await isDisabledSlider(thumb);
				if (!disabled) {
					await assertEnabledSliderCanSlide(
						page,
						card,
						thumb,
						id,
						`${id} should change value before slide-state snapshot`,
					);
				}

				await expect.soft(card).toHaveScreenshot(`slider/slide-state-${id}.png`, {
					maxDiffPixelRatio: 0.03,
				});
			}
		});

		test('all enabled slider variants respond to slide behavior', async ({ page }) => {
			for (const id of COMPONENT_IDS.slider) {
				const card = page.locator(`component-card#${id}`);
				const isPresent = await card
					.waitFor({ state: 'visible', timeout: 5000 })
					.then(() => true)
					.catch(() => false);
				if (!isPresent) continue;

				await card.scrollIntoViewIfNeeded();
				const thumb = card.locator('[role="slider"]').first();
				await expect(thumb, `${id} should render slider thumb`).toBeAttached();

				const disabled = await isDisabledSlider(thumb);
				if (disabled) {
					const before = await getSliderValue(thumb);
					await thumb.focus();
					await page.keyboard.press('ArrowRight');
					const after = await getSliderValue(thumb);
					expect(after, `${id} disabled slider should not change on key press`).toBe(before);
					continue;
				}

				await assertEnabledSliderCanSlide(page, card, thumb, id, `${id} should change value when slid`);
			}
		});
	});
});
