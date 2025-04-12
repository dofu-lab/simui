import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-11',
	standalone: true,
	providers: [provideIcons({ lucideChevronDown })],
	imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
	template: `
		<button hlmBtn size="sm">
			Options
			<ng-icon hlm name="lucideChevronDown" size="sm" class="ml-1 opacity-80" />
		</button>
	`,
})
export class Button11Component {}

export const button11Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-button-11',
  standalone: true,
  providers: [provideIcons({ lucideChevronDown })],
  imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
  template: \`
    <button hlmBtn size="sm">
      Options
      <ng-icon hlm name="lucideChevronDown" size="sm" class="ml-1 opacity-80" />
    </button>
  \`,
})
export class Button11Component {}
`;
