import { Component, OnDestroy, signal } from '@angular/core';
import {
	Area,
	CropperComponent,
	CropperCropAreaComponent,
	CropperDescriptionComponent,
	CropperImageComponent,
} from '@sim-space/image-cropper';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'app-image-cropper-10',
	imports: [
		CropperComponent,
		CropperImageComponent,
		CropperCropAreaComponent,
		CropperDescriptionComponent,
		HlmButtonImports,
	],
	host: { class: 'flex flex-col gap-2 size-full' },
	template: `
		<div class="flex w-full flex-col gap-4 md:flex-row">
			<sim-cropper class="h-80 w-full max-w-[600px] cursor-move" [image]="imageUrl" (cropChange)="onCropChange($event)">
				<sim-cropper-description class="sr-only" />
				<sim-cropper-image />
				<sim-cropper-crop-area
					class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]" />
			</sim-cropper>
			<div class="flex w-26 flex-col gap-4">
				<button hlmBtn [disabled]="!croppedAreaPixels()" (click)="handleCrop()">Crop preview</button>
				<div class="aspect-square w-full shrink-0 overflow-hidden rounded-lg border">
					@if (croppedImageUrl()) {
						<img alt="Cropped result" class="h-full w-full object-cover" [src]="croppedImageUrl()" />
					} @else {
						<div
							class="bg-muted text-muted-foreground/80 flex h-full w-full items-center justify-center p-2 text-center text-xs">
							Image preview
						</div>
					}
				</div>
			</div>
		</div>

		<p aria-live="polite" class="text-muted-foreground mt-2 w-full text-center text-xs" role="region">
			Cropper with image preview &middot;
			<a
				class="hover:text-foreground underline"
				href="https://github.com/origin-space/image-cropper"
				rel="noopener noreferrer"
				target="_blank">
				API
			</a>
		</p>
	`,
})
export class ImageCropper10Component implements OnDestroy {
	protected readonly imageUrl = 'assets/backgrounds/bg-12.webp';
	protected readonly croppedAreaPixels = signal<Area | null>(null);
	protected readonly croppedImageUrl = signal<string | null>(null);

	private cachedImage: HTMLImageElement | null = null;

	ngOnDestroy(): void {
		const url = this.croppedImageUrl();
		if (url?.startsWith('blob:')) {
			URL.revokeObjectURL(url);
		}
		this.cachedImage = null;
	}

	protected onCropChange(pixels: Area | null): void {
		this.croppedAreaPixels.set(pixels);
	}

	protected async handleCrop(): Promise<void> {
		const pixels = this.croppedAreaPixels();
		if (!pixels) return;

		try {
			const croppedBlob = await this.getCroppedImg(this.imageUrl, pixels);
			if (!croppedBlob) {
				throw new Error('Failed to generate cropped image blob.');
			}

			const oldUrl = this.croppedImageUrl();
			if (oldUrl) {
				URL.revokeObjectURL(oldUrl);
			}

			this.croppedImageUrl.set(URL.createObjectURL(croppedBlob));
		} catch (error) {
			console.error('Error during cropping:', error);
			const oldUrl = this.croppedImageUrl();
			if (oldUrl) {
				URL.revokeObjectURL(oldUrl);
			}
			this.croppedImageUrl.set(null);
		}
	}

	private async getCroppedImg(
		imageSrc: string,
		pixelCrop: Area,
		outputWidth: number = pixelCrop.width,
		outputHeight: number = pixelCrop.height,
	): Promise<Blob | null> {
		try {
			this.cachedImage ??= await this.createImage(imageSrc);
			const image = this.cachedImage;
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');

			if (!ctx) {
				return null;
			}

			canvas.width = outputWidth;
			canvas.height = outputHeight;

			ctx.drawImage(
				image,
				pixelCrop.x,
				pixelCrop.y,
				pixelCrop.width,
				pixelCrop.height,
				0,
				0,
				outputWidth,
				outputHeight,
			);

			return new Promise((resolve) => {
				canvas.toBlob((blob) => {
					resolve(blob);
				}, 'image/jpeg');
			});
		} catch (error) {
			console.error('Error in getCroppedImg:', error);
			return null;
		}
	}

	private createImage(url: string): Promise<HTMLImageElement> {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.addEventListener('load', () => resolve(image));
			image.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)));
			image.setAttribute('crossOrigin', 'anonymous');
			image.src = url;
		});
	}
}
