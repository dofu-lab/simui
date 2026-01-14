import { Component } from '@angular/core';
import { HlmResizableImports } from '@spartan-ng/helm/resizable';
import { EditorHeader, EditorPreview, ThemeConfigComponent } from '../components/theme-editor';

@Component({
	selector: 'sim-theme-editor',
	imports: [HlmResizableImports, EditorPreview, EditorHeader, ThemeConfigComponent],
	host: {
		class: 'flex flex-1 size-full p-4',
	},
	template: `
		<div class="flex min-h-0 grow flex-col rounded-xl border">
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
	`,
})
export class ThemeEditor {}
