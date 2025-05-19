import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucidePaperclip, lucideUpload, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
@Component({
	selector: 'sim-file-upload-08',
	standalone: true,
	providers: [provideIcons({ lucideX, lucideCircleAlert, lucideUpload, lucidePaperclip })],
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
					[maxSize]="maxSize"
					[initialFiles]="initialFiles()"
					[disabled]="disabled()"
					(filesChange)="onFileStateChange($event)"
					(click)="fileInput?.click()">
					<div class="flex flex-col items-center">
						<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
							<ng-icon hlm name="lucideUpload" class="opacity-60" size="sm" />
						</div>
						<span class="mb-1.5 text-sm font-medium">Upload file</span>
						<span class="text-muted-foreground text-xs">Drag & drop or click to browse (max. 10MB)</span>
					</div>
				</div>
				@if (this.files().length > 0) {
					<div class="space-y-2">
						@for (file of this.files(); track file.id; let idx = $index) {
							<div class="flex h-12.5 w-full items-center justify-start gap-3 rounded-[14px] border px-4 py-2">
								<ng-icon hlm size="sm" name="lucidePaperclip" class="shrink-0 opacity-60" />
								<span class="flex-1 text-[13px] font-medium">{{ file.file.name }}</span>
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
				}
				<input
					#fileInput
					type="file"
					accept="image/*"
					class="hidden"
					[disabled]="disabled()"
					(change)="onFileSelected($event)" />
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
export class FileUpload08Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxSize = 10 * 1024 * 1024; // 10MB
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	disabled = computed(() => this.files().length >= 1);
	initialFiles = signal<FileMetadata[]>([
		{
			url: 'assets/backgrounds/bg-03.jpg',
			name: 'background-01.jpg',
			size: 1258291.2,
			id: '123',
			type: 'image/jpeg',
		},
	]);

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
}

export const fileUpload08Code = `
=================================
Copy FileDragDropDirective from './src/libs/sim/ui-file-helm/lib/file-drag-drop.directive.ts'
=================================

import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucidePaperclip, lucideUpload, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-file-upload-08',
	standalone: true,
	providers: [provideIcons({ lucideX, lucideCircleAlert, lucideUpload, lucidePaperclip })],
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
					[maxSize]="maxSize"
					[initialFiles]="initialFiles()"
					[disabled]="disabled()"
					(filesChange)="onFileStateChange($event)"
					(click)="fileInput?.click()">
					<div class="flex flex-col items-center">
						<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
							<ng-icon hlm name="lucideUpload" class="opacity-60" size="sm" />
						</div>
						<span class="mb-1.5 text-sm font-medium">Upload file</span>
						<span class="text-muted-foreground text-xs">Drag & drop or click to browse (max. 10MB)</span>
					</div>
				</div>
				@if (this.files().length > 0) {
					<div class="space-y-2">
						@for (file of this.files(); track file.id; let idx = $index) {
							<div class="flex h-12.5 w-full items-center justify-start gap-3 rounded-[14px] border px-4 py-2">
								<ng-icon hlm size="sm" name="lucidePaperclip" class="shrink-0 opacity-60" />
								<span class="flex-1 text-[13px] font-medium">{{ file.file.name }}</span>
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
				}
				<input
					#fileInput
					type="file"
					accept="image/*"
					class="hidden"
					[disabled]="disabled()"
					(change)="onFileSelected($event)" />
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
export class FileUpload08Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxSize = 10 * 1024 * 1024; // 10MB
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	disabled = computed(() => this.files().length >= 1);
	initialFiles = signal<FileMetadata[]>([
		{
			url: 'assets/backgrounds/bg-03.jpg',
			name: 'background-01.jpg',
			size: 1258291.2,
			id: '123',
			type: 'image/jpeg',
		},
	]);

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
}
`;
