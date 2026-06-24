import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDate } from '@maskito/kit';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-45',
	imports: [FormsModule, MaskitoDirective, HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-45" class="mb-2 text-sm">Expiry date</label>
		<input hlmInput id="input-45" type="text" placeholder="mm / dd" [maskito]="mask" />
	`,
})
export class Input45Component {
	mask: MaskitoOptions = maskitoDate({ mode: 'mm/dd', separator: ' / ' });
}
