import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTimeOptionsGenerator } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClock } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-36',
	imports: [HlmLabel, FormsModule, MaskitoDirective, NgIcon, HlmInputGroupImports],
	providers: [provideIcons({ lucideClock })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-36" class="mb-2 text-sm">Time input with end icon</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-36" type="text" placeholder="--:-- AM" [maskito]="mask" />
			<hlm-input-group-addon align="inline-end">
				<ng-icon name="lucideClock" />
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input36Component {
	protected readonly mask: MaskitoOptions = maskitoTimeOptionsGenerator({ mode: 'HH:MM AA' });
}
