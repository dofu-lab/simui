import { Component } from '@angular/core';

@Component({
	selector: 'app-badge-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div
			class="flex flex-1 items-center justify-center p-6 px-8 [--border:--alpha(var(--color-black)/7%)] [--btn-from:--alpha(var(--color-primary)/90%)] [--btn-to:var(--color-primary)] *:transition-transform *:duration-200 in-[[data-slot=card-frame]:has(a:not(:hover))]:*:translate-y-0.5 dark:[--border:--alpha(var(--color-white)/3%)] dark:[--btn-from:var(--color-primary)] dark:[--btn-to:--alpha(var(--color-primary)/90%)]"
			data-slot="card-panel">
			<div
				class="text-card-foreground relative flex w-full max-w-24 flex-col rounded-2xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 [--radius-2xl:9999px] not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
				<div class="flex flex-1 items-center gap-2 p-6 px-2.5 py-2">
					<div class="bg-muted-foreground/88 size-2 rounded-full"></div>
					<div class="bg-muted-foreground/40 h-1.5 flex-1 rounded-full"></div>
				</div>
			</div>
		</div>
	`,
})
export class BadgeThumbnailComponent {}
