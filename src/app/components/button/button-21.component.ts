import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-21',
	standalone: true,
	providers: [provideIcons({ lucidePlus })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<button hlmBtn variant="outline" size="icon" class="group rounded-full" (click)="onOpen()" [ariaExpanded]="open()">
			<ng-icon
				hlm
				name="lucidePlus"
				size="sm"
				class="transition-transform duration-500 [transition-timing-function:cubic-bezier(0.68,-0.6,0.32,1.6)] group-aria-expanded:rotate-[135deg]" />
		</button>
	`,
})
export class Button21Component {
	open = signal<boolean>(false);

	onOpen() {
		this.open.set(!this.open());
	}
}

export const button21Code = `
import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-button-21',
  standalone: true,
  providers: [provideIcons({ lucidePlus })],
  imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
  template: \`
    <button
      hlmBtn
      variant="outline"
      size="icon"
      class="group rounded-full"
      (click)="onOpen()"
      [ariaExpanded]="open()"
    >
      <ng-icon
        hlm
        name="lucidePlus"
        size="sm"
        class="transition-transform duration-500 [transition-timing-function:cubic-bezier(0.68,-0.6,0.32,1.6)] group-aria-expanded:rotate-[135deg]"
      />
    </button>
  \`,
})
export class Button21Component {
  open = signal<boolean>(false);

  onOpen() {
    this.open.set(!this.open());
  }
}
`;
