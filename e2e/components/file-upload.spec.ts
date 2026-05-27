import { Buffer } from 'node:buffer';
import { join } from 'node:path';
import type { FilePayload, Locator, Page } from '@playwright/test';
import { expect, test } from '../fixtures/base.fixture';
import { COMPONENT_IDS } from '../utils/component-ids';
import { snapshotVariants } from '../utils/visual.helpers';

const TEST_IMAGE_NAME = 'bg-01.jpg';
const TEST_IMAGE_PATH = join(process.cwd(), 'src/assets/backgrounds', TEST_IMAGE_NAME);

const TEST_FILES = [
	{
		name: 'notes.txt',
		mimeType: 'text/plain',
		buffer: Buffer.from('Sim UI file upload test'),
	},
	{
		name: 'report.pdf',
		mimeType: 'application/pdf',
		buffer: Buffer.from('%PDF-1.4\n% Sim UI test file\n'),
	},
] satisfies FilePayload[];

type UploadedStateConfig = {
	files?: FilePayload | FilePayload[];
	beforeUpload?: (card: Locator) => Promise<void>;
	afterUpload?: (card: Locator) => Promise<void>;
};

const uploadedStateConfigs: Record<string, UploadedStateConfig> = {
	'file-upload-01': {
		files: TEST_IMAGE_PATH,
		afterUpload: async (card) => {
			await expect(card).toContainText(TEST_IMAGE_NAME);
		},
	},
	'file-upload-02': {
		files: TEST_IMAGE_PATH,
		afterUpload: async (card) => {
			await expect(card).toContainText(TEST_IMAGE_NAME);
		},
	},
	'file-upload-03': {
		files: TEST_IMAGE_PATH,
		afterUpload: async (card) => {
			await expect(card).toContainText(TEST_IMAGE_NAME);
		},
	},
	'file-upload-04': {
		files: TEST_IMAGE_PATH,
		afterUpload: async (card) => {
			await expect(card.locator('img[alt="Preview of uploaded image"]')).toBeVisible();
		},
	},
	'file-upload-05': {
		files: TEST_IMAGE_PATH,
		afterUpload: async (card) => {
			await expect(card.locator('img[alt="Preview of uploaded image"]')).toBeVisible();
		},
	},
	'file-upload-06': {
		files: TEST_IMAGE_PATH,
		afterUpload: async (card) => {
			await expect(card).toContainText('Uploaded files: 5');
		},
	},
	'file-upload-07': {
		files: TEST_IMAGE_PATH,
		afterUpload: async (card) => {
			await expect(card).toContainText(TEST_IMAGE_NAME);
		},
	},
	'file-upload-08': {
		files: TEST_IMAGE_PATH,
		beforeUpload: async (card) => {
			const existingFileRow = card.locator('div').filter({ hasText: 'background-01.jpg' }).first();
			await existingFileRow.locator('button').click();
			await expect(card).not.toContainText('background-01.jpg');
			await expect(card.locator('input[type="file"]')).toBeEnabled();
		},
		afterUpload: async (card) => {
			await expect(card).toContainText(TEST_IMAGE_NAME);
		},
	},
	'file-upload-09': {
		files: TEST_FILES,
		afterUpload: async (card) => {
			await expect(card).toContainText('notes.txt');
			await expect(card).toContainText('report.pdf');
		},
	},
	'file-upload-10': {
		files: TEST_FILES,
		afterUpload: async (card) => {
			await expect(card).toContainText('notes.txt');
			await expect(card).toContainText('report.pdf');
		},
	},
	'file-upload-11': {
		afterUpload: async (card) => {
			await expect(card).toContainText('certificate.pdf');
			await expect(card).toContainText('software.zip');
		},
	},
	'file-upload-12': {
		files: TEST_FILES,
		afterUpload: async (card) => {
			await expect(card).toContainText('notes.txt');
			await expect(card).toContainText('report.pdf');
		},
	},
	'file-upload-13': {
		files: TEST_FILES,
		afterUpload: async (card) => {
			await expect(card).toContainText('notes.txt');
			await expect(card).toContainText('report.pdf');
			await expect(card.locator('.tabular-nums')).toHaveCount(0, { timeout: 3000 });
		},
	},
};

async function uploadFilesInCard(page: Page, cardId: string, files: string | string[] | FilePayload | FilePayload[]) {
	const card = page.locator(`component-card#${cardId}`);
	const input = card.locator('input[type="file"]');
	await expect(card).toBeVisible();
	await input.setInputFiles(files);
	return card;
}

async function prepareUploadedState(page: Page, cardId: string): Promise<Locator> {
	const card = page.locator(`component-card#${cardId}`);
	const config = uploadedStateConfigs[cardId];

	await expect(card).toBeVisible();
	if (config.beforeUpload) {
		await config.beforeUpload(card);
	}
	if (config.files) {
		await uploadFilesInCard(page, cardId, config.files);
	}
	if (config.afterUpload) {
		await config.afterUpload(card);
	}

	return card;
}

test.describe('File Upload', () => {
	test.beforeEach(async ({ navigateToComponent }) => {
		await navigateToComponent('file-upload');
	});

	test('visual regression — all variants', async ({ page }) => {
		await snapshotVariants(page, 'file-upload', COMPONENT_IDS['file-upload']);
	});

	test('visual regression — uploaded states', async ({ page }) => {
		for (const id of COMPONENT_IDS['file-upload']) {
			const card = await prepareUploadedState(page, id);
			await card.scrollIntoViewIfNeeded();
			await expect.soft(card).toHaveScreenshot(`file-upload/uploaded-${id}.png`);
		}
	});

	test.describe('Behavior', () => {
		test('pressing upload opens file chooser and selecting a file shows it', async ({ page }) => {
			const card = page.locator('component-card#file-upload-01');
			const button = card.getByRole('button', { name: 'Upload image' });

			await expect(button).toBeVisible();
			await button.focus();

			const chooserPromise = page.waitForEvent('filechooser');
			await button.press('Enter');
			const chooser = await chooserPromise;
			await chooser.setFiles(TEST_IMAGE_PATH);

			await expect(card.getByText(TEST_IMAGE_NAME)).toBeVisible();
			await expect(card.getByRole('button', { name: 'Change image' })).toBeVisible();
			await expect(card.locator('img[alt="Preview of uploaded image"]')).toBeVisible();
		});

		test('removing a selected file clears the uploaded state', async ({ page }) => {
			const card = await uploadFilesInCard(page, 'file-upload-01', TEST_IMAGE_PATH);

			await expect(card.getByText(TEST_IMAGE_NAME)).toBeVisible();
			await card.getByRole('button', { name: 'Remove' }).click();

			await expect(card.getByText(TEST_IMAGE_NAME)).not.toBeVisible();
			await expect(card.getByRole('button', { name: 'Upload image' })).toBeVisible();
			await expect(card.locator('img[alt="Preview of uploaded image"]')).not.toBeVisible();
		});

		test('supports picking multiple files and removing them from the list', async ({ page }) => {
			const card = page.locator('component-card#file-upload-10');
			const input = card.locator('input[type="file"]');
			const removeAllButton = card.locator('button', { hasText: 'Remove all' });

			await expect(removeAllButton).toBeVisible();
			await input.setInputFiles(TEST_FILES);

			await expect(card).toContainText('Uploaded files: 5');
			await expect(card).toContainText('notes.txt');
			await expect(card).toContainText('report.pdf');

			await removeAllButton.click();

			await expect(card).toContainText('Upload file');
			await expect(card).not.toContainText('notes.txt');
			await expect(card).not.toContainText('report.pdf');
		});
	});
});
