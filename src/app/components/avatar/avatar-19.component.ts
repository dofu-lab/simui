import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-avatar-19',
	standalone: true,
	providers: [provideIcons({ lucidePlus })],
	imports: [
		NgIcon,
		HlmAvatarComponent,
		HlmAvatarImageDirective,
		HlmAvatarFallbackDirective,
		HlmIconDirective,
		HlmButtonDirective,
	],
	template: `
		<div class="flex gap-2">
			<div class="flex -space-x-3.5">
				<hlm-avatar variant="medium" class="border-background border-[2px]">
					<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<hlm-avatar variant="medium" class="border-background border-[2px]">
					<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<hlm-avatar variant="medium" class="border-background border-[2px]">
					<img hlmAvatarImage src="assets/avatars/skylar-dias.png" alt="Skylar Dias" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<hlm-avatar variant="medium" class="border-background border-[2px]">
					<img hlmAvatarImage src="assets/avatars/alexis-sears.png" alt="Alexis Sears" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<hlm-avatar variant="medium" class="border-background border-[2px]">
					<span hlmAvatarFallback class="bg-muted text-muted-foreground text-sm">+3</span>
				</hlm-avatar>
			</div>
			<button
				hlmBtn
				variant="link"
				size="icon"
				class="bg-background text-muted-foreground hover:border-muted-foreground/60 flex size-10 items-center justify-center rounded-full border border-dashed">
				<ng-icon hlm name="lucidePlus" />
			</button>
		</div>
	`,
})
export class Avatar19Component {}

export const avatar19Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-avatar-19',
	standalone: true,
	providers: [provideIcons({ lucidePlus })],
	imports: [
		NgIcon,
		HlmAvatarComponent,
		HlmAvatarImageDirective,
		HlmAvatarFallbackDirective,
		HlmIconDirective,
		HlmButtonDirective,
	],
	template: \`
		<div class="flex gap-2">
			<div class="flex -space-x-3.5">
				<hlm-avatar variant="medium" class="border-background border-[2px]">
					<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<hlm-avatar variant="medium" class="border-background border-[2px]">
					<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<hlm-avatar variant="medium" class="border-background border-[2px]">
					<img hlmAvatarImage src="assets/avatars/skylar-dias.png" alt="Skylar Dias" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<hlm-avatar variant="medium" class="border-background border-[2px]">
					<img hlmAvatarImage src="assets/avatars/alexis-sears.png" alt="Alexis Sears" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
				<hlm-avatar variant="medium" class="border-background border-[2px]">
					<span hlmAvatarFallback class="bg-muted text-muted-foreground text-sm">+3</span>
				</hlm-avatar>
			</div>
			<button
				hlmBtn
				variant="link"
				size="icon"
				class="bg-background text-muted-foreground hover:border-muted-foreground/60 flex size-10 items-center justify-center rounded-full border border-dashed">
				<ng-icon hlm name="lucidePlus" />
			</button>
		</div>
	\`,
})
export class Avatar19Component {}`;
