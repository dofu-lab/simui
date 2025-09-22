import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBolt, lucideChevronDown, lucideCopyPlus, lucideFile, lucideLayers2 } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItemCheck, HlmMenuItemCheckbox } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-06',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmButton, HlmMenuGroup, BrnMenuTrigger, HlmMenuItemCheckbox, HlmMenuItemCheck],
	providers: [provideIcons({ lucideChevronDown, lucideCopyPlus, lucideBolt, lucideLayers2, lucideFile })],
	template: `
		<div class="flex w-40 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Menu with icons</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<button hlmMenuItemCheckbox [checked]="angular()" (click)="angular.set(!angular())">
						<hlm-menu-item-check />
						<span>Angular</span>
					</button>
					<button hlmMenuItemCheckbox [checked]="tailwind()" (click)="tailwind.set(!tailwind())">
						<hlm-menu-item-check />
						<span>TailwindCSS</span>
					</button>
					<button hlmMenuItemCheckbox disabled [checked]="rxjs()" (click)="rxjs.set(!rxjs())">
						<hlm-menu-item-check />
						<span>RxJS</span>
					</button>
					<button hlmMenuItemCheckbox [checked]="typescript()" (click)="typescript.set(!typescript())">
						<hlm-menu-item-check />
						<span>TypeScript</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	`,
})
export class Dropdown06Component {
	angular = signal(true);
	tailwind = signal(false);
	rxjs = signal(false);
	typescript = signal(true);
}

export const dropdown06Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBolt, lucideChevronDown, lucideCopyPlus, lucideFile, lucideLayers2 } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItemCheck, HlmMenuItemCheckbox } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-06',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmButton, HlmMenuGroup, BrnMenuTrigger, HlmMenuItemCheckbox, HlmMenuItemCheck],
	providers: [provideIcons({ lucideChevronDown, lucideCopyPlus, lucideBolt, lucideLayers2, lucideFile })],
	template: \`
		<div class="flex w-40 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Menu with icons</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<button hlmMenuItemCheckbox [checked]="angular()" (click)="angular.set(!angular())">
						<hlm-menu-item-check />
						<span>Angular</span>
					</button>
					<button hlmMenuItemCheckbox [checked]="tailwind()" (click)="tailwind.set(!tailwind())">
						<hlm-menu-item-check />
						<span>TailwindCSS</span>
					</button>
					<button hlmMenuItemCheckbox disabled [checked]="rxjs()" (click)="rxjs.set(!rxjs())">
						<hlm-menu-item-check />
						<span>RxJS</span>
					</button>
					<button hlmMenuItemCheckbox [checked]="typescript()" (click)="typescript.set(!typescript())">
						<hlm-menu-item-check />
						<span>TypeScript</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class Dropdown06Component {
	angular = signal(true);
	tailwind = signal(false);
	rxjs = signal(false);
	typescript = signal(true);
}`;
