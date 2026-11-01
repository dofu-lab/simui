import { Component } from '@angular/core';

@Component({
	selector: 'app-empty-state-thumbnail',
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="flex w-40 flex-col items-center gap-3" aria-hidden="true">
			<div class="bg-card text-muted-foreground flex size-10 items-center justify-center rounded-xl border shadow-xs">
				<svg
					class="size-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true">
					<circle cx="10.5" cy="10.5" r="6.5" />
					<path d="m16 16 4 4" />
				</svg>
			</div>
			<div class="flex flex-col items-center gap-2">
				<div class="bg-muted-foreground/40 h-1.5 w-20 rounded-full"></div>
				<div class="bg-muted-foreground/20 h-1 w-28 rounded-full"></div>
			</div>
			<span class="bg-primary flex h-5 w-16 items-center justify-center rounded-md">
				<span class="bg-primary-foreground/70 h-1 w-8 rounded-full"></span>
			</span>
		</div>
	`,
})
export class EmptyStateThumbnailComponent {}
