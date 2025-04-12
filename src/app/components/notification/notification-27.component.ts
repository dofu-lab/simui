import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-27',
	standalone: true,
	providers: [DatePipe],
	imports: [HlmButtonDirective],
	template: `
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Basic</button>
	`,
})
export class Notification27Component {
	datePipe = inject(DatePipe);

	showNotification() {
		toast('Your request is created!', {
			description: this.datePipe.transform(new Date(), "EEEE, MMMM dd 'at' hh:mm:ss a") ?? '',
		});
	}
}

export const notification27Code = `
import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { toast } from 'ngx-sonner';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-notification-27',
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
      Basic
    </button>
  \`,
})
export class Notification27Component {
  datePipe = inject(DatePipe);

  showNotification() {
    toast('Your request is created!', {
      description:
        this.datePipe.transform(new Date(), "EEEE, MMMM dd 'at' hh:mm:ss a") ??
        '',
    });
  }
}
`;
