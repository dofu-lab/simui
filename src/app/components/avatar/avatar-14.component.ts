import { Component } from '@angular/core';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-14',
	imports: [HlmAvatarImports],
	template: `
		<div class="flex -space-x-4.5">
			<hlm-avatar class="border-background size-14 border-2">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar class="border-background size-14 border-2">
				<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar class="border-background size-14 border-2">
				<img hlmAvatarImage src="assets/avatars/skylar-dias.png" alt="Skylar Dias" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar class="border-background size-14 border-2">
				<img hlmAvatarImage src="assets/avatars/alexis-sears.png" alt="Alexis Sears" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
		</div>
	`,
})
export class Avatar14Component {}
