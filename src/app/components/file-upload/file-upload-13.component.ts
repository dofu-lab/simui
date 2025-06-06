import { Component, computed, input, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideCircleAlert,
	lucideFile,
	lucideFileArchive,
	lucideFileSpreadsheet,
	lucideFileText,
	lucideFileUp,
	lucideHeadphones,
	lucideImage,
	lucideTrash2,
	lucideUpload,
	lucideVideo,
	lucideX,
} from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState, FileWithPreview, formatBytes } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

type UploadProgress = {
	fileId: string;
	progress: number;
	completed: boolean;
};

@Component({
	selector: 'sim-progress-bar',
	template: `
		@if (fileProgress() && !completed()) {
			<div class="mt-2 flex items-center gap-2">
				<div class="bg-muted h-1.5 w-full overflow-hidden rounded-full">
					<div class="bg-primary h-full transition-all duration-300 ease-out" style="width: {{ progress() }}%;"></div>
				</div>
				<span class="text-muted-foreground w-10 text-xs tabular-nums">{{ progress() }}%</span>
			</div>
		}
	`,
})
export class ProgressBarComponent {
	fileId = input<string>();
	uploadProgress = input<UploadProgress[]>([]);

	fileProgress = computed(() => {
		return this.uploadProgress().find((item) => item.fileId === this.fileId());
	});
	progress = computed(() => {
		return this.uploadProgress().find((item) => item.fileId === this.fileId())?.progress ?? 0;
	});
	completed = computed(() => {
		return this.fileProgress() ? this.fileProgress()?.completed : false;
	});
}

