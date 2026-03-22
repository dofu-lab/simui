import { Component } from '@angular/core';

@Component({
	selector: 'app-accordion-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div
			class="text-card-foreground relative flex w-full max-w-50 flex-col rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
			<div class="divide-border flex-1 divide-y p-0">
				<div class="p-3">
					<div class="flex items-center gap-2">
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
							class="lucide lucide-chevron-down text-muted-foreground/88 size-4"
							aria-hidden="true">
							<path d="m6 9 6 6 6-6"></path>
						</svg>
						<div class="bg-muted-foreground/40 h-1.5 w-[60%] rounded-full"></div>
					</div>
				</div>
				<div class="p-3">
					<div class="flex items-center gap-2">
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
							class="lucide lucide-chevron-down text-muted-foreground/88 size-4 rotate-180"
							aria-hidden="true">
							<path d="m6 9 6 6 6-6"></path>
						</svg>
						<div class="flex flex-1 flex-col gap-2">
							<div class="bg-muted-foreground/40 h-1.5 w-[50%] rounded-full"></div>
							<div class="bg-muted-foreground/20 h-1.5 w-[90%] rounded-full"></div>
						</div>
					</div>
				</div>
				<div class="p-3">
					<div class="flex items-center gap-2">
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
							class="lucide lucide-chevron-down text-muted-foreground/88 size-4"
							aria-hidden="true">
							<path d="m6 9 6 6 6-6"></path>
						</svg>
						<div class="bg-muted-foreground/40 h-1.5 w-[60%] rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	`,
})
export class AccordionThumbnailComponent {}
