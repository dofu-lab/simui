import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRefreshCw, lucideX } from '@ng-icons/lucide';
import { HlmAvatarComponent, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-notification-18',
	standalone: true,
	providers: [
		provideIcons({
			lucideX,
			lucideRefreshCw,
		}),
	],
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective, HlmAvatarComponent, HlmAvatarImageDirective],
	template: `
		<div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
			<div class="flex gap-3">
				<div class="relative items-start">
					<hlm-avatar variant="medium" class="border-border/50 border">
						<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
						<span hlmAvatarFallback class="bg-primary text-primary-foreground">AC</span>
					</hlm-avatar>
					<div class="border-background absolute top-7.5 right-0 size-3 rounded-full border-[2px] bg-emerald-500"></div>
				</div>
				<div class="flex grow flex-col gap-3">
					<div class="space-y-1">
						<div class="flex gap-1 text-sm font-medium">
							<span>Alan Cooper</span>
							<span class="text-muted-foreground font-normal">• 2 mins ago</span>
						</div>
						<p class="text-muted-foreground text-sm">
							I’ve finished adding my notes. Happy for us to review whenever you’re ready!
						</p>
					</div>
					<div class="flex gap-3">
						<button class="text-secondary-foreground h-5 text-xs hover:underline">Dismiss</button>
						<button class="text-primary h-5 text-xs font-bold hover:underline">Reply</button>
					</div>
				</div>
				<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
					<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
				</button>
			</div>
		</div>
	`,
})
export class Notification18Component {}

export const notification18Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideRefreshCw, lucideX } from '@ng-icons/lucide';
import {
  HlmAvatarComponent,
  HlmAvatarImageDirective,
} from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-notification-18',
  standalone: true,
  providers: [
    provideIcons({
      lucideX,
      lucideRefreshCw,
    }),
  ],
  imports: [
    NgIcon,
    HlmIconDirective,
    HlmButtonDirective,
    HlmAvatarComponent,
    HlmAvatarImageDirective,
  ],
  template: \`
    <div
      class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg"
    >
      <div class="flex gap-3">
        <div class="relative items-start">
          <hlm-avatar variant="medium" class="border-border/50 border">
            <img
              hlmAvatarImage
              src="assets/avatars/alan-cooper.png"
              alt="Alan Cooper"
            />
            <span hlmAvatarFallback class="bg-primary text-primary-foreground">
              AC
            </span>
          </hlm-avatar>
          <div
            class="border-background absolute top-7.5 right-0 size-3 rounded-full border-[2px] bg-emerald-500"
          ></div>
        </div>
        <div class="flex grow flex-col gap-3">
          <div class="space-y-1">
            <div class="flex gap-1 text-sm font-medium">
              <span> Alan Cooper </span>
              <span class="text-muted-foreground font-normal">
                • 2 mins ago
              </span>
            </div>
            <p class="text-muted-foreground text-sm">
              I’ve finished adding my notes. Happy for us to review whenever
              you’re ready!
            </p>
          </div>
          <div class="flex gap-3">
            <button
              class="text-secondary-foreground h-5 text-xs hover:underline"
            >
              Dismiss
            </button>
            <button class="text-primary h-5 text-xs font-bold hover:underline">
              Reply
            </button>
          </div>
        </div>
        <button
          hlmBtn
          variant="ghost"
          class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        >
          <ng-icon
            hlm
            name="lucideX"
            size="sm"
            class="opacity-60 transition-opacity group-hover:opacity-100"
          />
        </button>
      </div>
    </div>
  \`,
})
export class Notification18Component {}
`;
