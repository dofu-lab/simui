import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-32',
	standalone: true,
	imports: [HlmButtonDirective],
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

export const notification32Code = `import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-32',
	standalone: true,
	imports: [HlmButtonDirective],
	template: \`
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">With close button</button>
	\`,
})
export class Notification32Component {
	showNotification() {
		toast.success('Saved your changes', {
			closeButton: true,
		});
	}
}`;
