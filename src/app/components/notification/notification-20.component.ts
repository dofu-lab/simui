import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-notification-20',
	standalone: true,
	providers: [provideIcons({ lucideX })],
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective, HlmAspectRatioDirective],
	template: `
		<div class="bg-background z-50 flex max-w-[400px] flex-col gap-4 rounded-md border p-4 shadow-lg">
			<div class="flex gap-2">
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<p class="text-sm font-medium">We’ve just released a new update!</p>
						<p class="text-muted-foreground text-sm">
							Check out the all new dashboard view. Pages and exports now load faster.
						</p>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm size="sm" name="lucideX" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
			<div class="shadow-xs" [hlmAspectRatio]="16 / 9">
				<img alt="Mountain views" src="assets/thumbnails/modal.png" class="rounded-md" />
			</div>
			<div class="flex gap-3">
				<button class="text-secondary-foreground h-5 text-xs hover:underline">Dismiss</button>
				<button class="text-primary h-5 text-xs font-bold hover:underline">Changelog</button>
			</div>
		</div>
	`,
})
export class Notification20Component {}

export const notification20Code = `
import { Component } from '@angular/core';
import { lucideX } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-notification-20',
  standalone: true,
  providers: [provideIcons({ lucideX })],
  imports: [
    NgIcon,
    HlmIconDirective,
    HlmButtonDirective,
    HlmAspectRatioDirective,
  ],
  template: \`
    <div
      class="bg-background z-50 flex max-w-[400px] flex-col gap-4 rounded-md border p-4 shadow-lg"
    >
      <div class="flex gap-2">
        <div class="flex grow flex-col gap-3">
          <div class="space-y-1">
            <p class="text-sm font-medium">We’ve just released a new update!</p>
            <p class="text-muted-foreground text-sm">
              Check out the all new dashboard view. Pages and exports now load
              faster.
            </p>
          </div>
        </div>
        <button
          hlmBtn
          variant="ghost"
          class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        >
          <ng-icon
            hlm
            size="sm"
            name="lucideX"
            class="opacity-60 transition-opacity group-hover:opacity-100"
          />
        </button>
      </div>
      <div class="shadow-xs" [hlmAspectRatio]="16 / 9">
        <img
          alt="Mountain views"
          src="assets/thumbnails/modal.png"
          class="rounded-md"
        />
      </div>
      <div class="flex gap-3">
        <button class="text-secondary-foreground h-5 text-xs hover:underline">
          Dismiss
        </button>
        <button class="text-primary h-5 text-xs font-bold hover:underline">
          Changelog
        </button>
      </div>
    </div>
  \`,
})
export class Notification20Component {}
`;
