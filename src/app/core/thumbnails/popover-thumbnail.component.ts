import { Component } from '@angular/core';

@Component({
	selector: 'app-popover-thumbnail',
	standalone: true,
	host: { class: 'relative flex w-full h-full items-center justify-center overflow-hidden' },
	template: `
		<div class="flex max-w-50 flex-1 flex-col items-center gap-2">
			<div
				class="text-card-foreground relative flex w-fit max-w-72 flex-col rounded-lg border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="flex flex-1 items-center gap-2 p-6 px-4 py-3">
					<div class="bg-muted-foreground/40 h-1.5 w-12 rounded-full"></div>
				</div>
			</div>
			<div
				class="text-card-foreground relative flex w-full max-w-72 flex-col rounded-lg border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="flex flex-1 flex-col gap-3 p-4">
					<div class="bg-muted-foreground/40 h-1.5 w-[70%] rounded-full"></div>
					<div class="flex flex-col gap-1.5">
						<div class="bg-muted-foreground/20 h-1.5 w-[80%] rounded-full"></div>
						<div class="bg-muted-foreground/20 h-1.5 w-[60%] rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	`,
})
export class PopoverThumbnailComponent {}
