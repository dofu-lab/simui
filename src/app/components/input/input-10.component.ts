import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-10',
	imports: [HlmLabel, NgIcon, HlmInputGroupImports],
	providers: [provideIcons({ lucideMail })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-10" class="mb-2 text-sm">Input with end icon</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-10" type="text" placeholder="Email" />
			<hlm-input-group-addon>
				<ng-icon name="lucideMail" />
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input10Component {}
