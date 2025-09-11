import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAtSign } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-09',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideAtSign })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-09" class="mb-2 text-sm">Input with start icon</label>
		<div class="relative">
			<input hlmInput id="input-09" type="text" placeholder="Email" class="peer ps-9" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
				<ng-icon hlm name="lucideAtSign" size="sm" />
			</div>
		</div>
	`,
})
export class Input09Component {}

export const input09Code = ``;
