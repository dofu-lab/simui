import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-08',
	standalone: true,
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: `
		<div class="relative">
			<hlm-avatar variant="medium" class="border-border/50 rounded-lg border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<div class="border-background absolute -top-1 -right-1 size-3 rounded-full border-[2px] bg-emerald-500"></div>
		</div>
	`,
})
export class Avatar08Component {}

export const avatar08Code = `import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-08',
	standalone: true,
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: \`
		<div class="relative">
			<hlm-avatar variant="medium" class="border-border/50 rounded-lg border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<div class="border-background absolute -top-1 -right-1 size-3 rounded-full border-[2px] bg-emerald-500"></div>
		</div>
	\`,
})
export class Avatar08Component {}`;
