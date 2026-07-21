import { Component } from '@angular/core';

@Component({
	selector: 'app-color-picker-thumbnail',
	host: { class: 'flex size-full items-center justify-center' },
	template: `
		<div
			class="text-card-foreground relative flex w-full max-w-48 flex-col gap-2.5 rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] p-3 shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
			<div class="bg-muted-foreground relative h-16 overflow-hidden rounded-lg border shadow-xs">
				<div class="from-background absolute inset-0 bg-linear-to-r to-transparent"></div>
				<div class="from-foreground absolute inset-0 bg-linear-to-t to-transparent"></div>
				<span
					class="border-background ring-foreground/20 absolute start-[64%] top-[32%] size-3 rounded-full border-2 shadow-sm ring-1"></span>
			</div>

			<div class="flex items-center gap-2">
				<div class="bg-muted-foreground size-6 rounded-md border shadow-xs"></div>
				<div class="flex flex-1 flex-col gap-2">
					<div class="from-muted via-muted-foreground/50 to-foreground relative h-1.5 rounded-full bg-linear-to-r">
						<span
							class="border-background bg-foreground ring-foreground/20 absolute start-[77%] top-1/2 size-2.5 -translate-y-1/2 rounded-full border-2 shadow-sm ring-1"></span>
					</div>
					<div class="bg-muted relative h-1.5 overflow-visible rounded-full">
						<div class="to-muted-foreground h-full w-[72%] rounded-full bg-linear-to-r from-transparent"></div>
						<span
							class="border-background bg-muted-foreground ring-foreground/20 absolute start-[68%] top-1/2 size-2.5 -translate-y-1/2 rounded-full border-2 shadow-sm ring-1"></span>
					</div>
				</div>
			</div>

			<div class="flex items-center justify-between gap-1.5">
				<span class="bg-foreground size-3.5 rounded-full border"></span>
				<span class="bg-muted-foreground/85 size-3.5 rounded-full border"></span>
				<span class="bg-muted-foreground/70 size-3.5 rounded-full border"></span>
				<span
					class="bg-muted-foreground/55 ring-foreground/30 border-background size-3.5 rounded-full border-2 ring-1"></span>
				<span class="bg-muted-foreground/40 size-3.5 rounded-full border"></span>
				<span class="bg-muted-foreground/25 size-3.5 rounded-full border"></span>
				<span class="bg-background size-3.5 rounded-full border"></span>
			</div>
		</div>
	`,
})
export class ColorPickerThumbnailComponent {}
