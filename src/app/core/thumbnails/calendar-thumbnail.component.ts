import { Component } from '@angular/core';

@Component({
	selector: 'app-calendar-thumbnail',
	host: { class: 'flex w-full h-full items-center justify-center' },
	template: `
		<div class="bg-card text-card-foreground relative flex w-full max-w-28 flex-col gap-1 rounded-xl border p-2 shadow-sm">
			<div class="bg-primary/10 flex items-center justify-between rounded px-1 py-0.5">
				<div class="bg-muted h-1 w-6 rounded-full"></div>
				<div class="bg-primary h-1 w-4 rounded-full"></div>
			</div>
			<div class="grid grid-cols-7 gap-0.5">
				@for (cell of cells; track $index) {
					<div
						[class]="
							cell === 14
								? 'bg-primary h-2.5 w-2.5 rounded-full'
								: 'bg-muted h-2.5 w-2.5 rounded-full opacity-60'
						"
					></div>
				}
			</div>
		</div>
	`,
})
export class CalendarThumbnailComponent {
	cells = Array.from({ length: 35 }, (_, i) => i + 1);
}
