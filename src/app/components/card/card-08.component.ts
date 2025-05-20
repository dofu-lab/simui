import { Component } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';

@Component({
	selector: 'sim-card-08',
	imports: [HlmCardDirective],
	template: `
		<section hlmCard class="relative mx-auto aspect-[3/2] overflow-hidden rounded-xl shadow-lg ring-1 ring-gray-200">
			<div class="flex items-center justify-between px-5 pt-4">
				<svg viewBox="0 0 32 22" class="h-6 w-8 text-orange-400">
					<rect x="1" y="1" width="30" height="20" rx="2" ry="2" fill="currentColor" />
				</svg>
				<img src="/assets/logos/logo-base.svg" alt="Simui logo" class="h-6 w-auto opacity-90" />
			</div>

			<p class="mt-6 px-5 font-mono text-lg tracking-widest">•••• •••• •••• 4242</p>

			<div class="absolute right-5 bottom-4 left-5 flex justify-between text-xs tracking-wider">
				<div>
					<p class="uppercase opacity-60">Card Holder</p>
					<p class="mt-1 text-sm font-medium">JOHN&nbsp;DOE</p>
				</div>
				<div>
					<p class="uppercase opacity-60">Expires</p>
					<p class="mt-1 text-sm font-medium">12/28</p>
				</div>
			</div>
		</section>
	`,
})
export class Card08Component {}

export const card08Code = `
import { Component } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'sim-card-08',
  imports: [
    HlmCardDirective,
  ],
	template: \`
		<section
			hlmCard
			class="relative mx-auto aspect-[3/2] overflow-hidden rounded-xl  shadow-lg ring-1 ring-gray-200">
			<div class="flex items-center justify-between px-5 pt-4">
				<svg viewBox="0 0 32 22" class="h-6 w-8 text-orange-400">
					<rect x="1" y="1" width="30" height="20" rx="2" ry="2" fill="currentColor" />
				</svg>
				<img src="/assets/logos/logo-base.svg" alt="Simui logo" class="h-6 w-auto opacity-90" />
			</div>

			<p class="mt-6 px-5 font-mono text-lg tracking-widest ">•••• •••• •••• 4242</p>

			<div class="absolute right-5 bottom-4 left-5 flex justify-between text-xs tracking-wider ">
				<div>
					<p class="uppercase opacity-60">Card Holder</p>
					<p class="mt-1 text-sm font-medium">JOHN&nbsp;DOE</p>
				</div>
				<div>
					<p class="uppercase opacity-60">Expires</p>
					<p class="mt-1 text-sm font-medium">12/28</p>
				</div>
			</div>
		</section>
	\`,
})
export class Card08Component {}
`;
