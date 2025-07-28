import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideCircleAlert,
	lucideCloudUpload,
	lucideDownload,
	lucideFile,
	lucideFileArchive,
	lucideFileSpreadsheet,
	lucideFileText,
	lucideFileUp,
	lucideHeadphones,
	lucideImage,
	lucideTrash2,
	lucideVideo,
	lucideX,
} from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState, formatBytes } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmTableImports } from '@spartan-ng/helm/table';

@Component({
	selector: 'sim-file-upload-11',
	providers: [
		provideIcons({
			lucideX,
			lucideFileUp,
			lucideCircleAlert,
			lucideCloudUpload,
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
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon, FileDragDropDirective, ...HlmTableImports],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="flex w-full flex-col items-center justify-center">
			<div class="relative w-full">
				@if (files().length > 0) {
					<div class="flex w-full flex-col items-start justify-start gap-2">
						<div class="flex w-full items-center justify-between gap-2">
							<span class="truncate text-sm">Files: {{ files().length }} ∙ ({{ this.totalSize() }})</span>
							<div class="flex gap-2">
								<button
									hlmBtn
									size="sm"
									variant="outline"
									class="flex h-8 shrink-0 gap-2 text-xs"
									(click)="fileInput.click()">
									<ng-icon name="lucideCloudUpload" class="text-muted-foreground shrink-0 text-xs" />
									Add files
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
						<div class="w-full overflow-hidden rounded-lg border">
							<div class="overflow-x-auto">
								<table hlmTable class="w-full min-w-[400px]">
									<tr hlmTr class="bg-muted/50 text-muted-foreground font-regular">
										<th hlmTh class="h-9 w-[40%] px-3 py-2 text-xs">Name</th>
										<th hlmTh class="h-9 w-[15%] px-3 py-2 text-xs">Type</th>
										<th hlmTh class="h-9 w-[25%] px-3 py-2 text-xs">Size</th>
										<th hlmTh class="h-9 w-[20%] justify-end px-3 py-2 text-xs">Action</th>
									</tr>
									@for (file of files(); track file.id) {
										<tr hlmTr>
											<td hlmTd class="h-12.5 w-[40%] px-3 py-2">
												<div class="flex items-center gap-2 truncate">
													<ng-icon hlm size="sm" [name]="getFileIcon(file)" class="shrink-0 opacity-60" />
													<span class="truncate text-[13px] font-medium">{{ file.file.name }}</span>
												</div>
											</td>
											<td hlmTd class="text-muted-foreground h-12.5 w-[15%] px-3 py-2 text-[13px]">
												{{ file.file.type.split('/')[1].toUpperCase() || 'UNKNOWN' }}
											</td>
											<td hlmTd class="text-muted-foreground h-12.5 w-[25%] px-3 py-2 text-[13px]">
												{{ formatBytes(file.file.size) }}
											</td>
											<td hlmTd class="text-muted-foreground h-12.5 w-[20%] justify-end px-3 py-2 text-[13px]">
												<button
													hlmBtn
													size="icon"
													variant="ghost"
													class="text-muted-foreground/80 hover:text-foreground size-8 hover:bg-transparent">
													<ng-icon hlm size="sm" name="lucideDownload" class="shrink-0 opacity-60" />
												</button>
												<button
													hlmBtn
													size="icon"
													variant="ghost"
													class="text-muted-foreground/80 hover:text-foreground size-8 hover:bg-transparent"
													(click)="onRemoveImage(file.id)">
													<ng-icon hlm size="sm" name="lucideTrash2" class="shrink-0 opacity-60" />
												</button>
											</td>
										</tr>
									}
								</table>
							</div>
						</div>
					</div>
				}
				<div
					fileDragDrop
					[hidden]="files().length > 0"
					role="button"
					class="border-input has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:items-start! has-[input:focus]:ring-[3px]"
					dragClass="bg-accent/50"
					[multiple]="true"
					[maxFiles]="maxFiles"
					[maxTotalSize]="maxTotalSize"
					[initialFiles]="initialFiles()"
					(filesChange)="onFileStateChange($event)">
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
							<ng-icon hlm name="lucideCloudUpload" size="xs" class="mr-2" />
							Select files
						</button>
					</div>
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
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">Multiple files uploader w/ table</p>
	`,
})
export class FileUpload11Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxTotalSize = 200 * 1024 * 1024;
	maxFiles = 10;
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	totalSize = computed(() => formatBytes(this.files().reduce((acc, file) => acc + file.file.size, 0)));
	initialFiles = signal<FileMetadata[]>([
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

export const fileUpload11Code = `
// =================================
// Copy FileDragDropDirective from './src/libs/sim/ui-file-helm/lib/file-drag-drop.directive.ts'
// =================================

import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideCircleAlert,
	lucideCloudUpload,
	lucideDownload,
	lucideFile,
	lucideFileArchive,
	lucideFileSpreadsheet,
	lucideFileText,
	lucideFileUp,
	lucideHeadphones,
	lucideImage,
	lucideTrash2,
	lucideVideo,
	lucideX,
} from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState, formatBytes } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmTableComponent, HlmTdComponent, HlmThComponent, HlmTrowComponent } from '@spartan-ng/helm/table';

@Component({
	selector: 'sim-file-upload-11',
	providers: [
		provideIcons({
			lucideX,
			lucideFileUp,
			lucideCircleAlert,
			lucideCloudUpload,
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
	imports: [
		HlmButtonDirective,
		HlmIconDirective,
		NgIcon,
		FileDragDropDirective,
		HlmTableComponent,
		HlmTrowComponent,
		HlmThComponent,
		HlmTdComponent,
	],
	host: {
		class: 'w-full',
	},
	template: \`
		<div class="flex w-full flex-col items-center justify-center">
			<div class="relative w-full">
				@if (files().length > 0) {
					<div class="flex w-full flex-col items-start justify-start gap-2">
						<div class="flex w-full items-center justify-between gap-2">
							<span class="truncate text-sm">Files: {{ files().length }} ∙ ({{ this.totalSize() }})</span>
							<div class="flex gap-2">
								<button
									hlmBtn
									size="sm"
									variant="outline"
									class="flex h-8 shrink-0 gap-2 text-xs"
									(click)="fileInput.click()">
									<ng-icon name="lucideCloudUpload" class="text-muted-foreground shrink-0 text-xs" />
									Add files
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
						<div class="w-full overflow-hidden rounded-lg border">
							<div class="overflow-x-auto">
								<hlm-table class="w-full min-w-[400px]">
									<hlm-trow class="bg-muted/50 text-muted-foreground font-regular">
										<hlm-th class="h-9 w-[40%] px-3 py-2 text-xs">Name</hlm-th>
										<hlm-th class="h-9 w-[15%] px-3 py-2 text-xs">Type</hlm-th>
										<hlm-th class="h-9 w-[25%] px-3 py-2 text-xs">Size</hlm-th>
										<hlm-th class="h-9 w-[20%] justify-end px-3 py-2 text-xs">Action</hlm-th>
									</hlm-trow>
									@for (file of files(); track file.id) {
										<hlm-trow>
											<hlm-td class="h-12.5 w-[40%] px-3 py-2">
												<div class="flex items-center gap-2 truncate">
													<ng-icon hlm size="sm" [name]="getFileIcon(file)" class="shrink-0 opacity-60" />
													<span class="truncate text-[13px] font-medium">{{ file.file.name }}</span>
												</div>
											</hlm-td>
											<hlm-td class="text-muted-foreground h-12.5 w-[15%] px-3 py-2 text-[13px]">
												{{ file.file.type.split('/')[1].toUpperCase() || 'UNKNOWN' }}
											</hlm-td>
											<hlm-td class="text-muted-foreground h-12.5 w-[25%] px-3 py-2 text-[13px]">
												{{ formatBytes(file.file.size) }}
											</hlm-td>
											<hlm-td class="text-muted-foreground h-12.5 w-[20%] justify-end px-3 py-2 text-[13px]">
												<button
													hlmBtn
													size="icon"
													variant="ghost"
													class="text-muted-foreground/80 hover:text-foreground size-8 hover:bg-transparent">
													<ng-icon hlm size="sm" name="lucideDownload" class="shrink-0 opacity-60" />
												</button>
												<button
													hlmBtn
													size="icon"
													variant="ghost"
													class="text-muted-foreground/80 hover:text-foreground size-8 hover:bg-transparent"
													(click)="onRemoveImage(file.id)">
													<ng-icon hlm size="sm" name="lucideTrash2" class="shrink-0 opacity-60" />
												</button>
											</hlm-td>
										</hlm-trow>
									}
								</hlm-table>
							</div>
						</div>
					</div>
				}
				<div
					fileDragDrop
					[hidden]="files().length > 0"
					role="button"
					class="border-input has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:items-start! has-[input:focus]:ring-[3px]"
					dragClass="bg-accent/50"
					[multiple]="true"
					[maxFiles]="maxFiles"
					[maxTotalSize]="maxTotalSize"
					[initialFiles]="initialFiles()"
					(filesChange)="onFileStateChange($event)">
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
							<ng-icon hlm name="lucideCloudUpload" size="xs" class="mr-2" />
							Select files
						</button>
					</div>
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
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">Multiple files uploader w/ table</p>
	\`,
})
export class FileUpload11Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxTotalSize = 200 * 1024 * 1024;
	maxFiles = 10;
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	totalSize = computed(() => formatBytes(this.files().reduce((acc, file) => acc + file.file.size, 0)));
	initialFiles = signal<FileMetadata[]>([
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
