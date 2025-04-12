import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-badge-06',
	standalone: true,
	providers: [provideIcons({ lucideX })],
	imports: [HlmBadgeDirective, HlmIconDirective, NgIcon],
	template: `
		<span hlmBadge>
			<div class="flex items-center justify-center gap-1">
				<ng-icon hlm name="lucideX" size="xs" class="text-primary-foreground" />
				<span>Icon badge</span>
			</div>
		</span>
	`,
})
export class Badge06Component {}

export const badge06Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-badge-06',
  standalone: true,
  providers: [provideIcons({ lucideX })],
  imports: [HlmBadgeDirective, HlmIconDirective, NgIcon],
  template: \`
    <span hlmBadge>
      <div class="flex items-center justify-center gap-1">
        <ng-icon hlm name="lucideX" size="xs" class="text-primary-foreground" />
        <span> Icon badge </span>
      </div>
    </span>
  \`,
})
export class Badge06Component {}
`;
