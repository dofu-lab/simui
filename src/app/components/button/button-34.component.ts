import { Component, signal } from '@angular/core';
import { HlmToggleGroupImports } from '@spartan-ng/helm/toggle-group';

@Component({
	selector: 'sim-button-34',
	imports: [HlmToggleGroupImports],
	template: `
		<hlm-toggle-group variant="outline">
			<button hlmToggleGroupItem value="left" variant="outline">Left</button>
			<button hlmToggleGroupItem value="top" variant="outline">Center</button>
			<button hlmToggleGroupItem value="right" variant="outline">Right</button>
		</hlm-toggle-group>
	`,
})
export class Button34Component {
	theme = signal<'light' | 'dark'>('light');

	changeTheme() {
		this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
	}
}

export const button34Code = `import { Component, signal } from '@angular/core';
import { HlmToggleGroupImports } from '@spartan-ng/helm/toggle-group';

@Component({
	selector: 'sim-button-34',
	imports: [HlmToggleGroupImports],
	template: \`
		<hlm-toggle-group variant="outline">
			<button hlmToggleGroupItem value="left" variant="outline">Left</button>
			<button hlmToggleGroupItem value="top" variant="outline">Center</button>
			<button hlmToggleGroupItem value="right" variant="outline">Right</button>
		</hlm-toggle-group>
	\`,
})
export class Button34Component {
	theme = signal<'light' | 'dark'>('light');

	changeTheme() {
		this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
	}
}`;
