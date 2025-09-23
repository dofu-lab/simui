import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideArchiveRestore,
	lucideBell,
	lucideChevronDown,
	lucideChevronRight,
	lucideCpu,
	lucidePlus,
	lucideShare2,
	lucideTrash,
} from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import {
	HlmMenu,
	HlmMenuGroup,
	HlmMenuItem,
	HlmMenuItemCheck,
	HlmMenuItemCheckbox,
	HlmMenuItemRadio,
	HlmMenuItemRadioIndicator,
	HlmMenuSeparator,
	HlmMenuShortcut,
	HlmSubMenu,
} from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-09',
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
		HlmMenuItemRadio,
		HlmMenuItemRadioIndicator,
		HlmMenuItemCheck,
		HlmMenuItemCheckbox,
	],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideChevronRight,
			lucidePlus,
			lucideTrash,
			lucideCpu,
			lucideBell,
			lucideShare2,
			lucideArchiveRestore,
		}),
	],
	template: `
		<div class="flex w-50 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Rich menu with icons</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucidePlus" size="sm" />
						<span>New</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘N
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem class="flex justify-between" [brnMenuTriggerFor]="framework">
						<div class="flex items-center gap-2">
							<ng-icon hlm name="lucideCpu" size="sm" />
							<span>Framework</span>
						</div>
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
					<button hlmMenuItem class="flex justify-between" [brnMenuTriggerFor]="notification">
						<div class="flex items-center gap-2">
							<ng-icon hlm name="lucideBell" size="sm" />
							<span>Notifications</span>
						</div>
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideShare2" size="sm" />
						<span>Share</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideArchiveRestore" size="sm" />
						<span>Archive</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem variant="destructive" class="hover:bg-destructive/10 dark:hover:bg-destructive/40">
						<ng-icon hlm name="lucideTrash" size="sm" />
						<span>Delete</span>
						<hlm-menu-shortcut
							class="border-destructive/40 text-destructive ms-auto -me-1 inline-flex h-5 items-center rounded border bg-transparent px-1 text-[10px]">
							⌘⌫
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>

		<ng-template #framework>
			<hlm-sub-menu class="w-40">
				<button hlmMenuItemRadio [checked]="value() === 'angular'" (click)="value.set('angular')">
					<hlm-menu-item-radio />
					<span>Angular</span>
				</button>
				<button hlmMenuItemRadio [checked]="value() === 'typescript'" (click)="value.set('typescript')">
					<hlm-menu-item-radio />
					<span>TypeScript</span>
				</button>
				<button hlmMenuItemRadio [checked]="value() === 'rxjs'" (click)="value.set('rxjs')">
					<hlm-menu-item-radio />
					<span>RxJS</span>
				</button>
				<button hlmMenuItemRadio [checked]="value() === 'tailwindcss'" (click)="value.set('tailwindcss')">
					<hlm-menu-item-radio />
					<span>TailwindCSS</span>
				</button>
			</hlm-sub-menu>
		</ng-template>
		<ng-template #notification>
			<hlm-sub-menu class="w-40">
				<button hlmMenuItemCheckbox [checked]="email()" (click)="email.set(!email())">
					<hlm-menu-item-check />
					<span>Email</span>
				</button>
				<button hlmMenuItemCheckbox [checked]="push()" (click)="push.set(!push())">
					<hlm-menu-item-check />
					<span>Push</span>
				</button>
			</hlm-sub-menu>
		</ng-template>
	`,
})
export class Dropdown09Component {
	value = signal('angular');
	email = signal(true);
	push = signal(false);
}

export const dropdown09Code = `import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideArchiveRestore,
	lucideBell,
	lucideChevronDown,
	lucideChevronRight,
	lucideCpu,
	lucidePlus,
	lucideShare2,
	lucideTrash,
} from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import {
	HlmMenu,
	HlmMenuGroup,
	HlmMenuItem,
	HlmMenuItemCheck,
	HlmMenuItemCheckbox,
	HlmMenuItemRadio,
	HlmMenuItemRadioIndicator,
	HlmMenuSeparator,
	HlmMenuShortcut,
	HlmSubMenu,
} from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-09',
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
		HlmMenuItemRadio,
		HlmMenuItemRadioIndicator,
		HlmMenuItemCheck,
		HlmMenuItemCheckbox,
	],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideChevronRight,
			lucidePlus,
			lucideTrash,
			lucideCpu,
			lucideBell,
			lucideShare2,
			lucideArchiveRestore,
		}),
	],
	template: \`
		<div class="flex w-50 items-center justify-center">
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [brnMenuTriggerFor]="menu">
				<span>Rich menu with icons</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucidePlus" size="sm" />
						<span>New</span>
						<hlm-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘N
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem class="flex justify-between" [brnMenuTriggerFor]="framework">
						<div class="flex items-center gap-2">
							<ng-icon hlm name="lucideCpu" size="sm" />
							<span>Framework</span>
						</div>
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
					<button hlmMenuItem class="flex justify-between" [brnMenuTriggerFor]="notification">
						<div class="flex items-center gap-2">
							<ng-icon hlm name="lucideBell" size="sm" />
							<span>Notifications</span>
						</div>
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideShare2" size="sm" />
						<span>Share</span>
					</button>
					<button hlmMenuItem>
						<ng-icon hlm name="lucideArchiveRestore" size="sm" />
						<span>Archive</span>
					</button>
				</hlm-menu-group>
				<hlm-menu-separator />
				<hlm-menu-group>
					<button hlmMenuItem variant="destructive" class="hover:bg-destructive/10 dark:hover:bg-destructive/40">
						<ng-icon hlm name="lucideTrash" size="sm" />
						<span>Delete</span>
						<hlm-menu-shortcut
							class="border-destructive/40 text-destructive ms-auto -me-1 inline-flex h-5 items-center rounded border bg-transparent px-1 text-[10px]">
							⌘⌫
						</hlm-menu-shortcut>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>

		<ng-template #framework>
			<hlm-sub-menu class="w-40">
				<button hlmMenuItemRadio [checked]="value() === 'angular'" (click)="value.set('angular')">
					<hlm-menu-item-radio />
					<span>Angular</span>
				</button>
				<button hlmMenuItemRadio [checked]="value() === 'typescript'" (click)="value.set('typescript')">
					<hlm-menu-item-radio />
					<span>TypeScript</span>
				</button>
				<button hlmMenuItemRadio [checked]="value() === 'rxjs'" (click)="value.set('rxjs')">
					<hlm-menu-item-radio />
					<span>RxJS</span>
				</button>
				<button hlmMenuItemRadio [checked]="value() === 'tailwindcss'" (click)="value.set('tailwindcss')">
					<hlm-menu-item-radio />
					<span>TailwindCSS</span>
				</button>
			</hlm-sub-menu>
		</ng-template>
		<ng-template #notification>
			<hlm-sub-menu class="w-40">
				<button hlmMenuItemCheckbox [checked]="email()" (click)="email.set(!email())">
					<hlm-menu-item-check />
					<span>Email</span>
				</button>
				<button hlmMenuItemCheckbox [checked]="push()" (click)="push.set(!push())">
					<hlm-menu-item-check />
					<span>Push</span>
				</button>
			</hlm-sub-menu>
		</ng-template>
	\`,
})
export class Dropdown09Component {
	value = signal('angular');
	email = signal(true);
	push = signal(false);
}`;
