import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-18',
	standalone: true,
	providers: [provideIcons({ lucideChevronDown })],
	imports: [
		HlmButtonDirective,
		HlmAvatarComponent,
		HlmAvatarImageDirective,
		HlmAvatarFallbackDirective,
		NgIcon,
		HlmIconDirective,
	],
	template: `
		<button hlmBtn variant="ghost" size="sm" class="rounded-full pl-1.5">
			<hlm-avatar variant="small" class="mr-2">
				<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
				<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
			</hlm-avatar>
			<ng-icon hlm name="lucideChevronDown" size="sm" />
		</button>
	`,
})
export class Button18Component {}

export const button18Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from '@spartan-ng/ui-avatar-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';

@Component({
  selector: 'sim-button-18',
  standalone: true,
  providers: [provideIcons({ lucideChevronDown })],
  imports: [
    HlmButtonDirective,
    HlmAvatarComponent,
    HlmAvatarImageDirective,
    HlmAvatarFallbackDirective,
    NgIcon,
    HlmIconDirective,
  ],
  template: \`
    <button hlmBtn variant="ghost" size="sm" class="rounded-full pl-1.5">
      <hlm-avatar variant="small" class="mr-2">
        <img
          src="assets/avatars/alan-cooper.png"
          alt="Alan Cooper"
          hlmAvatarImage
        />
        <span class="bg-primary text-primary-foreground" hlmAvatarFallback>
          AC
        </span>
      </hlm-avatar>
      <ng-icon hlm name="lucideChevronDown" size="sm" />
    </button>
  \`,
})
export class Button18Component {}
`;
