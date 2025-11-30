import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell } from '@ng-icons/lucide';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmPopoverContent } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-03',
	providers: [provideIcons({ lucideBell })],
	imports: [
		BrnPopover,
		BrnPopoverContent,
		BrnPopoverTrigger,
		HlmAvatar,
		HlmAvatarFallback,
		HlmAvatarImage,
		HlmBadge,
		HlmButton,
		HlmIcon,
		HlmPopoverContent,
		NgIcon,
	],
	template: `
		<brn-popover sideOffset="5">
			<button variant="outline" size="icon" class="relative size-9" brnPopoverTrigger hlmBtn>
				<ng-icon hlm name="lucideBell" size="sm" />
				@if (unreadCount() > 0) {
					<span
						hlmBadge
						class="absolute -top-2 left-full flex min-w-5 -translate-x-1/2 items-center justify-center px-1 py-[1px]">
						{{ unreadCount() }}
					</span>
				}
			</button>
			<div hlmPopoverContent class="grid w-80 gap-1 p-1" *brnPopoverContent="let ctx">
				<div class="flex items-center justify-between px-3 py-2">
					<span class="text-sm font-semibold">Notifications</span>
					@if (unreadCount() > 0) {
						<button (click)="markAllAsRead()" class="text-xs hover:underline focus:outline-none">
							Mark all as read
						</button>
					}
				</div>
				<hr class="border-muted -mx-1" />
				<ul class="max-h-96 overflow-y-auto">
					@for (notification of notifications(); track $index) {
						<li
							class="hover:bg-muted flex items-start justify-between gap-2 rounded-md px-3 py-2 transition-colors select-none"
							(click)="markAsRead($index)">
							<hlm-avatar class="border-border/50 size-10 border">
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
								<div class="self-center">
									@if (notification.unread) {
										<div class="bg-primary size-1.5 rounded-full"></div>
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
	notifications = signal([
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
	]);

	unreadCount = computed(() => this.notifications().filter((notification) => notification.unread).length);

	public markAsRead(index: number): void {
		this.notifications.update((notifications) =>
			notifications.map((notification, i) =>
				i === index && notification.unread ? { ...notification, unread: false } : notification,
			),
		);
	}

	public markAllAsRead(): void {
		this.notifications.update((notifications) =>
			notifications.map((notification) => ({
				...notification,
				unread: false,
			})),
		);
	}
}