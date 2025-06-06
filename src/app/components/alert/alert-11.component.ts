import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-alert-11',
	standalone: true,
	providers: [provideIcons({ lucideTriangleAlert })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 border-[#F7E380] bg-[#F7E380] py-3 text-[#211B00]">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" />
			</span>
			<p hlmAlertDesc>Some information is missing</p>
		</div>
	`,
})
export class Alert11Component {}

export const alert11Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
} from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-alert-11',
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
    <div
      hlmAlert
      class="flex gap-3 border-[#F7E380] bg-[#F7E380] py-3 text-[#211B00]"
    >
      <span class="flex items-center">
        <ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" />
      </span>
      <p hlmAlertDesc>Some information is missing</p>
    </div>
  \`,
})
export class Alert11Component {}
`;
