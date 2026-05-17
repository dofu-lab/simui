import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSend } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-16',
	imports: [HlmLabel, NgIcon, HlmInputGroupImports],
	providers: [provideIcons({ lucideSend })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-16" class="mb-2 text-sm">Input with end inline button</label>
		<hlm-input-group>
			<input hlmInputGroupInput id="input-16" type="text" placeholder="Email" />
			<hlm-input-group-addon align="inline-end">
				<button hlmInputGroupButton aria-label="Send" title="Send" size="icon-xs" variant="ghost">
					<ng-icon name="lucideSend" />
				</button>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input16Component {}
