import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBolt,
	lucideChevronDown,
	lucideCopyPlus,
	lucideFile,
	lucideLayers2,
	lucideTrash,
} from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuSeparator } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-04',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger, HlmMenuSeparator],
	providers: [provideIcons({ lucideChevronDown, lucideCopyPlus, lucideBolt, lucideLayers2, lucideFile, lucideTrash })],
	template: `
		<div class="flex w-40 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Grouped items</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideCopyPlus" size="sm" />
						<span>Copy</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideBolt" size="sm" />
						<span>Edit</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideLayers2" size="sm" />
						<span>Group</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideFile" size="sm" />
						<span>Clone</span>
					</button>
					<button hlmMenuItem variant="destructive" class="hover:bg-destructive/10 dark:hover:bg-destructive/40">
						<ng-icon hlm name="lucideTrash" size="sm" />
						<span>Delete</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	`,
})
export class Dropdown04Component {}

export const dropdown04Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBolt,
	lucideChevronDown,
	lucideCopyPlus,
	lucideFile,
	lucideLayers2,
	lucideTrash,
} from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuSeparator } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-04',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger, HlmMenuSeparator],
	providers: [provideIcons({ lucideChevronDown, lucideCopyPlus, lucideBolt, lucideLayers2, lucideFile, lucideTrash })],
	template: \`
		<div class="flex w-40 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Grouped items</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideCopyPlus" size="sm" />
						<span>Copy</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideBolt" size="sm" />
						<span>Edit</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideLayers2" size="sm" />
						<span>Group</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideFile" size="sm" />
						<span>Clone</span>
					</button>
					<button hlmMenuItem variant="destructive" class="hover:bg-destructive/10 dark:hover:bg-destructive/40">
						<ng-icon hlm name="lucideTrash" size="sm" />
						<span>Delete</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class Dropdown04Component {}`;
