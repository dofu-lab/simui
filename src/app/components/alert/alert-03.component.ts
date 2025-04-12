import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-alert-03',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 py-3">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleAlert" class="text-red-500" />
			</span>
			<p hlmAlertDesc>An error occurred!</p>
		</div>
	`,
})
export class Alert03Component {}

export const alert03Code = `
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
  selector: 'sim-alert-03',
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
          class="text-red-500"
        />
      </span>
      <p hlmAlertDesc>An error occurred!</p>
    </div>
  \`,
})
export class Alert03Component {}
`;
