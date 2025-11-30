import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBolt, lucideChevronDown, lucideCopyPlus, lucideFile, lucideLayers2 } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-06',
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
					<button hlmDropdownMenuCheckbox [checked]="angular()" (click)="angular.set(!angular())">
						<hlm-dropdown-menu-checkbox-indicator />
						<span>Angular</span>
					</button>
					<button hlmDropdownMenuCheckbox [checked]="tailwind()" (click)="tailwind.set(!tailwind())">
						<hlm-dropdown-menu-checkbox-indicator />
						<span>TailwindCSS</span>
					</button>
					<button hlmDropdownMenuCheckbox disabled [checked]="rxjs()" (click)="rxjs.set(!rxjs())">
						<hlm-dropdown-menu-checkbox-indicator />
						<span>RxJS</span>
					</button>
					<button hlmDropdownMenuCheckbox [checked]="typescript()" (click)="typescript.set(!typescript())">
						<hlm-dropdown-menu-checkbox-indicator />
						<span>TypeScript</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class Dropdown06Component {
	angular = signal(true);
	tailwind = signal(false);
	rxjs = signal(false);
	typescript = signal(true);
}