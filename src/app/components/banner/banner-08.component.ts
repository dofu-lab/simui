import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideSparkle, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-banner-08',
	standalone: true,
	imports: [NgIcon, HlmIconDirective, HlmButtonDirective],
	providers: [provideIcons({ lucideX, lucideArrowRight, lucideSparkle })],
	host: {
		class: 'w-full',
	},
	template: `
		<div class="bg-secondary-foreground z-50 px-4 py-2">
			<div class="relative flex gap-2 md:items-center">
				<div class="flex grow flex-col justify-between gap-0.5 md:flex-row md:items-center md:gap-3">
					<div class="flex items-center justify-start gap-3 truncate">
						<ng-icon hlm name="lucideSparkle" size="sm" class="text-primary-foreground" />
						<span class="text-primary-foreground text-center">Introducing our redesigned dashboard experience</span>
					</div>

					<div class="text-primary-foreground group flex cursor-pointer items-center gap-1 pl-7 md:pl-0">
						<span>Learn more</span>
						<ng-icon hlm name="lucideArrowRight" size="sm" class="group-hover:translate-x-0.5" />
					</div>
				</div>
				<button
					hlmBtn
					variant="ghost"
					size="icon"
					class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent max-md:absolute max-md:right-0">
					<div>
						<ng-icon hlm name="lucideX" color="text-red-500" size="sm" />
					</div>
				</button>
			</div>
		</div>
	`,
})
export class Banner08Component {}

export const banner08Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideSparkle, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-banner-08',
  standalone: true,
  imports: [NgIcon, HlmIconDirective, HlmButtonDirective],
  providers: [provideIcons({ lucideX, lucideArrowRight, lucideSparkle })],
  host: {
    class: 'w-full',
  },
  template: \`
    <div class="bg-secondary-foreground z-50 px-4 py-2">
      <div class="relative flex gap-2 md:items-center">
        <div
          class="flex grow flex-col justify-between gap-0.5 md:flex-row md:items-center md:gap-3"
        >
          <div class="flex items-center justify-start gap-3 truncate">
            <ng-icon
              hlm
              name="lucideSparkle"
              size="sm"
              class="text-primary-foreground"
            />
            <span class="text-primary-foreground text-center">
              Introducing our redesigned dashboard experience
            </span>
          </div>

          <div
            class="text-primary-foreground group flex cursor-pointer items-center gap-1 pl-7 md:pl-0"
          >
            <span>Learn more</span>
            <ng-icon
              hlm
              name="lucideArrowRight"
              size="sm"
              class="group-hover:translate-x-0.5"
            />
          </div>
        </div>
        <button
          hlmBtn
          variant="ghost"
          size="icon"
          class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent max-md:absolute max-md:right-0"
        >
          <div>
            <ng-icon
              hlm
              name="lucideX"
              color="text-red-500"
              size="sm"
            />
          </div>
        </button>
      </div>
    </div>
  \`,
})
export class Banner08Component {}
`;
