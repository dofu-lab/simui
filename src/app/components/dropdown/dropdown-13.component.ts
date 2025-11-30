import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBookText, lucideCircleAlert, lucideLifeBuoy, lucideMessageCircleMore } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-13',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideCircleAlert, lucideLifeBuoy, lucideMessageCircleMore, lucideBookText })],
	template: `
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="ghost" size="icon" align="center" class="rounded-full" [hlmDropdownMenuTrigger]="menu">
				<ng-icon hlm name="lucideCircleAlert" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<hlm-dropdown-menu-label class="text-muted-foreground text-xs font-normal">
						Need help?
					</hlm-dropdown-menu-label>
					<button hlmDropdownMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideBookText" size="sm" />
						<span>Documentation</span>
					</button>
					<button hlmDropdownMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideLifeBuoy" size="sm" />
						<span>Support</span>
					</button>
					<button hlmDropdownMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideMessageCircleMore" size="sm" />
						<span>Contact Us</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class Dropdown13Component {}

export const dropdown13Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBookText, lucideCircleAlert, lucideLifeBuoy, lucideMessageCircleMore } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-13',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideCircleAlert, lucideLifeBuoy, lucideMessageCircleMore, lucideBookText })],
	template: \`
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="ghost" size="icon" align="center" class="rounded-full" [hlmDropdownMenuTrigger]="menu">
				<ng-icon hlm name="lucideCircleAlert" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<hlm-dropdown-menu-label class="text-muted-foreground text-xs font-normal">
						Need help?
					</hlm-dropdown-menu-label>
					<button hlmDropdownMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideBookText" size="sm" />
						<span>Documentation</span>
					</button>
					<button hlmDropdownMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideLifeBuoy" size="sm" />
						<span>Support</span>
					</button>
					<button hlmDropdownMenuItem class="cursor-pointer py-1 hover:bg-transparent hover:underline">
						<ng-icon hlm name="lucideMessageCircleMore" size="sm" />
						<span>Contact Us</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	\`,
})
export class Dropdown13Component {}`;
