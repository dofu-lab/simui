import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideImageUp, lucideUpload, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState, formatBytes } from '@sim/file';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-07',
	imports: [NgIcon, FileDragDropDirective, HlmAttachmentImports, HlmButtonImports, HlmIconImports],
	providers: [provideIcons({ lucideX, lucideImageUp, lucideCircleAlert, lucideUpload })],
	host: {
		class: 'w-full max-w-[600px]',
	},
	template: `
		<div class="flex w-full flex-col items-center justify-center">
			<div class="relative flex w-full flex-col gap-2">
				<div
					simFileDragDrop
					role="button"
					class="border-input has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:items-start! has-[input:focus]:ring-[3px] motion-reduce:transition-none"
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
					<div class="flex flex-col gap-2" role="list" aria-label="Uploaded images">
						@for (file of this.files(); track file.id; let idx = $index) {
							<hlm-attachment class="w-full" role="listitem">
								<hlm-attachment-media variant="image">
									<img [src]="file.preview" [alt]="file.file.name + ' preview'" />
								</hlm-attachment-media>
								<hlm-attachment-content>
									<span hlmAttachmentTitle>{{ file.file.name }}</span>
									<span hlmAttachmentDescription>{{ this.formatBytes(file.file.size) }}</span>
								</hlm-attachment-content>
								<hlm-attachment-actions>
									<button
										hlmAttachmentAction
										[attr.aria-label]="'Remove ' + file.file.name"
										(click)="onRemoveImage(file.id)">
										<ng-icon hlm name="lucideX" size="xs" />
									</button>
								</hlm-attachment-actions>
							</hlm-attachment>
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
	protected readonly fileUploadDirective = viewChild(FileDragDropDirective);
	protected readonly maxSize = 5 * 1024 * 1024; // 5MB
	protected readonly accept = 'image/svg+xml,image/png,image/jpeg,image/jpg,image/gif';
	protected readonly filesState = signal<FileUploadState | null>(null);
	protected readonly files = computed(() => this.filesState()?.files ?? []);
	protected readonly errors = computed(() => this.filesState()?.errors ?? []);
	protected readonly formatBytes = formatBytes;
	protected readonly initialFiles: FileMetadata[] = [
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

	protected onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			this.fileUploadDirective()?.addFiles(input.files);
		}
	}

	protected onFileStateChange(event: FileUploadState): void {
		this.filesState.set(event);
	}

	protected removeAllFiles(): void {
		this.fileUploadDirective()?.clearFiles();
	}

	protected onRemoveImage(id: string): void {
		this.fileUploadDirective()?.removeFile(id);
	}
}
