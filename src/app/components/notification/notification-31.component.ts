import { Component } from '@angular/core';
import { toast } from '@spartan-ng/brain/sonner';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-notification-31',
	imports: [HlmButtonImports],
	template: `
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Bottom center</button>
	`,
})
export class Notification31Component {
	showNotification() {
		toast.success('Saved your changes', { position: 'bottom-center' });
	}
}
