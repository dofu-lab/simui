import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-02',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideChevronDown })],
	template: `
		<div class="flex w-50 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [hlmDropdownMenuTrigger]="menu">
				<span>Same width of trigger</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-50">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Option 1</span>
					</button>
					<button hlmDropdownMenuItem>
						<span>Option 2</span>
					</button>
					<button hlmDropdownMenuItem>
						<span>Option 3</span>
					</button>
					<button hlmDropdownMenuItem>
						<span>Option 4</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class Dropdown02Component {}