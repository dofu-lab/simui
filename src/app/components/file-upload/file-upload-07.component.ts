import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideImageUp, lucideUpload, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState, formatBytes } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-07',
	providers: [provideIcons({ lucideX, lucideImageUp, lucideCircleAlert, lucideUpload })],
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
					class="border-input has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:items-start! has-[input:focus]:ring-[3px]"
					dragClass="bg-accent/50"
					[accept]="accept"
					[multiple]="true"
					[maxSize]="maxSize"
					[initialFiles]="initialFiles"
					(filesChange)="onFileStateChange($event)">
					<div class="flex flex-col items-center">
						<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
							<ng-icon hlm name="lucideImageUp" class="opacity-60" size="sm" />
						</div>
						<span class="mb-1.5 text-sm font-medium">Drop your image here</span>
						<span class="text-muted-foreground text-xs">SVG, PNG, JPG or GIF (max. 5MB)</span>
						<button hlmBtn variant="outline" size="sm" class="mt-4" (click)="fileInput.click()">
							<ng-icon hlm name="lucideUpload" size="xs" class="mr-2" />
							Select image
						</button>
					</div>
				</div>
				@if (this.files().length > 0) {
					<div class="space-y-2">
						@for (file of this.files(); track file.id; let idx = $index) {
							<div class="flex h-14.5 w-full justify-between gap-3 rounded-lg border p-2">
								<div class="relative aspect-square rounded-md">
									<img class="size-full rounded object-cover" [src]="file.preview" alt="Preview of uploaded image" />
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
					@if (this.files().length > 1) {
						<button hlmBtn size="sm" variant="outline" class="flex h-8 w-fit gap-2 text-xs" (click)="removeAllFiles()">
							Remove all files
						</button>
					}
				}
				<input
					#fileInput
					type="file"
					class="hidden"
					[accept]="accept"
					[multiple]="true"
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
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">Multiple image uploader w/ image list</p>
	`,
})
export class FileUpload07Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxSize = 5 * 1024 * 1024; // 5MB
	accept = 'image/svg+xml,image/png,image/jpeg,image/jpg,image/gif';
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	formatBytes = formatBytes;
	initialFiles: FileMetadata[] = [
		{
			id: '123',
			name: 'bg-03.jpg',
			url: 'assets/backgrounds/bg-03.jpg',
			type: 'image/jpeg',
			size: 1.2 * 1024 * 1024,
		},
		{
			id: '234',
			name: 'bg-04.jpg',
			url: 'assets/backgrounds/bg-04.jpg',
			type: 'image/jpeg',
			size: 1.2 * 1024 * 1024,
		},
		{
			id: '345',
			name: 'bg-05.jpg',
			url: 'assets/backgrounds/bg-05.jpg',
			type: 'image/jpeg',
			size: 1.2 * 1024 * 1024,
		},
		{
			id: '456',
			name: 'bg-06.jpg',
			url: 'assets/backgrounds/bg-06.jpg',
			type: 'image/jpeg',
			size: 1.2 * 1024 * 1024,
		},
	];

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

export const fileUpload07Code = `
=================================
Copy FileDragDropDirective from './src/libs/sim/ui-file-helm/lib/file-drag-drop.directive.ts'
=================================

import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideImageUp, lucideUpload, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState, formatBytes } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-07',
	providers: [provideIcons({ lucideX, lucideImageUp, lucideCircleAlert, lucideUpload })],
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
					class="border-input has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:items-start! has-[input:focus]:ring-[3px]"
					dragClass="bg-accent/50"
					[accept]="accept"
					[multiple]="true"
					[maxSize]="maxSize"
					[initialFiles]="initialFiles"
					(filesChange)="onFileStateChange($event)">
					<div class="flex flex-col items-center">
						<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
							<ng-icon hlm name="lucideImageUp" class="opacity-60" size="sm" />
						</div>
						<span class="mb-1.5 text-sm font-medium">Drop your image here</span>
						<span class="text-muted-foreground text-xs">SVG, PNG, JPG or GIF (max. 5MB)</span>
						<button hlmBtn variant="outline" size="sm" class="mt-4" (click)="fileInput.click()">
							<ng-icon hlm name="lucideUpload" size="xs" class="mr-2" />
							Select image
						</button>
					</div>
				</div>
				@if (this.files().length > 0) {
					<div class="space-y-2">
						@for (file of this.files(); track file.id; let idx = $index) {
							<div class="flex h-14.5 w-full justify-between gap-3 rounded-lg border p-2">
								<div class="relative aspect-square rounded-md">
									<img class="size-full rounded object-cover" [src]="file.preview" alt="Preview of uploaded image" />
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
					@if (this.files().length > 1) {
						<button hlmBtn size="sm" variant="outline" class="flex h-8 w-fit gap-2 text-xs" (click)="removeAllFiles()">
							Remove all files
						</button>
					}
				}
				<input
					#fileInput
					type="file"
					class="hidden"
					[accept]="accept"
					[multiple]="true"
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
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">Multiple image uploader w/ image list</p>
	\`,
})
export class FileUpload07Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxSize = 5 * 1024 * 1024; // 5MB
	accept = 'image/svg+xml,image/png,image/jpeg,image/jpg,image/gif';
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	formatBytes = formatBytes;
	initialFiles: FileMetadata[] = [
		{
			id: '123',
			name: 'bg-03.jpg',
			url: 'assets/backgrounds/bg-03.jpg',
			type: 'image/jpeg',
			size: 1.2 * 1024 * 1024,
		},
		{
			id: '234',
			name: 'bg-04.jpg',
			url: 'assets/backgrounds/bg-04.jpg',
			type: 'image/jpeg',
			size: 1.2 * 1024 * 1024,
		},
		{
			id: '345',
			name: 'bg-05.jpg',
			url: 'assets/backgrounds/bg-05.jpg',
			type: 'image/jpeg',
			size: 1.2 * 1024 * 1024,
		},
		{
			id: '456',
			name: 'bg-06.jpg',
			url: 'assets/backgrounds/bg-06.jpg',
			type: 'image/jpeg',
			size: 1.2 * 1024 * 1024,
		},
	];

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
