import { Component } from '@angular/core';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-card-05',
  standalone: true,
  imports: [
    HlmAspectRatioDirective,
    HlmCardDirective,
    HlmButtonDirective
  ],
  template: `
    <section hlmCard class="relative w-72 overflow-hidden rounded-2xl p-0 shadow-lg">
      <div [hlmAspectRatio]="1">
        <img src="/assets/products/concert.webp" alt="Artist concert" class="h-full w-full object-cover"/>
      </div>

      <div
        class="absolute bottom-0 left-0 right-0 p-[2px]"
      >
        <div class="flex items-center justify-between gap-4 rounded-4 px-5 py-3 backdrop-blur-md bg-gradient-to-r
                 from-black/50 via-yellow-600/40to-black/50">
          <span class="text-sm text-white/90">Coming soon.</span>
          <button hlmBtn size="sm" variant="secondary">
            Notify me
          </button>
        </div>
      </div>
    </section>
  `,
})
export class Card05Component {
}

export const card05Code = `
import { Component } from '@angular/core';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-card-05',
  standalone: true,
  imports: [
    HlmAspectRatioDirective,
    HlmCardDirective,
    HlmButtonDirective
  ],
	template: \`
    <section hlmCard class="relative w-72 overflow-hidden rounded-2xl p-0 shadow-lg">
      <div [hlmAspectRatio]="1">
        <img src="/assets/products/concert.webp" alt="Artist concert" class="h-full w-full object-cover"/>
      </div>

      <div
        class="absolute bottom-0 left-0 right-0 p-[2px]"
      >
        <div class="flex items-center justify-between gap-4 rounded-4 px-5 py-3 backdrop-blur-md bg-gradient-to-r
                 from-black/50 via-yellow-600/40to-black/50">
          <span class="text-sm text-white/90">Coming soon.</span>
          <button hlmBtn size="sm" variant="secondary">
            Notify me
          </button>
        </div>
      </div>
    </section>
	\`,
})
export class Card05Component {}
`;
