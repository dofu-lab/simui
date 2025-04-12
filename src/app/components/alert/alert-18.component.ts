import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import { HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-alert-18',
	standalone: true,
	providers: [provideIcons({ lucideCircleAlert })],
	imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertIconDirective],
	host: {
		class: 'w-full',
	},
	template: `
		@if (!isDismissed()) {
			<div hlmAlert class="flex flex-col gap-3 md:flex-row">
				<span
					class="flex size-10 shrink-0 items-center justify-center rounded-md border border-red-500/50 text-red-600">
					<ng-icon hlm hlmAlertIcon variant="destructive" name="lucideCircleAlert" />
				</span>
				<div>
					<h4 hlmAlertTitle class="text-sm font-medium">There was a problem with that action</h4>
					<span class="text-xs">Please try again later. If the problem persists, contact support.</span>
					<div class="mt-2 flex gap-2">
						<span class="text-muted-foreground cursor-pointer text-sm hover:underline" (click)="isDismissed.set(true)">
							Dismiss
						</span>
						<span class="cursor-pointer text-sm font-bold hover:underline">Learn more</span>
					</div>
				</div>
			</div>
		}
	`,
})
export class Alert18Component {
	isDismissed = signal<boolean>(false);
}

export const alert18Code = `
import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert } from '@ng-icons/lucide';
import {
  HlmAlertDirective,
  HlmAlertIconDirective,
} from '@spartan-ng/ui-alert-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-alert-18',
  standalone: true,
  providers: [provideIcons({ lucideCircleAlert })],
  imports: [NgIcon, HlmIconDirective, HlmAlertDirective, HlmAlertIconDirective],
  host: {
    class: 'w-full',
  },
  template: \`
    @if (!isDismissed()) {
    <div hlmAlert class="flex flex-col gap-3 md:flex-row">
      <span
        class="flex size-10 shrink-0 items-center justify-center rounded-md border border-red-500/50 text-red-600"
      >
        <ng-icon
          hlm
          hlmAlertIcon
          variant="destructive"
          name="lucideCircleAlert"
        />
      </span>
      <div>
        <h4 hlmAlertTitle class="text-sm font-medium">
          There was a problem with that action
        </h4>
        <span class="text-xs">
          Please try again later. If the problem persists, contact support.
        </span>
        <div class="mt-2 flex gap-2">
          <span
            class="text-muted-foreground cursor-pointer text-sm hover:underline"
            (click)="isDismissed.set(true)"
          >
            Dismiss
          </span>
          <span class="cursor-pointer text-sm font-bold hover:underline">
            Learn more
          </span>
        </div>
      </div>
    </div>
    }
  \`,
})
export class Alert18Component {
  isDismissed = signal<boolean>(false);
}
`;
