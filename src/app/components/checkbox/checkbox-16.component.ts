import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-16',
	standalone: true,
	imports: [
		HlmCheckboxComponent,
		HlmLabelDirective,
		HlmAvatarComponent,
		HlmAvatarImageDirective,
		HlmAvatarFallbackDirective,
	],
	host: {
		class: 'w-full',
	},
	template: `
		<label
			class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
			hlmLabel
			for="checkbox-16">
			<div class="peer flex flex-1 items-start gap-2">
				<hlm-avatar variant="medium">
					<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
					<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
				</hlm-avatar>
				<div class="grid grow gap-2 pt-0.5">
					<span>
						Alan Cooper
						<span>&#64;alan</span>
					</span>
					<span class="text-muted-foreground truncate text-xs">Frontend Developer, Payment</span>
				</div>
				<hlm-checkbox id="checkbox-16" />
			</div>
		</label>
	`,
})
export class Checkbox16Component {}

export const checkbox16Code = `
import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
	selector: 'sim-checkbox-16',
	standalone: true,
	imports: [
		HlmCheckboxComponent,
		HlmLabelDirective,
		HlmAvatarComponent,
		HlmAvatarImageDirective,
		HlmAvatarFallbackDirective,
	],
	host: {
		class: 'w-full',
	},
	template: \`
		<label
			class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
			hlmLabel
			for="checkbox-16">
			<div class="peer flex flex-1 items-start gap-2">
				<hlm-avatar variant="medium">
					<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
					<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
				</hlm-avatar>
				<div class="grid grow gap-2 pt-0.5">
					<span>
						Alan Cooper
						<span>&#64;alan</span>
					</span>
					<span class="text-muted-foreground truncate text-xs">Frontend Developer, Payment</span>
				</div>
				<hlm-checkbox id="checkbox-16" />
			</div>
		</label>
	\`,
})
export class Checkbox16Component {}
`;
