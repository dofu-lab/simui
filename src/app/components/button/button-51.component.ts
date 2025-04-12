import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUserRound, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-51',
	standalone: true,
	providers: [provideIcons({ lucideCircleUserRound, lucideX })],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon],
	template: `
		<div class="flex flex-col items-center justify-center">
			<div class="relative inline-flex">
				<button hlmBtn variant="outline" class="relative size-16 overflow-hidden" (click)="fileInput.click()">
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
						variant="destructive"
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
		</div>
	`,
})
export class Button51Component {
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

export const button51Code = `
import {
  Component,
  computed,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUserRound, lucideX } from '@ng-icons/lucide';

@Component({
  selector: 'sim-button-51',
  standalone: true,
  providers: [provideIcons({ lucideCircleUserRound, lucideX })],
  imports: [HlmButtonDirective, HlmIconDirective, NgIcon],
  template: \`
    <div class="flex flex-col items-center justify-center">
      <div class="relative inline-flex">
        <button
          hlmBtn
          variant="outline"
          class="relative size-16 overflow-hidden"
          (click)="fileInput.click()"
        >
          @if (previewUrl()) {
          <img
            class="h-full w-full object-cover"
            [src]="previewUrl()"
            alt="Preview of uploaded image"
            [width]="40"
            [height]="40"
          />
          } @else {
          <ng-icon
            hlm
            name="lucideCircleUserRound"
            class="opacity-60"
            size="sm"
          />
          }
        </button>
        @if (previewUrl()) {
        <button
          hlmBtn
          size="icon"
          variant="destructive"
          class="border-background absolute -top-2 -right-2 size-6 rounded-full border-2"
          (click)="onRemoveImage()"
        >
          <ng-icon hlm name="lucideX" size="xs" />
        </button>
        }
        <input
          #fileInput
          type="file"
          accept="image/*"
          class="hidden"
          (change)="onFileSelected($event)"
        />
      </div>
      @if (previewUrl()) {
      <p class="text-muted-foreground mt-2 truncate text-xs">
        {{ fileName() }}
      </p>
      }
    </div>
  \`,
})
export class Button51Component {
  previewUrl = signal<string | null>(null);
  fileName = signal<string | null>(null);
  fileInput = viewChild<ElementRef>('fileInput');
  buttonLabel = computed(() =>
    this.previewUrl() ? 'Change image' : 'Upload image'
  );

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
