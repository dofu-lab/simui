import type { Locator, Page } from '@playwright/test';
import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { componentPreview, snapshotVariants } from '../utils/visual.helpers';

const COLOR_PICKER_ID = 'color-picker-01';
const TEST_PRESET = '#737373';

async function openColorPicker(page: Page): Promise<{ picker: Locator; trigger: Locator }> {
	const card = await componentPreview(page, COLOR_PICKER_ID);
	await page.evaluate(() => {
		document.body.style.paddingBottom = '32rem';
	});
	await card.evaluate((element) => element.scrollIntoView({ block: 'start' }));
	const trigger = card.getByRole('button', { name: 'Open color picker' });
	await trigger.click();

	const picker = page.locator('.cdk-overlay-container sim-color-picker');
	await expect(picker).toBeVisible();
	return { picker, trigger };
}

function colorValueInput(picker: Locator): Locator {
	return picker.getByRole('textbox', { name: 'Color value' });
}

function formatSelect(picker: Locator): Locator {
	return picker.locator('select:has(option[value="hex"])');
}

test.describe('Color Picker', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('color-picker');
	});

	test('visual regression — closed, open, changed, and invalid states', async ({ page }) => {
		await snapshotVariants(page, 'color-picker', COMPONENT_IDS['color-picker'], { maxDiffPixelRatio: 0.02 });

		const { picker } = await openColorPicker(page);
		await expect(picker).toHaveScreenshot('color-picker/open-color-picker-01.png', {
			maxDiffPixelRatio: 0.02,
		});

		await formatSelect(picker).selectOption('hsl');
		await picker.getByRole('button', { name: `Select ${TEST_PRESET}` }).click();
		const opacityInput = picker.getByRole('spinbutton', { name: 'Opacity percentage' });
		await opacityInput.fill('40');
		await opacityInput.press('Tab');
		await expect(picker).toHaveScreenshot('color-picker/changed-color-picker-01.png', {
			maxDiffPixelRatio: 0.02,
		});

		await colorValueInput(picker).fill('not a color');
		await colorValueInput(picker).press('Tab');
		await expect(picker.getByText('Enter a valid CSS color.')).toBeVisible();
		await expect(picker).toHaveScreenshot('color-picker/invalid-color-picker-01.png', {
			maxDiffPixelRatio: 0.02,
		});
	});

	test('opens from the showcase trigger and closes on Escape with focus restored', async ({ page }) => {
		const { picker, trigger } = await openColorPicker(page);
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');

		await page.keyboard.press('Escape');

		await expect(picker).toBeHidden();
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		await expect(trigger).toBeFocused();
	});

	test('emits each supported output format while preserving opacity', async ({ page }) => {
		const { picker, trigger } = await openColorPicker(page);
		const valueInput = colorValueInput(picker);
		const select = formatSelect(picker);
		await valueInput.fill('#7F56D980');
		await valueInput.press('Enter');

		const formats = [
			{ option: 'hex', value: /^#[0-9A-F]{8}$/ },
			{ option: 'rgb', value: /^rgb\(.+\/.+\)$/ },
			{ option: 'hsl', value: /^hsl\(.+\/.+\)$/ },
			{ option: 'oklch', value: /^oklch\(.+\/.+\)$/ },
		];

		for (const format of formats) {
			await select.selectOption(format.option);
			await expect(valueInput).toHaveValue(format.value);
			await expect(trigger).toContainText(format.value);
			await expect(picker.getByRole('slider', { name: 'Opacity' })).toHaveAttribute('aria-valuenow', /^50(?:\.|$)/);
		}
	});

	test('commits valid text on Enter or blur and rejects invalid drafts accessibly', async ({ page }) => {
		const { picker, trigger } = await openColorPicker(page);
		const valueInput = colorValueInput(picker);

		await valueInput.fill('hsl(200 80% 50% / 0.5)');
		await valueInput.press('Enter');
		await expect(valueInput).not.toHaveAttribute('aria-invalid', 'true');
		await expect(picker.getByRole('slider', { name: 'Opacity' })).toHaveAttribute('aria-valuenow', '50');

		await formatSelect(picker).selectOption('hex');
		await valueInput.fill('#123456CC');
		await valueInput.press('Tab');
		await expect(valueInput).toHaveValue('#123456CC');
		await expect(trigger).toContainText('#123456CC');

		const lastValidValue = await trigger.textContent();
		await valueInput.fill('not a color');
		await valueInput.press('Tab');
		const error = picker.getByText('Enter a valid CSS color.');
		await expect(valueInput).toHaveValue('not a color');
		await expect(valueInput).toHaveAttribute('aria-invalid', 'true');
		await expect(valueInput).toHaveAttribute('aria-describedby', await error.getAttribute('id'));
		await expect(error).toBeVisible();
		await expect(trigger).toHaveText(lastValidValue ?? '');
	});

	test('selects presets, exposes selection, and preserves the current opacity', async ({ page }) => {
		const { picker, trigger } = await openColorPicker(page);
		const valueInput = colorValueInput(picker);
		await valueInput.fill('#7F56D980');
		await valueInput.press('Enter');

		const preset = picker.getByRole('button', { name: `Select ${TEST_PRESET}` });
		await preset.click();

		await expect(preset).toHaveAttribute('aria-pressed', 'true');
		await expect(valueInput).toHaveValue('#73737380');
		await expect(trigger).toContainText('#73737380');
		await expect(picker.getByRole('spinbutton', { name: 'Opacity percentage' })).toHaveValue('50');
	});

	test('updates and clamps opacity through the percentage input', async ({ page }) => {
		const { picker } = await openColorPicker(page);
		const valueInput = colorValueInput(picker);
		const opacityInput = picker.getByRole('spinbutton', { name: 'Opacity percentage' });
		const opacitySlider = picker.getByRole('slider', { name: 'Opacity' });

		await opacityInput.fill('25');
		await opacityInput.press('Tab');
		await expect(opacitySlider).toHaveAttribute('aria-valuenow', '25');
		await expect(valueInput).toHaveValue('#40404040');

		await opacityInput.fill('120');
		await opacityInput.press('Tab');
		await expect(opacitySlider).toHaveAttribute('aria-valuenow', '100');
		await expect(valueInput).toHaveValue('#404040');

		await opacityInput.fill('-10');
		await opacityInput.press('Tab');
		await expect(opacitySlider).toHaveAttribute('aria-valuenow', '0');
		await expect(valueInput).toHaveValue('#40404000');
	});

	test('supports keyboard and pointer interaction on the color surface', async ({ page }) => {
		const { picker } = await openColorPicker(page);
		const surface = picker.getByRole('slider', { name: 'Saturation and brightness' });
		await expect(surface).toHaveAttribute('aria-valuetext', /% saturation, \d+% brightness/);

		const initialSaturation = Number(await surface.getAttribute('aria-valuenow'));
		await surface.press('ArrowRight');
		await expect(surface).toHaveAttribute('aria-valuenow', String(initialSaturation + 1));
		await surface.press('Shift+ArrowLeft');
		await expect(surface).toHaveAttribute('aria-valuenow', String(Math.max(0, initialSaturation - 9)));

		const box = await surface.boundingBox();
		expect(box).not.toBeNull();
		await page.mouse.click(box!.x + box!.width * 0.2, box!.y + box!.height * 0.25);
		await expect(surface).toHaveAttribute('aria-valuenow', '20');
		await expect(surface).toHaveAttribute('aria-valuetext', '20% saturation, 75% brightness');
	});

	test('operates the hue and opacity sliders with keyboard and pointer input', async ({ page }) => {
		const { picker } = await openColorPicker(page);
		const hue = picker.getByRole('slider', { name: 'Hue' });
		const opacity = picker.getByRole('slider', { name: 'Opacity' });

		const initialHue = Number(await hue.getAttribute('aria-valuenow'));
		await hue.press('ArrowRight');
		await expect.poll(async () => Number(await hue.getAttribute('aria-valuenow'))).toBeGreaterThan(initialHue);

		const opacityTrack = opacity.locator('xpath=..').locator('[brnslidertrack], [brnSliderTrack]');
		await opacityTrack.scrollIntoViewIfNeeded();
		const trackBox = await opacityTrack.boundingBox();
		expect(trackBox).not.toBeNull();
		await page.mouse.click(trackBox!.x + trackBox!.width * 0.35, trackBox!.y + trackBox!.height / 2);
		await expect(opacity).toHaveAttribute('aria-valuenow', '35');

		await opacity.press('ArrowLeft');
		await expect(opacity).toHaveAttribute('aria-valuenow', '34');
	});

	test('applies an EyeDropper result and ignores a cancelled pick', async ({ page }) => {
		await page.addInitScript(() => {
			let shouldReject = false;
			Object.defineProperty(globalThis, '__rejectEyeDropper', {
				configurable: true,
				get: () => shouldReject,
				set: (value: boolean) => (shouldReject = value),
			});
			Object.defineProperty(globalThis, 'EyeDropper', {
				configurable: true,
				value: class {
					open(): Promise<{ sRGBHex: string }> {
						return shouldReject ? Promise.reject(new Error('cancelled')) : Promise.resolve({ sRGBHex: '#123456' });
					}
				},
			});
		});
		await page.reload();
		await page.waitForLoadState('networkidle');

		const { picker } = await openColorPicker(page);
		const valueInput = colorValueInput(picker);
		const eyeDropper = picker.getByRole('button', { name: 'Pick a color from the screen' });
		await eyeDropper.click();
		await expect(valueInput).toHaveValue('#123456');

		await page.evaluate(() => {
			(globalThis as typeof globalThis & { __rejectEyeDropper: boolean }).__rejectEyeDropper = true;
		});
		await eyeDropper.click();
		await expect(valueInput).toHaveValue('#123456');
	});
});
