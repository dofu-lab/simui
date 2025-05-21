import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';

@Component({
	selector: 'sim-card-07',
	imports: [HlmCardDirective, HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective],
	template: `
		<section class="relative mx-auto w-full max-w-md">
			<div
				hlmCard
				class="border-primary bg-primary text-primary-foreground relative z-0 rounded-t-2xl px-6 py-3 shadow-md">
				<div class="flex items-center justify-between pb-2">
					<span class="text-sm font-semibold tracking-wide uppercase">Notice Board</span>
					<span class="text-sm font-medium">2 days ago</span>
				</div>
			</div>

			<div hlmCard class="border-primary relative z-10 -mt-4 rounded-2xl px-6 py-5 shadow-md">
				<p class="text-lg leading-relaxed font-medium">
					Summer camps are filling up! Sign up below for your kids this July!
				</p>

				<div class="mt-6 flex items-center gap-3">
					<hlm-avatar variant="large">
						<img hlmAvatarImage src="/assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
						<span hlmAvatarFallback class="bg-primary">ML</span>
					</hlm-avatar>
					<span class="font-semibold">Mathilde Lewis</span>
				</div>
			</div>
		</section>
	`,
})
export class Card07Component {}

export const card07Code = `
import { Component } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'sim-card-07',
  imports: [
    HlmCardDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
    HlmAvatarImageDirective
  ],
	template: \`
    <section class="relative mx-auto w-full max-w-md">
			<div
				hlmCard
				class="border-primary bg-primary text-primary-foreground relative z-0 rounded-t-2xl px-6 py-3 shadow-md">
				<div class="flex items-center justify-between pb-2">
					<span class="text-sm font-semibold tracking-wide uppercase">Notice Board</span>
					<span class="text-sm font-medium">2 days ago</span>
				</div>
			</div>

			<div hlmCard class="border-primary relative z-10 -mt-4 rounded-2xl px-6 py-5 shadow-md">
				<p class="text-lg leading-relaxed font-medium">
					Summer camps are filling up! Sign up below for your kids this July!
				</p>

				<div class="mt-6 flex items-center gap-3">
					<hlm-avatar variant="large">
						<img hlmAvatarImage src="/assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
						<span hlmAvatarFallback class="bg-primary">ML</span>
					</hlm-avatar>
					<span class="font-semibold">Mathilde Lewis</span>
				</div>
			</div>
		</section>
	\`,
})
export class Card07Component {}
`;
