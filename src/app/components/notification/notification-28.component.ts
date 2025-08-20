import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-28',
	standalone: true,
	providers: [DatePipe],
	imports: [HlmButton],
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

export const notification28Code = `import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-28',
	standalone: true,
	providers: [DatePipe],
	imports: [HlmButton],
	template: \`
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Success</button>
	\`,
})
export class Notification28Component {
	datePipe = inject(DatePipe);

	showNotification() {
		toast.success('Request is approved', {
			description: 'Your manager has approved your request.',
		});
	}
}`;
