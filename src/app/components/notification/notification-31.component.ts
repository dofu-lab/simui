import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { toast } from 'ngx-sonner';

@Component({
	selector: 'sim-notification-31',
	standalone: true,
	imports: [HlmButtonDirective],
	template: `
		<button hlmBtn variant="outline" size="sm" class="h-8" (click)="showNotification()">Bottom center</button>
	`,
})
export class Notification31Component {
	showNotification() {
		toast.success('Saved your changes', { position: 'bottom-center' });
	}
}

export const notification31Code = `
import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-notification-31',
  standalone: true,
  imports: [HlmButtonDirective],
  template: \`
    <button
      hlmBtn
      variant="outline"
      size="sm"
      class="h-8"
      (click)="showNotification()"
    >
      Bottom center
    </button>
  \`,
})
export class Notification31Component {
  showNotification() {
    toast.success('Saved your changes', { position: 'bottom-center' });
  }
}
`;
