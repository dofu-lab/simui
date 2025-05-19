import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideImageUp, lucideUpload, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileUploadState } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-file-upload-05',
	standalone: true,
	providers: [provideIcons({ lucideX, lucideImageUp, lucideCircleAlert, lucideUpload })],
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
					class="border-input has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
					dragClass="border-[2px] bg-accent/50"
					[maxSize]="maxSize"
					(filesChange)="onFileStateChange($event)">
					@if (this.files().length > 0) {
						<div class="absolute inset-0">
							<img class="h-full w-full object-cover" [src]="this.files()[0].preview" alt="Preview of uploaded image" />
						</div>
					} @else {
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
					}
				</div>
				@if (this.files().length > 0) {
					<div class="absolute top-4 right-4">
						<button
							hlmBtn
							size="icon"
							class="border-background size-6 rounded-full bg-black/60"
							(click)="onRemoveImage(this.files()[0].id)">
							<ng-icon hlm name="lucideX" size="xs" />
						</button>
					</div>
				}
				<input
					#fileInput
					type="file"
					class="hidden"
					[accept]="this.acceptedFileTypes"
					(change)="onFileSelected($event)" />
			</div>
		</div>
		@if (this.errors().length > 0) {
			<span class="text-destructive mt-2 flex items-center gap-1 text-xs">
				<ng-icon hlm name="lucideCircleAlert" size="xs" class="shrink-0" />
				{{ this.errors()[0] }}
			</span>
		}
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">
			Single image uploader w/ max size (drop area + button)
		</p>
	`,
})
export class FileUpload05Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxSize = 5 * 1024 * 1024; // 5MB
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	acceptedFileTypes = 'image/svg+xml,image/jpeg,image/jpg,image/gif';

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			this.fileUploadDirective()?.addFiles(input.files);
		}
	}

	onFileStateChange(event: FileUploadState) {
		this.filesState.set(event);
	}

	onRemoveImage(id: string): void {
		this.fileUploadDirective()?.removeFile(id);
	}
}

export const fileUpload05Code = `
=================================
Copy FileDragDropDirective from './src/libs/sim/ui-file-helm/lib/file-drag-drop.directive.ts'
=================================

import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideImageUp, lucideUpload, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileUploadState } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-file-upload-05',
	standalone: true,
	providers: [provideIcons({ lucideX, lucideImageUp, lucideCircleAlert, lucideUpload })],
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
					class="border-input has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
					dragClass="border-[2px] bg-accent/50"
					[maxSize]="maxSize"
					(filesChange)="onFileStateChange($event)">
					@if (this.files().length > 0) {
						<div class="absolute inset-0">
							<img class="h-full w-full object-cover" [src]="this.files()[0].preview" alt="Preview of uploaded image" />
						</div>
					} @else {
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
					}
				</div>
				@if (this.files().length > 0) {
					<div class="absolute top-4 right-4">
						<button
							hlmBtn
							size="icon"
							class="border-background size-6 rounded-full bg-black/60"
							(click)="onRemoveImage(this.files()[0].id)">
							<ng-icon hlm name="lucideX" size="xs" />
						</button>
					</div>
				}
				<input
					#fileInput
					type="file"
					class="hidden"
					[accept]="this.acceptedFileTypes"
					(change)="onFileSelected($event)" />
			</div>
		</div>
		@if (this.errors().length > 0) {
			<span class="text-destructive mt-2 flex items-center gap-1 text-xs">
				<ng-icon hlm name="lucideCircleAlert" size="xs" class="shrink-0" />
				{{ this.errors()[0] }}
			</span>
		}
		<p class="text-muted-foreground mt-4 truncate text-center text-xs">
			Single image uploader w/ max size (drop area + button)
		</p>
	\`,
})
export class FileUpload05Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	maxSize = 5 * 1024 * 1024; // 5MB
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	errors = computed(() => this.filesState()?.errors ?? []);
	acceptedFileTypes = 'image/svg+xml,image/jpeg,image/jpg,image/gif';

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			this.fileUploadDirective()?.addFiles(input.files);
		}
	}

	onFileStateChange(event: FileUploadState) {
		this.filesState.set(event);
	}

	onRemoveImage(id: string): void {
		this.fileUploadDirective()?.removeFile(id);
	}
}
`;
