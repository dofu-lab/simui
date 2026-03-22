import { Component } from '@angular/core';

@Component({
	selector: 'app-dropdown-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="flex max-w-50 flex-1 flex-col items-end gap-2">
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
						class="lucide lucide-ellipsis text-muted-foreground/88 size-4"
						aria-hidden="true">
						<circle cx="12" cy="12" r="1"></circle>
						<circle cx="19" cy="12" r="1"></circle>
						<circle cx="5" cy="12" r="1"></circle>
					</svg>
				</div>
			</div>
			<div
				class="text-card-foreground relative flex w-full max-w-72 flex-col rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 [--radius-xl:10px] not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="flex flex-1 flex-col gap-4 p-4">
					<div class="me-6"><div class="bg-muted-foreground/20 h-1.5 w-full rounded-full"></div></div>
					<div class="flex items-center gap-4">
						<div class="flex-1"><div class="bg-muted-foreground/20 h-1.5 rounded-full"></div></div>
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
							class="lucide lucide-chevron-right text-muted-foreground/88 -m-1 size-4"
							aria-hidden="true">
							<path d="m9 18 6-6-6-6"></path>
						</svg>
					</div>
					<div class="me-6"><div class="bg-muted-foreground/20 h-1.5 w-full rounded-full"></div></div>
				</div>
			</div>
		</div>
	`,
})
export class DropdownThumbnailComponent {}
