import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignCenter, lucideAlignJustify, lucideAlignLeft, lucideAlignRight } from '@ng-icons/lucide';
import { BrnToggleDirective, BrnToggleGroupComponent } from '@spartan-ng/brain/toggle';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';

@Component({
	selector: 'sim-button-32',
	standalone: true,
	providers: [
		provideIcons({
			lucideAlignLeft,
			lucideAlignRight,
			lucideAlignCenter,
			lucideAlignJustify,
		}),
	],
	imports: [HlmIconDirective, HlmToggleDirective, BrnToggleDirective, BrnToggleGroupComponent, NgIcon],
	template: `
		<brn-toggle-group>
			<button
				hlmToggle
				value="left"
				variant="outline"
				data-variant="outline"
				class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-l-md shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignLeft" size="sm" />
			</button>
			<button
				hlmToggle
				value="top"
				variant="outline"
				data-variant="outline"
				class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignCenter" size="sm" />
			</button>
			<button
				hlmToggle
				value="bottom"
				variant="outline"
				data-variant="outline"
				class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignRight" size="sm" />
			</button>
			<button
				hlmToggle
				value="right"
				variant="outline"
				data-variant="outline"
				class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-r-md shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignJustify" size="sm" />
			</button>
		</brn-toggle-group>
	`,
})
export class Button32Component {
	theme = signal<'light' | 'dark'>('light');

	changeTheme() {
		this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
	}
}

export const button32Code = `
import { Component, signal } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideAlignCenter,
  lucideAlignJustify,
  lucideAlignLeft,
  lucideAlignRight,
} from '@ng-icons/lucide';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';
import {
  BrnToggleDirective,
  BrnToggleGroupComponent,
} from '@spartan-ng/brain/toggle';

@Component({
  selector: 'sim-button-32',
  standalone: true,
  providers: [
    provideIcons({
      lucideAlignLeft,
      lucideAlignRight,
      lucideAlignCenter,
      lucideAlignJustify,
    }),
  ],
  imports: [
    HlmIconDirective,
    HlmToggleDirective,
    BrnToggleDirective,
    BrnToggleGroupComponent,
    NgIcon,
  ],
  template: \`
    <brn-toggle-group>
      <button
        hlmToggle
        value="left"
        variant="outline"
        data-variant="outline"
        class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-l-md shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l"
      >
        <ng-icon hlm name="lucideAlignLeft" size="sm" />
      </button>
      <button
        hlmToggle
        value="top"
        variant="outline"
        data-variant="outline"
        class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l"
      >
        <ng-icon hlm name="lucideAlignCenter" size="sm" />
      </button>
      <button
        hlmToggle
        value="bottom"
        variant="outline"
        data-variant="outline"
        class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l"
      >
        <ng-icon hlm name="lucideAlignRight" size="sm" />
      </button>
      <button
        hlmToggle
        value="right"
        variant="outline"
        data-variant="outline"
        class="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-r-md shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l"
      >
        <ng-icon hlm name="lucideAlignJustify" size="sm" />
      </button>
    </brn-toggle-group>
  \`,
})
export class Button32Component {
  theme = signal<'light' | 'dark'>('light');

  changeTheme() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }
}
`;
