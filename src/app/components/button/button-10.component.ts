import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideMail } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-10',
	standalone: true,
	providers: [provideIcons({ lucideMail, lucideArrowRight })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<button hlmBtn size="sm" variant="secondary" class="group">
			<ng-icon hlm name="lucideMail" size="sm" class="ms-1 mr-2" />
			Subscribe
			<ng-icon hlm name="lucideArrowRight" size="sm" class="ms-1 transition-transform group-hover:translate-x-0.5" />
		</button>
	`,
})
export class Button10Component {}

export const button10Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideMail } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-button-10',
  standalone: true,
  providers: [provideIcons({ lucideMail, lucideArrowRight })],
  imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
  template: \`
    <button hlmBtn size="sm" variant="secondary" class="group">
      <ng-icon hlm name="lucideMail" size="sm" class="ms-1 mr-2" />
      Subscribe
      <ng-icon
        hlm
        name="lucideArrowRight"
        size="sm"
        class="ms-1 transition-transform group-hover:translate-x-0.5"
      />
    </button>
  \`,
})
export class Button10Component {}
`;
