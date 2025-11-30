import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBolt, lucideChevronDown, lucideCopyPlus, lucideFile, lucideLayers2 } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-07',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideChevronDown, lucideCopyPlus, lucideBolt, lucideLayers2, lucideFile })],
	template: `
		<div class="flex w-35 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [hlmDropdownMenuTrigger]="menu">
				<span>Radio items</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-35">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuRadio [checked]="value() === 'angular'" (click)="value.set('angular')">
						<hlm-dropdown-menu-radio-indicator />
						<span>Angular</span>
					</button>
					<button hlmDropdownMenuRadio [checked]="value() === 'typescript'" (click)="value.set('typescript')">
						<hlm-dropdown-menu-radio-indicator />
						<span>TypeScript</span>
					</button>
					<button hlmDropdownMenuRadio [checked]="value() === 'rxjs'" (click)="value.set('rxjs')">
						<hlm-dropdown-menu-radio-indicator />
						<span>RxJS</span>
					</button>
					<button hlmDropdownMenuRadio [checked]="value() === 'tailwindcss'" (click)="value.set('tailwindcss')">
						<hlm-dropdown-menu-radio-indicator />
						<span>TailwindCSS</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class Dropdown07Component {
	value = signal('angular');
}

export const dropdown07Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBolt, lucideChevronDown, lucideCopyPlus, lucideFile, lucideLayers2 } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-07',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideChevronDown, lucideCopyPlus, lucideBolt, lucideLayers2, lucideFile })],
	template: \`
		<div class="flex w-35 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [hlmDropdownMenuTrigger]="menu">
				<span>Radio items</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-35">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuRadio [checked]="value() === 'angular'" (click)="value.set('angular')">
						<hlm-dropdown-menu-radio-indicator />
						<span>Angular</span>
					</button>
					<button hlmDropdownMenuRadio [checked]="value() === 'typescript'" (click)="value.set('typescript')">
						<hlm-dropdown-menu-radio-indicator />
						<span>TypeScript</span>
					</button>
					<button hlmDropdownMenuRadio [checked]="value() === 'rxjs'" (click)="value.set('rxjs')">
						<hlm-dropdown-menu-radio-indicator />
						<span>RxJS</span>
					</button>
					<button hlmDropdownMenuRadio [checked]="value() === 'tailwindcss'" (click)="value.set('tailwindcss')">
						<hlm-dropdown-menu-radio-indicator />
						<span>TailwindCSS</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	\`,
})
export class Dropdown07Component {
	value = signal('angular');
}`;
