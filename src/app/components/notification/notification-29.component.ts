import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-29',
	standalone: true,
	providers: [DatePipe],
	imports: [HlmButton],
	template: `
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Action</button>
	`,
})
export class Notification29Component {
	datePipe = inject(DatePipe);

	showNotification() {
		toast('Event has been created', {
			action: {
				label: 'Undo',
				onClick: () => console.log('Undo'),
			},
		});
	}
}

export const notification29Code = `import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-29',
	standalone: true,
	providers: [DatePipe],
	imports: [HlmButton],
	template: \`
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Action</button>
	\`,
})
export class Notification29Component {
	datePipe = inject(DatePipe);

	showNotification() {
		toast('Event has been created', {
			action: {
				label: 'Undo',
				onClick: () => console.log('Undo'),
			},
		});
	}
}`;
