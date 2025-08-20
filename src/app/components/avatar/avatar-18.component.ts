import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-18',
	standalone: true,
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: `
		<div class="bg-background flex rounded-full border p-1 shadow-sm">
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
			<div class="text-muted-foreground flex items-center justify-center px-1 text-xs">
				Trusted by
				<span class="text-primary p-1 font-semibold">50K+</span>
				developers.
			</div>
		</div>
	`,
})
export class Avatar18Component {}

export const avatar18Code = `import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-18',
	standalone: true,
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: \`
		<div class="bg-background flex rounded-full border p-1 shadow-sm">
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
			<div class="text-muted-foreground flex items-center justify-center px-1 text-xs">
				Trusted by
				<span class="text-primary p-1 font-semibold">50K+</span>
				developers.
			</div>
		</div>
	\`,
})
export class Avatar18Component {}`;
