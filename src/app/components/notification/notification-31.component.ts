import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-31',
	imports: [HlmButton],
	template: `
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Bottom center</button>
	`,
})
export class Notification31Component {
	showNotification() {
		toast.success('Saved your changes', { position: 'bottom-center' });
	}
}

export const notification31Code = `import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-31',
	imports: [HlmButton],
	template: \`
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Bottom center</button>
	\`,
})
export class Notification31Component {
	showNotification() {
		toast.success('Saved your changes', { position: 'bottom-center' });
	}
}`;
