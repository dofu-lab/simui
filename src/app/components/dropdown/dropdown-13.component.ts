import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBookText, lucideCircleAlert, lucideLifeBuoy, lucideMessageCircleMore } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuLabel } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-13',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger, HlmMenuLabel],
	providers: [provideIcons({ lucideCircleAlert, lucideLifeBuoy, lucideMessageCircleMore, lucideBookText })],
	template: `
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="ghost" size="icon" align="center" class="rounded-full" [brnMenuTriggerFor]="menu">
				<ng-icon hlm name="lucideCircleAlert" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<hlm-menu-label class="text-muted-foreground text-xs font-normal">Need help?</hlm-menu-label>
					<button hlmMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideBookText" size="sm" />
						<span>Documentation</span>
					</button>
					<button hlmMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideLifeBuoy" size="sm" />
						<span>Support</span>
					</button>
					<button hlmMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideMessageCircleMore" size="sm" />
						<span>Contact Us</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	`,
})
export class Dropdown13Component {}

export const dropdown13Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBookText, lucideCircleAlert, lucideLifeBuoy, lucideMessageCircleMore } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuLabel } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-13',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger, HlmMenuLabel],
	providers: [provideIcons({ lucideCircleAlert, lucideLifeBuoy, lucideMessageCircleMore, lucideBookText })],
	template: \`
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="ghost" size="icon" align="center" class="rounded-full" [brnMenuTriggerFor]="menu">
				<ng-icon hlm name="lucideCircleAlert" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<hlm-menu-label class="text-muted-foreground text-xs font-normal">Need help?</hlm-menu-label>
					<button hlmMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideBookText" size="sm" />
						<span>Documentation</span>
					</button>
					<button hlmMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideLifeBuoy" size="sm" />
						<span>Support</span>
					</button>
					<button hlmMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideMessageCircleMore" size="sm" />
						<span>Contact Us</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class Dropdown13Component {}`;
