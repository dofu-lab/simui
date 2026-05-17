import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAtSign } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-09',
	imports: [HlmLabel, NgIcon, HlmInputGroupImports],
	providers: [provideIcons({ lucideAtSign })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-09" class="mb-2 text-sm">Input with start icon</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-09" type="text" placeholder="Email" />
			<hlm-input-group-addon>
				<ng-icon name="lucideAtSign" />
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input09Component {}
