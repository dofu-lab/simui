import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-43',
	standalone: true,
	providers: [provideIcons({ lucideChevronDown })],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: `
		<div class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
			<button hlmBtn size="sm" class="rounded-none rounded-s-md shadow-none focus-visible:z-10">
				Merge pull request
			</button>
			<button hlmBtn size="sm" class="rounded-none rounded-e-md border-l-0 shadow-none focus-visible:z-10">
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
	`,
})
export class Button43Component {}

export const button43Code = `
import { Component } from '@angular/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-button-43',
  standalone: true,
  providers: [provideIcons({ lucideChevronDown })],
  imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
  template: \`
    <div
      class="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse"
    >
      <button
        hlmBtn
        size="sm"
        class="rounded-none rounded-s-md shadow-none focus-visible:z-10"
      >
        Merge pull request
      </button>
      <button
        hlmBtn
        size="sm"
        class="rounded-none rounded-e-md border-l-0 shadow-none focus-visible:z-10"
      >
        <ng-icon hlm name="lucideChevronDown" size="sm" />
      </button>
    </div>
  \`,
})
export class Button43Component {}
`;
