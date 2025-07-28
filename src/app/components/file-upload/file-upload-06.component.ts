import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideImageUp, lucideTrash2, lucideUpload, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-06',
	providers: [provideIcons({ lucideX, lucideImageUp, lucideCircleAlert, lucideUpload, lucideTrash2 })],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon, FileDragDropDirective],
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
					[accept]="accept"
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
							<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
								@for (file of files(); track file.id; let idx = $index) {
									<div class="relative aspect-square rounded-md">
										<img
											class="size-full rounded-[inherit] object-cover"
											[src]="file.preview"
											alt="Preview of uploaded image" />
										<button
											hlmBtn
											size="icon"
											class="border-background absolute -top-2 -right-2 size-6 cursor-pointer rounded-full border-2"
											(click)="onRemoveImage(file.id)">
											<ng-icon hlm name="lucideX" size="xs" />
										</button>
									</div>
								}
							</div>
						</div>
					} @else {
						<div class="flex flex-col items-center">
							<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
								<ng-icon hlm name="lucideImageUp" class="opacity-60" size="sm" />
							</div>
							<span class="mb-1.5 text-sm font-medium">Drop your image here or click to browse</span>
							<span class="text-muted-foreground text-xs">SVG, PNG, JPG or GIF (max. 5MB)</span>
							<button hlmBtn variant="outline" size="sm" class="mt-4" (click)="fileInput.click()">
								<ng-icon hlm name="lucideUpload" size="xs" class="mr-2" />
								Select image
							</button>
						</div>
					}
				</div>
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
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">Multiple image uploader w/ image grid</p>
	`,
})
export class FileUpload06Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxSize = 5 * 1024 * 1024; // 5MB
	accept = 'image/svg+xml,image/png,image/jpeg,image/jpg,image/gif';
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

export const fileUpload06Code = `
=================================
Copy FileDragDropDirective from './src/libs/sim/ui-file-helm/lib/file-drag-drop.directive.ts'
=================================

import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideImageUp, lucideTrash2, lucideUpload, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-06',
	providers: [provideIcons({ lucideX, lucideImageUp, lucideCircleAlert, lucideUpload, lucideTrash2 })],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon, FileDragDropDirective],
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
					[accept]="accept"
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
							<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
								@for (file of files(); track file.id; let idx = $index) {
									<div class="relative aspect-square rounded-md">
										<img
											class="size-full rounded-[inherit] object-cover"
											[src]="file.preview"
											alt="Preview of uploaded image" />
										<button
											hlmBtn
											size="icon"
											class="border-background absolute -top-2 -right-2 size-6 cursor-pointer rounded-full border-2"
											(click)="onRemoveImage(file.id)">
											<ng-icon hlm name="lucideX" size="xs" />
										</button>
									</div>
								}
							</div>
						</div>
					} @else {
						<div class="flex flex-col items-center">
							<div class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border">
								<ng-icon hlm name="lucideImageUp" class="opacity-60" size="sm" />
							</div>
							<span class="mb-1.5 text-sm font-medium">Drop your image here or click to browse</span>
							<span class="text-muted-foreground text-xs">SVG, PNG, JPG or GIF (max. 5MB)</span>
							<button hlmBtn variant="outline" size="sm" class="mt-4" (click)="fileInput.click()">
								<ng-icon hlm name="lucideUpload" size="xs" class="mr-2" />
								Select image
							</button>
						</div>
					}
				</div>
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
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">Multiple image uploader w/ image grid</p>
	\`,
})
export class FileUpload06Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxSize = 5 * 1024 * 1024; // 5MB
	accept = 'image/svg+xml,image/png,image/jpeg,image/jpg,image/gif';
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
