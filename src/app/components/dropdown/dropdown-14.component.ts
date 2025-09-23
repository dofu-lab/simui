import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHeading1, lucideHeading2, lucideMinus, lucidePlus, lucideTextQuote, lucideType } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuLabel } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-14',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger, HlmMenuLabel],
	providers: [provideIcons({ lucidePlus, lucideType, lucideTextQuote, lucideMinus, lucideHeading1, lucideHeading2 })],
	template: `
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="ghost" size="icon" align="center" class="rounded-full" [brnMenuTriggerFor]="menu">
				<ng-icon hlm name="lucidePlus" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-55">
				<hlm-menu-group>
					<hlm-menu-label class="text-muted-foreground text-xs font-normal">Add block</hlm-menu-label>
					<button hlmMenuItem>
						<div class="bg-background flex size-8 items-center justify-center rounded-md border">
							<ng-icon hlm name="lucideType" size="sm" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-foreground text-sm font-medium">Text</span>
							<span class="text-muted-foreground text-xs font-normal">Start writing with plain text</span>
						</div>
					</button>
					<button hlmMenuItem>
						<div class="bg-background flex size-8 items-center justify-center rounded-md border">
							<ng-icon hlm name="lucideTextQuote" size="sm" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-foreground text-sm font-medium">Quote</span>
							<span class="text-muted-foreground text-xs font-normal">Capture a quote</span>
						</div>
					</button>
					<button hlmMenuItem>
						<div class="bg-background flex size-8 items-center justify-center rounded-md border">
							<ng-icon hlm name="lucideMinus" size="sm" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-foreground text-sm font-medium">Divider</span>
							<span class="text-muted-foreground text-xs font-normal">Visually separate content</span>
						</div>
					</button>
					<button hlmMenuItem>
						<div class="bg-background flex size-8 items-center justify-center rounded-md border">
							<ng-icon hlm name="lucideHeading1" size="sm" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-foreground text-sm font-medium">Heading 1</span>
							<span class="text-muted-foreground text-xs font-normal">Big section heading</span>
						</div>
					</button>
					<button hlmMenuItem>
						<div class="bg-background flex size-8 items-center justify-center rounded-md border">
							<ng-icon hlm name="lucideHeading2" size="sm" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-foreground text-sm font-medium">Heading 2</span>
							<span class="text-muted-foreground text-xs font-normal">Medium section heading</span>
						</div>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	`,
})
export class Dropdown14Component {}

export const dropdown14Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHeading1, lucideHeading2, lucideMinus, lucidePlus, lucideTextQuote, lucideType } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuLabel } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-14',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger, HlmMenuLabel],
	providers: [provideIcons({ lucidePlus, lucideType, lucideTextQuote, lucideMinus, lucideHeading1, lucideHeading2 })],
	template: \`
		<div class="flex w-full items-center justify-center">
			<button hlmBtn variant="ghost" size="icon" align="center" class="rounded-full" [brnMenuTriggerFor]="menu">
				<ng-icon hlm name="lucidePlus" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-55">
				<hlm-menu-group>
					<hlm-menu-label class="text-muted-foreground text-xs font-normal">Add block</hlm-menu-label>
					<button hlmMenuItem>
						<div class="bg-background flex size-8 items-center justify-center rounded-md border">
							<ng-icon hlm name="lucideType" size="sm" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-foreground text-sm font-medium">Text</span>
							<span class="text-muted-foreground text-xs font-normal">Start writing with plain text</span>
						</div>
					</button>
					<button hlmMenuItem>
						<div class="bg-background flex size-8 items-center justify-center rounded-md border">
							<ng-icon hlm name="lucideTextQuote" size="sm" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-foreground text-sm font-medium">Quote</span>
							<span class="text-muted-foreground text-xs font-normal">Capture a quote</span>
						</div>
					</button>
					<button hlmMenuItem>
						<div class="bg-background flex size-8 items-center justify-center rounded-md border">
							<ng-icon hlm name="lucideMinus" size="sm" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-foreground text-sm font-medium">Divider</span>
							<span class="text-muted-foreground text-xs font-normal">Visually separate content</span>
						</div>
					</button>
					<button hlmMenuItem>
						<div class="bg-background flex size-8 items-center justify-center rounded-md border">
							<ng-icon hlm name="lucideHeading1" size="sm" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-foreground text-sm font-medium">Heading 1</span>
							<span class="text-muted-foreground text-xs font-normal">Big section heading</span>
						</div>
					</button>
					<button hlmMenuItem>
						<div class="bg-background flex size-8 items-center justify-center rounded-md border">
							<ng-icon hlm name="lucideHeading2" size="sm" />
						</div>
						<div class="flex flex-col items-start">
							<span class="text-foreground text-sm font-medium">Heading 2</span>
							<span class="text-muted-foreground text-xs font-normal">Medium section heading</span>
						</div>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class Dropdown14Component {}`;
