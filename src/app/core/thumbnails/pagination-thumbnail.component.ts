import { Component } from '@angular/core';

@Component({
	selector: 'app-pagination-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="flex flex-1 items-center gap-4">
			<div
				class="text-card-foreground relative flex w-fit max-w-72 flex-col rounded-lg border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 [--radius-lg:12px] not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="flex flex-1 items-center gap-2 p-2">
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
						class="lucide lucide-chevron-left text-muted-foreground/88 size-4"
						aria-hidden="true">
						<path d="m15 18-6-6 6-6"></path>
					</svg>
				</div>
			</div>
			<div class="flex flex-1 gap-2">
				<div class="bg-muted-foreground/20 h-1.5 flex-1 rounded-full"></div>
				<div class="bg-muted-foreground/20 h-1.5 flex-1 rounded-full"></div>
				<div class="bg-muted-foreground/20 h-1.5 flex-1 rounded-full"></div>
			</div>
			<div
				class="text-card-foreground relative flex w-fit max-w-72 flex-col rounded-lg border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 [--radius-lg:12px] not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="flex flex-1 items-center gap-2 p-2">
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
						class="lucide lucide-chevron-right text-muted-foreground/88 size-4"
						aria-hidden="true">
						<path d="m9 18 6-6-6-6"></path>
					</svg>
				</div>
			</div>
		</div>
	`,
})
export class PaginationThumbnailComponent {}
