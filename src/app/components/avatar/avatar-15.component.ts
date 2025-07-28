import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-15',
	standalone: true,
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective],
	template: `
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
	`,
})
export class Avatar15Component {}

export const avatar15Code = `import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-15',
	standalone: true,
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective],
	template: \`
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
	\`,
})
export class Avatar15Component {}`;
