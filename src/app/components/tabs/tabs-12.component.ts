import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideChartLine,
	lucideHouse,
	lucidePackage,
	lucidePanelsTopLeft,
	lucideSettings,
	lucideUsers,
} from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmScrollArea } from '@spartan-ng/helm/scroll-area';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
	selector: 'sim-tabs-12',
	imports: [
		NgIcon,
		HlmIcon,
		HlmTabs,
		HlmTabsList,
		HlmTabsTrigger,
		HlmTabsContent,
		HlmScrollArea,
		HlmBadge,
		NgScrollbarModule,
	],
	providers: [
		provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage, lucideUsers, lucideChartLine, lucideSettings }),
	],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<ng-scrollbar hlm>
				<hlm-tabs-list
					class="mb-1 h-fit w-full rounded-none border-b bg-transparent px-0 py-1"
					aria-label="tabs example">
					<button
						hlmTabsTrigger="tab01"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex gap-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucideHouse" size="sm" />
						Overview
					</button>
					<button
						hlmTabsTrigger="tab02"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative flex gap-2 py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
						Project
						<span hlmBadge variant="secondary" class="bg-primary/15 px-1.5">3</span>
					</button>
					<button
						hlmTabsTrigger="tab03"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative flex gap-2 py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucidePackage" size="sm" />
						Package
						<span hlmBadge>New</span>
					</button>
					<button
						hlmTabsTrigger="tab04"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative flex gap-2 py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucideUsers" size="sm" />
						Team
					</button>
					<button
						hlmTabsTrigger="tab05"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative flex gap-2 py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucideChartLine" size="sm" />
						Insights
					</button>
					<button
						hlmTabsTrigger="tab06"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative flex gap-2 py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucideSettings" size="sm" />
						Settings
					</button>
				</hlm-tabs-list>
			</ng-scrollbar>
			<div hlmTabsContent="tab01">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Overview</p>
			</div>
			<div hlmTabsContent="tab02">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Projects</p>
			</div>
			<div hlmTabsContent="tab03">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Packages</p>
			</div>
			<div hlmTabsContent="tab04">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Team</p>
			</div>
			<div hlmTabsContent="tab05">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Insights</p>
			</div>
			<div hlmTabsContent="tab06">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Settings</p>
			</div>
		</hlm-tabs>
	`,
})
export class Tabs12Component {}

export const tabs12Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideChartLine,
	lucideHouse,
	lucidePackage,
	lucidePanelsTopLeft,
	lucideSettings,
	lucideUsers,
} from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmScrollArea } from '@spartan-ng/helm/scroll-area';
import { HlmTabs, HlmTabsContent, HlmTabsList, HlmTabsTrigger } from '@spartan-ng/helm/tabs';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
	selector: 'sim-tabs-12',
	imports: [
		NgIcon,
		HlmIcon,
		HlmTabs,
		HlmTabsList,
		HlmTabsTrigger,
		HlmTabsContent,
		HlmScrollArea,
		HlmBadge,
		NgScrollbarModule,
	],
	providers: [
		provideIcons({ lucideHouse, lucidePanelsTopLeft, lucidePackage, lucideUsers, lucideChartLine, lucideSettings }),
	],
	host: {
		class: 'w-full',
	},
	template: \`
		<hlm-tabs tab="tab01" class="w-full">
			<ng-scrollbar hlm>
				<hlm-tabs-list
					class="mb-1 h-fit w-full rounded-none border-b bg-transparent px-0 py-1"
					aria-label="tabs example">
					<button
						hlmTabsTrigger="tab01"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex gap-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucideHouse" size="sm" />
						Overview
					</button>
					<button
						hlmTabsTrigger="tab02"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative flex gap-2 py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucidePanelsTopLeft" size="sm" />
						Project
						<span hlmBadge variant="secondary" class="bg-primary/15 px-1.5">3</span>
					</button>
					<button
						hlmTabsTrigger="tab03"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative flex gap-2 py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucidePackage" size="sm" />
						Package
						<span hlmBadge>New</span>
					</button>
					<button
						hlmTabsTrigger="tab04"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative flex gap-2 py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucideUsers" size="sm" />
						Team
					</button>
					<button
						hlmTabsTrigger="tab05"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative flex gap-2 py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucideChartLine" size="sm" />
						Insights
					</button>
					<button
						hlmTabsTrigger="tab06"
						class="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary relative flex gap-2 py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">
						<ng-icon hlm name="lucideSettings" size="sm" />
						Settings
					</button>
				</hlm-tabs-list>
			</ng-scrollbar>
			<div hlmTabsContent="tab01">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Overview</p>
			</div>
			<div hlmTabsContent="tab02">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Projects</p>
			</div>
			<div hlmTabsContent="tab03">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Packages</p>
			</div>
			<div hlmTabsContent="tab04">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Team</p>
			</div>
			<div hlmTabsContent="tab05">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Insights</p>
			</div>
			<div hlmTabsContent="tab06">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Settings</p>
			</div>
		</hlm-tabs>
	\`,
})
export class Tabs12Component {}`;
