import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmKbdImports } from '@spartan-ng/helm/kbd';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-22',
	imports: [HlmLabelImports, NgIcon, HlmInputGroupImports, HlmKbdImports],
	providers: [provideIcons({ lucideSearch })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-22" class="mb-2 text-sm">Search input with shortcut</label>
		<hlm-input-group>
			<input hlmInputGroupInput placeholder="Search..." />
			<hlm-input-group-addon>
				<ng-icon name="lucideSearch" />
			</hlm-input-group-addon>
			<hlm-input-group-addon align="inline-end">
				<kbd hlmKbd>⌘K</kbd>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input22Component {}
