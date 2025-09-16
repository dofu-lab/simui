import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTimeOptionsGenerator } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClock } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-36',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideClock })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-36" class="mb-2 text-sm">Time input with end icon</label>
		<div class="relative">
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
				<ng-icon hlm name="lucideClock" size="sm" />
			</div>
			<input hlmInput class="pe-8" id="input-36" type="text" placeholder="--:-- AM" [maskito]="mask" />
		</div>
	`,
})
export class Input36Component {
	mask: MaskitoOptions = maskitoTimeOptionsGenerator({ mode: 'HH:MM AA' });
}

export const input36Code = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTimeOptionsGenerator } from '@maskito/kit';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClock } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-36',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideClock })],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-36" class="mb-2 text-sm">Time input with end icon</label>
		<div class="relative">
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
				<ng-icon hlm name="lucideClock" size="sm" />
			</div>
			<input hlmInput class="pe-8" id="input-36" type="text" placeholder="--:-- AM" [maskito]="mask" />
		</div>
	\`,
})
export class Input36Component {
	mask: MaskitoOptions = maskitoTimeOptionsGenerator({ mode: 'HH:MM AA' });
}`;
