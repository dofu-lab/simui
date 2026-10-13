import { Component } from '@angular/core';

@Component({
	selector: 'app-attachment-thumbnail',
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="flex w-full max-w-48 flex-col gap-2.5">
			<div
				class="text-card-foreground relative flex items-center gap-2 rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] p-2 shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md">
					<svg
						class="text-muted-foreground/88 size-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.75"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true">
						<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
						<polyline points="14 2 14 8 20 8" />
					</svg>
				</div>
				<div class="flex min-w-0 flex-1 flex-col gap-1.5">
					<div class="bg-muted-foreground/35 h-1.5 w-24 rounded-full"></div>
					<div class="bg-muted-foreground/20 h-1 w-14 rounded-full"></div>
				</div>
				<svg
					class="text-muted-foreground/70 size-3.5 shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.75"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="7 10 12 15 17 10" />
					<line x1="12" y1="15" x2="12" y2="3" />
				</svg>
			</div>
		</div>
	`,
})
export class AttachmentThumbnailComponent {}
