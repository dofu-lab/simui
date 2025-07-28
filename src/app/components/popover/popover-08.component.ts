import { Component, signal } from '@angular/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmPopoverContentDirective } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-08',
	imports: [
		HlmButtonDirective,
		BrnPopoverComponent,
		BrnPopoverTriggerDirective,
		BrnPopoverContentDirective,
		HlmPopoverContentDirective,
		HlmAvatarComponent,
		HlmAvatarImageDirective,
		HlmAvatarFallbackDirective,
	],
	template: `
		<brn-popover sideOffset="5">
			<button hlmBtn brnPopoverTrigger variant="outline" size="sm" class="pl-3">
				<div class="flex items-center gap-2">
					<hlm-avatar class="h-6 w-6 border">
						<img hlmAvatarImage [src]="currentAccount().avatar" [alt]="currentAccount().name" />
						<span hlmAvatarFallback>{{ currentAccount().initials }}</span>
					</hlm-avatar>
					<span class="text-sm font-medium">{{ currentAccount().name }}</span>
				</div>
			</button>

			<div hlmPopoverContent class="grid w-64 gap-2 p-0" *brnPopoverContent="let ctx">
				<div class="px-2 pt-2">
					<div class="px-2 pt-2 text-sm font-semibold">Switch account</div>
					<ul class="mt-2 space-y-1">
						@for (user of users; track $index) {
							<li
								(click)="switchUser(user, ctx)"
								class="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-md p-2 transition-colors">
								<hlm-avatar class="h-6 w-6 border">
									<img hlmAvatarImage [src]="user.avatar" [alt]="user.name" />
									<span hlmAvatarFallback>{{ user.initials }}</span>
								</hlm-avatar>
								<span class="text-sm">{{ user.name }}</span>
							</li>
						}
					</ul>
				</div>

				<hr class="border-muted" />

				<div class="grid gap-2 p-2 pt-0">
					<button hlmBtn variant="outline" size="sm">Manage account</button>
					<button hlmBtn variant="ghost" size="sm">Sign out</button>
				</div>
			</div>
		</brn-popover>
	`,
})
export class Popover08Component {
	public readonly users = [
		{ name: 'Alan Cooper', initials: 'AC', avatar: 'assets/avatars/alan-cooper.png' },
		{ name: 'Skylar Dias', initials: 'JW', avatar: 'assets/avatars/skylar-dias.png' },
		{ name: 'Alexis Sears', initials: 'AS', avatar: 'assets/avatars/alexis-sears.png' },
	];

	currentAccount = signal(this.users[0]);

	public switchUser(user: any, ctx: { close: () => void }): void {
		this.currentAccount.set(user);
		ctx.close();
	}
}

export const popover08Code = `import { Component, signal } from '@angular/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmPopoverContentDirective } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-08',
	imports: [
		HlmButtonDirective,
		BrnPopoverComponent,
		BrnPopoverTriggerDirective,
		BrnPopoverContentDirective,
		HlmPopoverContentDirective,
		HlmAvatarComponent,
		HlmAvatarImageDirective,
		HlmAvatarFallbackDirective,
	],
	template: \`
		<brn-popover sideOffset="5">
			<button hlmBtn brnPopoverTrigger variant="outline" size="sm" class="pl-3">
				<div class="flex items-center gap-2">
					<hlm-avatar class="h-6 w-6 border">
						<img hlmAvatarImage [src]="currentAccount().avatar" [alt]="currentAccount().name" />
						<span hlmAvatarFallback>{{ currentAccount().initials }}</span>
					</hlm-avatar>
					<span class="text-sm font-medium">{{ currentAccount().name }}</span>
				</div>
			</button>

			<div hlmPopoverContent class="grid w-64 gap-2 p-0" *brnPopoverContent="let ctx">
				<div class="px-2 pt-2">
					<div class="px-2 pt-2 text-sm font-semibold">Switch account</div>
					<ul class="mt-2 space-y-1">
						@for (user of users; track $index) {
							<li
								(click)="switchUser(user, ctx)"
								class="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-md p-2 transition-colors">
								<hlm-avatar class="h-6 w-6 border">
									<img hlmAvatarImage [src]="user.avatar" [alt]="user.name" />
									<span hlmAvatarFallback>{{ user.initials }}</span>
								</hlm-avatar>
								<span class="text-sm">{{ user.name }}</span>
							</li>
						}
					</ul>
				</div>

				<hr class="border-muted" />

				<div class="grid gap-2 p-2 pt-0">
					<button hlmBtn variant="outline" size="sm">Manage account</button>
					<button hlmBtn variant="ghost" size="sm">Sign out</button>
				</div>
			</div>
		</brn-popover>
	\`,
})
export class Popover08Component {
	public readonly users = [
		{ name: 'Alan Cooper', initials: 'AC', avatar: 'assets/avatars/alan-cooper.png' },
		{ name: 'Skylar Dias', initials: 'JW', avatar: 'assets/avatars/skylar-dias.png' },
		{ name: 'Alexis Sears', initials: 'AS', avatar: 'assets/avatars/alexis-sears.png' },
	];

	currentAccount = signal(this.users[0]);

	public switchUser(user: any, ctx: { close: () => void }): void {
		this.currentAccount.set(user);
		ctx.close();
	}
}`;
