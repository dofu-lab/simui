import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-alert-01',
	standalone: true,
	providers: [provideIcons({ lucideTriangleAlert })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 py-3">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" class="text-amber-500" />
			</span>
			<p hlmAlertDesc>Some information is missing</p>
		</div>
	`,
})
export class Alert01Component {}

export const alert01Code = `
import { lucideTriangleAlert } from '@ng-icons/lucide';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
} from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-alert-01',
  standalone: true,
  providers: [provideIcons({ lucideTriangleAlert })],
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
          name="lucideTriangleAlert"
          class="text-amber-500"
        />
      </span>
      <p hlmAlertDesc>Some information is missing</p>
    </div>
  \`,
})
export class Alert01Component {}
`;
