import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus } from '@ng-icons/lucide';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
	selector: 'sim-avatar-07',
	standalone: true,
	providers: [provideIcons({ lucideMinus })],
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective, NgIcon],
	template: `
		<div class="relative">
			<hlm-avatar variant="medium" class="border-border/50 border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<div
				class="border-background absolute top-7 right-0 flex size-3 items-center justify-center rounded-full border-[1px] bg-red-500">
				<ng-icon name="lucideMinus" class="text-[10px] text-white" />
			</div>
		</div>
	`,
})
export class Avatar07Component {}

export const avatar07Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus } from '@ng-icons/lucide';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
	selector: 'sim-avatar-07',
	standalone: true,
	providers: [provideIcons({ lucideMinus })],
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective, NgIcon],
	template: \`
		<div class="relative">
			<hlm-avatar variant="medium" class="border-border/50 border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<div
				class="border-background absolute top-7 right-0 flex size-3 items-center justify-center rounded-full border-[1px] bg-red-500">
				<ng-icon name="lucideMinus" class="text-[10px] text-white" />
			</div>
		</div>
	\`,
})
export class Avatar07Component {}
`;
