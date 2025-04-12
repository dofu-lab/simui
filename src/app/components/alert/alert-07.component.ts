import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-alert-07',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 py-3">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleAlert" class="text-blue-500" />
			</span>
			<p hlmAlertDesc>Page information!</p>
		</div>
	`,
})
export class Alert07Component {}

export const alert07Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
} from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-alert-07',
  standalone: true,
  providers: [provideIcons({ lucideCircleAlert })],
  imports: [
    NgIcon,
    HlmIconDirective,
    HlmAlertDirective,
    HlmAlertDescriptionDirective,
    HlmAlertIconDirective,
  ],
  host: {
    class: 'w-full',
  },
  template: \`
    <div hlmAlert class="flex gap-3 py-3">
      <span class="flex items-center">
        <ng-icon
          hlm
          hlmAlertIcon
          name="lucideCircleAlert"
          class="text-blue-500"
        />
      </span>
      <p hlmAlertDesc>Page information!</p>
    </div>
  \`,
})
export class Alert07Component {}
`;
