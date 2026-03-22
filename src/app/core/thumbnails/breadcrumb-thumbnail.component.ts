import { Component } from '@angular/core';

@Component({
	selector: 'app-breadcrumb-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div
			class="text-card-foreground relative flex w-full max-w-72 flex-col rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
			<div class="flex flex-1 items-center gap-1 p-3">
				<div class="bg-muted-foreground/40 h-1.5 flex-1 rounded-full"></div>
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
				<div class="bg-muted-foreground/20 h-1.5 flex-1 rounded-full"></div>
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
				<div class="bg-muted-foreground/20 h-1.5 flex-1 rounded-full"></div>
			</div>
		</div>
	`,
})
export class BreadcrumbThumbnailComponent {}
