import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-badge-21',
	standalone: true,
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadgeDirective, HlmIconDirective, NgIcon],
	template: `
		<span
			hlmBadge
			size="lg"
			variant="outline"
			class="w-full rounded-full border-amber-200 bg-amber-50 py-[3px] pl-[3px] hover:bg-amber-100">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="bg-background rounded-full border-amber-200">
					<span class="truncate text-amber-700">Warning</span>
				</span>
				<span class="truncate text-amber-700">Password expired in 3 days</span>
				<ng-icon hlm name="lucideArrowRight" size="xs" class="text-amber-600" />
			</div>
		</span>
	`,
})
export class Badge21Component {}

export const badge21Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-badge-21',
  standalone: true,
  providers: [provideIcons({ lucideArrowRight })],
  imports: [HlmBadgeDirective, HlmIconDirective, NgIcon],
  template: \`
    <span
      hlmBadge
      size="lg"
      variant="outline"
      class="w-full rounded-full border-amber-200 bg-amber-50 py-[3px] pl-[3px] hover:bg-amber-100"
    >
      <div class="flex items-center gap-2">
        <span
          hlmBadge
          variant="outline"
          class="bg-background rounded-full border-amber-200"
        >
          <span class="truncate text-amber-700"> Warning </span>
        </span>
        <span class="truncate text-amber-700">
          Password expired in 3 days
        </span>
        <ng-icon hlm name="lucideArrowRight" size="xs" class="text-amber-600" />
      </div>
    </span>
  \`,
})
export class Badge21Component {}
`;
