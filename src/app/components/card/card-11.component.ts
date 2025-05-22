import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClipboardCheck, lucidePlus, lucideUser } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-card-11',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmCardContentDirective,
		HlmCardDirective,
		HlmCardDescriptionDirective,
		HlmCardFooterDirective,
		HlmButtonDirective,
	],
	providers: [provideIcons({ lucideUser, lucideClipboardCheck, lucidePlus })],
	template: `
		<div hlmCard class="bg-muted/40 flex w-fit max-w-70 flex-col rounded-[40px] p-2">
			<div class="relative h-full w-full">
				<img
					src="/assets/avatars/annie-stanley-large.jpg"
					alt="avatar image"
					class="h-full w-full rounded-4xl object-cover" />
				<div class="absolute bottom-0 w-full overflow-hidden rounded-4xl backdrop-blur-sm">
					<div hlmCardContent class="flex max-w-70 flex-col gap-1 px-5 py-5">
						<span class="text-xl font-medium text-white">Annie Stanley</span>
						<span hlmCardDescription class="break-words text-white">
							Product Designer who focuses on simplicity & usability
						</span>
					</div>

					<div hlmCardFooter class="flex justify-between gap-4 px-6 pt-0 pb-6">
						<div class="flex gap-4 truncate">
							<div class="flex items-center gap-1 text-sm text-white">
								<ng-icon hlm name="lucideUser" size="sm" />
								148
							</div>
							<div class="flex items-center gap-1 text-sm text-white">
								<ng-icon hlm name="lucideClipboardCheck" size="sm" />
								76
							</div>
						</div>
						<button hlmBtn size="sm" variant="outline" class="flex shrink-0 gap-2 rounded-full text-white">
							<ng-icon hlm name="lucidePlus" size="sm" />
							Follow
						</button>
					</div>
				</div>
			</div>
		</div>
	`,
})
export class Card11Component {}

export const card11Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClipboardCheck, lucidePlus, lucideUser } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-card-11',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmCardContentDirective,
		HlmCardDirective,
		HlmCardDescriptionDirective,
		HlmCardFooterDirective,
		HlmButtonDirective,
	],
	providers: [provideIcons({ lucideUser, lucideClipboardCheck, lucidePlus })],
	template: \`
		<div hlmCard class="bg-muted/40 flex w-fit max-w-70 flex-col rounded-[40px] p-2">
			<div class="relative h-full w-full">
				<img
					src="/assets/avatars/annie-stanley-large.jpg"
					alt="avatar image"
					class="h-full w-full rounded-4xl object-cover" />
				<div class="absolute bottom-0 w-full overflow-hidden rounded-4xl backdrop-blur-sm">
					<div hlmCardContent class="flex max-w-70 flex-col gap-1 px-5 py-5">
						<span class="text-xl font-medium text-white">Annie Stanley</span>
						<span hlmCardDescription class="break-words text-white">
							Product Designer who focuses on simplicity & usability
						</span>
					</div>

					<div hlmCardFooter class="flex justify-between gap-4 px-6 pt-0 pb-6">
						<div class="flex gap-4 truncate">
							<div class="flex items-center gap-1 text-sm text-white">
								<ng-icon hlm name="lucideUser" size="sm" />
								148
							</div>
							<div class="flex items-center gap-1 text-sm text-white">
								<ng-icon hlm name="lucideClipboardCheck" size="sm" />
								76
							</div>
						</div>
						<button hlmBtn size="sm" variant="outline" class="flex shrink-0 gap-2 rounded-full text-white">
							<ng-icon hlm name="lucidePlus" size="sm" />
							Follow
						</button>
					</div>
				</div>
			</div>
		</div>
	\`,
})
export class Card11Component {}
`;
