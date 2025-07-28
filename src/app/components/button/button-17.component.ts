import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmButtonDirective } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-17',
	standalone: true,
	imports: [HlmButtonDirective, HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective],
	template: `
		<button hlmBtn size="sm" class="rounded-full pl-1.5">
			<hlm-avatar variant="small" class="mr-2">
				<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
				<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
			</hlm-avatar>
			&#64;alancooper
		</button>
	`,
})
export class Button17Component {}

export const button17Code = `import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmButtonDirective } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-17',
	standalone: true,
	imports: [HlmButtonDirective, HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective],
	template: \`
		<button hlmBtn size="sm" class="rounded-full pl-1.5">
			<hlm-avatar variant="small" class="mr-2">
				<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
				<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
			</hlm-avatar>
			&#64;alancooper
		</button>
	\`,
})
export class Button17Component {}`;
