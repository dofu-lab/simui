import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-04',
	standalone: true,
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: `
		<hlm-avatar variant="medium" class="border-border/50 rounded-lg border">
			<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
			<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
		</hlm-avatar>
	`,
})
export class Avatar04Component {}

export const avatar04Code = `import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-04',
	standalone: true,
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: \`
		<hlm-avatar variant="medium" class="border-border/50 rounded-lg border">
			<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
			<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
		</hlm-avatar>
	\`,
})
export class Avatar04Component {}`;
