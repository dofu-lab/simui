import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBolt,
	lucideChevronDown,
	lucideChevronRight,
	lucideCopyPlus,
	lucideFile,
	lucideLayers2,
	lucideTrash,
} from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import {
	HlmMenu,
	HlmMenuGroup,
	HlmMenuItem,
	HlmMenuSeparator,
	HlmMenuShortcut,
	HlmSubMenu,
} from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-08',
	imports: [
		NgIcon,
		HlmIcon,
		HlmMenu,
		HlmMenuItem,
		HlmButton,
		HlmMenuGroup,
		BrnMenuTrigger,
		HlmMenuSeparator,
		HlmMenuShortcut,
		HlmSubMenu,
	],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideChevronRight,
			lucideCopyPlus,
			lucideBolt,
			lucideLayers2,
			lucideFile,
			lucideTrash,
		}),
	],
	template: `
		<div class="flex w-30 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Rich menu</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Edit</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘E
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem>
						<span>Duplicate</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘D
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Archive</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘A
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem class="flex justify-between" [brnMenuTriggerFor]="more">
						<span>More</span>
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Share</span>
					</button>
					<button hlmMenuItem>
						<span>Add to favorites</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem variant="destructive" class="hover:bg-destructive/10 dark:hover:bg-destructive/40">
						<span>Delete</span>
						<hlm-menu-shortcut
							class="border-destructive/40 text-destructive ms-auto -me-1 inline-flex h-5 items-center rounded border bg-transparent px-1 text-[10px]">
							⌘⌫
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>

		<ng-template #more>
			<hlm-sub-menu class="w-40">
				<button hlmMenuItem>Move to project</button>
				<button hlmMenuItem>Move to folder</button>
				<hlm-menu-separator />
				<button hlmMenuItem>Advance options</button>
			</hlm-sub-menu>
		</ng-template>
	`,
})
export class Dropdown08Component {}

export const dropdown08Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBolt,
	lucideChevronDown,
	lucideChevronRight,
	lucideCopyPlus,
	lucideFile,
	lucideLayers2,
	lucideTrash,
} from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import {
	HlmMenu,
	HlmMenuGroup,
	HlmMenuItem,
	HlmMenuSeparator,
	HlmMenuShortcut,
	HlmSubMenu,
} from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-08',
	imports: [
		NgIcon,
		HlmIcon,
		HlmMenu,
		HlmMenuItem,
		HlmButton,
		HlmMenuGroup,
		BrnMenuTrigger,
		HlmMenuSeparator,
		HlmMenuShortcut,
		HlmSubMenu,
	],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideChevronRight,
			lucideCopyPlus,
			lucideBolt,
			lucideLayers2,
			lucideFile,
			lucideTrash,
		}),
	],
	template: \`
		<div class="flex w-30 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Rich menu</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Edit</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘E
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem>
						<span>Duplicate</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘D
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Archive</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘A
						</hlm-menu-shortcut>
					</button>
					<button hlmMenuItem class="flex justify-between" [brnMenuTriggerFor]="more">
						<span>More</span>
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<span>Share</span>
					</button>
					<button hlmMenuItem>
						<span>Add to favorites</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem variant="destructive" class="hover:bg-destructive/10 dark:hover:bg-destructive/40">
						<span>Delete</span>
						<hlm-menu-shortcut
							class="border-destructive/40 text-destructive ms-auto -me-1 inline-flex h-5 items-center rounded border bg-transparent px-1 text-[10px]">
							⌘⌫
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>

		<ng-template #more>
			<hlm-sub-menu class="w-40">
				<button hlmMenuItem>Move to project</button>
				<button hlmMenuItem>Move to folder</button>
				<hlm-menu-separator />
				<button hlmMenuItem>Advance options</button>
			</hlm-sub-menu>
		</ng-template>
	\`,
})
export class Dropdown08Component {}`;
