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
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuSeparator } from '@spartan-ng/helm/menu';
@Component({
	selector: 'sim-dropdown-12',
	imports: [
		NgIcon,
		HlmIcon,
		HlmMenu,
		HlmMenuItem,
		HlmButton,
		HlmMenuGroup,
		BrnMenuTrigger,
		HlmMenuSeparator,
		HlmAvatar,
		HlmAvatarImage,
		HlmAvatarFallback,
	],
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
				[brnMenuTriggerFor]="menu">
				<hlm-avatar class="border-border/50 size-8 border">
					<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-50">
				<hlm-menu-group class="flex items-center gap-2 px-2 py-1.5">
					<div class="flex flex-1 flex-col">
						<span class="text-foreground text-sm font-medium">Mathilde Lewis</span>
						<span class="text-muted-foreground text-xs">m.lewis&#64;simui.dev</span>
					</div>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideUserPen" size="sm" />
						<span>Profile</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideSettings" size="sm" />
						<span>Settings</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideShieldCheck" size="sm" />
						<span>Permissions</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideLifeBuoy" size="sm" />
						<span>Help & Support</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideMessageSquareWarning" size="sm" />
						<span>Report a Problem</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideLogOut" size="sm" />
						<span>Logout</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
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
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuSeparator } from '@spartan-ng/helm/menu';
@Component({
	selector: 'sim-dropdown-12',
	imports: [
		NgIcon,
		HlmIcon,
		HlmMenu,
		HlmMenuItem,
		HlmButton,
		HlmMenuGroup,
		BrnMenuTrigger,
		HlmMenuSeparator,
		HlmAvatar,
		HlmAvatarImage,
		HlmAvatarFallback,
	],
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
				[brnMenuTriggerFor]="menu">
				<hlm-avatar class="border-border/50 size-8 border">
					<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-50">
				<hlm-menu-group class="flex items-center gap-2 px-2 py-1.5">
					<div class="flex flex-1 flex-col">
						<span class="text-foreground text-sm font-medium">Mathilde Lewis</span>
						<span class="text-muted-foreground text-xs">m.lewis&#64;simui.dev</span>
					</div>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideUserPen" size="sm" />
						<span>Profile</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideSettings" size="sm" />
						<span>Settings</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideShieldCheck" size="sm" />
						<span>Permissions</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideLifeBuoy" size="sm" />
						<span>Help & Support</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideMessageSquareWarning" size="sm" />
						<span>Report a Problem</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideLogOut" size="sm" />
						<span>Logout</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class Dropdown12Component {}`;
