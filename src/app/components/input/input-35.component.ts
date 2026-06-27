import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTime } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClock } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-35',
	imports: [FormsModule, MaskitoDirective, NgIcon, HlmLabelImports, HlmInputGroupImports],
	providers: [provideIcons({ lucideClock })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-35" class="mb-2 text-sm">Time input with start icon</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-35" type="text" placeholder="--:-- AM" [maskito]="mask" />
			<hlm-input-group-addon>
				<ng-icon name="lucideClock" />
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input35Component {
	protected readonly mask: MaskitoOptions = maskitoTime({ mode: 'HH:MM AA' });
}
