import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClipboardCheck, lucidePlus, lucideUser } from '@ng-icons/lucide';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-card-10',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmCardContentDirective,
		HlmCardDirective,
		HlmCardDescriptionDirective,
		HlmCardFooterDirective,
		HlmButtonDirective,
		HlmAspectRatioDirective,
	],
	providers: [provideIcons({ lucideUser, lucideClipboardCheck, lucidePlus })],
	template: `
		<div hlmCard class="bg-muted/40 flex w-fit flex-col rounded-[40px] p-2">
			<div [hlmAspectRatio]="1" class="group overflow-hidden rounded-t-md">
				<img
					src="/assets/avatars/annie-stanley-square.jpg"
					alt="avatar image"
					class="h-full w-full rounded-4xl object-cover" />
			</div>

			<div hlmCardContent class="flex max-w-65.5 flex-col gap-1 px-5 py-5">
				<span class="text-xl font-medium">Annie Stanley</span>
				<span hlmCardDescription class="break-words">Product Designer who focuses on simplicity & usability</span>
			</div>

			<div hlmCardFooter class="flex justify-between gap-2 px-6 pt-0 pb-6">
				<div class="flex gap-4">
					<div class="text-muted-foreground flex items-center gap-1 text-sm">
						<ng-icon hlm name="lucideUser" size="sm" />
						148
					</div>
					<div class="text-muted-foreground flex items-center gap-1 text-sm">
						<ng-icon hlm name="lucideClipboardCheck" size="sm" />
						76
					</div>
				</div>
				<button hlmBtn size="sm" class="flex gap-2 rounded-full">
					<ng-icon hlm name="lucidePlus" size="sm" />
					Follow
				</button>
			</div>
		</div>
	`,
})
export class Card10Component {}

export const card10Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClipboardCheck, lucidePlus, lucideUser } from '@ng-icons/lucide';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-card-10',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmCardContentDirective,
		HlmCardDirective,
		HlmCardDescriptionDirective,
		HlmCardFooterDirective,
		HlmButtonDirective,
		HlmAspectRatioDirective,
	],
	providers: [provideIcons({ lucideUser, lucideClipboardCheck, lucidePlus })],
	template: \`
		<div hlmCard class="bg-muted/40 flex w-fit flex-col rounded-[40px] p-2">
			<div [hlmAspectRatio]="1" class="group overflow-hidden rounded-t-md">
				<img
					src="/assets/avatars/annie-stanley-square.jpg"
					alt="avatar image"
					class="h-full w-full rounded-4xl object-cover" />
			</div>

			<div hlmCardContent class="flex max-w-65.5 flex-col gap-1 px-5 py-5">
				<span class="text-xl font-medium">Annie Stanley</span>
				<span hlmCardDescription class="break-words">Product Designer who focuses on simplicity & usability</span>
			</div>

			<div hlmCardFooter class="flex justify-between gap-2 px-6 pt-0 pb-6">
				<div class="flex gap-4">
					<div class="text-muted-foreground flex items-center gap-1 text-sm">
						<ng-icon hlm name="lucideUser" size="sm" />
						148
					</div>
					<div class="text-muted-foreground flex items-center gap-1 text-sm">
						<ng-icon hlm name="lucideClipboardCheck" size="sm" />
						76
					</div>
				</div>
				<button hlmBtn size="sm" class="flex gap-2 rounded-full">
					<ng-icon hlm name="lucidePlus" size="sm" />
					Follow
				</button>
			</div>
		</div>
	\`,
})
export class Card10Component {}
`;
