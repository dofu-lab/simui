import { expect, test } from '../fixtures/base.fixture';

test.describe('versioned SpartanUI registry', () => {
	test('keeps normal URLs clean and resets a reopened app to the latest version', async ({ page }) => {
		await page.goto('/components/button?theme=dark#button-01');
		await expect(page).toHaveURL(/theme=dark#button-01$/);

		const versionBadge = page.getByRole('button', { name: /^SpartanUI .+\. Change version$/ });
		await expect(versionBadge).toBeVisible();
		const versionLabel = await versionBadge.getAttribute('aria-label');
		const initialVersion = versionLabel?.match(/^SpartanUI (.+)\. Change version$/)?.[1];
		expect(initialVersion).toBeTruthy();
		await versionBadge.click();
		await expect(page.getByText('Source compatibility')).toBeVisible();
		await expect(page.getByRole('combobox', { name: 'SpartanUI version' })).toBeVisible();
		await page.getByRole('link', { name: 'View full changelog' }).click();
		await expect(page).toHaveURL(/\/changelog$/);
		const changelog = page.getByRole('main');
		await expect(changelog.getByRole('heading', { name: 'SimUI changelog' })).toBeVisible();
		await expect(changelog.getByRole('heading', { name: 'What changed in SimUI' })).toBeVisible();
		await expect(changelog.getByRole('heading', { name: 'July 27, 2026' })).toBeVisible();
		await expect(changelog.getByText('Grouped changelog categories:', { exact: true })).toBeVisible();
		await expect(changelog.getByText('Grouped compatibility badges:', { exact: true })).toBeVisible();
		await expect(changelog.getByText('Unified date timeline:', { exact: true })).toBeVisible();
		await expect(changelog.getByText('Date-based changelog:', { exact: true })).toBeVisible();
		await expect(changelog.getByRole('heading', { name: 'Component source changes' }).first()).toBeVisible();
		await expect(changelog.getByText('Registry compatibility history')).toHaveCount(0);
		await expect(page.getByRole('region', { name: 'Added components' }).first()).toBeVisible();
		await expect(page.getByRole('region', { name: 'Updated components' }).first()).toBeVisible();
		await expect(page.getByRole('region', { name: 'Removed components' }).first()).toBeVisible();
		await page.goBack();
		await expect(page).toHaveURL(/\/components\/button\?theme=dark#button-01$/);

		const firstCard = page.locator('sim-component-card').first();
		await firstCard.getByRole('button', { name: 'View code' }).click();
		await expect(page.getByText(`for SpartanUI ${initialVersion}`).first()).toBeVisible();
		await expect(page.getByText(`--spartan-version ${initialVersion}`)).toBeVisible();
		await page.keyboard.press('Escape');

		await firstCard.getByRole('button', { name: 'Open full view' }).click();
		await expect(page).toHaveURL(/theme=dark&full=#button-01$/);
		await page.getByRole('button', { name: 'Close full view' }).click();
		await expect(page).toHaveURL(/theme=dark$/);

		await page.getByRole('button', { name: `SpartanUI ${initialVersion}. Change version` }).click();
		await page.getByRole('combobox', { name: 'SpartanUI version' }).click();
		await page.getByRole('option', { name: '1.0.2' }).click();
		await expect(page).toHaveURL(/\/components\/button\?theme=dark$/);
		await expect(page.getByRole('button', { name: 'SpartanUI 1.0.2. Change version' })).toBeVisible();
		await expect.poll(() => page.evaluate(() => localStorage.getItem('simui-spartan-registry-version'))).toBeNull();

		await page.goto('/components/button');
		await expect(page).toHaveURL(/\/components\/button$/);
		await expect(page.getByRole('button', { name: `SpartanUI ${initialVersion}. Change version` })).toBeVisible();

		await page.goto('/components/button?spartan=1.1.2');
		await expect(page).toHaveURL(/\/components\/button$/);
		await expect(page.getByRole('button', { name: 'SpartanUI 1.1.2. Change version' })).toBeVisible();
		await expect.poll(() => page.evaluate(() => localStorage.getItem('simui-spartan-registry-version'))).toBeNull();
	});
});
