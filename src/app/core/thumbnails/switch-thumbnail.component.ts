import { Component } from '@angular/core';

@Component({
	selector: 'app-switch-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="bg-muted-foreground/20 h-6 w-10 rounded-full p-0.5">
			<div
				class="from-card to-card/90 dark:from-background/90 dark:to-background size-5 rounded-full bg-linear-to-b shadow-xs/5"></div>
		</div>
	`,
})
export class SwitchThumbnailComponent {}
