import { HlmIconDirective } from '@/libs/ui/ui-icon-helm/src';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideShoppingCart } from '@ng-icons/lucide';
import { HlmAspectRatioDirective } from '@spartan-ng/helm/aspect-ratio';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
	HlmCardTitleDirective,
} from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-card-01',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmAspectRatioDirective,
		HlmCardContentDirective,
		HlmCardDirective,
		HlmCardTitleDirective,
		HlmCardDescriptionDirective,
		HlmCardFooterDirective,
		HlmButtonDirective,
	],
	providers: [provideIcons({ lucideShoppingCart })],
	template: `
		<section hlmCard>
			<div [hlmAspectRatio]="1" class="group overflow-hidden rounded-t-md">
				<img
					src="/assets/products/product-1.webp"
					alt="Product image"
					class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
			</div>

			<div hlmCardContent class="flex flex-col gap-4 py-4">
				<h3 hlmCardTitle>Sample Product</h3>
				<p hlmCardDescription>Short description of the product goes here.</p>
				<p class="text-foreground text-base font-medium">$99.99</p>
			</div>

			<div hlmCardFooter class="flex gap-2 pt-2">
				<button hlmBtn variant="secondary" size="sm" class="w-full">View more</button>
				<button hlmBtn size="sm" class="flex w-full gap-2">
					<ng-icon hlm name="lucideShoppingCart" size="sm" />
					Add to cart
				</button>
			</div>
		</section>
	`,
})
export class Card01Component {}

export const card01Code = `import { HlmIconDirective } from '@/libs/ui/ui-icon-helm/src';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideShoppingCart } from '@ng-icons/lucide';
import { HlmAspectRatioDirective } from '@spartan-ng/helm/aspect-ratio';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
	HlmCardTitleDirective,
} from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-card-01',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmAspectRatioDirective,
		HlmCardContentDirective,
		HlmCardDirective,
		HlmCardTitleDirective,
		HlmCardDescriptionDirective,
		HlmCardFooterDirective,
		HlmButtonDirective,
	],
	providers: [provideIcons({ lucideShoppingCart })],
	template: \`
		<section hlmCard>
			<div [hlmAspectRatio]="1" class="group overflow-hidden rounded-t-md">
				<img
					src="/assets/products/product-1.webp"
					alt="Product image"
					class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
			</div>

			<div hlmCardContent class="flex flex-col gap-4 py-4">
				<h3 hlmCardTitle>Sample Product</h3>
				<p hlmCardDescription>Short description of the product goes here.</p>
				<p class="text-foreground text-base font-medium">$99.99</p>
			</div>

			<div hlmCardFooter class="flex gap-2 pt-2">
				<button hlmBtn variant="secondary" size="sm" class="w-full">View more</button>
				<button hlmBtn size="sm" class="flex w-full gap-2">
					<ng-icon hlm name="lucideShoppingCart" size="sm" />
					Add to cart
				</button>
			</div>
		</section>
	\`,
})
export class Card01Component {}`;
