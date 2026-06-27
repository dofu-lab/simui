import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTime } from '@maskito/kit';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-52',
	imports: [FormsModule, MaskitoDirective, HlmLabelImports, HlmInputImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-52" class="mb-2 text-sm">Timestamp</label>
		<input hlmInput id="input-52" type="text" placeholder="00:00:00" [maskito]="mask" />
	`,
})
export class Input52Component {
	protected readonly mask: MaskitoOptions = maskitoTime({ mode: 'HH:MM:SS' });
}
