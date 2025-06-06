import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck, lucideX } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-notification-02',
	standalone: true,
	providers: [provideIcons({ lucideCircleCheck, lucideX })],
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmAlertDirective,
		HlmAlertDescriptionDirective,
		HlmAlertIconDirective,
		HlmButtonDirective,
	],
	template: `
		<div hlmAlert class="bg-background z-50 flex gap-3 py-3 shadow-lg">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleCheck" class="text-red-500" />
			</span>
			<p hlmAlertDesc class="grow">An error occurred!</p>
			<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
				<ng-icon hlm name="lucideX" class="opacity-60 transition-opacity group-hover:opacity-100" size="sm" />
			</button>
		</div>
	`,
})
export class Notification02Component {}

export const notification02Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck, lucideX } from '@ng-icons/lucide';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
} from '@spartan-ng/ui-alert-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-notification-02',
  standalone: true,
  providers: [provideIcons({ lucideCircleCheck, lucideX })],
  imports: [
    NgIcon,
    HlmIconDirective,
    HlmAlertDirective,
    HlmAlertDescriptionDirective,
    HlmAlertIconDirective,
    HlmButtonDirective,
  ],
  template: \`
    <div hlmAlert class="bg-background z-50 flex gap-3 py-3 shadow-lg">
      <span class="flex items-center">
        <ng-icon
          hlm
          hlmAlertIcon
          name="lucideCircleCheck"
          class="text-red-500"
        />
      </span>
      <p hlmAlertDesc class="grow">An error occurred!</p>
      <button
        hlmBtn
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
      >
        <ng-icon
          hlm
          name="lucideX"
          class="opacity-60 transition-opacity group-hover:opacity-100"
          size="sm"
        />
      </button>
    </div>
  \`,
})
export class Notification02Component {}
`;
