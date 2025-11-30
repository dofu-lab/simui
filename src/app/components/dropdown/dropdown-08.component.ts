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
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-08',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
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
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [hlmDropdownMenuTrigger]="menu">
				<span>Rich menu</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Edit</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘E
						</hlm-dropdown-menu-shortcut>
					</button>
					<button hlmDropdownMenuItem>
						<span>Duplicate</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘D
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Archive</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘A
						</hlm-dropdown-menu-shortcut>
					</button>
					<button
						hlmDropdownMenuItem
						class="flex justify-between"
						side="right"
						align="start"
						[hlmDropdownMenuTrigger]="more">
						<span>More</span>
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Share</span>
					</button>
					<button hlmDropdownMenuItem>
						<span>Add to favorites</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button
						hlmDropdownMenuItem
						variant="destructive"
						class="hover:bg-destructive/10 dark:hover:bg-destructive/40">
						<span>Delete</span>
						<hlm-dropdown-menu-shortcut
							class="border-destructive/40 text-destructive ms-auto -me-1 inline-flex h-5 items-center rounded border bg-transparent px-1 text-[10px]">
							⌘⌫
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>

		<ng-template #more>
			<hlm-dropdown-menu-sub class="w-40">
				<button hlmDropdownMenuItem>Move to project</button>
				<button hlmDropdownMenuItem>Move to folder</button>
				<hlm-dropdown-menu-separator />
				<button hlmDropdownMenuItem>Advance options</button>
			</hlm-dropdown-menu-sub>
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
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-08',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
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
			<button hlmBtn class="h-9 w-full" variant="outline" size="sm" align="center" [hlmDropdownMenuTrigger]="menu">
				<span>Rich menu</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Edit</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘E
						</hlm-dropdown-menu-shortcut>
					</button>
					<button hlmDropdownMenuItem>
						<span>Duplicate</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘D
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Archive</span>
						<hlm-dropdown-menu-shortcut
							class="border-input bg-background text-muted-foreground/70 ms-auto -me-1 inline-flex h-5 items-center rounded border px-1 text-[10px]">
							⌘A
						</hlm-dropdown-menu-shortcut>
					</button>
					<button
						hlmDropdownMenuItem
						class="flex justify-between"
						side="right"
						align="start"
						[hlmDropdownMenuTrigger]="more">
						<span>More</span>
						<ng-icon hlm name="lucideChevronRight" size="sm" />
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<span>Share</span>
					</button>
					<button hlmDropdownMenuItem>
						<span>Add to favorites</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button
						hlmDropdownMenuItem
						variant="destructive"
						class="hover:bg-destructive/10 dark:hover:bg-destructive/40">
						<span>Delete</span>
						<hlm-dropdown-menu-shortcut
							class="border-destructive/40 text-destructive ms-auto -me-1 inline-flex h-5 items-center rounded border bg-transparent px-1 text-[10px]">
							⌘⌫
						</hlm-dropdown-menu-shortcut>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>

		<ng-template #more>
			<hlm-dropdown-menu-sub class="w-40">
				<button hlmDropdownMenuItem>Move to project</button>
				<button hlmDropdownMenuItem>Move to folder</button>
				<hlm-dropdown-menu-separator />
				<button hlmDropdownMenuItem>Advance options</button>
			</hlm-dropdown-menu-sub>
		</ng-template>
	\`,
})
export class Dropdown08Component {}`;
