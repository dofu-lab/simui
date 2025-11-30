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
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';
@Component({
	selector: 'sim-dropdown-16',
	imports: [NgIcon, HlmIcon, HlmButton, HlmAvatar, HlmAvatarImage, HlmAvatarFallback, HlmDropdownMenuImports],
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
			<button hlmBtn variant="outline" align="center" [hlmDropdownMenuTrigger]="menu">
				<span>Account</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-55">
				<hlm-dropdown-menu-group class="flex items-center gap-2 px-2 py-1.5">
					<hlm-avatar class="border-border/50 size-8 border">
						<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
						<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
					</hlm-avatar>
					<div class="flex flex-1 flex-col">
						<span class="text-foreground text-sm font-medium">Mathilde Lewis</span>
						<span class="text-muted-foreground text-xs">m.lewis&#64;simui.dev</span>
					</div>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideUser" size="sm" />
						<span>View profile</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+P
						</hlm-dropdown-menu-shortcut>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideSettings" size="sm" />
						<span>Settings</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘S
						</hlm-dropdown-menu-shortcut>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideZap" size="sm" />
						<span>Keyboard shortcuts</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							?
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideWarehouse" size="sm" />
						<span>Company profile</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+C
						</hlm-dropdown-menu-shortcut>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideUsers" size="sm" />
						<span>Team</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+T
						</hlm-dropdown-menu-shortcut>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideUserPlus" size="sm" />
						<span>Invite colleagues</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘I
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideLayers2" size="sm" />
						<span>Changelog</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideSlack" size="sm" />
						<span>Slack Community</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideMessageCircleQuestion" size="sm" />
						<span>Support</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideBox" size="sm" />
						<span>API</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideLogOut" size="sm" />
						<span>Logout</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌥⇧Q
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
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
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';
@Component({
	selector: 'sim-dropdown-16',
	imports: [NgIcon, HlmIcon, HlmButton, HlmAvatar, HlmAvatarImage, HlmAvatarFallback, HlmDropdownMenuImports],
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
			<button hlmBtn variant="outline" align="center" [hlmDropdownMenuTrigger]="menu">
				<span>Account</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-55">
				<hlm-dropdown-menu-group class="flex items-center gap-2 px-2 py-1.5">
					<hlm-avatar class="border-border/50 size-8 border">
						<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
						<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
					</hlm-avatar>
					<div class="flex flex-1 flex-col">
						<span class="text-foreground text-sm font-medium">Mathilde Lewis</span>
						<span class="text-muted-foreground text-xs">m.lewis&#64;simui.dev</span>
					</div>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideUser" size="sm" />
						<span>View profile</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+P
						</hlm-dropdown-menu-shortcut>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideSettings" size="sm" />
						<span>Settings</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘S
						</hlm-dropdown-menu-shortcut>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideZap" size="sm" />
						<span>Keyboard shortcuts</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							?
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideWarehouse" size="sm" />
						<span>Company profile</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+C
						</hlm-dropdown-menu-shortcut>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideUsers" size="sm" />
						<span>Team</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘K+T
						</hlm-dropdown-menu-shortcut>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideUserPlus" size="sm" />
						<span>Invite colleagues</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘I
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideLayers2" size="sm" />
						<span>Changelog</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideSlack" size="sm" />
						<span>Slack Community</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideMessageCircleQuestion" size="sm" />
						<span>Support</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideBox" size="sm" />
						<span>API</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideLogOut" size="sm" />
						<span>Logout</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌥⇧Q
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	\`,
})
export class Dropdown16Component {}`;
