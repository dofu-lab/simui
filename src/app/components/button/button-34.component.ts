import { Component, signal } from '@angular/core';
import { BrnToggle } from '@spartan-ng/brain/toggle';
import { BrnToggleGroup } from '@spartan-ng/brain/toggle-group';
import { HlmToggle } from '@spartan-ng/helm/toggle';

@Component({
	selector: 'sim-button-34',
	imports: [HlmToggle, BrnToggle, BrnToggleGroup],
	template: `
		<brn-toggle-group multiple="false">
			<button
				hlmToggle
				value="left"
				variant="outline"
				data-variant="outline"
				class="min-w-0 shrink-0 rounded-none rounded-l-md border-l shadow-none focus:z-10 focus-visible:z-10">
				Left
			</button>
			<button
				hlmToggle
				value="top"
				variant="outline"
				data-variant="outline"
				class="min-w-0 shrink-0 rounded-none border-l-0 shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10">
				Center
			</button>

			<button
				hlmToggle
				value="right"
				variant="outline"
				data-variant="outline"
				class="min-w-0 shrink-0 rounded-none rounded-r-md border-l-0 shadow-none focus:z-10 focus-visible:z-10">
				Right
			</button>
		</brn-toggle-group>
	`,
})
export class Button34Component {
	theme = signal<'light' | 'dark'>('light');

	changeTheme() {
		this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
	}
}

export const button34Code = `import { Component, signal } from '@angular/core';
import { BrnToggle } from '@spartan-ng/brain/toggle';
import { BrnToggleGroup } from '@spartan-ng/brain/toggle-group';
import { HlmToggle } from '@spartan-ng/helm/toggle';

@Component({
	selector: 'sim-button-34',
	imports: [HlmToggle, BrnToggle, BrnToggleGroup],
	template: \`
		<brn-toggle-group multiple="false">
			<button
				hlmToggle
				value="left"
				variant="outline"
				data-variant="outline"
				class="min-w-0 shrink-0 rounded-none rounded-l-md border-l shadow-none focus:z-10 focus-visible:z-10">
				Left
			</button>
			<button
				hlmToggle
				value="top"
				variant="outline"
				data-variant="outline"
				class="min-w-0 shrink-0 rounded-none border-l-0 shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10">
				Center
			</button>

			<button
				hlmToggle
				value="right"
				variant="outline"
				data-variant="outline"
				class="min-w-0 shrink-0 rounded-none rounded-r-md border-l-0 shadow-none focus:z-10 focus-visible:z-10">
				Right
			</button>
		</brn-toggle-group>
	\`,
})
export class Button34Component {
	theme = signal<'light' | 'dark'>('light');

	changeTheme() {
		this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
	}
}`;
