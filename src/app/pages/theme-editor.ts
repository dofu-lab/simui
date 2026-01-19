import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmResizableImports } from '@spartan-ng/helm/resizable';
import { EditorHeader, EditorPreview, ThemeConfigComponent, ThemeSelector } from '../components/theme-editor';
import { ThemeAction } from '../components/theme-editor/theme-action';

@Component({
	selector: 'sim-theme-editor',
	imports: [
		HlmResizableImports,
		NgClass,
		EditorPreview,
		EditorHeader,
		ThemeConfigComponent,
		HlmButton,
		ThemeSelector,
		ThemeAction,
	],
	host: {
		class: 'flex flex-1 size-full py-4',
	},
	template: `
		<div class="hidden min-h-0 grow flex-col rounded-xl border md:flex">
			<app-editor-header />
			<div id="editor-content" class="relative flex min-h-0 w-full flex-1">
				<hlm-resizable-group>
					<hlm-resizable-panel defaultSize="20" minSize="10" maxSize="30">
						<sim-theme-config />
					</hlm-resizable-panel>
					<hlm-resizable-handle withHandle="true" />
					<hlm-resizable-panel>
						<app-editor-preview />
					</hlm-resizable-panel>
				</hlm-resizable-group>
			</div>
		</div>

		<div class="flex min-h-0 grow flex-col overflow-hidden rounded-xl border md:hidden">
			<div class="bg-muted flex w-full gap-1 border-b p-1">
				<button
					hlmBtn
					variant="outline"
					class="flex-1 opacity-50"
					[ngClass]="{ 'bg-background hover:bg-background opacity-100': selectedTab() === 'editor' }"
					(click)="selectedTab.set('editor')">
					Editor
				</button>
				<button
					hlmBtn
					variant="outline"
					class="flex-1 opacity-50"
					[ngClass]="{ 'bg-background hover:bg-background opacity-100': selectedTab() === 'preview' }"
					(click)="selectedTab.set('preview')">
					Preview
				</button>
			</div>
			<div class="flex flex-1 flex-col" [class.hidden]="selectedTab() !== 'editor'">
				<div class="border-b p-2">
					<app-theme-selector />
				</div>
				<div id="theme-config" class="flex-1">
					<sim-theme-config />
				</div>
			</div>
			<div class="flex flex-1 flex-col" [class.hidden]="selectedTab() !== 'preview'">
				<div class="border-b p-2">
					<sim-theme-action />
				</div>
				<div id="editor-preview" class="flex-1">
					<app-editor-preview />
				</div>
			</div>
		</div>
	`,
})
export class ThemeEditor {
	protected selectedTab = signal<'editor' | 'preview'>('editor');
}
