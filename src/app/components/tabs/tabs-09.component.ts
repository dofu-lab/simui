import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-09',
	imports: [NgIcon, HlmIcon, HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent],
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list
				class="[&>button]:data-[state=active]:bg-primary [&>button]:data-[state=active]:text-primary-foreground grid w-full grid-cols-3 bg-transparent [&>button]:data-[state=active]:rounded-full [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
				<button hlmTabsTrigger="tab01" class="flex gap-2 font-normal">
					<ng-icon hlm name="lucideHouse" size="sm" />
					Overview
				</button>
				<button hlmTabsTrigger="tab02" class="flex gap-2 font-normal">
					<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
					Projects
				</button>
				<button hlmTabsTrigger="tab03" class="flex gap-2 font-normal">
					<ng-icon hlm name="lucidePackage" size="sm" />
					Packages
				</button>
			</hlm-tabs-list>
			<div hlmTabsContent="tab01">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Overview</p>
			</div>
			<div hlmTabsContent="tab02">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Projects</p>
			</div>
			<div hlmTabsContent="tab03">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Packages</p>
			</div>
		</hlm-tabs>
	`,
})
export class Tabs09Component {}

export const tabs09Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucidePackage, lucidePanelsTopLeft } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-09',
	imports: [NgIcon, HlmIcon, HlmTabs, HlmTabsList, HlmTabsTrigger, HlmTabsContent],
	providers: [provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage })],
	template: \`
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list
				class="[&>button]:data-[state=active]:bg-primary [&>button]:data-[state=active]:text-primary-foreground grid w-full grid-cols-3 bg-transparent [&>button]:data-[state=active]:rounded-full [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
				<button hlmTabsTrigger="tab01" class="flex gap-2 font-normal">
					<ng-icon hlm name="lucideHouse" size="sm" />
					Overview
				</button>
				<button hlmTabsTrigger="tab02" class="flex gap-2 font-normal">
					<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
					Projects
				</button>
				<button hlmTabsTrigger="tab03" class="flex gap-2 font-normal">
					<ng-icon hlm name="lucidePackage" size="sm" />
					Packages
				</button>
			</hlm-tabs-list>
			<div hlmTabsContent="tab01">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Overview</p>
			</div>
			<div hlmTabsContent="tab02">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Projects</p>
			</div>
			<div hlmTabsContent="tab03">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Packages</p>
			</div>
		</hlm-tabs>
	\`,
})
export class Tabs09Component {}`;
