import { HlmBadgeDirective } from '@/libs/ui/ui-badge-helm/src';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell } from '@ng-icons/lucide';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
	selector: 'sim-popover-03',
	providers: [provideIcons({ lucideBell })],
	imports: [
		BrnPopoverComponent,
		BrnPopoverContentDirective,
		BrnPopoverTriggerDirective,
		HlmAvatarComponent,
		HlmAvatarFallbackDirective,
		HlmAvatarImageDirective,
		HlmBadgeDirective,
		HlmButtonDirective,
		HlmIconDirective,
		HlmPopoverContentDirective,
		NgIcon,
	],
	template: `
		<brn-popover sideOffset="5">
			<button variant="outline" size="icon" class="relative" brnPopoverTrigger hlmBtn>
				<ng-icon hlm name="lucideBell" size="sm" />
				@if (unreadCount() > 0) {
					<span
						hlmBadge
						class="absolute -top-2 left-full flex min-w-5 -translate-x-1/2 items-center justify-center px-1 py-[1px]">
						{{ unreadCount() }}
					</span>
				}
			</button>
			<div hlmPopoverContent class="grid w-80 gap-2" *brnPopoverContent="let ctx">
				<div class="flex items-center justify-between">
					<span class="text-sm font-semibold">Notifications</span>
					@if (unreadCount() > 0) {
						<button (click)="markAllAsRead()" class="text-muted-foreground text-xs hover:underline focus:outline-none">
							Mark all as read
						</button>
					}
				</div>
				<hr class="border-muted -mx-4" />
				<ul class="-mx-2 max-h-96 space-y-3 overflow-y-auto">
					@for (notification of notifications; track $index) {
						<li
							class="hover:bg-muted flex items-start justify-between gap-2 rounded-md px-4 py-2 transition-colors"
							(click)="markAsRead($index)">
							<hlm-avatar variant="medium" class="border-border/50 rounded-lg border">
								<img hlmAvatarImage [src]="notification.avatar" [alt]="notification.user" />
								<span hlmAvatarFallback>
									{{ notification.initials }}
								</span>
							</hlm-avatar>

							<div class="flex flex-1 justify-between">
								<div>
									<div class="text-sm">
										<span class="font-medium">{{ notification.user }}</span>
										{{ notification.action }}
										<span class="font-medium">{{ notification.subject }}.</span>
									</div>
									<div class="text-muted-foreground text-xs">{{ notification.time }}</div>
								</div>
								<div class="mt-1 h-2 w-2">
									@if (notification.unread) {
										<div class="bg-primary mt-1 h-2 w-2 rounded-full"></div>
									}
								</div>
							</div>
						</li>
					}
				</ul>
			</div>
		</brn-popover>
	`,
})
export class Popover03Component {
	notifications = [
		{
			user: 'Alan Cooper',
			action: 'requested review on',
			subject: 'PR #42: Feature implementation',
			time: '15 minutes ago',
			unread: true,
			avatar: 'assets/avatars/alan-cooper.png',
			initials: 'AC',
		},
		{
			user: 'Alexis Sears',
			action: 'shared',
			subject: 'New component library',
			time: '45 minutes ago',
			unread: true,
			avatar: 'assets/avatars/alexis-sears.png',
			initials: 'AS',
		},
		{
			user: 'Jessica Lambert',
			action: 'assigned you to',
			subject: 'API integration task',
			time: '4 hours ago',
			unread: false,
			avatar: 'assets/avatars/jessica-lambert.png',
			initials: 'JL',
		},
		{
			user: 'Skylar Dias',
			action: 'replied to your comment in',
			subject: 'Authentication flow',
			time: '12 hours ago',
			unread: false,
			avatar: 'assets/avatars/skylar-dias.png',
			initials: 'SD',
		},
	];

	unreadCount = () => this.notifications.filter((n) => n.unread).length;

	markAsRead(index: number): void {
		if (this.notifications[index].unread) {
			this.notifications[index].unread = false;
		}
	}

