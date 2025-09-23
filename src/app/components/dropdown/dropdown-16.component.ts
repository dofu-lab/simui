import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBox,
	lucideChevronDown,
	lucideLayers2,
	lucideLogOut,
	lucideMessageCircleQuestion,
	lucideSettings,
	lucideSlack,
	lucideUser,
	lucideUserPlus,
	lucideUsers,
	lucideWarehouse,
	lucideZap,
} from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuSeparator, HlmMenuShortcut } from '@spartan-ng/helm/menu';
@Component({
	selector: 'sim-dropdown-16',
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
		HlmMenuShortcut,
	],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideUser,
			lucideSettings,
			lucideZap,
			lucideWarehouse,
			lucideUsers,
			lucideUserPlus,
			lucideLayers2,
			lucideSlack,
			lucideMessageCircleQuestion,
			lucideBox,
			lucideLogOut,
		}),
	],
	template: `
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="outline" align="center" [brnMenuTriggerFor]="menu">
				<span>Account</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-55">
				<hlm-menu-group class="flex items-center gap-2 px-2 py-1.5">
					<hlm-avatar class="border-border/50 size-8 border">
						<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
						<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
					</hlm-avatar>
					<div class="flex flex-1 flex-col">
						<span class="text-foreground text-sm font-medium">Mathilde Lewis</span>
						<span class="text-muted-foreground text-xs">m.lewis&#64;simui.dev</span>
					</div>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideUser" size="sm" />
						<span>View profile</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+P
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideSettings" size="sm" />
						<span>Settings</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘S
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideZap" size="sm" />
						<span>Keyboard shortcuts</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							?
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideWarehouse" size="sm" />
						<span>Company profile</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+C
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideUsers" size="sm" />
						<span>Team</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+T
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideUserPlus" size="sm" />
						<span>Invite colleagues</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘I
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideLayers2" size="sm" />
						<span>Changelog</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideSlack" size="sm" />
						<span>Slack Community</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideMessageCircleQuestion" size="sm" />
						<span>Support</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideBox" size="sm" />
						<span>API</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideLogOut" size="sm" />
						<span>Logout</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌥⇧Q
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	`,
})
export class Dropdown16Component {}

export const dropdown16Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBox,
	lucideChevronDown,
	lucideLayers2,
	lucideLogOut,
	lucideMessageCircleQuestion,
	lucideSettings,
	lucideSlack,
	lucideUser,
	lucideUserPlus,
	lucideUsers,
	lucideWarehouse,
	lucideZap,
} from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuSeparator, HlmMenuShortcut } from '@spartan-ng/helm/menu';
@Component({
	selector: 'sim-dropdown-16',
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
		HlmMenuShortcut,
	],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideUser,
			lucideSettings,
			lucideZap,
			lucideWarehouse,
			lucideUsers,
			lucideUserPlus,
			lucideLayers2,
			lucideSlack,
			lucideMessageCircleQuestion,
			lucideBox,
			lucideLogOut,
		}),
	],
	template: \`
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="outline" align="center" [brnMenuTriggerFor]="menu">
				<span>Account</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-55">
				<hlm-menu-group class="flex items-center gap-2 px-2 py-1.5">
					<hlm-avatar class="border-border/50 size-8 border">
						<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
						<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
					</hlm-avatar>
					<div class="flex flex-1 flex-col">
						<span class="text-foreground text-sm font-medium">Mathilde Lewis</span>
						<span class="text-muted-foreground text-xs">m.lewis&#64;simui.dev</span>
					</div>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideUser" size="sm" />
						<span>View profile</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+P
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideSettings" size="sm" />
						<span>Settings</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘S
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideZap" size="sm" />
						<span>Keyboard shortcuts</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							?
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideWarehouse" size="sm" />
						<span>Company profile</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+C
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideUsers" size="sm" />
						<span>Team</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+T
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideUserPlus" size="sm" />
						<span>Invite colleagues</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘I
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideLayers2" size="sm" />
						<span>Changelog</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideSlack" size="sm" />
						<span>Slack Community</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideMessageCircleQuestion" size="sm" />
						<span>Support</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideBox" size="sm" />
						<span>API</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideLogOut" size="sm" />
						<span>Logout</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌥⇧Q
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class Dropdown16Component {}`;
