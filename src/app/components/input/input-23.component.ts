import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideSearch } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-23',
	imports: [NgIcon, HlmLabelImports, HlmInputGroupImports],
	providers: [provideIcons({ lucideSearch, lucideArrowRight })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-23" class="mb-2 text-sm">Input input with icon and button</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-23" placeholder="Search..." />
			<hlm-input-group-addon>
				<ng-icon name="lucideSearch" />
			</hlm-input-group-addon>
			<hlm-input-group-addon align="inline-end">
				<button hlmInputGroupButton aria-label="Send" title="Send" size="icon-xs" variant="ghost">
					<ng-icon name="lucideArrowRight" />
				</button>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input23Component {}
