import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideUser } from '@ng-icons/lucide';
import { HlmAvatar, HlmAvatarFallback } from '@spartan-ng/helm/avatar';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-avatar-03',
	providers: [provideIcons({ lucideUser })],
	imports: [HlmAvatar, HlmAvatarFallback, HlmIcon, NgIcon],
	template: `
		<hlm-avatar class="border-border/50 size-10 border">
			<span hlmAvatarFallback class="bg-muted text-muted-foreground">
				<ng-icon hlm name="lucideUser" />
			</span>
		</hlm-avatar>
	`,
})
export class Avatar03Component {}

export const avatar03Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideUser } from '@ng-icons/lucide';
import { HlmAvatar, HlmAvatarFallback } from '@spartan-ng/helm/avatar';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-avatar-03',
	providers: [provideIcons({ lucideUser })],
	imports: [HlmAvatar, HlmAvatarFallback, HlmIcon, NgIcon],
	template: \`
		<hlm-avatar class="border-border/50 size-10 border">
			<span hlmAvatarFallback class="bg-muted text-muted-foreground">
				<ng-icon hlm name="lucideUser" />
			</span>
		</hlm-avatar>
	\`,
})
export class Avatar03Component {}`;
