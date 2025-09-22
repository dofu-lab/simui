import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBolt, lucideChevronDown, lucideCopyPlus, lucideFile, lucideLayers2 } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItemRadio, HlmMenuItemRadioIndicator } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-07',
	imports: [
		NgIcon,
		HlmIcon,
		HlmMenu,
		HlmButton,
		HlmMenuGroup,
		BrnMenuTrigger,
		HlmMenuItemRadio,
		HlmMenuItemRadioIndicator,
	],
	providers: [provideIcons({ lucideChevronDown, lucideCopyPlus, lucideBolt, lucideLayers2, lucideFile })],
	template: `
		<div class="flex w-35 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Radio items</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-35">
				<hlm-menu-group>
					<button hlmMenuItemRadio [checked]="value() === 'angular'" (click)="value.set('angular')">
						<hlm-menu-item-radio />
						<span>Angular</span>
					</button>
					<button hlmMenuItemRadio [checked]="value() === 'typescript'" (click)="value.set('typescript')">
						<hlm-menu-item-radio />
						<span>TypeScript</span>
					</button>
					<button hlmMenuItemRadio [checked]="value() === 'rxjs'" (click)="value.set('rxjs')">
						<hlm-menu-item-radio />
						<span>RxJS</span>
					</button>
					<button hlmMenuItemRadio [checked]="value() === 'tailwindcss'" (click)="value.set('tailwindcss')">
						<hlm-menu-item-radio />
						<span>TailwindCSS</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	`,
})
export class Dropdown07Component {
	value = signal('angular');
}

export const dropdown07Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBolt, lucideChevronDown, lucideCopyPlus, lucideFile, lucideLayers2 } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItemRadio, HlmMenuItemRadioIndicator } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-07',
	imports: [
		NgIcon,
		HlmIcon,
		HlmMenu,
		HlmButton,
		HlmMenuGroup,
		BrnMenuTrigger,
		HlmMenuItemRadio,
		HlmMenuItemRadioIndicator,
	],
	providers: [provideIcons({ lucideChevronDown, lucideCopyPlus, lucideBolt, lucideLayers2, lucideFile })],
	template: \`
		<div class="flex w-35 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Radio items</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-35">
				<hlm-menu-group>
					<button hlmMenuItemRadio [checked]="value() === 'angular'" (click)="value.set('angular')">
						<hlm-menu-item-radio />
						<span>Angular</span>
					</button>
					<button hlmMenuItemRadio [checked]="value() === 'typescript'" (click)="value.set('typescript')">
						<hlm-menu-item-radio />
						<span>TypeScript</span>
					</button>
					<button hlmMenuItemRadio [checked]="value() === 'rxjs'" (click)="value.set('rxjs')">
						<hlm-menu-item-radio />
						<span>RxJS</span>
					</button>
					<button hlmMenuItemRadio [checked]="value() === 'tailwindcss'" (click)="value.set('tailwindcss')">
						<hlm-menu-item-radio />
						<span>TailwindCSS</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class Dropdown07Component {
	value = signal('angular');
}`;
