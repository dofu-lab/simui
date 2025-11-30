import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsis } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-01',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideEllipsis })],
	template: `
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="ghost" size="icon" align="center" [hlmDropdownMenuTrigger]="menu">
				<ng-icon hlm name="lucideEllipsis" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
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
export class Dropdown01Component {}