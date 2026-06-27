import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDate } from '@maskito/kit';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-33',
	imports: [FormsModule, MaskitoDirective, HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-33" class="mb-2 text-sm">Date input</label>
		<input hlmInput id="input-33" type="text" placeholder="mm/dd/yyyy" [maskito]="mask" />
	`,
})
export class Input33Component {
	protected readonly mask: MaskitoOptions = maskitoDate({ mode: 'mm/dd/yyyy', separator: '/' });
}
