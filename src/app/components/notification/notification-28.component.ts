import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toast } from '@spartan-ng/brain/sonner';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-notification-28',
	providers: [DatePipe],
	imports: [HlmButtonImports],
	template: `
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Success</button>
	`,
})
export class Notification28Component {
	datePipe = inject(DatePipe);

	showNotification() {
		toast.success('Request is approved', {
			description: 'Your manager has approved your request.',
		});
	}
}
