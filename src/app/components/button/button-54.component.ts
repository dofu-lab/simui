import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-54',
	standalone: true,
	providers: [provideIcons({ lucideChevronRight })],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon],
	template: `
		<button hlmBtn class="group h-auto gap-4 py-3 text-left" variant="outline">
			<div class="space-y-1">
				<h3>Talent Agency</h3>
				<p class="text-muted-foreground font-normal whitespace-break-spaces">Matches for your roster</p>
			</div>
			<ng-icon
				hlm
				name="lucideChevronRight"
				class="opacity-60 transition-transform group-hover:translate-x-0.5"
				size="sm" />
		</button>
	`,
})
export class Button54Component {}

export const button54Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-button-54',
  standalone: true,
  providers: [provideIcons({ lucideChevronRight })],
  imports: [HlmButtonDirective, HlmIconDirective, NgIcon],
  template: \`
    <button hlmBtn class="group h-auto gap-4 py-3 text-left" variant="outline">
      <div class="space-y-1">
        <h3>Talent Agency</h3>
        <p class="text-muted-foreground font-normal whitespace-break-spaces">
          Matches for your roster
        </p>
      </div>
      <ng-icon
        hlm
        name="lucideChevronRight"
        class="opacity-60 transition-transform group-hover:translate-x-0.5"
        size="sm"
      />
    </button>
  \`,
})
export class Button54Component {}
`;
