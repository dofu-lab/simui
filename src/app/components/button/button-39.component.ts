import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-39',
	standalone: true,
	providers: [provideIcons({ lucideChevronRight })],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: `
		<button hlmBtn class="relative pe-12" size="sm">
			Next
			<span
				class="bg-primary-foreground/15 pointer-events-none absolute inset-y-0 end-0 flex w-9 items-center justify-center">
				<ng-icon hlm name="lucideChevronRight" size="sm" />
			</span>
		</button>
	`,
})
export class Button39Component {}

export const button39Code = `
import { Component } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-button-39',
  standalone: true,
  providers: [provideIcons({ lucideChevronRight })],
  imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
  template: \`
    <button hlmBtn class="relative pe-12" size="sm">
      Next
      <span
        class="bg-primary-foreground/15 pointer-events-none absolute inset-y-0 end-0 flex w-9 items-center justify-center"
      >
        <ng-icon hlm name="lucideChevronRight" size="sm" />
      </span>
    </button>
  \`,
})
export class Button39Component {}
`;
