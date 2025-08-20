import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-30',
	standalone: true,
	imports: [HlmButton],
	template: `
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Upload images</button>
	`,
})
export class Notification30Component {
	showNotification() {
		const promise = new Promise<{ name: string }>((resolve, reject) =>
			setTimeout(() => {
				if (Math.random() > 0.5) {
					resolve({ name: '20 images' });
				} else {
					reject();
				}
			}, 1500),
		);

		toast.promise(promise, {
			loading: 'Uploading...',
			success: (data) => {
				return 'Successfully uploaded ' + data.name;
			},
			error: 'Error... :( Try again!',
		});
	}
}

export const notification30Code = `import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-30',
	standalone: true,
	imports: [HlmButton],
	template: \`
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Upload images</button>
	\`,
})
export class Notification30Component {
	showNotification() {
		const promise = new Promise<{ name: string }>((resolve, reject) =>
			setTimeout(() => {
				if (Math.random() > 0.5) {
					resolve({ name: '20 images' });
				} else {
					reject();
				}
			}, 1500),
		);

		toast.promise(promise, {
			loading: 'Uploading...',
			success: (data) => {
				return 'Successfully uploaded ' + data.name;
			},
			error: 'Error... :( Try again!',
		});
	}
}`;
