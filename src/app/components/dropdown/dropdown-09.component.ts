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
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-09',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
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
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [hlmDropdownMenuTrigger]="menu">
				<span>Rich menu with icons</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucidePlus" size="sm" />
						<span>New</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘N
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button
						hlmDropdownMenuItem
						class="flex justify-between"
						side="right"
						align="start"
						[hlmDropdownMenuTrigger]="framework">
						<div class="flex items-center gap-2">
							<ng-icon hlm name="lucideCpu" size="sm" />
							<span>Framework</span>
						</div>
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
					<button
						hlmDropdownMenuItem
						class="flex justify-between"
						side="right"
						align="start"
						[hlmDropdownMenuTrigger]="notification">
						<div class="flex items-center gap-2">
							<ng-icon hlm name="lucideBell" size="sm" />
							<span>Notifications</span>
						</div>
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideShare2" size="sm" />
						<span>Share</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideArchiveRestore" size="sm" />
						<span>Archive</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button
						hlmDropdownMenuItem
						variant="destructive"
						class="hover:bg-destructive/10 dark:hover:bg-destructive/40">
						<ng-icon hlm name="lucideTrash" size="sm" />
						<span>Delete</span>
						<hlm-dropdown-menu-shortcut
							class="border-destructive/40 text-destructive ms-auto -me-1 inline-flex h-5 items-center rounded border bg-transparent px-1 text-[10px]">
							⌘⌫
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>

		<ng-template #framework>
			<hlm-dropdown-menu-sub class="w-40">
				<button hlmDropdownMenuRadio [checked]="value() === 'angular'" (click)="value.set('angular')">
					<hlm-dropdown-menu-radio-indicator />
					<span>Angular</span>
				</button>
				<button hlmDropdownMenuRadio [checked]="value() === 'typescript'" (click)="value.set('typescript')">
					<hlm-dropdown-menu-radio-indicator />
					<span>TypeScript</span>
				</button>
				<button hlmDropdownMenuRadio [checked]="value() === 'rxjs'" (click)="value.set('rxjs')">
					<hlm-dropdown-menu-radio-indicator />
					<span>RxJS</span>
				</button>
				<button hlmDropdownMenuRadio [checked]="value() === 'tailwindcss'" (click)="value.set('tailwindcss')">
					<hlm-dropdown-menu-radio-indicator />
					<span>TailwindCSS</span>
				</button>
			</hlm-dropdown-menu-sub>
		</ng-template>
		<ng-template #notification>
			<hlm-dropdown-menu-sub class="w-40">
				<button hlmDropdownMenuCheckbox [checked]="email()" (click)="email.set(!email())">
					<hlm-dropdown-menu-checkbox-indicator />
					<span>Email</span>
				</button>
				<button hlmDropdownMenuCheckbox [checked]="push()" (click)="push.set(!push())">
					<hlm-dropdown-menu-checkbox-indicator />
					<span>Push</span>
				</button>
			</hlm-dropdown-menu-sub>
		</ng-template>
	`,
})
export class Dropdown09Component {
	value = signal('angular');
	email = signal(true);
	push = signal(false);
}