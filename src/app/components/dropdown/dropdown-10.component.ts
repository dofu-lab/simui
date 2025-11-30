import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUser } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-10',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideCircleUser })],
	template: `
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="outline" size="icon" align="center" [hlmDropdownMenuTrigger]="menu">
				<ng-icon hlm name="lucideCircleUser" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<div class="text-muted-foreground flex flex-col px-2 py-1.5 text-xs font-medium data-[inset]:pl-8">
						<span>Signed in as</span>
						<span class="text-foreground font-normal">tdphuong&#64;simui.dev</span>
					</div>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Profile</span>
					</button>
					<button hlmDropdownMenuItem>
						<span>Settings</span>
					</button>
					<button hlmDropdownMenuItem>
						<span>Permissions</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Logout</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class Dropdown10Component {}

export const dropdown10Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleUser } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-10',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideCircleUser })],
	template: \`
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="outline" size="icon" align="center" [hlmDropdownMenuTrigger]="menu">
				<ng-icon hlm name="lucideCircleUser" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<div class="text-muted-foreground flex flex-col px-2 py-1.5 text-xs font-medium data-[inset]:pl-8">
						<span>Signed in as</span>
						<span class="text-foreground font-normal">tdphuong&#64;simui.dev</span>
					</div>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Profile</span>
					</button>
					<button hlmDropdownMenuItem>
						<span>Settings</span>
					</button>
					<button hlmDropdownMenuItem>
						<span>Permissions</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Logout</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	\`,
})
export class Dropdown10Component {}`;
