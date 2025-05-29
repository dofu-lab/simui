import { Component } from '@angular/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

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
			<button variant="outline" brnPopoverTrigger hlmBtn>
				<div class="flex items-center gap-2">
					<hlm-avatar class="h-6 w-6 border">
						<img hlmAvatarImage [src]="currentAccount.avatar" [alt]="currentAccount.name" />
						<span hlmAvatarFallback>{{ currentAccount.initials }}</span>
					</hlm-avatar>
					<span class="text-sm font-medium">{{ currentAccount.name }}</span>
				</div>
			</button>

			<div hlmPopoverContent class="grid w-64 gap-4 p-4" *brnPopoverContent="let ctx">
				<div>
					<div class="text-sm font-semibold">Switch account</div>
					<ul class="mt-2 space-y-2">
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

				<div class="grid gap-2">
					<button hlmBtn variant="outline" size="sm">Manage account</button>
					<button hlmBtn variant="ghost" size="sm">Sign out</button>
				</div>
			</div>
		</brn-popover>
	`,
})
export class Popover08Component {
	users = [
		{ name: 'Alan Cooper', initials: 'AC', avatar: 'assets/avatars/alan-cooper.png' },
		{ name: 'Skylar Dias', initials: 'JW', avatar: 'assets/avatars/skylar-dias.png' },
		{ name: 'Alexis Sears', initials: 'AS', avatar: 'assets/avatars/alexis-sears.png' },
	];

	currentAccount = this.users[0];

	switchUser(user: any, ctx: { close: () => void }) {
		this.currentAccount = user;
		ctx.close();
	}
}

export const Popover08Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/brain/popover';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import {
  HlmAvatarComponent,
  HlmAvatarImageDirective,
  HlmAvatarFallbackDirective,
} from '@spartan-ng/ui-avatar-helm';

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
      <button variant="outline" brnPopoverTrigger hlmBtn>
        <div class="flex items-center gap-2">
          <hlm-avatar class="h-6 w-6 border">
            <img hlmAvatarImage  [src]="currentAccount.avatar"  [alt]="currentAccount.name" />
            <span hlmAvatarFallback>{{ currentAccount.initials }}</span>
          </hlm-avatar>
          <span class="text-sm font-medium">{{ currentAccount.name }}</span>
        </div>
      </button>

      <div hlmPopoverContent class="w-64 p-4 grid gap-4" *brnPopoverContent="let ctx">
        <div>
          <div class="text-sm font-semibold">Switch account</div>
          <ul class="mt-2 space-y-2">
            @for(user of users; track $index){
            <li
              (click)="switchUser(user, ctx)"
              class="flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-muted cursor-pointer"
            >
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

        <div class="grid gap-2">
          <button hlmBtn variant="outline" size="sm">Manage account</button>
          <button hlmBtn variant="ghost" size="sm" >
            Sign out
          </button>
        </div>
      </div>
    </brn-popover>
  \`,
})
export class Popover08Component {
  users = [
    { name: 'Alan Cooper', initials: 'AC', avatar: 'assets/avatars/alan-cooper.png' },
    { name: 'Skylar Dias', initials: 'JW', avatar: 'assets/avatars/skylar-dias.png' },
    { name: 'Alexis Sears', initials: 'AS', avatar: 'assets/avatars/alexis-sears.png' },
  ];

  currentAccount = this.users[0];

  switchUser(user: any, ctx: { close: () => void }) {
    this.currentAccount = user;
    ctx.close();
  }
}
`;
