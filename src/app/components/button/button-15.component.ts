import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-15',
	imports: [HlmButton],
	template: `
		<button hlmBtn variant="outline" size="sm">
			Messages
			<span
				class="text-muted-foreground ml-2 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
				14
			</span>
		</button>
	`,
})
export class Button15Component {}

export const button15Code = `import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-15',
	imports: [HlmButton],
	template: \`
		<button hlmBtn variant="outline" size="sm">
			Messages
			<span
				class="text-muted-foreground ml-2 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
				14
			</span>
		</button>
	\`,
})
export class Button15Component {}`;
