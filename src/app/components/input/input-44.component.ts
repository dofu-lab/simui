import { Component } from '@angular/core';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCreditCard } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-44',
	imports: [NgIcon, MaskitoDirective, HlmLabelImports, HlmInputGroupImports],
	providers: [provideIcons({ lucideCreditCard })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-44" class="mb-2 text-sm">Card number</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-44" type="text" placeholder="Card number" [maskito]="creditCardMask" />
			<hlm-input-group-addon align="inline-end">
				<button hlmInputGroupButton variant="ghost" size="icon-xs">
					<ng-icon name="lucideCreditCard" />
				</button>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input44Component {
	public readonly creditCardMask: MaskitoOptions = {
		mask: [
			/\d/,
			/\d/,
			/\d/,
			/\d/,
			' ',
			/\d/,
			/\d/,
			/\d/,
			/\d/,
			' ',
			/\d/,
			/\d/,
			/\d/,
			/\d/,
			' ',
			/\d/,
			/\d/,
			/\d/,
			/\d/,
		],
		overwriteMode: 'replace',
		preprocessors: [({ elementState, data }) => ({ elementState, data: data.replace(/\D/g, '') })],
	};
}
