import { Component } from '@angular/core';

@Component({
	selector: 'app-banner-thumbnail',
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div
			class="text-card-foreground relative flex h-35 w-full max-w-50 flex-col rounded-lg border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
			<!-- Title bar -->
			<div class="flex items-center gap-1.5 border-b px-3 py-2">
				<span class="size-2 rounded-full bg-[#ff5f57]"></span>
				<span class="size-2 rounded-full bg-[#febc2e]"></span>
				<span class="size-2 rounded-full bg-[#28c840]"></span>
				<div class="bg-muted-foreground/20 mx-auto h-1.5 w-16 rounded-full"></div>
			</div>
			<!-- Content area -->
			<div class="flex flex-1 flex-col gap-2 p-3">
				<div
					class="text-card-foreground relative flex w-full max-w-72 flex-col rounded-md border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-md)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
					<div class="flex flex-1 items-center justify-between gap-2 p-1">
						<div class="bg-muted-foreground/80 size-3 rounded-xs"></div>
						<div class="bg-muted-foreground/20 h-1.5 w-[70%] rounded-full"></div>
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
							class="lucide lucide-x-icon lucide-x text-muted-foreground/88 size-4">
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	`,
})
export class BannerThumbnailComponent {}
