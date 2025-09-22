import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-02',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger],
	providers: [provideIcons({ lucideChevronDown })],
	template: `
		<div class="flex w-50 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Same width of trigger</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-50">
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Option 1</span>
					</button>
					<button hlmMenuItem>
						<span>Option 2</span>
					</button>
					<button hlmMenuItem>
						<span>Option 3</span>
					</button>
					<button hlmMenuItem>
						<span>Option 4</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	`,
})
export class Dropdown02Component {}

export const dropdown02Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-02',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger],
	providers: [provideIcons({ lucideChevronDown })],
	template: \`
		<div class="flex w-50 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Same width of trigger</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-50">
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Option 1</span>
					</button>
					<button hlmMenuItem>
						<span>Option 2</span>
					</button>
					<button hlmMenuItem>
						<span>Option 3</span>
					</button>
					<button hlmMenuItem>
						<span>Option 4</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class Dropdown02Component {}`;