@Component({
	selector: 'sim-file-upload-13',
	providers: [
		provideIcons({
			lucideX,
			lucideFileUp,
			lucideCircleAlert,
			lucideUpload,
			lucideTrash2,
			lucideFileText,
			lucideFileArchive,
			lucideFileSpreadsheet,
			lucideVideo,
			lucideHeadphones,
			lucideImage,
			lucideFile,
		}),
	],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon, FileDragDropDirective, ProgressBarComponent],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex w-full flex-col items-center justify-center">
			<div class="relative w-full">
				<div
					fileDragDrop
					role="button"
					class="border-input has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:items-start! has-[input:focus]:ring-[3px]"
					dragClass="bg-accent/50"
					[multiple]="true"
					[maxFiles]="maxFiles"
					[maxTotalSize]="maxTotalSize"
					[initialFiles]="initialFiles()"
					(filesChange)="onFileStateChange($event)"
					(onFileAdded)="handleFilesAdded($event)">
					@if (files().length > 0) {
						<div class="flex w-full flex-col items-start justify-start gap-3">
							<div class="flex w-full items-center justify-between gap-2">
								<span class="truncate text-sm">Uploaded files: {{ files().length }}</span>
								<div class="flex gap-2">
									<button
										hlmBtn
										size="sm"
										variant="outline"
										class="flex h-8 shrink-0 gap-2 text-xs"
										(click)="fileInput.click()">
										<ng-icon name="lucideUpload" class="text-muted-foreground shrink-0 text-xs" />
										Add more
									</button>
									<button
										hlmBtn
										size="sm"
										variant="outline"
										class="flex h-8 shrink-0 gap-2 text-xs"
										(click)="removeAllFiles()">
										<ng-icon name="lucideTrash2" class="text-muted-foreground shrink-0 text-xs" />
										Remove all
									</button>
								</div>
							</div>
							<div class="w-full space-y-2">
								@for (file of this.files(); track file.id; let idx = $index) {
									<div class="flex w-full flex-col rounded-lg border p-2 pr-3">
										<div class="flex items-center justify-start gap-3">
											<div class="flex size-10 items-center justify-center rounded border">
												<ng-icon hlm size="sm" [name]="getFileIcon(file)" class="shrink-0 opacity-60" />
											</div>
											<div class="flex flex-1 flex-col">
												<span class="text-[13px] font-medium">{{ file.file.name }}</span>
												<span class="text-muted-foreground text-xs">{{ this.formatBytes(file.file.size) }}</span>
											</div>
											<div class="flex items-center">
												<button
													hlmBtn
													size="icon"
													variant="ghost"
													class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground/80 hover:text-foreground -me-2 inline-flex size-8 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-transparent focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
													(click)="onRemoveImage(file.id)">
													<ng-icon hlm name="lucideX" size="sm" />
												</button>
											</div>
										</div>
										<sim-progress-bar [fileId]="file.id" [uploadProgress]="uploadProgress()" />
									</div>
								}
							</div>
						</div>
					} @else {
						<div class="flex flex-col items-center">
							<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
								<ng-icon hlm name="lucideFileUp" class="opacity-60" size="sm" />
							</div>
							<span class="mb-1.5 text-sm font-medium">Upload file</span>
							<div class="text-muted-foreground/70 flex flex-wrap justify-center gap-1 text-xs">
								<span>All files</span>
								<span>∙</span>
								<span>Max 10 files</span>
								<span>∙</span>
								<span>Up to 200MB</span>
							</div>
							<button hlmBtn variant="outline" size="sm" class="mt-4" (click)="fileInput.click()">
								<ng-icon hlm name="lucideUpload" size="xs" class="mr-2" />
								Select files
							</button>
						</div>
					}
				</div>
				<input #fileInput type="file" class="hidden" [multiple]="true" (change)="onFileSelected($event)" />
			</div>
		</div>
		@if (this.errors().length > 0) {
			@for (error of this.errors(); track error) {
				<span class="text-destructive mt-2 flex items-center gap-1 text-xs">
					<ng-icon hlm name="lucideCircleAlert" size="xs" class="shrink-0" />
					{{ error }}
				</span>
			}
		}
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">With simulated progress track</p>
	`,
})
export class FileUpload13Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxTotalSize = 200 * 1024 * 1024;
	maxFiles = 10;
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	initialFiles = signal<FileMetadata[]>([
		{
			name: 'certificate.pdf',
			size: 312412,
			type: 'application/pdf',
			url: 'https://example.com/document.pdf',
			id: 'document.pdf-11',
		},
		{
			name: 'software.zip',
			size: 534234,
			type: 'application/zip',
			url: 'https://example.com/intro.zip',
			id: 'intro.zip-11',
		},
		{
			name: 'sheet.xlsx',
			size: 154235,
			type: 'application/xlsx',
			url: 'https://example.com/conclusion.xlsx',
			id: 'conclusion.xlsx-11',
		},
	]);
	formatBytes = formatBytes;

	uploadProgress = signal<UploadProgress[]>([]);

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			this.fileUploadDirective()?.addFiles(input.files);
		}
	}

	onFileStateChange(event: FileUploadState) {
		this.filesState.set(event);
	}

	removeAllFiles() {
		this.fileUploadDirective()?.clearFiles();
	}

	onRemoveImage(id: string): void {
		this.fileUploadDirective()?.removeFile(id);
	}

	getFileIcon = (file: { file: File | { type: string; name: string } }) => {
		const fileType = file.file instanceof File ? file.file.type : file.file.type;
		const fileName = file.file instanceof File ? file.file.name : file.file.name;

		if (
			fileType.includes('pdf') ||
			fileName.endsWith('.pdf') ||
			fileType.includes('word') ||
			fileName.endsWith('.doc') ||
			fileName.endsWith('.docx')
		) {
			return 'lucideFileText';
		} else if (
			fileType.includes('zip') ||
			fileType.includes('archive') ||
			fileName.endsWith('.zip') ||
			fileName.endsWith('.rar')
		) {
			return 'lucideFileArchive';
		} else if (fileType.includes('excel') || fileName.endsWith('.xls') || fileName.endsWith('.xlsx')) {
			return 'lucideFileSpreadsheet';
		} else if (fileType.includes('video/')) {
			return 'lucideVideo';
		} else if (fileType.includes('audio/')) {
			return 'lucideHeadphones';
		} else if (fileType.startsWith('image/')) {
			return 'lucideImage';
		}
		return 'lucideFile';
	};

	simulateUpload = (totalBytes: number, onProgress: (progress: number) => void, onComplete: () => void) => {
		let timeoutId: NodeJS.Timeout;
		let uploadedBytes = 0;
		let lastProgressReport = 0;

		const simulateChunk = () => {
			// Simulate variable network conditions with random chunk sizes
			const chunkSize = Math.floor(Math.random() * 300000) + 2000;
			uploadedBytes = Math.min(totalBytes, uploadedBytes + chunkSize);

			// Calculate progress percentage (0-100)
			const progressPercent = Math.floor((uploadedBytes / totalBytes) * 100);

			// Only report progress if it's changed by at least 1%
			if (progressPercent > lastProgressReport) {
				lastProgressReport = progressPercent;
				onProgress(progressPercent);
			}

			// Continue simulation if not complete
			if (uploadedBytes < totalBytes) {
				// Variable delay between 50ms and 500ms to simulate network fluctuations (reduced for faster uploads)
				const delay = Math.floor(Math.random() * 450) + 50;

				// Occasionally add a longer pause to simulate network congestion (5% chance, shorter duration)
				const extraDelay = Math.random() < 0.05 ? 500 : 0;

				timeoutId = setTimeout(simulateChunk, delay + extraDelay);
			} else {
				// Upload complete
				onComplete();
			}
		};

		// Start the simulation
		timeoutId = setTimeout(simulateChunk, 100);

		// Return a cleanup function to cancel the simulation
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	};

	handleFilesAdded = (addedFiles: FileWithPreview[]) => {
		// Initialize progress tracking for each new file
		const newProgressItems = addedFiles.map((file) => ({
			fileId: file.id,
			progress: 0,
			completed: false,
		}));

		// Add new progress items to state
		this.uploadProgress.update((prev) => [...prev, ...newProgressItems]);

		// Store cleanup functions
		const cleanupFunctions: Array<() => void> = [];

		// Start simulated upload for each file
		addedFiles.forEach((file) => {
			const fileSize = file.file instanceof File ? file.file.size : file.file.size;

			// Start the upload simulation and store the cleanup function
			const cleanup = this.simulateUpload(
				fileSize,
				// Progress callback
				(progress) => {
					this.uploadProgress.update((prev) =>
						prev.map((item) => (item.fileId === file.id ? { ...item, progress } : item)),
					);
				},
				// Complete callback
				() => {
					this.uploadProgress.update((prev) =>
						prev.map((item) => (item.fileId === file.id ? { ...item, completed: true } : item)),
					);
				},
			);

			cleanupFunctions.push(cleanup);
		});

		// Return a cleanup function that cancels all animations
		return () => {
			cleanupFunctions.forEach((cleanup) => cleanup());
		};
	};
}

export const fileUpload13Code = `
// =================================
// Copy FileDragDropDirective from './src/libs/sim/ui-file-helm/lib/file-drag-drop.directive.ts'
// =================================

import { Component, computed, input, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideCircleAlert,
	lucideFile,
	lucideFileArchive,
	lucideFileSpreadsheet,
	lucideFileText,
	lucideFileUp,
	lucideHeadphones,
	lucideImage,
	lucideTrash2,
	lucideUpload,
	lucideVideo,
	lucideX,
} from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState, FileWithPreview, formatBytes } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

