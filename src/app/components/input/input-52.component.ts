import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTimeOptionsGenerator } from '@maskito/kit';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-52',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-52" class="mb-2 text-sm">Timestamp</label>
		<input hlmInput id="input-52" type="text" placeholder="00:00:00" [maskito]="mask" />
	`,
})
export class Input52Component {
	mask: MaskitoOptions = maskitoTimeOptionsGenerator({ mode: 'HH:MM:SS' });
}

export const input52Code = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { maskitoTimeOptionsGenerator } from '@maskito/kit';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-52',
	imports: [HlmLabel, FormsModule, MaskitoDirective, HlmInput],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-52" class="mb-2 text-sm">Timestamp</label>
		<input hlmInput id="input-52" type="text" placeholder="00:00:00" [maskito]="mask" />
	\`,
})
export class Input52Component {
	mask: MaskitoOptions = maskitoTimeOptionsGenerator({ mode: 'HH:MM:SS' });
}`;
