import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideTriangleAlert } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-alert-10',
	standalone: true,
	providers: [provideIcons({ lucideTriangleAlert, lucideArrowRight })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<div hlmAlert class="flex gap-3 border-amber-500/50 py-3 text-amber-600">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" />
			</span>
			<div class="flex flex-1 justify-between">
				<p hlmAlertDesc>Some information is missing</p>
				<div class="group flex cursor-pointer items-center gap-1">
					<span class="text-sm font-medium">Check now</span>
					<ng-icon
						hlm
						name="lucideArrowRight"
						size="sm"
						class="ms-1 transition-transform group-hover:translate-x-0.5" />
				</div>
			</div>
		</div>
	`,
})
export class Alert10Component {}

export const alert10Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideTriangleAlert } from '@ng-icons/lucide';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
} from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-alert-10',
  standalone: true,
  providers: [provideIcons({ lucideTriangleAlert, lucideArrowRight })],
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
    <div hlmAlert class="flex gap-3 border-amber-500/50 py-3 text-amber-600">
      <span class="flex items-center">
        <ng-icon hlm hlmAlertIcon name="lucideTriangleAlert" />
      </span>
      <div class="flex flex-1 justify-between">
        <p hlmAlertDesc>Some information is missing</p>
        <div class="group flex cursor-pointer items-center gap-1">
          <span class="text-sm font-medium">Check now</span>
          <ng-icon
            hlm
            name="lucideArrowRight"
            size="sm"
            class="ms-1 transition-transform group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </div>
  \`,
})
export class Alert10Component {}
`;
