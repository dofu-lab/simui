import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardContentDirective, HlmCardDirective } from '@spartan-ng/ui-card-helm';

@Component({
	selector: 'sim-card-06',
	standalone: true,
	imports: [
		HlmCardContentDirective,
		HlmCardDirective,
		HlmButtonDirective,
		HlmAvatarComponent,
		HlmAvatarFallbackDirective,
		HlmAvatarImageDirective,
	],
	template: `
		<section hlmCard class="bg-background/70 max-w-lg overflow-hidden rounded-2xl shadow-sm backdrop-blur-sm">
			<div hlmCardContent class="p-5">
				<div class="flex items-start justify-between">
					<div class="flex items-center gap-3">
						<hlm-avatar variant="medium">
							<img hlmAvatarImage src="/assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
						</hlm-avatar>
						<div class="truncate">
							<h3 class="text-md leading-snug font-semibold">Zoey Lang</h3>
							<p class="text-muted-foreground text-sm">&#64;zoeylang</p>
						</div>
					</div>
					<button hlmBtn size="sm">Follow</button>
				</div>
				<p class="mt-5 leading-relaxed">Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
				<p class="mt-3 text-base font-medium">#SimUI 💻</p>
				<div class="mt-6 flex gap-6 text-lg">
					<span class="flex gap-1">
						<span class="font-semibold">4</span>
						<span class="text-muted-foreground">Following</span>
					</span>
					<span class="flex gap-1">
						<span class="font-semibold">97.1K</span>
						<span class="text-muted-foreground">Followers</span>
					</span>
				</div>
			</div>
		</section>
	`,
})
export class Card06Component {}

export const card06Code = `
import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardContentDirective, HlmCardDirective } from '@spartan-ng/ui-card-helm';

@Component({
	selector: 'sim-card-06',
	standalone: true,
	imports: [
		HlmCardContentDirective,
		HlmCardDirective,
		HlmButtonDirective,
		HlmAvatarComponent,
		HlmAvatarFallbackDirective,
		HlmAvatarImageDirective,
	],
	template: \`
		<section hlmCard class="bg-background/70 max-w-lg overflow-hidden rounded-2xl shadow-sm backdrop-blur-sm">
			<div hlmCardContent class="p-5">
				<div class="flex items-start justify-between">
					<div class="flex items-center gap-3">
						<hlm-avatar variant="medium">
							<img hlmAvatarImage src="/assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
						</hlm-avatar>
						<div class="truncate">
							<h3 class="text-md leading-snug font-semibold">Zoey Lang</h3>
							<p class="text-muted-foreground text-sm">&#64;zoeylang</p>
						</div>
					</div>
					<button hlmBtn size="sm">Follow</button>
				</div>
				<p class="mt-5 leading-relaxed">Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
				<p class="mt-3 text-base font-medium">#SimUI 💻</p>
				<div class="mt-6 flex gap-6 text-lg">
					<span class="flex gap-1">
						<span class="font-semibold">4</span>
						<span class="text-muted-foreground">Following</span>
					</span>
					<span class="flex gap-1">
						<span class="font-semibold">97.1K</span>
						<span class="text-muted-foreground">Followers</span>
					</span>
				</div>
			</div>
		</section>
	\`,
})
export class Card06Component {}
`;
