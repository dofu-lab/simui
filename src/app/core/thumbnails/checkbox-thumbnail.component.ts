import { Component } from '@angular/core';

@Component({
	selector: 'app-checkbox-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="flex max-w-28 flex-1 flex-col gap-3">
			<div class="flex items-center gap-2">
				<div class="bg-muted-foreground/20 size-4 shrink-0 rounded"></div>
				<div class="bg-muted-foreground/20 h-1.5 w-full rounded-full"></div>
			</div>
			<div class="flex items-center gap-2">
				<div class="bg-primary size-4 shrink-0 rounded bg-linear-to-b from-(--btn-from) to-(--btn-to)"></div>
				<div class="bg-muted-foreground/20 h-1.5 w-full rounded-full"></div>
			</div>
		</div>
	`,
})
export class CheckboxThumbnailComponent {}
