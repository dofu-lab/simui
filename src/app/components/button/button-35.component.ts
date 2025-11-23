import { Component, signal } from '@angular/core';
import { HlmToggleGroupImports } from '@spartan-ng/helm/toggle-group';

@Component({
	selector: 'sim-button-35',
	imports: [HlmToggleGroupImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-toggle-group variant="outline" class="flex w-full">
			<button hlmToggleGroupItem value="left" variant="outline" class="flex-1">Left</button>
			<button hlmToggleGroupItem value="top" variant="outline" data-variant="outline" class="flex-1">Center</button>

			<button hlmToggleGroupItem value="right" variant="outline" data-variant="outline" class="flex-1">Right</button>
		</hlm-toggle-group>
	`,
})
export class Button35Component {
	theme = signal<'light' | 'dark'>('light');

	changeTheme() {
		this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
	}
}

export const button35Code = `import { Component, signal } from '@angular/core';
import { HlmToggleGroupImports } from '@spartan-ng/helm/toggle-group';

@Component({
	selector: 'sim-button-35',
	imports: [HlmToggleGroupImports],
	host: {
		class: 'w-full',
	},
	template: \`
		<hlm-toggle-group variant="outline" class="flex w-full">
			<button hlmToggleGroupItem value="left" variant="outline" class="flex-1">Left</button>
			<button hlmToggleGroupItem value="top" variant="outline" data-variant="outline" class="flex-1">Center</button>

			<button hlmToggleGroupItem value="right" variant="outline" data-variant="outline" class="flex-1">Right</button>
		</hlm-toggle-group>
	\`,
})
export class Button35Component {
	theme = signal<'light' | 'dark'>('light');

	changeTheme() {
		this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
	}
}`;
