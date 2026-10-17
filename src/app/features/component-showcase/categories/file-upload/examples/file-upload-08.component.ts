import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucidePaperclip, lucideUpload, lucideX } from '@ng-icons/lucide';
import { FileDragDropDirective, FileMetadata, FileUploadState } from '@sim/file';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
@Component({
	selector: 'sim-file-upload-08',
	imports: [NgIcon, FileDragDropDirective, HlmAttachmentImports, HlmButtonImports, HlmIconImports],
	providers: [provideIcons({ lucideX, lucideCircleAlert, lucideUpload, lucidePaperclip })],
	host: {
		class: 'w-full max-w-[600px]',
	},
	template: `
		<div class="flex w-full flex-col items-center justify-center">
			<div class="relative flex w-full flex-col gap-2">
				<div
					simFileDragDrop
					role="button"
					class="border-input hover:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:items-start! has-[input:focus]:ring-[3px] motion-reduce:transition-none"
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
					<div class="flex flex-col gap-2" role="list" aria-label="Uploaded files">
						@for (file of this.files(); track file.id; let idx = $index) {
							<hlm-attachment size="sm" class="bg-muted w-full" role="listitem">
								<hlm-attachment-content class="flex items-center gap-2">
									<ng-icon hlm name="lucidePaperclip" size="sm" />
									<span hlmAttachmentTitle>{{ file.file.name }}</span>
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
				}
				<input #fileInput type="file" class="hidden" [disabled]="disabled()" (change)="onFileSelected($event)" />
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
	protected readonly fileUploadDirective = viewChild(FileDragDropDirective);
	protected readonly maxSize = 10 * 1024 * 1024; // 10MB
	protected readonly filesState = signal<FileUploadState | null>(null);
	protected readonly files = computed(() => this.filesState()?.files ?? []);
	protected readonly errors = computed(() => this.filesState()?.errors ?? []);
	protected readonly disabled = computed(() => this.files().length >= 1);
	protected readonly initialFiles = signal<FileMetadata[]>([
		{
			url: 'assets/backgrounds/bg-03.jpg',
			name: 'background-01.jpg',
			size: 1258291.2,
			id: '123',
			type: 'image/jpeg',
		},
	]);

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
