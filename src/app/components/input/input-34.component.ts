import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTime } from '@maskito/kit';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-34',
	imports: [FormsModule, MaskitoDirective, HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-34" class="mb-2 text-sm">Time input</label>
		<input hlmInput id="input-34" type="text" placeholder="--:-- AM" [maskito]="mask" />
	`,
})
export class Input34Component {
	protected readonly mask: MaskitoOptions = maskitoTime({ mode: 'HH:MM AA' });
}
