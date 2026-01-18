import { Component, signal } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { EditorColorConfig } from './editor-color-config';
import { ThemeLayoutComponent } from './layout';

@Component({
	selector: 'sim-theme-config',
	imports: [EditorColorConfig, ThemeLayoutComponent, HlmButton],
	template: `
		<div class="flex size-full flex-col gap-0">
			<div
				class="before:bg-border relative flex h-auto w-full justify-start gap-0.5 bg-transparent p-0 pt-2 before:absolute before:inset-x-0 before:bottom-0 before:z-0 before:h-px [&>button]:mr-0 [&>button]:data-[state=active]:shadow-none"
				aria-label="tabs example">
				<button
					hlmBtn
					size="sm"
					variant="outline"
					class="bg-muted dark:data-[state=active]:bg-background data-[state=active]:bg-background data-[state=active]:border-b-background z-1 ml-4 flex-none overflow-hidden rounded-b-none px-3 py-2 shadow-none data-[state=active]:z-10 data-[state=active]:shadow-none"
					[attr.data-state]="activeTab() === 'colors' ? 'active' : 'inactive'"
					(click)="activeTab.set('colors')">
					Colors
				</button>

				<button
					hlmBtn
					size="sm"
					variant="outline"
					class="bg-muted dark:data-[state=active]:bg-background data-[state=active]:bg-background data-[state=active]:border-b-background z-1 flex-none overflow-hidden rounded-b-none px-3 py-2 shadow-none data-[state=active]:z-10 data-[state=active]:shadow-none"
					[attr.data-state]="activeTab() === 'layout' ? 'active' : 'inactive'"
					(click)="activeTab.set('layout')">
					Layout
				</button>
			</div>

			<div class="mt-0 flex-1">
				@switch (activeTab()) {
					@case ('colors') {
						<sim-editor-color-config />
					}
					@case ('layout') {
						<sim-theme-layout />
					}
				}
			</div>
		</div>
	`,
})
export class ThemeConfigComponent {
	protected readonly activeTab = signal<'colors' | 'layout'>('colors');
}
