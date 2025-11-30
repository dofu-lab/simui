import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-45',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-45" class="mb-2 text-sm">Expiry date</label>
		<input hlmInput id="input-45" type="text" placeholder="mm / dd" [maskito]="mask" />
	`,
})
export class Input45Component {
	mask: MaskitoOptions = maskitoDateOptionsGenerator({ mode: 'mm/dd', separator: ' / ' });
}