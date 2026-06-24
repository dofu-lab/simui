import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-17',
	imports: [HlmLabelImports, NgIcon, HlmInputGroupImports, HlmButtonGroupImports, HlmButtonImports],
	providers: [provideIcons({ lucideDownload })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-17" class="mb-2 text-sm">Input with end icon button</label>
		<hlm-button-group class="w-full">
			<hlm-input-group>
				<input hlmInputGroupInput id="input-17" type="text" placeholder="Media link" />
			</hlm-input-group>
			<button hlmBtn variant="outline" aria-label="Download" align="end" size="icon">
				<ng-icon name="lucideDownload" />
			</button>
		</hlm-button-group>
	`,
})
export class Input17Component {}
