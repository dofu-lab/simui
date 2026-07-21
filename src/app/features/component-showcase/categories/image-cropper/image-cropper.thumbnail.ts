import { Component } from '@angular/core';

@Component({
	selector: 'app-image-cropper-thumbnail',
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="flex w-36 max-w-50 flex-col items-center gap-3">
			<!-- Image area with dashed border -->
			<div
				class="border-muted-foreground/25 bg-muted/15 x relative flex h-20 w-full items-center justify-center rounded-xl border border-dashed">
				<div
					class="text-muted-foreground/80 bg-background border-input mx-auto flex size-20 items-center justify-center rounded-lg border shadow-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-image-icon lucide-image text-muted-foreground/88">
						<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
						<circle cx="9" cy="9" r="2" />
						<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
					</svg>
				</div>
			</div>
			<!-- Slider control -->
			<div class="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-1">
				<div class="bg-muted-foreground/20 h-1.5 w-full rounded-full"></div>
				<div class="bg-primary size-3.5 rounded-full"></div>
				<div class="bg-muted-foreground/20 h-1.5 w-full rounded-full"></div>
			</div>
		</div>
	`,
})
export class ImageCropperThumbnailComponent {}
