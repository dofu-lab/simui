import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
	selector: 'sim-avatar-16',
	standalone: true,
	imports: [HlmAvatarComponent, HlmAvatarImageDirective, HlmAvatarFallbackDirective, HlmButtonDirective],
	template: `
		<div class="bg-muted flex items-center rounded-full p-0.5">
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
			</div>
			<button
				hlmBtn
				variant="secondary"
				class="text-muted-foreground hover:text-foreground flex items-center justify-center rounded-full bg-transparent px-3 text-xs shadow-none hover:bg-transparent">
				+3
			</button>
		</div>
	`,
})
export class Avatar16Component {}

export const avatar16Code = `
import { Component } from '@angular/core';
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-avatar-16',
  standalone: true,
  imports: [
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
    HlmButtonDirective,
  ],
  template: \`
    <div class="bg-muted flex items-center rounded-full p-0.5">
      <div class="flex -space-x-3.5">
        <hlm-avatar variant="medium" class="border-background border-[2px]">
          <img
            hlmAvatarImage
            src="assets/avatars/mathilde-lewis.png"
            alt="Mathilde Lewis"
          />
          <span hlmAvatarFallback class="bg-primary text-primary-foreground">
            ML
          </span>
        </hlm-avatar>
        <hlm-avatar variant="medium" class="border-background border-[2px]">
          <img
            hlmAvatarImage
            src="assets/avatars/alan-cooper.png"
            alt="Alan Cooper"
          />
          <span hlmAvatarFallback class="bg-primary text-primary-foreground">
            ML
          </span>
        </hlm-avatar>
        <hlm-avatar variant="medium" class="border-background border-[2px]">
          <img
            hlmAvatarImage
            src="assets/avatars/skylar-dias.png"
            alt="Skylar Dias"
          />
          <span hlmAvatarFallback class="bg-primary text-primary-foreground">
            ML
          </span>
        </hlm-avatar>
        <hlm-avatar variant="medium" class="border-background border-[2px]">
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
      <button
        hlmBtn
        variant="secondary"
        class="text-muted-foreground hover:text-foreground flex items-center justify-center rounded-full bg-transparent px-3 text-xs shadow-none hover:bg-transparent"
      >
        +3
      </button>
    </div>
  \`,
})
export class Avatar16Component {}
`;
