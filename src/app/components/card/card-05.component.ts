import { Component } from '@angular/core';
import { HlmAspectRatioDirective } from '@spartan-ng/helm/aspect-ratio';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmCardDirective } from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-card-05',
	imports: [HlmAspectRatioDirective, HlmCardDirective, HlmButtonDirective],
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
export class Card05Component {}

export const card05Code = `import { Component } from '@angular/core';
import { HlmAspectRatioDirective } from '@spartan-ng/helm/aspect-ratio';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmCardDirective } from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-card-05',
	imports: [HlmAspectRatioDirective, HlmCardDirective, HlmButtonDirective],
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
export class Card05Component {}`;
