import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import {
	Area,
	CropperComponent,
	CropperCropAreaComponent,
	CropperDescriptionComponent,
	CropperImageComponent,
} from '@sim-space/image-cropper';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
	selector: 'sim-image-cropper-07',
	imports: [
		CropperComponent,
		CropperImageComponent,
		CropperCropAreaComponent,
		CropperDescriptionComponent,
		DecimalPipe,
		HlmSliderImports,
	],
	host: { class: 'flex flex-col gap-2 size-full' },
	template: `
		<div class="flex w-full flex-col gap-4">
			<sim-cropper
				class="h-80 w-full max-w-[600px] cursor-move"
				image="assets/backgrounds/bg-09.webp"
				[zoom]="zoomValue()"
				(cropChange)="onCropChange($event)"
				(zoomChange)="onZoomChange($event)">
				<sim-cropper-description class="sr-only" />
				<sim-cropper-image />
				<sim-cropper-crop-area
					class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]" />
			</sim-cropper>

			<div class="mx-auto flex w-full max-w-80 items-center gap-3">
				<hlm-slider [min]="1" [max]="3" [step]="0.1" [(value)]="value" />
				<span class="text-sm">{{ zoomValue() | number: '1.0-1' }}x</span>
			</div>
		</div>

		<p class="text-muted-foreground mt-2 w-full text-center text-xs">
			Cropper with zoom slider &middot;
			<a class="underline" href="https://github.com/dofu-lab/sim-image-cropper" rel="noreferrer" target="_blank">API</a>
		</p>
	`,
})
export class ImageCropper07Component {
	protected readonly value = signal<number[]>([1]);
	protected zoomValue = computed(() => this.value()[0]);

	protected onCropChange(area: Area | null): void {
		console.log('Crop changed:', area);
	}

	protected onZoomChange(zoom: number): void {
		this.value.set([zoom]);
	}
}
