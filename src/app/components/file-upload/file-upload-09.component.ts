import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideCircleAlert,
	lucideFile,
	lucideFileArchive,
	lucideFileSpreadsheet,
	lucideFileText,
	lucideHeadphones,
	lucideImage,
	lucideUpload,
	lucideVideo,
	lucideX,
} from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState, formatBytes } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-09',
	providers: [
		provideIcons({
			lucideX,
			lucideCircleAlert,
			lucideUpload,
			lucideFileText,
			lucideFileArchive,
			lucideFileSpreadsheet,
			lucideVideo,
			lucideHeadphones,
			lucideImage,
			lucideFile,
		}),
	],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon, FileDragDropDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex w-full flex-col items-center justify-center">
			<div class="relative flex w-full flex-col gap-2">
				<div
					fileDragDrop
					role="button"
					class="border-input hover:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:items-start! has-[input:focus]:ring-[3px]"
					dragClass="bg-accent/50"
					[maxFiles]="maxFiles"
					[maxTotalSize]="maxTotalSize"
					[initialFiles]="initialFiles()"
					[multiple]="true"
					(filesChange)="onFileStateChange($event)"
					(click)="fileInput?.click()">
					<div class="flex flex-col items-center gap-1.5">
						<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
							<ng-icon hlm name="lucideUpload" class="opacity-60" size="sm" />
						</div>
						<span class="text-sm font-medium">Upload file</span>
						<span class="text-muted-foreground text-xs">Drag & drop or click to browse</span>
						<div class="text-muted-foreground/70 flex flex-wrap justify-center gap-1 text-xs">
							<span>All files</span>
							<span>∙</span>
							<span>Max 10 files</span>
							<span>∙</span>
							<span>Up to 100MB</span>
						</div>
					</div>
				</div>
				@if (this.files().length > 0) {
					<div class="space-y-2">
						@for (file of this.files(); track file.id; let idx = $index) {
							<div class="flex w-full items-center justify-start gap-3 rounded-lg border p-2 pr-3">
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
						}
					</div>
					<div class="flex justify-between">
						<button hlmBtn size="sm" variant="outline" class="flex h-8 w-fit gap-2 text-xs" (click)="removeAllFiles()">
							Remove all files
						</button>
						<div class="flex items-center gap-2">
							<span class="text-muted-foreground text-xs">Total files: {{ files().length }}</span>
							<div class="bg-border h-6 w-[1px]"></div>
							<span class="text-muted-foreground text-xs">Total size: {{ totalSize() }}</span>
						</div>
					</div>
				}
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
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">Single file uploader w/ max size</p>
	`,
})
export class FileUpload09Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxTotalSize = 100 * 1024 * 1024; // 100MB
	maxFiles = 10;
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	totalSize = computed(() => formatBytes(this.files().reduce((acc, file) => acc + file.file.size, 0)));
	initialFiles = signal<FileMetadata[]>([
		{
			url: 'assets/backgrounds/bg-03.jpg',
			name: 'background-01.jpg',
			size: 1258291.2,
			id: '123',
			type: 'image/jpeg',
		},
	]);
	formatBytes = formatBytes;

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
}

export const fileUpload09Code = `
=================================
Copy FileDragDropDirective from './src/libs/sim/ui-file-helm/lib/file-drag-drop.directive.ts'
=================================

import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideCircleAlert,
	lucideFile,
	lucideFileArchive,
	lucideFileSpreadsheet,
	lucideFileText,
	lucideHeadphones,
	lucideImage,
	lucideUpload,
	lucideVideo,
	lucideX,
} from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState, formatBytes } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-09',
	providers: [
		provideIcons({
			lucideX,
			lucideCircleAlert,
			lucideUpload,
			lucideFileText,
			lucideFileArchive,
			lucideFileSpreadsheet,
			lucideVideo,
			lucideHeadphones,
			lucideImage,
			lucideFile,
		}),
	],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon, FileDragDropDirective],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="flex w-full flex-col items-center justify-center">
			<div class="relative flex w-full flex-col gap-2">
				<div
					fileDragDrop
					role="button"
					class="border-input hover:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:items-start! has-[input:focus]:ring-[3px]"
					dragClass="bg-accent/50"
					[maxFiles]="maxFiles"
					[maxTotalSize]="maxTotalSize"
					[initialFiles]="initialFiles()"
					[multiple]="true"
					(filesChange)="onFileStateChange($event)"
					(click)="fileInput?.click()">
					<div class="flex flex-col items-center gap-1.5">
						<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
							<ng-icon hlm name="lucideUpload" class="opacity-60" size="sm" />
						</div>
						<span class="text-sm font-medium">Upload file</span>
						<span class="text-muted-foreground text-xs">Drag & drop or click to browse</span>
						<div class="text-muted-foreground/70 flex flex-wrap justify-center gap-1 text-xs">
							<span>All files</span>
							<span>∙</span>
							<span>Max 10 files</span>
							<span>∙</span>
							<span>Up to 100MB</span>
						</div>
					</div>
				</div>
				@if (this.files().length > 0) {
					<div class="space-y-2">
						@for (file of this.files(); track file.id; let idx = $index) {
							<div class="flex w-full items-center justify-start gap-3 rounded-lg border p-2 pr-3">
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
						}
					</div>
					<div class="flex justify-between">
						<button hlmBtn size="sm" variant="outline" class="flex h-8 w-fit gap-2 text-xs" (click)="removeAllFiles()">
							Remove all files
						</button>
						<div class="flex items-center gap-2">
							<span class="text-muted-foreground text-xs">Total files: {{ files().length }}</span>
							<div class="bg-border h-6 w-[1px]"></div>
							<span class="text-muted-foreground text-xs">Total size: {{ totalSize() }}</span>
						</div>
					</div>
				}
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
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">Single file uploader w/ max size</p>
	\`,
})
export class FileUpload09Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxTotalSize = 100 * 1024 * 1024; // 100MB
	maxFiles = 10;
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	totalSize = computed(() => formatBytes(this.files().reduce((acc, file) => acc + file.file.size, 0)));
	initialFiles = signal<FileMetadata[]>([
		{
			url: 'assets/backgrounds/bg-03.jpg',
			name: 'background-01.jpg',
			size: 1258291.2,
			id: '123',
			type: 'image/jpeg',
		},
	]);
	formatBytes = formatBytes;

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
}
`;
