import { Component, model } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-17',
	imports: [HlmSwitch, HlmLabel, HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: `
		<div
			class="border-input data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border shadow-xs outline-none"
			[attr.data-checked]="value() ? 'true' : 'false'">
			<label
				class="flex items-start gap-2 p-4 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
				hlmLabel>
				<hlm-avatar class="size-8 self-center">
					<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
					<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
				</hlm-avatar>
				<div class="flex flex-col gap-2">
					<span class="flex items-center gap-1">
						<span class="text-sm leading-4">Small</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">A short description here.</p>
				</div>
				<hlm-switch [(checked)]="value" />
			</label>
		</div>
	`,
})
export class Switch17Component {
	readonly value = model(false);
}

export const switch17Code = `import { Component, model } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-17',
	imports: [HlmSwitch, HlmLabel, HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: \`
		<div
			class="border-input data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border shadow-xs outline-none"
			[attr.data-checked]="value() ? 'true' : 'false'">
			<label
				class="flex items-start gap-2 p-4 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
				hlmLabel>
				<hlm-avatar class="size-8 self-center">
					<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
					<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
				</hlm-avatar>
				<div class="flex flex-col gap-2">
					<span class="flex items-center gap-1">
						<span class="text-sm leading-4">Small</span>
						<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
					</span>
					<p class="text-muted-foreground text-xs font-normal">A short description here.</p>
				</div>
				<hlm-switch [(checked)]="value" />
			</label>
		</div>
	\`,
})
export class Switch17Component {
	readonly value = model(false);
}`;
