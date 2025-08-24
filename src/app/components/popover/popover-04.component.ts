import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCode, lucideCopy, lucideFacebook, lucideLinkedin, lucideMail } from '@ng-icons/lucide';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmPopoverContent } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-04',
	providers: [provideIcons({ lucideCode, lucideCopy, lucideFacebook, lucideLinkedin, lucideMail, lucideCheck })],
	imports: [
		NgClass,
		NgIcon,
		HlmButton,
		BrnPopover,
		BrnPopoverTrigger,
		BrnPopoverContent,
		HlmPopoverContent,
		HlmIcon,
		HlmInput,
	],
	template: `
		<brn-popover sideOffset="5">
			<button hlmBtn brnPopoverTrigger variant="outline" size="sm">Share</button>
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
					<div class="w-full">
						<div class="relative">
							<input hlmInput class="peer w-full pe-9 text-sm" type="email" size="sm" [value]="shareUrl" />
							<button
								hlmBtn
								variant="link"
								size="icon"
								class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
								[disabled]="copied()"
								(click)="onCopy()">
								<ng-icon
									hlm
									name="lucideCopy"
									size="sm"
									class="transition-all"
									[ngClass]="{
										'scale-0 opacity-0': copied(),
										'scale-100 opacity-100': !copied(),
									}" />
								<ng-icon
									hlm
									name="lucideCheck"
									size="sm"
									class="absolute text-emerald-500 transition-all"
									[ngClass]="{
										'scale-0 opacity-0': !copied(),
										'scale-100 opacity-100': copied(),
									}" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</brn-popover>
	`,
})
export class Popover04Component {
	public readonly shareUrl = 'https://simui.dev/JGGH0N';
	public copied = signal<boolean>(false);
	private _clipboard = inject(Clipboard);

	public onCopy(): void {
		this.copied.set(true);
		this._clipboard.copy(this.shareUrl);

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}

export const popover04Code = `import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCode, lucideCopy, lucideFacebook, lucideLinkedin, lucideMail } from '@ng-icons/lucide';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmPopoverContent } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-04',
	providers: [provideIcons({ lucideCode, lucideCopy, lucideFacebook, lucideLinkedin, lucideMail, lucideCheck })],
	imports: [
		NgClass,
		NgIcon,
		HlmButton,
		BrnPopover,
		BrnPopoverTrigger,
		BrnPopoverContent,
		HlmPopoverContent,
		HlmIcon,
		HlmInput,
	],
	template: \`
		<brn-popover sideOffset="5">
			<button hlmBtn brnPopoverTrigger variant="outline" size="sm">Share</button>
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
					<div class="w-full">
						<div class="relative">
							<input hlmInput class="peer w-full pe-9 text-sm" type="email" size="sm" [value]="shareUrl" />
							<button
								hlmBtn
								variant="link"
								size="icon"
								class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
								[disabled]="copied()"
								(click)="onCopy()">
								<ng-icon
									hlm
									name="lucideCopy"
									size="sm"
									class="transition-all"
									[ngClass]="{
										'scale-0 opacity-0': copied(),
										'scale-100 opacity-100': !copied(),
									}" />
								<ng-icon
									hlm
									name="lucideCheck"
									size="sm"
									class="absolute text-emerald-500 transition-all"
									[ngClass]="{
										'scale-0 opacity-0': !copied(),
										'scale-100 opacity-100': copied(),
									}" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</brn-popover>
	\`,
})
export class Popover04Component {
	public readonly shareUrl = 'https://simui.dev/JGGH0N';
	public copied = signal<boolean>(false);
	private _clipboard = inject(Clipboard);

	public onCopy(): void {
		this.copied.set(true);
		this._clipboard.copy(this.shareUrl);

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}`;
