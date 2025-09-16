import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-10',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideMail })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-10" class="mb-2 text-sm">Input with end icon</label>
		<div class="relative">
			<input hlmInput id="input-10" type="text" placeholder="Email" class="peer pe-9" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
				<ng-icon hlm name="lucideMail" size="sm" />
			</div>
		</div>
	`,
})
export class Input10Component {}

export const input10Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-10',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideMail })],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-10" class="mb-2 text-sm">Input with end icon</label>
		<div class="relative">
			<input hlmInput id="input-10" type="text" placeholder="Email" class="peer pe-9" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
				<ng-icon hlm name="lucideMail" size="sm" />
			</div>
		</div>
	\`,
})
export class Input10Component {}`;
