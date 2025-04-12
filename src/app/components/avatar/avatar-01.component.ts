import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
	selector: 'sim-avatar-01',
	standalone: true,
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective],
	template: `
		<hlm-avatar variant="medium" class="border-border/50 border">
			<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
			<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
		</hlm-avatar>
	`,
})
export class Avatar01Component {}

export const avatar01Code = `
import { Component } from '@angular/core';
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'sim-avatar-01',
  standalone: true,
  imports: [
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
  ],
  template: \`
    <hlm-avatar variant="medium" class="border-border/50 border">
      <img
        hlmAvatarImage
        src="assets/avatars/mathilde-lewis.png"
        alt="Mathilde Lewis"
      />
      <span hlmAvatarFallback class="bg-primary text-primary-foreground">
        ML
      </span>
    </hlm-avatar>
  \`,
})
export class Avatar01Component {}
`;
