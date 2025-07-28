import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-12',
	standalone: true,
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective],
	template: `
		<div class="flex -space-x-2">
			<hlm-avatar variant="small" class="border-background border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar variant="small" class="border-background border">
				<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar variant="small" class="border-background border">
				<img hlmAvatarImage src="assets/avatars/skylar-dias.png" alt="Skylar Dias" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar variant="small" class="border-background border">
				<img hlmAvatarImage src="assets/avatars/alexis-sears.png" alt="Alexis Sears" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
		</div>
	`,
})
export class Avatar12Component {}

export const avatar12Code = `import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-12',
	standalone: true,
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective],
	template: \`
		<div class="flex -space-x-2">
			<hlm-avatar variant="small" class="border-background border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar variant="small" class="border-background border">
				<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar variant="small" class="border-background border">
				<img hlmAvatarImage src="assets/avatars/skylar-dias.png" alt="Skylar Dias" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar variant="small" class="border-background border">
				<img hlmAvatarImage src="assets/avatars/alexis-sears.png" alt="Alexis Sears" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
		</div>
	\`,
})
export class Avatar12Component {}`;
