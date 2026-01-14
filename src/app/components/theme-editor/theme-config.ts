import { Component } from '@angular/core';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { EditorColorConfig } from './editor-color-config';

@Component({
	selector: 'sim-theme-config',
	imports: [HlmTabsImports, EditorColorConfig],
	template: `
		<hlm-tabs tab="tab01" class="size-full gap-0">
			<hlm-tabs-list
				class="before:bg-border relative h-auto w-full justify-start gap-0.5 bg-transparent p-0 pt-2 before:absolute before:inset-x-0 before:bottom-0 before:h-px [&>button]:mr-0 [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
				<button
					hlmTabsTrigger="tab01"
					class="border-border bg-muted dark:data-[state=active]:bg-background ml-4 flex-none overflow-hidden rounded-b-none border-b-0 px-3 py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					Colors
				</button>

				<button
					hlmTabsTrigger="tab03"
					class="border-border bg-muted dark:data-[state=active]:bg-background flex-none overflow-hidden rounded-b-none border-b-0 px-3 py-2 data-[state=active]:z-10 data-[state=active]:shadow-none">
					Layout
				</button>
			</hlm-tabs-list>
			<div hlmTabsContent="tab01" class="relative mt-0 h-full overflow-y-auto pt-2">
				<sim-editor-color-config />
			</div>

			<div hlmTabsContent="tab03">
				<p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 3</p>
			</div>
		</hlm-tabs>
	`,
})
export class ThemeConfigComponent {}
