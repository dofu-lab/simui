import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-02',
	standalone: true,
	imports: [HlmAvatar, HlmAvatarFallback],
	template: `
		<hlm-avatar variant="medium" class="border-border/50 border">
			<span hlmAvatarFallback class="bg-muted">ML</span>
		</hlm-avatar>
	`,
})
export class Avatar02Component {}

export const avatar02Code = `import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-02',
	standalone: true,
	imports: [HlmAvatar, HlmAvatarFallback],
	template: \`
		<hlm-avatar variant="medium" class="border-border/50 border">
			<span hlmAvatarFallback class="bg-muted">ML</span>
		</hlm-avatar>
	\`,
})
export class Avatar02Component {}`;