	markAllAsRead(): void {
		this.notifications.forEach((n) => {
			if (n.unread) {
				n.unread = false;
			}
		});
	}
}

export const Popover03Code = `
import { HlmBadgeDirective } from '@/libs/ui/ui-badge-helm/src';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'sim-popover-03',
  providers: [provideIcons({ lucideBell })],
  imports: [
    HlmButtonDirective,
    HlmIconDirective,
    NgIcon,
    HlmBadgeDirective,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
    HlmButtonDirective,
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
  ],
  template: \`
    <brn-popover sideOffset="5">
      <button variant="outline" size="icon" class="relative" brnPopoverTrigger hlmBtn>
        <ng-icon hlm name="lucideBell" size="sm"/>
        @if (unreadCount() > 0) {
          <span
            hlmBadge
            class="absolute -top-2 left-full flex min-w-5 -translate-x-1/2 items-center justify-center px-1 py-[1px]">
            {{ unreadCount() }}
          </span>
        }
      </button>
      <div hlmPopoverContent class="w-80 grid gap-2" *brnPopoverContent="let ctx">
        <div class="flex items-center justify-between">
          <span class="text-sm font-semibold">Notifications</span>
          @if (unreadCount() > 0) {
            <button (click)="markAllAsRead()" class="text-xs text-muted-foreground hover:underline focus:outline-none">
              Mark all as read
            </button>
          }
        </div>
        <hr class="border-muted -mx-4" />
        <ul class="max-h-96 space-y-3 overflow-y-auto -mx-2">
          @for (notification of notifications; track $index) {
            <li
              class="hover:bg-muted flex items-start justify-between gap-2 rounded-md py-2 px-4 transition-colors"
              (click)="markAsRead($index)"
            >
              <hlm-avatar variant="medium" class="border-border/50 rounded-lg border">
                <img
                  hlmAvatarImage
                  [src]="notification.avatar"
                  [alt]="notification.user"
                />
                <span hlmAvatarFallback>
                   {{ notification.initials }}
                </span>
              </hlm-avatar>

              <div class="flex flex-1 justify-between">
                <div>
                  <div class="text-sm">
                    <span class="font-medium">{{ notification.user }}</span>
                    {{ notification.action }}
                    <span class="font-medium">{{ notification.subject }}.</span>
                  </div>
                  <div class="text-xs text-muted-foreground">{{ notification.time }}</div>
                </div>
                <div class="mt-1 h-2 w-2">
                  @if (notification.unread) {
                    <div class="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                  }
                </div>
              </div>
            </li>
          }
        </ul>
      </div>
    </brn-popover>
  \`,
})
export class Popover03Component {
  notifications = [
    {
      user: 'Alan Cooper',
      action: 'requested review on',
      subject: 'PR #42: Feature implementation',
      time: '15 minutes ago',
      unread: true,
      avatar: 'assets/avatars/alan-cooper.png',
      initials: 'AC',
    },
    {
      user: 'Alexis Sears',
      action: 'shared',
      subject: 'New component library',
      time: '45 minutes ago',
      unread: true,
      avatar: 'assets/avatars/alexis-sears.png',
      initials: 'AS',
    },
    {
      user: 'Jessica Lambert',
      action: 'assigned you to',
      subject: 'API integration task',
      time: '4 hours ago',
      unread: false,
      avatar: 'assets/avatars/jessica-lambert.png',
      initials: 'JL',
    },
    {
      user: 'Skylar Dias',
      action: 'replied to your comment in',
      subject: 'Authentication flow',
      time: '12 hours ago',
      unread: false,
      avatar: 'assets/avatars/skylar-dias.png',
      initials: 'SD',
    },
  ];

  unreadCount = () => this.notifications.filter(n => n.unread).length;

  markAsRead(index: number): void {
    if (this.notifications[index].unread) {
      this.notifications[index].unread = false;
    }
  }

  markAllAsRead(): void {
    this.notifications.forEach(n => {
      if (n.unread) {
        n.unread = false;
      }
    });
  }
}
`;
