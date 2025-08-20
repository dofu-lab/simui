import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCard, HlmCardContent, HlmCardDescription, HlmCardFooter, HlmCardTitle } from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-card-03',
	imports: [
		HlmCardContent,
		HlmCard,
		HlmCardTitle,
		HlmCardDescription,
		HlmCardFooter,
		HlmButton,
		HlmAvatar,
		HlmAvatarImage,
		HlmAvatarFallback,
	],
	template: `
		<section hlmCard class="w-60">
			<div hlmCardContent class="flex flex-col items-center text-center">
				<hlm-avatar variant="large" class="border-border/50 mt-3 mb-3 rounded-lg border">
					<img hlmAvatarImage src="/assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>

				<h4 hlmCardTitle>Mathilde Lewis</h4>
				<p hlmCardDescription>Product Manager</p>
				<div class="mt-4 flex w-full items-center justify-around">
					<div>
						<p class="text-xl font-semibold">24</p>
						<p class="text-muted-foreground text-xs">Projects</p>
					</div>
					<div>
						<p class="text-xl font-semibold">87</p>
						<p class="text-muted-foreground text-xs">Tasks</p>
					</div>
					<div>
						<p class="text-xl font-semibold">15</p>
						<p class="text-muted-foreground text-xs">Teams</p>
					</div>
				</div>
			</div>
			<div hlmCardFooter class="pt-3">
				<button hlmBtn variant="outline" class="w-full">View Profile</button>
			</div>
		</section>
	`,
})
export class Card03Component {}

export const card03Code = `import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCard, HlmCardContent, HlmCardDescription, HlmCardFooter, HlmCardTitle } from '@spartan-ng/helm/card';

@Component({
	selector: 'sim-card-03',
	imports: [
		HlmCardContent,
		HlmCard,
		HlmCardTitle,
		HlmCardDescription,
		HlmCardFooter,
		HlmButton,
		HlmAvatar,
		HlmAvatarImage,
		HlmAvatarFallback,
	],
	template: \`
		<section hlmCard class="w-60">
			<div hlmCardContent class="flex flex-col items-center text-center">
				<hlm-avatar variant="large" class="border-border/50 mt-3 mb-3 rounded-lg border">
					<img hlmAvatarImage src="/assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>

				<h4 hlmCardTitle>Mathilde Lewis</h4>
				<p hlmCardDescription>Product Manager</p>
				<div class="mt-4 flex w-full items-center justify-around">
					<div>
						<p class="text-xl font-semibold">24</p>
						<p class="text-muted-foreground text-xs">Projects</p>
					</div>
					<div>
						<p class="text-xl font-semibold">87</p>
						<p class="text-muted-foreground text-xs">Tasks</p>
					</div>
					<div>
						<p class="text-xl font-semibold">15</p>
						<p class="text-muted-foreground text-xs">Teams</p>
					</div>
				</div>
			</div>
			<div hlmCardFooter class="pt-3">
				<button hlmBtn variant="outline" class="w-full">View Profile</button>
			</div>
		</section>
	\`,
})
export class Card03Component {}`;
