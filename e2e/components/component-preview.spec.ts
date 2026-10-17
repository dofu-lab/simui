import { expect, test } from '../fixtures/base.fixture';
import { componentPreview } from '../utils/visual.helpers';

test.describe('Isolated component preview', () => {
	test('shows only the requested example and preserves its state when reopened by a helper', async ({
		page,
		navigateToComponent,
	}) => {
		await navigateToComponent('card');
		const preview = await componentPreview(page, 'card-01');
		await expect(page).toHaveURL(/full=preview#card-01$/);
		await expect(page.locator('sim-component-card')).toHaveCount(0);
		await expect(page.locator('hlm-resizable-group, hlm-tabs-list, sim-code-preview')).toHaveCount(0);
		await expect(page.getByRole('button', { name: 'Next component' })).toHaveCount(0);
		await expect(page.getByRole('button', { name: 'Close full view' })).toHaveCount(0);

		await preview.locator('input').first().fill('Preview state');
		const samePreview = await componentPreview(page, 'card-01');
		await expect(samePreview.locator('input').first()).toHaveValue('Preview state');
		const nextPreview = await componentPreview(page, 'card-02');
		await expect(nextPreview).toBeVisible();
		await expect(page.getByTestId('component-preview-animation-host')).toHaveCount(1);
	});

	test('opens directly at mobile width without code tabs and keeps normal full view available', async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });
		await page.goto('/components/button?full=preview#button-01');
		await expect(page.getByTestId('component-preview-animation-host')).toHaveAttribute(
			'data-component-id',
			'button-01',
		);
		await expect(page.getByRole('tablist', { name: 'Full view sections' })).toHaveCount(0);
		await expect(page.locator('sim-component-card')).toHaveCount(0);

		await page.goto('/components/button?full=#button-01');
		await expect(page.getByRole('tablist', { name: 'Full view sections' })).toBeVisible();
		await expect(page.getByRole('button', { name: 'Close full view' })).toBeVisible();
	});
});
