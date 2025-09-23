import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUser } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuSeparator } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-10',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger, HlmMenuSeparator],
	providers: [provideIcons({ lucideCircleUser })],
	template: `
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="outline" size="icon" align="center" [brnMenuTriggerFor]="menu">
				<ng-icon hlm name="lucideCircleUser" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<div class="text-muted-foreground flex flex-col px-2 py-1.5 text-xs font-medium data-[inset]:pl-8">
						<span>Signed in as</span>
						<span class="text-foreground font-normal">tdphuong&#64;simui.dev</span>
					</div>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Profile</span>
					</button>
					<button hlmMenuItem>
						<span>Settings</span>
					</button>
					<button hlmMenuItem>
						<span>Permissions</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Logout</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	`,
})
export class Dropdown10Component {}

export const dropdown10Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUser } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuSeparator } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-10',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger, HlmMenuSeparator],
	providers: [provideIcons({ lucideCircleUser })],
	template: \`
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="outline" size="icon" align="center" [brnMenuTriggerFor]="menu">
				<ng-icon hlm name="lucideCircleUser" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<div class="text-muted-foreground flex flex-col px-2 py-1.5 text-xs font-medium data-[inset]:pl-8">
						<span>Signed in as</span>
						<span class="text-foreground font-normal">tdphuong&#64;simui.dev</span>
					</div>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Profile</span>
					</button>
					<button hlmMenuItem>
						<span>Settings</span>
					</button>
					<button hlmMenuItem>
						<span>Permissions</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Logout</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class Dropdown10Component {}`;
