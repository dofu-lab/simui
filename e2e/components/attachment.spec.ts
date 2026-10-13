import { expect, test } from '../fixtures/base.fixture';
import { componentCard, snapshotVariants } from '../utils/visual.helpers';

const ATTACHMENT_IDS = Array.from({ length: 14 }, (_, index) => `attachment-${String(index + 1).padStart(2, '0')}`);

test.describe('Attachment', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('attachment');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'attachment', ATTACHMENT_IDS);
	});

	test('removes files from the attachment list', async ({ page }) => {
		const card = componentCard(page, 'attachment-06');
		const list = card.getByRole('list', { name: 'Attached files' });

		await expect(list.getByRole('listitem')).toHaveCount(3);
		await card.getByRole('button', { name: 'Remove Q4-report.pdf' }).click();

		await expect(list.getByRole('listitem')).toHaveCount(2);
		await expect(card.getByText('Q4-report.pdf')).not.toBeVisible();
	});

	test('retries a failed attachment upload', async ({ page }) => {
		const card = componentCard(page, 'attachment-07');
		const attachment = card.locator('hlm-attachment');

		await expect(attachment).toHaveAttribute('data-state', 'error');
		await card.getByRole('button', { name: 'Retry customer-data.csv upload' }).click();

		await expect(attachment).toHaveAttribute('data-state', 'done');
		await expect(card.getByText('Upload complete · 936 KB')).toBeVisible();
		await expect(card.getByRole('button', { name: 'Retry customer-data.csv upload' })).not.toBeVisible();
	});

	test('removes compact and image attachments', async ({ page }) => {
		const compactCard = componentCard(page, 'attachment-08');
		const imageCard = componentCard(page, 'attachment-10');

		await compactCard.getByRole('button', { name: 'Remove coast.jpg' }).click();
		await expect(compactCard.getByRole('button', { name: 'Remove coast.jpg' })).not.toBeVisible();
		await expect(compactCard.getByRole('listitem')).toHaveCount(5);

		await imageCard.getByRole('button', { name: 'Remove bg-03.jpg' }).click();
		await expect(imageCard.getByRole('button', { name: 'Remove bg-03.jpg' })).not.toBeVisible();
		await expect(imageCard.getByRole('listitem')).toHaveCount(2);
	});

	test('resumes, pauses, and resets upload progress', async ({ page }) => {
		const card = componentCard(page, 'attachment-13');
		const progress = card.getByRole('progressbar', { name: 'Upload progress for create-ui.xlsx' });

		await expect(progress).toHaveAttribute('aria-valuenow', '39');
		await card.getByRole('button', { name: 'Resume uploading create-ui.xlsx' }).click();
		await expect.poll(async () => Number(await progress.getAttribute('aria-valuenow'))).toBeGreaterThan(39);

		await card.getByRole('button', { name: 'Pause uploading create-ui.xlsx' }).click();
		await expect(card.getByRole('button', { name: 'Resume uploading create-ui.xlsx' })).toBeVisible();

		await card.getByRole('button', { name: 'Reset create-ui.xlsx upload' }).click();
		await expect(progress).toHaveAttribute('aria-valuenow', '39');
		await expect(card.getByText('Paused · 0.9 MB of 2.3 MB')).toBeVisible();
	});
});
