import { Component, signal } from '@angular/core';
import { BrnToggleDirective, BrnToggleGroupComponent } from '@spartan-ng/brain/toggle';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';

@Component({
	selector: 'sim-button-35',
	standalone: true,
	imports: [HlmToggleDirective, BrnToggleDirective, BrnToggleGroupComponent],
	host: {
		class: 'w-full',
	},
	template: `
		<brn-toggle-group class="flex">
			<button
				hlmToggle
				value="left"
				variant="outline"
				data-variant="outline"
				class="min-w-0 flex-1 shrink-0 rounded-none rounded-l-md border-l shadow-none focus:z-10 focus-visible:z-10">
				Left
			</button>
			<button
				hlmToggle
				value="top"
				variant="outline"
				data-variant="outline"
				class="min-w-0 flex-1 shrink-0 rounded-none border-l-0 shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10">
				Center
			</button>

			<button
				hlmToggle
				value="right"
				variant="outline"
				data-variant="outline"
				class="min-w-0 flex-1 shrink-0 rounded-none rounded-r-md border-l-0 shadow-none focus:z-10 focus-visible:z-10">
				Right
			</button>
		</brn-toggle-group>
	`,
})
export class Button35Component {
	theme = signal<'light' | 'dark'>('light');

	changeTheme() {
		this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
	}
}

export const button35Code = `
import { Component, signal } from '@angular/core';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';
import {
  BrnToggleDirective,
  BrnToggleGroupComponent,
} from '@spartan-ng/brain/toggle';

@Component({
  selector: 'sim-button-35',
  standalone: true,
  imports: [HlmToggleDirective, BrnToggleDirective, BrnToggleGroupComponent],
  host: {
    class: 'w-full',
  },
  template: \`
    <brn-toggle-group class="flex">
      <button
        hlmToggle
        value="left"
        variant="outline"
        data-variant="outline"
        class="min-w-0 flex-1 shrink-0 rounded-none rounded-l-md border-l shadow-none focus:z-10 focus-visible:z-10"
      >
        Left
      </button>
      <button
        hlmToggle
        value="top"
        variant="outline"
        data-variant="outline"
        class="min-w-0 flex-1 shrink-0 rounded-none border-l-0 shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10"
      >
        Center
      </button>

      <button
        hlmToggle
        value="right"
        variant="outline"
        data-variant="outline"
        class="min-w-0 flex-1 shrink-0 rounded-none rounded-r-md border-l-0 shadow-none focus:z-10 focus-visible:z-10"
      >
        Right
      </button>
    </brn-toggle-group>
  \`,
})
export class Button35Component {
  theme = signal<'light' | 'dark'>('light');

  changeTheme() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }
}
`;
