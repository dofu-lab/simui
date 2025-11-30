import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUserRound } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-50',
	providers: [provideIcons({ lucideCircleUserRound })],
	imports: [HlmButton, HlmIcon, NgIcon],
	template: `
		<div class="grid grid-cols-1 items-center justify-center gap-2">
			<div class="flex items-center justify-center gap-2">
				<div
					class="border-input relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md border">
					@if (previewUrl()) {
						<img
							class="h-full w-full object-cover"
							[src]="previewUrl()"
							alt="Preview of uploaded image"
							[width]="32"
							[height]="32" />
					} @else {
						<ng-icon hlm name="lucideCircleUserRound" class="opacity-60" size="sm" />
					}
				</div>
				<button hlmBtn size="sm" (click)="fileInput.click()">
					{{ buttonLabel() }}
				</button>
				<input #fileInput type="file" accept="image/*" class="hidden" (change)="onFileSelected($event)" />
			</div>
			@if (previewUrl()) {
				<div class="inline-flex justify-center gap-2 text-xs">
					<p class="text-muted-foreground truncate">
						{{ fileName() }}
					</p>
					<button class="font-medium text-red-500 hover:underline" (click)="onRemoveImage()">Remove</button>
				</div>
			}
		</div>
	`,
})
export class Button50Component {
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