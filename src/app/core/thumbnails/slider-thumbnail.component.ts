import { Component } from '@angular/core';

@Component({
	selector: 'app-slider-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="flex w-full max-w-50 items-center gap-1">
			<div
				class="bg-muted-foreground/20 h-1.5 w-[35%] rounded-full bg-linear-to-b from-(--btn-from) to-(--btn-to)"></div>
			<div class="bg-primary size-4 rounded-full bg-linear-to-b from-(--btn-from) to-(--btn-to)"></div>
			<div class="bg-muted-foreground/20 h-1.5 flex-1 rounded-full"></div>
		</div>
	`,
})
export class SliderThumbnailComponent {}
