import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmSpinner } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-button-13',
	standalone: true,
	imports: [HlmButton, HlmSpinner],
	template: `
		<button hlmBtn disabled size="sm" class="group">
			<hlm-spinner class="mr-2 size-4" />
			Saving...
		</button>
	`,
})
export class Button13Component {}

export const button13Code = `import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmSpinner } from '@spartan-ng/helm/spinner';

@Component({
	selector: 'sim-button-13',
	standalone: true,
	imports: [HlmButton, HlmSpinner],
	template: \`
		<button hlmBtn disabled size="sm" class="group">
			<hlm-spinner class="mr-2 size-4" />
			Saving...
		</button>
	\`,
})
export class Button13Component {}`;
