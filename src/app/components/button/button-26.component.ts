import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { BrnToggleDirective } from '@spartan-ng/brain/toggle';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';

@Component({
	selector: 'sim-button-26',
	standalone: true,
	providers: [provideIcons({ lucideSun, lucideMoon })],
	imports: [HlmIconDirective, HlmToggleDirective, BrnToggleDirective, NgIcon],
	template: `
		<button
			hlmToggle
			variant="outline"
			class="group data-[state=on]:hover:bg-muted size-9 data-[state=on]:bg-transparent"
			(click)="changeTheme()">
			<ng-icon
				hlm
				name="lucideSun"
				size="sm"
				class="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100" />
			<ng-icon
				hlm
				name="lucideMoon"
				size="sm"
				class="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0" />
		</button>
	`,
})
export class Button26Component {
	theme = signal<'light' | 'dark'>('light');

	changeTheme() {
		this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
	}
}

export const button26Code = `
import { Component, signal } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';
import { BrnToggleDirective } from '@spartan-ng/brain/toggle';

@Component({
  selector: 'sim-button-26',
  standalone: true,
  providers: [provideIcons({ lucideSun, lucideMoon })],
  imports: [HlmIconDirective, HlmToggleDirective, BrnToggleDirective, NgIcon],
  template: \`
    <button
      hlmToggle
      variant="outline"
      class="group data-[state=on]:hover:bg-muted size-9 data-[state=on]:bg-transparent"
      (click)="changeTheme()"
    >
      <ng-icon
        hlm
        name="lucideSun"
        size="sm"
        class="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
      />
      <ng-icon
        hlm
        name="lucideMoon"
        size="sm"
        class="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
      />
    </button>
  \`,
})
export class Button26Component {
  theme = signal<'light' | 'dark'>('light');

  changeTheme() {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }
}

`;
