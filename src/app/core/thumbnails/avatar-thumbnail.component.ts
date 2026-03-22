import { Component } from '@angular/core';

@Component({
	selector: 'app-avatar-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div
			class="flex flex-1 items-center justify-center p-6 px-8 [--border:--alpha(var(--color-black)/7%)] [--btn-from:--alpha(var(--color-primary)/90%)] [--btn-to:var(--color-primary)] [--radius-2xl:9999px] *:transition-transform *:duration-200 in-[[data-slot=card-frame]:has(a:not(:hover))]:*:translate-y-0.5 dark:[--border:--alpha(var(--color-white)/3%)] dark:[--btn-from:var(--color-primary)] dark:[--btn-to:--alpha(var(--color-primary)/90%)]"
			data-slot="card-panel">
			<div
				class="text-card-foreground relative flex size-12 max-w-72 flex-col rounded-full border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="flex flex-1 items-center justify-center p-0">
					<div class="flex size-full items-center justify-center rounded-full">
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
							class="lucide lucide-user-round text-muted-foreground/88 size-4"
							aria-hidden="true">
							<circle cx="12" cy="8" r="5"></circle>
							<path d="M20 21a8 8 0 0 0-16 0"></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	`,
})
export class AvatarThumbnailComponent {}
