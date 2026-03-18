import { Component } from '@angular/core';

@Component({
	selector: 'app-notification-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="relative flex flex-1 justify-center">
			<div
				class="text-card-foreground absolute -top-6 flex w-full max-w-72 scale-80 flex-col rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="flex flex-1 items-center gap-2 p-3"></div>
			</div>
			<div
				class="text-card-foreground absolute -top-3 flex w-full max-w-72 scale-90 flex-col rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="flex flex-1 items-center gap-2 p-3"></div>
			</div>
			<div
				class="text-card-foreground relative flex w-full max-w-72 flex-col rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="flex flex-1 items-center gap-2 p-3">
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
						class="lucide lucide-circle-alert text-muted-foreground/88 size-4"
						aria-hidden="true">
						<circle cx="12" cy="12" r="10"></circle>
						<line x1="12" x2="12" y1="8" y2="12"></line>
						<line x1="12" x2="12.01" y1="16" y2="16"></line>
					</svg>
					<div class="flex flex-1 flex-col gap-2">
						<div class="bg-muted-foreground/40 h-1.5 w-[40%] rounded-full"></div>
						<div class="bg-muted-foreground/20 h-1.5 w-[70%] rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	`,
})
export class NotificationThumbnailComponent {}
