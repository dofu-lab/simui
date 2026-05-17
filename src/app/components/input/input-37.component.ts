import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoDateTimeOptionsGenerator } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClock } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-37',
	imports: [HlmLabel, FormsModule, MaskitoDirective, NgIcon, HlmInputGroupImports],
	providers: [provideIcons({ lucideClock })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-37" class="mb-2 text-sm">Date and time input</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-37" type="text" placeholder="mm / dd / yyyy , --:--" [maskito]="mask" />
			<hlm-input-group-addon align="inline-end">
				<ng-icon name="lucideClock" />
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input37Component {
	protected readonly mask: MaskitoOptions = maskitoDateTimeOptionsGenerator({
		dateMode: 'mm/dd/yyyy',
		timeMode: 'HH:MM',
		dateTimeSeparator: ' , ',
	});
}
