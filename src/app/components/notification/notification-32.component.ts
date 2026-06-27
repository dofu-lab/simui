import { Component } from '@angular/core';
import { toast } from '@spartan-ng/brain/sonner';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-notification-32',
	imports: [HlmButtonImports],
	template: `
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">With close button</button>
	`,
})
export class Notification32Component {
	protected showNotification(): void {
		toast.success('Saved your changes', {
			closeButton: true,
		});
	}
}
