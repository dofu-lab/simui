import { Component } from '@angular/core';

@Component({
	selector: 'app-event-calendar-thumbnail',
	standalone: true,
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div
			class="text-card-foreground relative flex w-full max-w-40 flex-col rounded-xl border bg-linear-to-b from-[color-mix(in_srgb,var(--card)_96%,var(--color-white))] to-[color-mix(in_srgb,var(--card)_99%,var(--color-black))] shadow-md/5 not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_-1px_--theme(--color-white/6%),0_1px_--theme(--color-black/6%)] dark:to-[color-mix(in_srgb,var(--card)_98%,var(--color-white))]">
			<div class="flex flex-col gap-2 p-4">
				<!-- Day header -->
				<div class="flex items-baseline gap-1.5">
					<span class="text-muted-foreground/60 text-[10px] font-semibold tracking-wide">MON</span>
					<span class="text-foreground/80 text-lg leading-none font-bold">24</span>
				</div>
				<!-- Event items -->
				<div class="flex flex-col gap-1.5 pt-0.5">
					<div class="grid grid-cols-7 gap-0.5 px-0.5">
						<div class="bg-muted-foreground/20 h-1 rounded-full"></div>
						<div class="bg-muted-foreground/20 h-1 rounded-full"></div>
						<div class="bg-muted-foreground/20 h-1 rounded-full"></div>
						<div class="bg-muted-foreground/20 h-1 rounded-full"></div>
						<div class="bg-muted-foreground/20 h-1 rounded-full"></div>
						<div class="bg-muted-foreground/20 h-1 rounded-full"></div>
						<div class="bg-muted-foreground/20 h-1 rounded-full"></div>
					</div>
					<div class="grid grid-cols-7 gap-0.5 px-0.5">
						<div class="h-3.5 rounded"></div>
						<div class="h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
					</div>
					<div class="grid grid-cols-7 gap-0.5 px-0.5">
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-primary/50 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
					</div>
					<div class="grid grid-cols-7 gap-0.5 px-0.5">
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-primary/50 h-3.5 rounded"></div>
						<div class="bg-primary/50 h-3.5 rounded"></div>
						<div class="bg-primary/50 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
					</div>
					<div class="grid grid-cols-7 gap-0.5 px-0.5">
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
						<div class="bg-muted-foreground/15 h-3.5 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	`,
})
export class EventCalendarThumbnailComponent {}
