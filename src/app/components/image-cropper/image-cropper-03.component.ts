import { Component } from '@angular/core';
import {
	Area,
	CropperComponent,
	CropperCropAreaComponent,
	CropperDescriptionComponent,
	CropperImageComponent,
} from '@sim-space/image-cropper';

@Component({
	selector: 'sim-image-cropper-03',
	imports: [CropperComponent, CropperImageComponent, CropperCropAreaComponent, CropperDescriptionComponent],
	host: { class: 'flex flex-col gap-2 size-full' },
	template: `
		<sim-cropper
			class="h-80 w-full max-w-[600px] cursor-move"
			image="assets/backgrounds/bg-05.jpg"
			(cropChange)="onCropChange($event)"
			(zoomChange)="onZoomChange($event)">
			<sim-cropper-description class="sr-only" />
			<sim-cropper-image />
			<sim-cropper-crop-area
				class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]" />
		</sim-cropper>

		<p class="text-muted-foreground mt-2 w-full text-center text-xs">
			Cropper with custom crop area color &middot;
			<a class="underline" href="https://github.com/dofu-lab/sim-image-cropper" rel="noreferrer" target="_blank">API</a>
		</p>
	`,
})
export class ImageCropper03Component {
	protected onCropChange(area: Area | null): void {
		console.log('Crop changed:', area);
	}

	protected onZoomChange(zoom: number): void {
		console.log('Zoom changed:', zoom);
	}
}
