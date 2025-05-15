import { Component } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'sim-card-07',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
    HlmAvatarImageDirective
  ],
  template: `
    <section class="relative w-full max-w-md mx-auto">
      <div hlmCard class="rounded-t-2xl border border-black bg-black text-white px-6 py-3 shadow-md
      z-0 relative [--hlm-card-padding:0]">
        <div class="flex items-center justify-between pb-2">
          <span class="text-sm font-semibold uppercase tracking-wide">
            Notice Board
          </span>
          <span class="text-sm font-medium">2 days ago</span>
        </div>
      </div>

      <div hlmCard
           class="relative -mt-4 rounded-2xl border border-black bg-white px-6 py-5 shadow-md z-10 [--hlm-card-padding:0]">
        <p class="text-lg font-medium leading-relaxed">
          Summer camps are filling up! Sign up below for your kids this July!
        </p>

        <div class="mt-6 flex items-center gap-3">
          <hlm-avatar variant="large">
            <img hlmAvatarImage src="/assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis"/>
            <span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
          </hlm-avatar>
          <span class="font-semibold">Mathilde Lewis</span>
        </div>
      </div>
    </section>
  `,
})
export class Card07Component {
}

export const card07Code = `
import { Component } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'sim-card-07',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
    HlmAvatarImageDirective
  ],
	template: \`
    <section class="relative w-full max-w-md mx-auto">
      <div hlmCard class="rounded-t-2xl border border-black bg-black text-white px-6 py-3 shadow-md
      z-0 relative [--hlm-card-padding:0]">
        <div class="flex items-center justify-between pb-2">
          <span class="text-sm font-semibold uppercase tracking-wide">
            Notice Board
          </span>
          <span class="text-sm font-medium">2 days ago</span>
        </div>
      </div>

      <div hlmCard
           class="relative -mt-4 rounded-2xl border border-black bg-white px-6 py-5 shadow-md z-10 [--hlm-card-padding:0]">
        <p class="text-lg font-medium leading-relaxed">
          Summer camps are filling up! Sign up below for your kids this July!
        </p>

        <div class="mt-6 flex items-center gap-3">
          <hlm-avatar variant="large">
            <img hlmAvatarImage src="/assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis"/>
            <span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
          </hlm-avatar>
          <span class="font-semibold">Mathilde Lewis</span>
        </div>
      </div>
    </section>
	\`,
})
export class Card07Component {}
`;
