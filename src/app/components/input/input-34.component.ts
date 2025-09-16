import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTimeOptionsGenerator } from '@maskito/kit';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-34',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-34" class="mb-2 text-sm">Time input</label>
		<input hlmInput id="input-34" type="text" placeholder="--:-- AM" [maskito]="mask" />
	`,
})
export class Input34Component {
	mask: MaskitoOptions = maskitoTimeOptionsGenerator({ mode: 'HH:MM AA' });
}

export const input34Code = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTimeOptionsGenerator } from '@maskito/kit';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-34',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-34" class="mb-2 text-sm">Time input</label>
		<input hlmInput id="input-34" type="text" placeholder="--:-- AM" [maskito]="mask" />
	\`,
})
export class Input34Component {
	mask: MaskitoOptions = maskitoTimeOptionsGenerator({ mode: 'HH:MM AA' });
}`;
