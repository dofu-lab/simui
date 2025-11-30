import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-32',
	imports: [HlmButton],
	template: `
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">With close button</button>
	`,
})
export class Notification32Component {
	showNotification() {
		toast.success('Saved your changes', {
			closeButton: true,
		});
	}
}