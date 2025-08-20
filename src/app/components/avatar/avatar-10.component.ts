import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-avatar-10',
	standalone: true,
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback, HlmBadge],
	template: `
		<div class="relative">
			<hlm-avatar variant="medium" class="border-border/50 border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<span hlmBadge class="border-background absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center p-0">
				9
			</span>
		</div>
	`,
})
export class Avatar10Component {}

export const avatar10Code = `import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-avatar-10',
	standalone: true,
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback, HlmBadge],
	template: \`
		<div class="relative">
			<hlm-avatar variant="medium" class="border-border/50 border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<span hlmBadge class="border-background absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center p-0">
				9
			</span>
		</div>
	\`,
})
export class Avatar10Component {}`;
