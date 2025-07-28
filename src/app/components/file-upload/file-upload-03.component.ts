import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUserRound, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileUploadState } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-03',
	providers: [provideIcons({ lucideCircleUserRound, lucideX })],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon, FileDragDropDirective],
	template: `
		<div class="flex flex-col items-center justify-center gap-2">
			<div class="relative inline-flex">
				<button
					hlmBtn
					fileDragDrop
					variant="outline"
					class="border-input relative size-16 overflow-hidden rounded-full border-dashed p-0"
					dragClass="border-[2px] bg-accent/50"
					accept="image/*"
					[maxSize]="maxSize"
					(filesChange)="onFileStateChange($event)"
					(click)="fileInput?.click()">
					@if (this.files().length > 0) {
						<img
							class="h-full w-full object-cover"
							[src]="this.files()[0].preview"
							alt="Preview of uploaded image"
							[width]="40"
							[height]="40" />
					} @else {
						<ng-icon hlm name="lucideCircleUserRound" class="opacity-60" size="sm" />
					}
				</button>
				@if (this.files().length > 0) {
					<button
						hlmBtn
						size="icon"
						class="border-background absolute -top-1 -right-1 size-6 rounded-full border-2"
						(click)="onRemoveImage(this.files()[0].id)">
						<ng-icon hlm name="lucideX" size="xs" />
					</button>
				}
				<input #fileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)" />
			</div>
			@if (this.files().length > 0) {
				<p class="text-muted-foreground mt-2 truncate text-xs">
					{{ this.files()[0].file.name }}
				</p>
			}
			<p class="text-muted-foreground mt-2 truncate text-center text-xs">Avatar uploader with droppable area</p>
		</div>
	`,
})
export class FileUpload03Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	maxSize = 5 * 1024 * 1024; // 5MB

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

export const fileUpload03Code = `
=================================
Copy FileDragDropDirective from './src/libs/sim/ui-file-helm/lib/file-drag-drop.directive.ts'
=================================

import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUserRound, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileUploadState } from '@sim/ui-file-helm';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-03',
	providers: [provideIcons({ lucideCircleUserRound, lucideX })],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon, FileDragDropDirective],
	template: \`
		<div class="flex flex-col items-center justify-center gap-2">
			<div class="relative inline-flex">
				<button
					hlmBtn
					fileDragDrop
					variant="outline"
					class="border-input relative size-16 overflow-hidden rounded-full border-dashed p-0"
					dragClass="border-[2px] bg-accent/50"
					accept="image/*"
					[maxSize]="maxSize"
					(filesChange)="onFileStateChange($event)"
					(click)="fileInput?.click()">
					@if (this.files().length > 0) {
						<img
							class="h-full w-full object-cover"
							[src]="this.files()[0].preview"
							alt="Preview of uploaded image"
							[width]="40"
							[height]="40" />
					} @else {
						<ng-icon hlm name="lucideCircleUserRound" class="opacity-60" size="sm" />
					}
				</button>
				@if (this.files().length > 0) {
					<button
						hlmBtn
						size="icon"
						class="border-background absolute -top-1 -right-1 size-6 rounded-full border-2"
						(click)="onRemoveImage(this.files()[0].id)">
						<ng-icon hlm name="lucideX" size="xs" />
					</button>
				}
				<input #fileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)" />
			</div>
			@if (this.files().length > 0) {
				<p class="text-muted-foreground mt-2 truncate text-xs">
					{{ this.files()[0].file.name }}
				</p>
			}
			<p class="text-muted-foreground mt-2 truncate text-center text-xs">Avatar uploader with droppable area</p>
		</div>
	\`,
})
export class FileUpload03Component {
	fileUploadDirective = viewChild(FileDragDropDirective);
	filesState = signal<FileUploadState | null>(null);
	files = computed(() => this.filesState()?.files ?? []);
	maxSize = 5 * 1024 * 1024; // 5MB

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
