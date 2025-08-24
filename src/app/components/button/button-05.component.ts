import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-05',
	standalone: true,
	imports: [HlmButton],
	template: `
		<button hlmBtn disabled size="sm">Disabled</button>
	`,
})
export class Button05Component {}

export const button05Code = `import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-05',
	standalone: true,
	imports: [HlmButton],
	template: \`
		<button hlmBtn disabled size="sm">Disabled</button>
	\`,
})
export class Button05Component {}`;
