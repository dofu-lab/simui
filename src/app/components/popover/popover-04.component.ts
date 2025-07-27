import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCode, lucideCopy, lucideFacebook, lucideLinkedin, lucideMail } from '@ng-icons/lucide';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
	selector: 'sim-popover-04',
	providers: [provideIcons({ lucideCode, lucideCopy, lucideFacebook, lucideLinkedin, lucideMail })],
	imports: [
		HlmButtonDirective,
		BrnPopoverComponent,
		BrnPopoverTriggerDirective,
		BrnPopoverContentDirective,
		HlmPopoverContentDirective,
		HlmIconDirective,
		NgIcon,
		HlmInputDirective,
	],
	template: `
		<brn-popover sideOffset="5">
			<button variant="outline" brnPopoverTrigger hlmBtn>Share</button>
			<div hlmPopoverContent class="grid gap-3" *brnPopoverContent="let ctx">
				<div class="text-center text-sm font-medium">Share code</div>

				<div class="flex items-center justify-center gap-2">
					<button variant="outline" size="icon" class="relative size-9" hlmBtn>
						<ng-icon hlm name="lucideCode" size="sm" />
					</button>
					<button variant="outline" size="icon" class="relative size-9" hlmBtn>
						<ng-icon hlm name="lucideFacebook" size="sm" />
					</button>
					<button variant="outline" size="icon" class="relative size-9" hlmBtn>
						<ng-icon hlm name="lucideMail" size="sm" />
					</button>
					<button variant="outline" size="icon" class="relative size-9" hlmBtn>
						<ng-icon hlm name="lucideLinkedin" size="sm" />
					</button>
				</div>

				<div class="relative">
					<input
						hlmInput
						type="text"
						class="w-full rounded-md border px-3 py-2 pr-10 text-sm"
						[value]="shareUrl"
						readonly />
					<button class="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 flex -translate-y-1/2">
						<ng-icon hlm name="lucideCopy" size="sm" />
					</button>
				</div>
			</div>
		</brn-popover>
	`,
})
export class Popover04Component {
	shareUrl = 'https://simui.dev/JGGH0N';
}

export const Popover04Code = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCode, lucideCopy, lucideFacebook, lucideLinkedin, lucideMail } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'sim-popover-04',
  providers: [provideIcons({ lucideCode, lucideCopy, lucideFacebook, lucideLinkedin, lucideMail })],
  imports: [
    HlmButtonDirective,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
    HlmIconDirective,
    NgIcon,
    HlmInputDirective,
  ],
  template: \`
    <brn-popover sideOffset="5">
			<button variant="outline" brnPopoverTrigger hlmBtn>Share</button>
			<div hlmPopoverContent class="grid gap-3" *brnPopoverContent="let ctx">
				<div class="text-center text-sm font-medium">Share code</div>

				<div class="flex items-center justify-center gap-2">
					<button variant="outline" size="icon" class="relative size-9" hlmBtn>
						<ng-icon hlm name="lucideCode" size="sm" />
					</button>
					<button variant="outline" size="icon" class="relative size-9" hlmBtn>
						<ng-icon hlm name="lucideFacebook" size="sm" />
					</button>
					<button variant="outline" size="icon" class="relative size-9" hlmBtn>
						<ng-icon hlm name="lucideMail" size="sm" />
					</button>
					<button variant="outline" size="icon" class="relative size-9" hlmBtn>
						<ng-icon hlm name="lucideLinkedin" size="sm" />
					</button>
				</div>

				<div class="relative">
					<input
						hlmInput
						type="text"
						class="w-full rounded-md border px-3 py-2 pr-10 text-sm"
						[value]="shareUrl"
						readonly />
					<button class="text-muted-foreground flex hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2">
						<ng-icon hlm name="lucideCopy" size="sm" />
					</button>
				</div>
			</div>
		</brn-popover>
  \`,
})
export class Popover04Component {
  shareUrl = 'https://simui.dev/JGGH0N';
}
`;
