import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEuro } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-13',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideEuro })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-13" class="mb-2 text-sm">Input with inline add-ons</label>
		<div class="relative">
			<input hlmInput id="input-13" type="text" placeholder="0.00" class="peer ps-8 pe-12" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
				<ng-icon hlm name="lucideEuro" size="sm" />
			</div>
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50">
				EUR
			</div>
		</div>
	`,
})
export class Input13Component {}

export const input13Code = ``;
