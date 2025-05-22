import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideShoppingBag } from '@ng-icons/lucide';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
	HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-card-09',
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
	providers: [provideIcons({ lucideShoppingBag })],
	host: {
		class: 'w-full',
	},
	template: `
		<section hlmCard class="w-full">
			<div [hlmAspectRatio]="7 / 3" class="group overflow-hidden rounded-t-md">
				<img
					src="/assets/products/product-1.webp"
					alt="Product image"
					class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
			</div>

			<div hlmCardContent class="flex flex-col gap-4 py-6">
				<h3 hlmCardTitle>Sample Product</h3>
				<p hlmCardDescription>Short description of the product goes here.</p>
			</div>

			<div hlmCardFooter class="flex justify-between pt-0">
				<p class="text-foreground text-lg font-medium">$99.99</p>
				<button hlmBtn size="sm" class="flex gap-2">
					<ng-icon hlm name="lucideShoppingBag" size="sm" />
					Buy now
				</button>
			</div>
		</section>
	`,
})
export class Card09Component {}

export const card09Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideShoppingBag } from '@ng-icons/lucide';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
	HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-card-09',
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
	providers: [provideIcons({ lucideShoppingBag })],
	host: {
		class: 'w-full',
	},
	template: \`
		<section hlmCard class="w-full">
			<div [hlmAspectRatio]="7 / 3" class="group overflow-hidden rounded-t-md">
				<img
					src="/assets/products/product-1.webp"
					alt="Product image"
					class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
			</div>

			<div hlmCardContent class="flex flex-col gap-4 py-6">
				<h3 hlmCardTitle>Sample Product</h3>
				<p hlmCardDescription>Short description of the product goes here.</p>
			</div>

			<div hlmCardFooter class="flex justify-between pt-0">
				<p class="text-foreground text-lg font-medium">$99.99</p>
				<button hlmBtn size="sm" class="flex gap-2">
					<ng-icon hlm name="lucideShoppingBag" size="sm" />
					Buy now
				</button>
			</div>
		</section>
	\`,
})
export class Card09Component {}
`;
