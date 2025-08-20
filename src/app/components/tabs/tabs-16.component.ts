import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { BrnTooltipContentTemplate } from '@spartan-ng/brain/tooltip';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';
import { HlmTooltip, HlmTooltipTrigger } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-tabs-16',
	imports: [
		NgIcon,
		HlmIcon,
		HlmTabs,
		HlmTabsList,
		HlmTabsTrigger,
		HlmTabsContent,
		HlmTooltip,
		HlmTooltipTrigger,
		BrnTooltipContentTemplate,
	],
	host: {
		class: 'w-full',
	},
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: `
		<hlm-tabs tab="tab01" class="flex w-full flex-row gap-2">
			<hlm-tabs-list class="mt-0 w-fit p-0.5" aria-label="tabs example" orientation="vertical">
				<hlm-tooltip>
					<div hlmTooltipTrigger position="right" [hideDelay]="0" [showDelay]="0">
						<button hlmTabsTrigger="tab01" class="size-10">
							<ng-icon hlm name="lucideHouse" size="sm" />
						</button>
						<span *brnTooltipContent class="flex items-center text-xs">Overview</span>
					</div>
				</hlm-tooltip>
				<hlm-tooltip>
					<div hlmTooltipTrigger position="right" [hideDelay]="0" [showDelay]="0">
						<span class="relative">
							<button hlmTabsTrigger="tab02" class="size-10">
								<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
							</button>
							<span
								class="bg-primary text-primary-foreground absolute -top-2 right-0.5 flex size-4 items-center justify-center rounded-full text-xs transition-opacity group-data-[state=inactive]:opacity-50">
								3
							</span>
						</span>
						<span *brnTooltipContent class="flex items-center text-xs">Project</span>
					</div>
				</hlm-tooltip>
				<hlm-tooltip>
					<div hlmTooltipTrigger position="right" [hideDelay]="0" [showDelay]="0">
						<button hlmTabsTrigger="tab03" class="size-10">
							<ng-icon hlm name="lucidePackage" size="sm" />
						</button>
						<span *brnTooltipContent class="flex items-center text-xs">Packages</span>
					</div>
				</hlm-tooltip>
			</hlm-tabs-list>
			<div class="grow rounded-md border text-start">
				<div hlmTabsContent="tab01" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Overview</p>
				</div>
				<div hlmTabsContent="tab02" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Project</p>
				</div>
				<div hlmTabsContent="tab03" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Packages</p>
				</div>
			</div>
		</hlm-tabs>
	`,
})
export class Tabs16Component {}

export const tabs16Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { BrnTooltipContentTemplate } from '@spartan-ng/brain/tooltip';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';
import { HlmTooltip, HlmTooltipTrigger } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-tabs-16',
	imports: [
		NgIcon,
		HlmIcon,
		HlmTabs,
		HlmTabsList,
		HlmTabsTrigger,
		HlmTabsContent,
		HlmTooltip,
		HlmTooltipTrigger,
		BrnTooltipContentTemplate,
	],
	host: {
		class: 'w-full',
	},
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: \`
		<hlm-tabs tab="tab01" class="flex w-full flex-row gap-2">
			<hlm-tabs-list class="mt-0 w-fit p-0.5" aria-label="tabs example" orientation="vertical">
				<hlm-tooltip>
					<div hlmTooltipTrigger position="right" [hideDelay]="0" [showDelay]="0">
						<button hlmTabsTrigger="tab01" class="size-10">
							<ng-icon hlm name="lucideHouse" size="sm" />
						</button>
						<span *brnTooltipContent class="flex items-center text-xs">Overview</span>
					</div>
				</hlm-tooltip>
				<hlm-tooltip>
					<div hlmTooltipTrigger position="right" [hideDelay]="0" [showDelay]="0">
						<span class="relative">
							<button hlmTabsTrigger="tab02" class="size-10">
								<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
							</button>
							<span
								class="bg-primary text-primary-foreground absolute -top-2 right-0.5 flex size-4 items-center justify-center rounded-full text-xs transition-opacity group-data-[state=inactive]:opacity-50">
								3
							</span>
						</span>
						<span *brnTooltipContent class="flex items-center text-xs">Project</span>
					</div>
				</hlm-tooltip>
				<hlm-tooltip>
					<div hlmTooltipTrigger position="right" [hideDelay]="0" [showDelay]="0">
						<button hlmTabsTrigger="tab03" class="size-10">
							<ng-icon hlm name="lucidePackage" size="sm" />
						</button>
						<span *brnTooltipContent class="flex items-center text-xs">Packages</span>
					</div>
				</hlm-tooltip>
			</hlm-tabs-list>
			<div class="grow rounded-md border text-start">
				<div hlmTabsContent="tab01" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Overview</p>
				</div>
				<div hlmTabsContent="tab02" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Project</p>
				</div>
				<div hlmTabsContent="tab03" class="mt-0">
					<p class="text-muted-foreground p-4 text-xs">Content for Packages</p>
				</div>
			</div>
		</hlm-tabs>
	\`,
})
export class Tabs16Component {}`;
