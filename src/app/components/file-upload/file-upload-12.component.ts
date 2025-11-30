import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideCircleAlert,
	lucideDownload,
	lucideFile,
	lucideFileArchive,
	lucideFileSpreadsheet,
	lucideFileText,
	lucideHeadphones,
	lucideImage,
	lucideImageUp,
	lucideTrash2,
	lucideUpload,
	lucideVideo,
	lucideX,
} from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState, formatBytes } from '@sim/ui-file-helm';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-12',
	providers: [
		provideIcons({
			lucideX,
			lucideImageUp,
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
			lucideDownload,
		}),
	],
	imports: [HlmButton, HlmIcon, NgIcon, FileDragDropDirective],
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
					[maxSize]="maxSize"
					[initialFiles]="initialFiles()"
					(filesChange)="onFileStateChange($event)">
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
							<div class="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
								@for (file of files(); track file.id; let idx = $index) {
									<div class="bg-background relative flex flex-col rounded-md border">
										<div
											class="bg-accent flex aspect-square items-center justify-center overflow-hidden rounded-t-[inherit]">
											@if (file.file.type.startsWith('image/')) {
												<img
													class="size-full rounded-[inherit] object-cover"
													[src]="file.preview"
													alt="Preview of uploaded image" />
											} @else {
												<ng-icon hlm [name]="getFileIcon(file)" class="text-muted-foreground" size="lg" />
											}
										</div>
										<button
											hlmBtn
											size="icon"
											class="border-background focus-visible:border-background absolute -top-2 -right-2 size-6 cursor-pointer rounded-full border-2 shadow-none"
											aria-label="Remove image"
											(click)="onRemoveImage(file.id)">
											<ng-icon hlm name="lucideX" class="text-background" size="xs" />
										</button>
										<div class="flex min-w-0 flex-col gap-0.5 border-t p-3">
											<p class="truncate text-[13px] font-medium">{{ file.file.name }}</p>
											<p class="text-muted-foreground truncate text-xs">{{ formatBytes(file.file.size) }}</p>
										</div>
									</div>
								}
							</div>
						</div>
					} @else {
						<div class="flex flex-col items-center">
							<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
								<ng-icon hlm name="lucideImageUp" class="opacity-60" size="sm" />
							</div>
							<span class="mb-1.5 text-sm font-medium">Drop your files here</span>
							<div class="text-muted-foreground/70 flex flex-wrap justify-center gap-1 text-xs">
								<span>All files</span>
								<span>∙</span>
								<span>Max 6 files</span>
							</div>
							<button hlmBtn variant="outline" size="sm" class="mt-4" (click)="fileInput.click()">
								<ng-icon hlm name="lucideUpload" size="xs" class="mr-2" />
								Select image
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
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">Mixed content w/ card</p>
	`,
})
export class FileUpload12Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxSize = 5 * 1024 * 1024; // 5MB
	maxFiles = 6;
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	initialFiles = signal<FileMetadata[]>([
		{
			id: '123',
			name: 'bg-03.jpg',
			url: 'assets/backgrounds/bg-03.jpg',
			type: 'image/jpeg',
			size: 1.2 * 1024 * 1024,
		},
		{
			name: 'certificate.pdf',
			size: 312412,
			type: 'application/pdf',
			url: 'https://example.com/document.pdf',
			id: 'document.pdf-10',
		},
		{
			name: 'software.zip',
			size: 534234,
			type: 'application/zip',
			url: 'https://example.com/intro.zip',
			id: 'intro.zip-10',
		},
		{
			name: 'sheet.xlsx',
			size: 154235,
			type: 'application/xlsx',
			url: 'https://example.com/conclusion.xlsx',
			id: 'conclusion.xlsx-10',
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

	getFileIcon(file: { file: File | { type: string; name: string } }) {
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
	}
}
