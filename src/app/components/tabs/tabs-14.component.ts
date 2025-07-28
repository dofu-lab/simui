import { Component } from '@angular/core';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-14',
	imports: [HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective, HlmTabsContentDirective],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list
				class="[&>button]:data-[state=active]:bg-muted text-muted-foreground/70 mx-auto flex w-full max-w-xs items-center justify-center rounded-md bg-transparent p-0.5 [&>button]:mr-0 [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
				<button hlmTabsTrigger="tab01" class="flex-1 flex-col gap-1.5 p-3">
					<span
						class="bg-primary text-primary-foreground flex size-5 items-center justify-center rounded-full text-xs transition-opacity group-data-[state=inactive]:opacity-50">
						3
					</span>
					Overview
				</button>
				<button hlmTabsTrigger="tab02" class="flex-1 flex-col gap-1.5 p-3">
					<span
						class="bg-primary text-primary-foreground flex size-5 items-center justify-center rounded-full text-xs transition-opacity group-data-[state=inactive]:opacity-50">
						0
					</span>
					Projects
				</button>
				<button hlmTabsTrigger="tab03" class="flex-1 flex-col gap-1.5 p-3">
					<span
						class="bg-primary text-primary-foreground flex size-5 items-center justify-center rounded-full text-xs transition-opacity group-data-[state=inactive]:opacity-50">
						8
					</span>
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
export class Tabs14Component {}

export const tabs14Code = `import { Component } from '@angular/core';
import {
	HlmTabsComponent,
	HlmTabsContentDirective,
	HlmTabsListComponent,
	HlmTabsTriggerDirective,
} from '@spartan-ng/helm/tabs';

@Component({
	selector: 'sim-tabs-14',
	imports: [HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective, HlmTabsContentDirective],
	host: {
		class: 'w-full',
	},
	template: \`
		<hlm-tabs tab="tab01" class="w-full">
			<hlm-tabs-list
				class="[&>button]:data-[state=active]:bg-muted text-muted-foreground/70 mx-auto flex w-full max-w-xs items-center justify-center rounded-md bg-transparent p-0.5 [&>button]:mr-0 [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
				<button hlmTabsTrigger="tab01" class="flex-1 flex-col gap-1.5 p-3">
					<span
						class="bg-primary text-primary-foreground flex size-5 items-center justify-center rounded-full text-xs transition-opacity group-data-[state=inactive]:opacity-50">
						3
					</span>
					Overview
				</button>
				<button hlmTabsTrigger="tab02" class="flex-1 flex-col gap-1.5 p-3">
					<span
						class="bg-primary text-primary-foreground flex size-5 items-center justify-center rounded-full text-xs transition-opacity group-data-[state=inactive]:opacity-50">
						0
					</span>
					Projects
				</button>
				<button hlmTabsTrigger="tab03" class="flex-1 flex-col gap-1.5 p-3">
					<span
						class="bg-primary text-primary-foreground flex size-5 items-center justify-center rounded-full text-xs transition-opacity group-data-[state=inactive]:opacity-50">
						8
					</span>
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
export class Tabs14Component {}`;
