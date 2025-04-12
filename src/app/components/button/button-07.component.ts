import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFlame } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-07',
	standalone: true,
	providers: [provideIcons({ lucideFlame })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<button hlmBtn variant="outline" size="sm">
			<ng-icon hlm name="lucideFlame" size="sm" class="mr-1" />
			Live
		</button>
	`,
})
export class Button07Component {}

export const button07Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFlame } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-button-07',
  standalone: true,
  providers: [provideIcons({ lucideFlame })],
  imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
  template: \`
    <button hlmBtn variant="outline" size="sm">
      <ng-icon hlm name="lucideFlame" size="sm" class="mr-1" />
      Live
    </button>
  \`,
})
export class Button07Component {}
`;
