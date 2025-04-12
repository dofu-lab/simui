import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-badge-23',
	standalone: true,
	providers: [provideIcons({ lucideArrowRight })],
	imports: [HlmBadgeDirective, HlmIconDirective, NgIcon],
	template: `
		<span
			hlmBadge
			size="lg"
			variant="outline"
			class="w-full rounded-full border-emerald-200 bg-emerald-50 py-[3px] pr-[3px] hover:bg-emerald-100">
			<div class="flex items-center gap-2">
				<span class="truncate text-emerald-700">Profile is updated</span>
				<span hlmBadge variant="outline" class="bg-background rounded-full border-emerald-200">
					<span class="truncate text-emerald-700">Success</span>
					<ng-icon hlm name="lucideArrowRight" size="xs" color="text-emerald-600" />
				</span>
			</div>
		</span>
	`,
})
export class Badge23Component {}

export const badge23Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-badge-23',
  standalone: true,
  providers: [provideIcons({ lucideArrowRight })],
  imports: [HlmBadgeDirective, HlmIconDirective, NgIcon],
  template: \`
    <span
      hlmBadge
      size="lg"
      variant="outline"
      class="w-full rounded-full border-emerald-200 bg-emerald-50 py-[3px] pr-[3px] hover:bg-emerald-100"
    >
      <div class="flex items-center gap-2">
        <span class="truncate text-emerald-700"> Profile is updated </span>
        <span
          hlmBadge
          variant="outline"
          class="bg-background rounded-full border-emerald-200"
        >
          <span class="truncate text-emerald-700"> Success </span>
          <ng-icon
            hlm
            name="lucideArrowRight"
            size="xs"
            class="text-emerald-600"
          />
        </span>
      </div>
    </span>
  \`,
})
export class Badge23Component {}
`;
