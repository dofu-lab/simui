import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-badge-22',
	standalone: true,
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadgeDirective, HlmIconDirective, NgIcon],
	template: `
		<span
			hlmBadge
			size="lg"
			variant="outline"
			class="w-full rounded-full border-red-200 bg-red-50 py-[3px] pl-[3px] hover:bg-red-100">
			<div class="flex items-center gap-2">
				<span hlmBadge variant="outline" class="bg-background rounded-full border-red-200">
					<span class="truncate text-red-700">Error</span>
				</span>
				<span class="truncate text-red-700">Something went wrong</span>
				<ng-icon hlm name="lucideArrowRight" size="xs" class="text-red-600" />
			</div>
		</span>
	`,
})
export class Badge22Component {}

export const badge22Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-badge-22',
  standalone: true,
  providers: [provideIcons({ lucideArrowRight })],
  imports: [HlmBadgeDirective, HlmIconDirective, NgIcon],
  template: \`
    <span
      hlmBadge
      size="lg"
      variant="outline"
      class="w-full rounded-full border-red-200 bg-red-50 py-[3px] pl-[3px] hover:bg-red-100"
    >
      <div class="flex items-center gap-2">
        <span
          hlmBadge
          variant="outline"
          class="bg-background rounded-full border-red-200"
        >
          <span class="truncate text-red-700"> Error </span>
        </span>
        <span class="truncate text-red-700"> Something went wrong </span>
        <ng-icon hlm name="lucideArrowRight" size="xs" class="text-red-600" />
      </div>
    </span>
  \`,
})
export class Badge22Component {}
`;
