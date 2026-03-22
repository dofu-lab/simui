import { Component } from '@angular/core';

@Component({
	selector: 'app-dialog-thumbnail',
	standalone: true,
	host: { class: 'relative flex w-full h-full items-center justify-center overflow-hidden' },
	template: `
		<div
			class="text-card-foreground relative flex w-full max-w-36 flex-col rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
			<div class="flex flex-1 flex-col gap-4 p-4">
				<div class="flex flex-col gap-2"><div class="bg-muted-foreground/40 h-1.5 w-[60%] rounded-full"></div></div>
				<div class="flex flex-col gap-2">
					<div class="bg-muted-foreground/8 h-4 rounded-sm"></div>
					<div class="bg-muted-foreground/8 h-4 rounded-sm"></div>
				</div>
				<div class="flex items-center justify-end gap-2">
					<div class="bg-muted-foreground/20 h-1.5 w-7 rounded-sm"></div>
					<div class="bg-primary h-4 w-7 rounded-sm bg-linear-to-b from-(--btn-from) to-(--btn-to)"></div>
				</div>
			</div>
		</div>
	`,
})
export class DialogThumbnailComponent {}
