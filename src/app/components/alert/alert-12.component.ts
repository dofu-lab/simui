import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-alert-12',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 border-[#FFDAD6] bg-[#FFDAD6] py-3 text-[#410002]">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleAlert" />
			</span>
			<p hlmAlertDesc>An error occurred!</p>
		</div>
	`,
})
export class Alert12Component {}

export const alert12Code = `
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
  selector: 'sim-alert-12',
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
    <div
      hlmAlert
      class="flex gap-3 border-[#FFDAD6] bg-[#FFDAD6] py-3 text-[#410002]"
    >
      <span class="flex items-center">
        <ng-icon hlm hlmAlertIcon name="lucideCircleAlert" />
      </span>
      <p hlmAlertDesc>An error occurred!</p>
    </div>
  \`,
})
export class Alert12Component {}
`;
