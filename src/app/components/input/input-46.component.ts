import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-46',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-46" class="mb-2 text-sm">CVC Code</label>
		<input hlmInput id="input-46" type="text" placeholder="CVC" [maskito]="cvcMask" />
	`,
})
export class Input46Component {
	readonly cvcMask: MaskitoOptions = {
		mask: [...new Array(3).fill(/\d/)],
	};
}