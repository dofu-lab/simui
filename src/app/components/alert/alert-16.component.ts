import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-alert-16',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 border-red-500/50 py-3 text-red-600">
			<span>
				<ng-icon hlm hlmAlertIcon variant="destructive" name="lucideCircleAlert" />
			</span>
			<div>
				<h4 hlmAlertTitle class="text-sm font-medium">Password does not meet requirements:</h4>
				<ul hlmAlertDesc class="list-inside list-disc text-sm text-red-400">
					<li>Minimum 8 characters</li>
					<li>Include a special character</li>
				</ul>
			</div>
		</div>
	`,
})
export class Alert16Component {}

export const alert16Code = `
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
  selector: 'sim-alert-16',
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
    <div hlmAlert class="flex gap-3 border-red-500/50 py-3 text-red-600">
      <span>
        <ng-icon
          hlm
          hlmAlertIcon
          variant="destructive"
          name="lucideCircleAlert"
        />
      </span>
      <div>
        <h4 hlmAlertTitle class="text-sm font-medium">
          Password does not meet requirements:
        </h4>
        <ul hlmAlertDesc class="list-inside list-disc text-sm text-red-400">
          <li>Minimum 8 characters</li>
          <li>Include a special character</li>
        </ul>
      </div>
    </div>
  \`,
})
export class Alert16Component {}
`;
