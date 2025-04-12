import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
	selector: 'sim-avatar-14',
	standalone: true,
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective],
	template: `
		<div class="flex -space-x-4.5">
			<hlm-avatar variant="large" class="border-background border-[2px]">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar variant="large" class="border-background border-[2px]">
				<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar variant="large" class="border-background border-[2px]">
				<img hlmAvatarImage src="assets/avatars/skylar-dias.png" alt="Skylar Dias" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<hlm-avatar variant="large" class="border-background border-[2px]">
				<img hlmAvatarImage src="assets/avatars/alexis-sears.png" alt="Alexis Sears" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
		</div>
	`,
})
export class Avatar14Component {}

export const avatar14Code = `
import { Component } from '@angular/core';
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'sim-avatar-14',
  standalone: true,
  imports: [
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
  ],
  template: \`
    <div class="flex -space-x-4.5">
      <hlm-avatar variant="large" class="border-background border-[2px]">
        <img
          hlmAvatarImage
          src="assets/avatars/mathilde-lewis.png"
          alt="Mathilde Lewis"
        />
        <span hlmAvatarFallback class="bg-primary text-primary-foreground">
          ML
        </span>
      </hlm-avatar>
      <hlm-avatar variant="large" class="border-background border-[2px]">
        <img
          hlmAvatarImage
          src="assets/avatars/alan-cooper.png"
          alt="Alan Cooper"
        />
        <span hlmAvatarFallback class="bg-primary text-primary-foreground">
          ML
        </span>
      </hlm-avatar>
      <hlm-avatar variant="large" class="border-background border-[2px]">
        <img
          hlmAvatarImage
          src="assets/avatars/skylar-dias.png"
          alt="Skylar Dias"
        />
        <span hlmAvatarFallback class="bg-primary text-primary-foreground">
          ML
        </span>
      </hlm-avatar>
      <hlm-avatar variant="large" class="border-background border-[2px]">
        <img
          hlmAvatarImage
          src="assets/avatars/alexis-sears.png"
          alt="Alexis Sears"
        />
        <span hlmAvatarFallback class="bg-primary text-primary-foreground">
          ML
        </span>
      </hlm-avatar>
    </div>
  \`,
})
export class Avatar14Component {}
`;
