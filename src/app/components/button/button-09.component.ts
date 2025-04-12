import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-09',
	standalone: true,
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<button hlmBtn size="sm" class="group">
			Next page
			<ng-icon hlm name="lucideArrowRight" size="sm" class="ms-1 transition-transform group-hover:translate-x-0.5" />
		</button>
	`,
})
export class Button09Component {}

export const button09Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-button-09',
  standalone: true,
  providers: [provideIcons({ lucideArrowRight })],
  imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
  template: \`
    <button hlmBtn size="sm" class="group">
      Next page
      <ng-icon
        hlm
        name="lucideArrowRight"
        size="sm"
        class="ms-1 transition-transform group-hover:translate-x-0.5"
      />
    </button>
  \`,
})
export class Button09Component {}
`;
