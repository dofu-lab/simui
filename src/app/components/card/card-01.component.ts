import { Component } from '@angular/core';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
	HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';

@Component({
	selector: 'sim-card-01',
	imports: [
		HlmAspectRatioDirective,
		HlmCardContentDirective,
		HlmCardDirective,
		HlmCardTitleDirective,
		HlmCardDescriptionDirective,
		HlmCardFooterDirective,
		HlmButtonDirective,
	],
	template: `
		<section hlmCard>
			<div [hlmAspectRatio]="1" class="group overflow-hidden rounded-t-md">
				<img
					src="/assets/products/product-1.webp"
					alt="Product image"
					class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
			</div>

			<div hlmCardContent class="py-4">
				<h3 hlmCardTitle>Sample Product</h3>
				<p hlmCardDescription class="mt-1 mb-2">Short description of the product goes here.</p>
				<p class="text-foreground text-base font-medium">$99.99</p>
			</div>

			<div hlmCardFooter class="flex gap-1 pt-2">
				<button hlmBtn variant="secondary" class="w-full">View more</button>
				<button hlmBtn class="w-full">Add to cart</button>
			</div>
		</section>
	`,
})
export class Card01Component {}

export const card01Code = `
import { Component } from '@angular/core';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardTitleDirective
} from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-card-01',
  imports: [
    HlmAspectRatioDirective,
    HlmCardContentDirective,
    HlmCardDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardFooterDirective,
    HlmButtonDirective],
	template: \`
    <section hlmCard>
			<div [hlmAspectRatio]="1" class="group overflow-hidden rounded-t-md">
				<img
					src="/assets/products/product-1.webp"
					alt="Product image"
					class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
			</div>

			<div hlmCardContent class="py-4">
				<h3 hlmCardTitle>Sample Product</h3>
				<p hlmCardDescription class="mt-1 mb-2">Short description of the product goes here.</p>
				<p class="text-foreground text-base font-medium">$99.99</p>
			</div>

			<div hlmCardFooter class="flex gap-1 pt-2">
				<button hlmBtn variant="secondary" class="w-full">View more</button>
				<button hlmBtn class="w-full">Add to cart</button>
			</div>
		</section>
	\`,
})
export class Card01Component {}
`;
