import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-12',
	imports: [HlmButton],
	template: `
		<div class="flex gap-2">
			<button hlmBtn variant="ghost" size="sm">Cancel</button>
			<button hlmBtn size="sm">Save</button>
		</div>
	`,
})
export class Button12Component {}

export const button12Code = `import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-12',
	imports: [HlmButton],
	template: \`
		<div class="flex gap-2">
			<button hlmBtn variant="ghost" size="sm">Cancel</button>
			<button hlmBtn size="sm">Save</button>
		</div>
	\`,
})
export class Button12Component {}`;
