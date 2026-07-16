import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toast } from '@spartan-ng/brain/sonner';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-notification-29',
	providers: [DatePipe],
	imports: [HlmButtonImports],
	template: `
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Action</button>
	`,
})
export class Notification29Component {
	private readonly datePipe = inject(DatePipe);

	protected showNotification(): void {
		toast('Event has been created', {
			action: {
				label: 'Undo',
				onClick: () => console.log('Undo'),
			},
		});
	}
}
