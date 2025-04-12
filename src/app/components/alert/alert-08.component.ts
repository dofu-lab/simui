import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-alert-08',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 border-blue-500/50 py-3 text-blue-600">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleAlert" />
			</span>
			<p hlmAlertDesc>Page information</p>
		</div>
	`,
})
export class Alert08Component {}

export const alert08Code = `
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
  selector: 'sim-alert-08',
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
    <div hlmAlert class="flex gap-3 border-blue-500/50 py-3 text-blue-600">
      <span class="flex items-center">
        <ng-icon hlm hlmAlertIcon name="lucideCircleAlert" />
      </span>
      <p hlmAlertDesc>Page information</p>
    </div>
  \`,
})
export class Alert08Component {}
`;
