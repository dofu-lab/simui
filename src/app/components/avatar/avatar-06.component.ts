import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
	selector: 'sim-avatar-06',
	standalone: true,
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective],
	template: `
		<div class="relative">
			<hlm-avatar variant="medium" class="border-border/50 border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<div
				class="border-background bg-muted-foreground absolute top-7.5 right-0 size-3 rounded-full border-[2px]"></div>
		</div>
	`,
})
export class Avatar06Component {}

export const avatar06Code = `
import { Component } from '@angular/core';
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'sim-avatar-06',
  standalone: true,
  imports: [
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
  ],
  template: \`
    <div class="relative">
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
      <div
        class="border-background bg-muted-foreground absolute top-7.5 right-0 size-3 rounded-full border-[2px]"
      ></div>
    </div>
  \`,
})
export class Avatar06Component {}
`;
