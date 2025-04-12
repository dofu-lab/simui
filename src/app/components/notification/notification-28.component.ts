import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-28',
	standalone: true,
	providers: [DatePipe],
	imports: [HlmButtonDirective],
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

export const notification28Code = `
import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { toast } from 'ngx-sonner';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-notification-28',
  standalone: true,
  providers: [DatePipe],
  imports: [HlmButtonDirective],
  template: \`
    <button
      hlmBtn
      variant="outline"
      size="sm"
      class="h-8"
      (click)="showNotification()"
    >
      Success
    </button>
  \`,
})
export class Notification28Component {
  datePipe = inject(DatePipe);

  showNotification() {
    toast.success('Request is approved', {
      description: 'Your manager has approved your request.',
    });
  }
}
`;
