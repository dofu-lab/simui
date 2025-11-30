import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-51',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-51" class="mb-2 text-sm">Input with mask</label>
		<input hlmInput id="input-51" type="text" placeholder="AA99 AAA" [maskito]="mask" />
	`,
})
export class Input51Component {
	readonly mask: MaskitoOptions = {
		mask: [/[A-Za-z]/, /[A-Za-z]/, /[0-9]/, /[0-9]/, ' ', /[A-Za-z]/, /[A-Za-z]/, /[A-Za-z]/],
	};
}