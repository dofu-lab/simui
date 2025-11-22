import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-avatar-11',
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback, HlmBadge],
	template: `
		<div class="relative">
			<hlm-avatar class="border-border/50 size-10 rounded-lg border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<span hlmBadge class="border-background absolute -top-1 -right-1 flex size-4 items-center justify-center p-0">
				9
			</span>
		</div>
	`,
})
export class Avatar11Component {}

export const avatar11Code = `import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-avatar-11',
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback, HlmBadge],
	template: \`
		<div class="relative">
			<hlm-avatar class="border-border/50 size-10 rounded-lg border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<span hlmBadge class="border-background absolute -top-1 -right-1 flex size-4 items-center justify-center p-0">
				9
			</span>
		</div>
	\`,
})
export class Avatar11Component {}`;
