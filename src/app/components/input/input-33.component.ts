import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-33',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-33" class="mb-2 text-sm">Date input</label>
		<input hlmInput id="input-03" type="text" placeholder="mm/dd/yyyy" [maskito]="mask" />
	`,
})
export class Input33Component {
	mask: MaskitoOptions = maskitoDateOptionsGenerator({ mode: 'mm/dd/yyyy', separator: '/' });
}

export const input33Code = ``;
