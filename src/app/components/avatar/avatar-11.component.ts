import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmBadgeDirective } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-avatar-11',
	standalone: true,
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective, HlmBadgeDirective],
	template: `
		<div class="relative">
			<hlm-avatar variant="medium" class="border-border/50 rounded-lg border">
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
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmBadgeDirective } from '@spartan-ng/helm/badge';

@Component({
	selector: 'sim-avatar-11',
	standalone: true,
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective, HlmBadgeDirective],
	template: \`
		<div class="relative">
			<hlm-avatar variant="medium" class="border-border/50 rounded-lg border">
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
