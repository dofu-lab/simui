import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBolt, lucideChevronDown, lucideCopyPlus, lucideFile, lucideLayers2 } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-03',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideChevronDown, lucideCopyPlus, lucideBolt, lucideLayers2, lucideFile })],
	template: `
		<div class="flex w-40 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [hlmDropdownMenuTrigger]="menu">
				<span>Menu with icons</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideCopyPlus" size="sm" />
						<span>Copy</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideBolt" size="sm" />
						<span>Edit</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideLayers2" size="sm" />
						<span>Group</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideFile" size="sm" />
						<span>Clone</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class Dropdown03Component {}

export const dropdown03Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBolt, lucideChevronDown, lucideCopyPlus, lucideFile, lucideLayers2 } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-03',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideChevronDown, lucideCopyPlus, lucideBolt, lucideLayers2, lucideFile })],
	template: \`
		<div class="flex w-40 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [hlmDropdownMenuTrigger]="menu">
				<span>Menu with icons</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideCopyPlus" size="sm" />
						<span>Copy</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideBolt" size="sm" />
						<span>Edit</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideLayers2" size="sm" />
						<span>Group</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideFile" size="sm" />
						<span>Clone</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	\`,
})
export class Dropdown03Component {}`;
