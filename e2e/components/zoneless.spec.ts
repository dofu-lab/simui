import { expect, test } from '../fixtures/base.fixture';

test.describe('Zoneless change detection', () => {
	test('renders asynchronously highlighted source code', async ({ page }) => {
		await page.goto('/components/button?full=#button-14');
		await expect(page.locator('sim-code-preview pre.shiki').last()).toContainText('Button14Component');
	});

	test('renders the image cropper result after its image and canvas promises resolve', async ({ page }) => {
		await page.goto('/components/image-cropper?full=preview#image-cropper-10');
		const crop = page.getByRole('button', { name: 'Crop preview', exact: true });
		await expect(crop).toBeEnabled();
		await crop.click();
		await expect(page.getByRole('img', { name: 'Cropped result', exact: true })).toHaveAttribute('src', /^blob:/);
	});

	test('renders timer-driven loading updates without Zone.js', async ({ page }) => {
		await page.goto('/components/button?full=preview#button-14');
		const button = page.locator('sim-button-14 button');
		await expect(button).toHaveText('Submit');
		expect(await page.evaluate(() => 'Zone' in globalThis)).toBe(false);

		await button.click();
		await expect(button).toBeDisabled();
		await expect(button).toContainText('Submitting...');
		await expect(button).toHaveText('Submit');
		await expect(button).toBeEnabled();
	});

	test('refreshes a portaled dialog countdown without another user event', async ({ page }) => {
		await page.goto('/components/dialog');
		await page.getByRole('button', { name: 'OTP', exact: true }).click();
		const dialog = page.getByRole('dialog');
		await expect(dialog).toBeVisible();
		const resend = dialog.getByRole('button', { name: /Resend code/ });
		await expect(resend).toHaveText(/Resend code \d+s/);
		const initialText = await resend.textContent();
		await expect(resend).not.toHaveText(initialText!);
		await page.keyboard.press('Escape');
		await expect(dialog).not.toBeVisible();
	});
});
