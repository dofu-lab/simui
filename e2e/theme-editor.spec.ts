import { expect, test } from './fixtures/base.fixture';

test.describe('Theme editor OnPush migration', () => {
	test('keeps route tabs and editor controls reactive', async ({ page }) => {
		await page.goto('/theme-editor');
		await page.waitForLoadState('networkidle');

		const preview = page.locator('app-editor-preview');
		await expect(preview).toBeVisible({ timeout: 10_000 });

		await preview.getByText('Tasks', { exact: true }).click();
		await expect(page).toHaveURL(/#tasks$/);
		await expect(page.getByRole('heading', { name: 'Welcome back!' })).toBeVisible();

		await page.reload();
		await expect(preview).toBeVisible({ timeout: 10_000 });
		await expect(page.getByRole('heading', { name: 'Welcome back!' })).toBeVisible();

		await preview.getByText('Examples', { exact: true }).click();
		await page.getByRole('button', { name: 'Layout' }).click();

		const radius = page.locator('sim-radius-slider');
		await radius.locator('button').click();
		const radiusInput = radius.getByRole('spinbutton', { name: 'Radius value in rem' });
		await radiusInput.fill('2');
		await expect(radiusInput).toHaveValue('2');
	});
});
