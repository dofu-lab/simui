import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
	Area,
	CropperComponent,
	CropperCropAreaComponent,
	CropperDescriptionComponent,
	CropperImageComponent,
} from '@sim-space/image-cropper';

@Component({
	selector: 'sim-image-cropper-09',
	imports: [CropperComponent, CropperImageComponent, CropperCropAreaComponent, CropperDescriptionComponent, JsonPipe],
	host: { class: 'flex flex-col gap-2 size-full' },
	template: `
		<div class="flex flex-col gap-2">
			<sim-cropper
				class="h-80 w-full max-w-[600px] cursor-move"
				image="assets/backgrounds/bg-11.webp"
				(cropChange)="onCropChange($event)"
				(zoomChange)="onZoomChange($event)">
				<sim-cropper-description class="sr-only" />
				<sim-cropper-image />
				<sim-cropper-crop-area
					class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]" />
			</sim-cropper>

			@if (cropArea()) {
				<div class="bg-muted text-foreground/80 overflow-auto border px-4 py-3 font-mono text-xs">
					<code>
						<pre>{{ cropArea() | json }}</pre>
					</code>
				</div>
			}
		</div>
		<p class="text-muted-foreground mt-2 w-full text-center text-xs">
			Cropper with crop data output &middot;
			<a class="underline" href="https://github.com/dofu-lab/sim-image-cropper" rel="noreferrer" target="_blank">API</a>
		</p>
	`,
})
export class ImageCropper09Component {
	protected cropArea = signal<Area | null>(null);

	protected onCropChange(area: Area | null): void {
		this.cropArea.set(area);
	}

	protected onZoomChange(zoom: number): void {
		console.log('Zoom changed:', zoom);
	}
}
