import { Component } from '@angular/core';

@Component({
	selector: 'app-select-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="flex flex-col items-center gap-1.5">
			<div
				class="text-card-foreground bg-card/99 dark:bg-card relative flex w-full max-w-72 flex-col rounded-xl border shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)]">
				<div class="flex flex-1 gap-2 p-0">
					<div class="flex flex-1 items-center justify-between gap-2 py-2.5 ps-4 pe-2.5">
						<div class="bg-muted-foreground/40 h-1.5 w-[60%] rounded-full"></div>
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
					</div>
				</div>
			</div>
			<div
				class="text-card-foreground bg-card/99 dark:bg-card relative flex w-[165px] max-w-72 flex-col overflow-hidden rounded-xl border shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)]">
				<div class="bg-accent/60 flex items-center justify-between px-3 py-1.5">
					<div class="bg-muted-foreground/45 h-1.5 w-14 rounded-full"></div>
					<svg class="text-primary/60 h-3 w-3" viewBox="0 0 12 12" fill="none">
						<path
							d="M2 6l3 3L10 3"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
				</div>
				<div class="flex items-center px-3 py-1.5">
					<div class="bg-muted-foreground/30 h-1.5 w-12 rounded-full"></div>
				</div>
				<div class="flex items-center px-3 py-1.5">
					<div class="bg-muted-foreground/30 h-1.5 w-16 rounded-full"></div>
				</div>
				<div class="flex items-center px-3 py-1.5">
					<div class="bg-muted-foreground/30 h-1.5 w-10 rounded-full"></div>
				</div>
			</div>
		</div>
	`,
})
export class SelectThumbnailComponent {}
