import { Component } from '@angular/core';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCreditCard } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-44',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon, MaskitoDirective],
	providers: [provideIcons({ lucideCreditCard })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-44" class="mb-2 text-sm">Card number</label>
		<div class="relative">
			<input hlmInput id="input-44" type="text" placeholder="Card number" class="peer ps-9" [maskito]="creditCardMask" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
				<ng-icon hlm name="lucideCreditCard" size="sm" />
			</div>
		</div>
	`,
})
export class Input44Component {
	public readonly creditCardMask: MaskitoOptions = {
		mask: [
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			' ',
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			' ',
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			' ',
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
			/[0-9]/,
		],
		overwriteMode: 'replace',
		preprocessors: [({ elementState, data }) => ({ elementState, data: data.replace(/\D/g, '') })],
	};
}

export const input44Code = ``;
