import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideChevronDown,
	lucideLifeBuoy,
	lucideLogOut,
	lucideMessageSquareWarning,
	lucideSettings,
	lucideShieldCheck,
	lucideUserPen,
} from '@ng-icons/lucide';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';
@Component({
	selector: 'sim-dropdown-12',
	imports: [NgIcon, HlmIcon, HlmButton, HlmAvatar, HlmAvatarImage, HlmAvatarFallback, HlmDropdownMenuImports],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideUserPen,
			lucideSettings,
			lucideShieldCheck,
			lucideLifeBuoy,
			lucideMessageSquareWarning,
			lucideLogOut,
		}),
	],
	template: `
		<div class="flex w-full items-center justify-center">
			<button
				hlmBtn
				variant="ghost"
				size="lg"
				align="center"
				class="rounded-full py-[5px] has-[>ng-icon]:px-[5px]"
				[hlmDropdownMenuTrigger]="menu">
				<hlm-avatar class="border-border/50 size-8 border">
					<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-50">
				<hlm-dropdown-menu-group class="flex items-center gap-2 px-2 py-1.5">
					<div class="flex flex-1 flex-col">
						<span class="text-foreground text-sm font-medium">Mathilde Lewis</span>
						<span class="text-muted-foreground text-xs">m.lewis&#64;simui.dev</span>
					</div>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideUserPen" size="sm" />
						<span>Profile</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideSettings" size="sm" />
						<span>Settings</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideShieldCheck" size="sm" />
						<span>Permissions</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideLifeBuoy" size="sm" />
						<span>Help & Support</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideMessageSquareWarning" size="sm" />
						<span>Report a Problem</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideLogOut" size="sm" />
						<span>Logout</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class Dropdown12Component {}

export const dropdown12Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideChevronDown,
	lucideLifeBuoy,
	lucideLogOut,
	lucideMessageSquareWarning,
	lucideSettings,
	lucideShieldCheck,
	lucideUserPen,
} from '@ng-icons/lucide';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';
@Component({
	selector: 'sim-dropdown-12',
	imports: [NgIcon, HlmIcon, HlmButton, HlmAvatar, HlmAvatarImage, HlmAvatarFallback, HlmDropdownMenuImports],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideUserPen,
			lucideSettings,
			lucideShieldCheck,
			lucideLifeBuoy,
			lucideMessageSquareWarning,
			lucideLogOut,
		}),
	],
	template: \`
		<div class="flex w-full items-center justify-center">
			<button
				hlmBtn
				variant="ghost"
				size="lg"
				align="center"
				class="rounded-full py-[5px] has-[>ng-icon]:px-[5px]"
				[hlmDropdownMenuTrigger]="menu">
				<hlm-avatar class="border-border/50 size-8 border">
					<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-50">
				<hlm-dropdown-menu-group class="flex items-center gap-2 px-2 py-1.5">
					<div class="flex flex-1 flex-col">
						<span class="text-foreground text-sm font-medium">Mathilde Lewis</span>
						<span class="text-muted-foreground text-xs">m.lewis&#64;simui.dev</span>
					</div>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideUserPen" size="sm" />
						<span>Profile</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideSettings" size="sm" />
						<span>Settings</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideShieldCheck" size="sm" />
						<span>Permissions</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideLifeBuoy" size="sm" />
						<span>Help & Support</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideMessageSquareWarning" size="sm" />
						<span>Report a Problem</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideLogOut" size="sm" />
						<span>Logout</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	\`,
})
export class Dropdown12Component {}`;
