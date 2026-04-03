import { Component } from '@angular/core';
import {
	Area,
	CropperComponent,
	CropperCropAreaComponent,
	CropperDescriptionComponent,
	CropperImageComponent,
} from '@sim-space/image-cropper';

@Component({
	selector: 'sim-image-cropper-05',
	imports: [CropperComponent, CropperImageComponent, CropperCropAreaComponent, CropperDescriptionComponent],
	host: { class: 'flex flex-col items-center justify-center size-full gap-2' },
	template: `
		<sim-cropper
			class="aspect-square size-80 cursor-move"
			image="assets/backgrounds/bg-07.webp"
			[cropPadding]="0"
			(cropChange)="onCropChange($event)"
			(zoomChange)="onZoomChange($event)">
			<sim-cropper-description class="sr-only" />
			<sim-cropper-image />
			<sim-cropper-crop-area
				class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]" />
		</sim-cropper>

		<p class="text-muted-foreground mt-2 w-full text-center text-xs">
			Cropper with full size crop area &middot;
			<a class="underline" href="https://github.com/dofu-lab/sim-image-cropper" rel="noreferrer" target="_blank">API</a>
		</p>
	`,
})
export class ImageCropper05Component {
	protected onCropChange(area: Area | null): void {
		console.log('Crop changed:', area);
	}

	protected onZoomChange(zoom: number): void {
		console.log('Zoom changed:', zoom);
	}
}
