import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEuro } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-13',
	imports: [HlmLabelImports, NgIcon, HlmInputGroupImports],
	providers: [provideIcons({ lucideEuro })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-13" class="mb-2 text-sm">Input with inline add-ons</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-13" type="text" placeholder="0.00" />
			<hlm-input-group-addon>
				<ng-icon name="lucideEuro" />
			</hlm-input-group-addon>
			<hlm-input-group-addon align="inline-end">
				<div class="text-muted-foreground/80 text-sm font-normal">EUR</div>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input13Component {}
