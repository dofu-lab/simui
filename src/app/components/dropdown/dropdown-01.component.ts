import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsis } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-01',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger],
	providers: [provideIcons({ lucideEllipsis })],
	template: `
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="ghost" size="icon" align="center" [brnMenuTriggerFor]="menu">
				<ng-icon hlm name="lucideEllipsis" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
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
export class Dropdown01Component {}

export const dropdown01Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsis } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-01',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger],
	providers: [provideIcons({ lucideEllipsis })],
	template: \`
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="ghost" size="icon" align="center" [brnMenuTriggerFor]="menu">
				<ng-icon hlm name="lucideEllipsis" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
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
export class Dropdown01Component {}`;
