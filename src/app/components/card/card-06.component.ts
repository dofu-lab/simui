import { Component } from '@angular/core';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';

@Component({
	selector: 'sim-card-06',
	imports: [HlmCardDirective, HlmButtonDirective, HlmAspectRatioDirective],
	template: `
		<section hlmCard class="relative w-72 overflow-hidden rounded-2xl p-0 shadow-lg">
			<div [hlmAspectRatio]="1">
				<img src="/assets/products/concert.webp" alt="Artist concert" class="h-full w-full object-cover" />
			</div>

			<div class="absolute right-0 bottom-0 left-0 p-[2px]">
				<div
					class="rounded-4 via-yellow-600/40to-black/50 flex items-center justify-between gap-4 bg-gradient-to-r from-black/50 px-5 py-3 backdrop-blur-md">
					<span class="text-sm text-white/90">Coming soon.</span>
					<button hlmBtn size="sm" variant="secondary">Notify me</button>
				</div>
			</div>
		</section>
	`,
})
export class Card06Component {}

export const card06Code = `
import { Component } from '@angular/core';
import { HlmCardContentDirective, HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'sim-card-06',
  imports: [HlmCardDirective, HlmButtonDirective, HlmAspectRatioDirective],
  template: \`
		<section hlmCard class="relative w-72 overflow-hidden rounded-2xl p-0 shadow-lg">
			<div [hlmAspectRatio]="1">
				<img src="/assets/products/concert.webp" alt="Artist concert" class="h-full w-full object-cover" />
			</div>

			<div class="absolute right-0 bottom-0 left-0 p-[2px]">
				<div
					class="rounded-4 via-yellow-600/40to-black/50 flex items-center justify-between gap-4 bg-gradient-to-r from-black/50 px-5 py-3 backdrop-blur-md">
					<span class="text-sm text-white/90">Coming soon.</span>
					<button hlmBtn size="sm" variant="secondary">Notify me</button>
				</div>
			</div>
		</section>
	\`,
})
export class Card06Component {}
`;
