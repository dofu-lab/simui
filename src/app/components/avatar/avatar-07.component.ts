import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus } from '@ng-icons/lucide';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-07',
	providers: [provideIcons({ lucideMinus })],
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback, NgIcon],
	template: `
		<div class="relative">
			<hlm-avatar class="border-border/50 size-10 border">
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