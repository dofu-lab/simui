import { Component } from '@angular/core';

@Component({
	selector: 'app-input-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div
			class="text-card-foreground bg-card/99 dark:bg-card relative flex w-full max-w-72 flex-col rounded-xl border shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)]">
			<div class="flex-1 p-6 px-6 py-4"><div class="bg-muted-foreground/40 h-1.5 w-[60%] rounded-full"></div></div>
		</div>
	`,
})
export class InputThumbnailComponent {}
