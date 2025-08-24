import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUserRound, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-02',
	providers: [provideIcons({ lucideCircleUserRound, lucideX })],
	imports: [HlmButton, HlmIcon, NgIcon],
	template: `
		<div class="flex flex-col items-center justify-center gap-2">
			<div class="relative inline-flex">
				<button hlmBtn variant="outline" class="relative size-16 overflow-hidden p-0" (click)="fileInput.click()">
					@if (previewUrl()) {
						<img
							class="h-full w-full object-cover"
							[src]="previewUrl()"
							alt="Preview of uploaded image"
							[width]="40"
							[height]="40" />
					} @else {
						<ng-icon hlm name="lucideCircleUserRound" class="opacity-60" size="sm" />
					}
				</button>
				@if (previewUrl()) {
					<button
						hlmBtn
						size="icon"
						class="border-background absolute -top-2 -right-2 size-6 rounded-full border-2"
						(click)="onRemoveImage()">
						<ng-icon hlm name="lucideX" size="xs" />
					</button>
				}
				<input #fileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)" />
			</div>
			@if (previewUrl()) {
				<p class="text-muted-foreground mt-2 truncate text-xs">
					{{ fileName() }}
				</p>
			}
			<p class="text-muted-foreground mt-2 truncate text-center text-xs">Avatar upload button</p>
		</div>
	`,
})
export class FileUpload02Component {
	previewUrl = signal<string | null>(null);
	fileName = signal<string | null>(null);
	fileInput = viewChild<ElementRef>('fileInput');
	buttonLabel = computed(() => (this.previewUrl() ? 'Change image' : 'Upload image'));

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			const file = input.files[0];
			const url = URL.createObjectURL(file);
			this.previewUrl.set(url);
			this.fileName.set(file.name);
		}
	}

	onRemoveImage(): void {
		this.previewUrl.set(null);
		this.fileName.set(null);
		const fileInputElement = this.fileInput()?.nativeElement;
		if (fileInputElement) {
			fileInputElement.value = '';
		}
	}
}

export const fileUpload02Code = `
import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUserRound, lucideX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-file-upload-02',
	providers: [provideIcons({ lucideCircleUserRound, lucideX })],
	imports: [HlmButton, HlmIcon, NgIcon],
	template: \`
		<div class="flex flex-col items-center justify-center gap-2">
			<div class="relative inline-flex">
				<button hlmBtn variant="outline" class="relative size-16 overflow-hidden p-0" (click)="fileInput.click()">
					@if (previewUrl()) {
						<img
							class="h-full w-full object-cover"
							[src]="previewUrl()"
							alt="Preview of uploaded image"
							[width]="40"
							[height]="40" />
					} @else {
						<ng-icon hlm name="lucideCircleUserRound" class="opacity-60" size="sm" />
					}
				</button>
				@if (previewUrl()) {
					<button
						hlmBtn
						size="icon"
						class="border-background absolute -top-2 -right-2 size-6 rounded-full border-2"
						(click)="onRemoveImage()">
						<ng-icon hlm name="lucideX" size="xs" />
					</button>
				}
				<input #fileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)" />
			</div>
			@if (previewUrl()) {
				<p class="text-muted-foreground mt-2 truncate text-xs">
					{{ fileName() }}
				</p>
			}
			<p class="text-muted-foreground mt-2 truncate text-center text-xs">Avatar upload button</p>
		</div>
	\`,
})
export class FileUpload02Component {
	previewUrl = signal<string | null>(null);
	fileName = signal<string | null>(null);
	fileInput = viewChild<ElementRef>('fileInput');
	buttonLabel = computed(() => (this.previewUrl() ? 'Change image' : 'Upload image'));

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			const file = input.files[0];
			const url = URL.createObjectURL(file);
			this.previewUrl.set(url);
			this.fileName.set(file.name);
		}
	}

	onRemoveImage(): void {
		this.previewUrl.set(null);
		this.fileName.set(null);
		const fileInputElement = this.fileInput()?.nativeElement;
		if (fileInputElement) {
			fileInputElement.value = '';
		}
	}
}
`;