type UploadProgress = {
	fileId: string;
	progress: number;
	completed: boolean;
};

@Component({
	selector: 'sim-progress-bar',
	template: \`
		@if (fileProgress() && !completed()) {
			<div class="mt-2 flex items-center gap-2">
				<div class="bg-muted h-1.5 w-full overflow-hidden rounded-full">
					<div class="bg-primary h-full transition-all duration-300 ease-out" style="width: {{ progress() }}%;"></div>
				</div>
				<span class="text-muted-foreground w-10 text-xs tabular-nums">{{ progress() }}%</span>
			</div>
		}
	\`,
})
export class ProgressBarComponent {
	fileId = input<string>();
	uploadProgress = input<UploadProgress[]>([]);

	fileProgress = computed(() => {
		return this.uploadProgress().find((item) => item.fileId === this.fileId());
	});
	progress = computed(() => {
		return this.uploadProgress().find((item) => item.fileId === this.fileId())?.progress ?? 0;
	});
	completed = computed(() => {
		return this.fileProgress() ? this.fileProgress()?.completed : false;
	});
}

@Component({
	selector: 'sim-file-upload-13',
	providers: [
		provideIcons({
			lucideX,
			lucideFileUp,
			lucideCircleAlert,
			lucideUpload,
			lucideTrash2,
			lucideFileText,
			lucideFileArchive,
			lucideFileSpreadsheet,
			lucideVideo,
			lucideHeadphones,
			lucideImage,
			lucideFile,
		}),
	],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon, FileDragDropDirective, ProgressBarComponent],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="flex w-full flex-col items-center justify-center">
			<div class="relative w-full">
				<div
					fileDragDrop
					role="button"
					class="border-input has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:items-start! has-[input:focus]:ring-[3px]"
					dragClass="bg-accent/50"
					[multiple]="true"
					[maxFiles]="maxFiles"
					[maxTotalSize]="maxTotalSize"
					[initialFiles]="initialFiles()"
					(filesChange)="onFileStateChange($event)"
					(onFileAdded)="handleFilesAdded($event)">
					@if (files().length > 0) {
						<div class="flex w-full flex-col items-start justify-start gap-3">
							<div class="flex w-full items-center justify-between gap-2">
								<span class="truncate text-sm">Uploaded files: {{ files().length }}</span>
								<div class="flex gap-2">
									<button
										hlmBtn
										size="sm"
										variant="outline"
										class="flex h-8 shrink-0 gap-2 text-xs"
										(click)="fileInput.click()">
										<ng-icon name="lucideUpload" class="text-muted-foreground shrink-0 text-xs" />
										Add more
									</button>
									<button
										hlmBtn
										size="sm"
										variant="outline"
										class="flex h-8 shrink-0 gap-2 text-xs"
										(click)="removeAllFiles()">
										<ng-icon name="lucideTrash2" class="text-muted-foreground shrink-0 text-xs" />
										Remove all
									</button>
								</div>
							</div>
							<div class="w-full space-y-2">
								@for (file of this.files(); track file.id; let idx = $index) {
									<div class="flex w-full flex-col rounded-lg border p-2 pr-3">
										<div class="flex items-center justify-start gap-3">
											<div class="flex size-10 items-center justify-center rounded border">
												<ng-icon hlm size="sm" [name]="getFileIcon(file)" class="shrink-0 opacity-60" />
											</div>
											<div class="flex flex-1 flex-col">
												<span class="text-[13px] font-medium">{{ file.file.name }}</span>
												<span class="text-muted-foreground text-xs">{{ this.formatBytes(file.file.size) }}</span>
											</div>
											<div class="flex items-center">
												<button
													hlmBtn
													size="icon"
													variant="ghost"
													class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground/80 hover:text-foreground -me-2 inline-flex size-8 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-transparent focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
													(click)="onRemoveImage(file.id)">
													<ng-icon hlm name="lucideX" size="sm" />
												</button>
											</div>
										</div>
										<sim-progress-bar [fileId]="file.id" [uploadProgress]="uploadProgress()" />
									</div>
								}
							</div>
						</div>
					} @else {
						<div class="flex flex-col items-center">
							<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
								<ng-icon hlm name="lucideFileUp" class="opacity-60" size="sm" />
							</div>
							<span class="mb-1.5 text-sm font-medium">Upload file</span>
							<div class="text-muted-foreground/70 flex flex-wrap justify-center gap-1 text-xs">
								<span>All files</span>
								<span>∙</span>
								<span>Max 10 files</span>
								<span>∙</span>
								<span>Up to 200MB</span>
							</div>
							<button hlmBtn variant="outline" size="sm" class="mt-4" (click)="fileInput.click()">
								<ng-icon hlm name="lucideUpload" size="xs" class="mr-2" />
								Select files
							</button>
						</div>
					}
				</div>
				<input #fileInput type="file" class="hidden" [multiple]="true" (change)="onFileSelected($event)" />
			</div>
		</div>
		@if (this.errors().length > 0) {
			@for (error of this.errors(); track error) {
				<span class="text-destructive mt-2 flex items-center gap-1 text-xs">
					<ng-icon hlm name="lucideCircleAlert" size="xs" class="shrink-0" />
					{{ error }}
				</span>
			}
		}
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">With simulated progress track</p>
	\`,
})
export class FileUpload13Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxTotalSize = 200 * 1024 * 1024;
	maxFiles = 10;
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	initialFiles = signal<FileMetadata[]>([
		{
			name: 'certificate.pdf',
			size: 312412,
			type: 'application/pdf',
			url: 'https://example.com/document.pdf',
			id: 'document.pdf-11',
		},
		{
			name: 'software.zip',
			size: 534234,
			type: 'application/zip',
			url: 'https://example.com/intro.zip',
			id: 'intro.zip-11',
		},
		{
			name: 'sheet.xlsx',
			size: 154235,
			type: 'application/xlsx',
			url: 'https://example.com/conclusion.xlsx',
			id: 'conclusion.xlsx-11',
		},
	]);
	formatBytes = formatBytes;

	uploadProgress = signal<UploadProgress[]>([]);

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			this.fileUploadDirective()?.addFiles(input.files);
		}
	}

	onFileStateChange(event: FileUploadState) {
		this.filesState.set(event);
	}

	removeAllFiles() {
		this.fileUploadDirective()?.clearFiles();
	}

	onRemoveImage(id: string): void {
		this.fileUploadDirective()?.removeFile(id);
	}

	getFileIcon = (file: { file: File | { type: string; name: string } }) => {
		const fileType = file.file instanceof File ? file.file.type : file.file.type;
		const fileName = file.file instanceof File ? file.file.name : file.file.name;

		if (
			fileType.includes('pdf') ||
			fileName.endsWith('.pdf') ||
			fileType.includes('word') ||
			fileName.endsWith('.doc') ||
			fileName.endsWith('.docx')
		) {
			return 'lucideFileText';
		} else if (
			fileType.includes('zip') ||
			fileType.includes('archive') ||
			fileName.endsWith('.zip') ||
			fileName.endsWith('.rar')
		) {
			return 'lucideFileArchive';
		} else if (fileType.includes('excel') || fileName.endsWith('.xls') || fileName.endsWith('.xlsx')) {
			return 'lucideFileSpreadsheet';
		} else if (fileType.includes('video/')) {
			return 'lucideVideo';
		} else if (fileType.includes('audio/')) {
			return 'lucideHeadphones';
		} else if (fileType.startsWith('image/')) {
			return 'lucideImage';
		}
		return 'lucideFile';
	};

	simulateUpload = (totalBytes: number, onProgress: (progress: number) => void, onComplete: () => void) => {
		let timeoutId: NodeJS.Timeout;
		let uploadedBytes = 0;
		let lastProgressReport = 0;

		const simulateChunk = () => {
			// Simulate variable network conditions with random chunk sizes
			const chunkSize = Math.floor(Math.random() * 300000) + 2000;
			uploadedBytes = Math.min(totalBytes, uploadedBytes + chunkSize);

			// Calculate progress percentage (0-100)
			const progressPercent = Math.floor((uploadedBytes / totalBytes) * 100);

			// Only report progress if it's changed by at least 1%
			if (progressPercent > lastProgressReport) {
				lastProgressReport = progressPercent;
				onProgress(progressPercent);
			}

			// Continue simulation if not complete
			if (uploadedBytes < totalBytes) {
				// Variable delay between 50ms and 500ms to simulate network fluctuations (reduced for faster uploads)
				const delay = Math.floor(Math.random() * 450) + 50;

				// Occasionally add a longer pause to simulate network congestion (5% chance, shorter duration)
				const extraDelay = Math.random() < 0.05 ? 500 : 0;

				timeoutId = setTimeout(simulateChunk, delay + extraDelay);
			} else {
				// Upload complete
				onComplete();
			}
		};

		// Start the simulation
		timeoutId = setTimeout(simulateChunk, 100);

		// Return a cleanup function to cancel the simulation
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	};

	handleFilesAdded = (addedFiles: FileWithPreview[]) => {
		// Initialize progress tracking for each new file
		const newProgressItems = addedFiles.map((file) => ({
			fileId: file.id,
			progress: 0,
			completed: false,
		}));

		// Add new progress items to state
		this.uploadProgress.update((prev) => [...prev, ...newProgressItems]);

		// Store cleanup functions
		const cleanupFunctions: Array<() => void> = [];

		// Start simulated upload for each file
		addedFiles.forEach((file) => {
			const fileSize = file.file instanceof File ? file.file.size : file.file.size;

			// Start the upload simulation and store the cleanup function
			const cleanup = this.simulateUpload(
				fileSize,
				// Progress callback
				(progress) => {
					this.uploadProgress.update((prev) =>
						prev.map((item) => (item.fileId === file.id ? { ...item, progress } : item)),
					);
				},
				// Complete callback
				() => {
					this.uploadProgress.update((prev) =>
						prev.map((item) => (item.fileId === file.id ? { ...item, completed: true } : item)),
					);
				},
			);

			cleanupFunctions.push(cleanup);
		});

		// Return a cleanup function that cancels all animations
		return () => {
			cleanupFunctions.forEach((cleanup) => cleanup());
		};
	};
}
`;
