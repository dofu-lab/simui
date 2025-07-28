import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClipboardCheck, lucidePlus, lucideUser } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
} from '@spartan-ng/helm/card';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

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
						<span class="flex items-center gap-2 text-xl font-medium text-white">
							Annie Stanley
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_59_59)">
									<path
										d="M10.3376 1.1044C11.2529 0.179393 12.7472 0.179395 13.6624 1.1044L14.645 2.09745C15.1374 2.595 15.8266 2.84588 16.5236 2.78119L17.9146 2.65208C19.2104 2.53181 20.3551 3.49233 20.4616 4.78925L20.576 6.18158C20.6334 6.87918 21.0001 7.51444 21.5756 7.91288L22.7242 8.70812C23.7941 9.44887 24.0536 10.9205 23.3015 11.9825L22.4942 13.1226C22.0897 13.6938 21.9623 14.4162 22.1471 15.0913L22.5158 16.4388C22.8592 17.694 22.1121 18.9881 20.8533 19.3182L19.502 19.6727C18.825 19.8503 18.2631 20.3218 17.9706 20.9577L17.3869 22.2269C16.8432 23.4092 15.439 23.9203 14.2626 23.3641L12.9996 22.767C12.3668 22.4678 11.6332 22.4678 11.0004 22.767L9.73744 23.3641C8.561 23.9203 7.15681 23.4092 6.6131 22.2269L6.0294 20.9577C5.73694 20.3218 5.17503 19.8503 4.49798 19.6727L3.14666 19.3182C1.88795 18.9881 1.1408 17.694 1.48424 16.4388L1.85294 15.0913C2.03767 14.4162 1.9103 13.6938 1.50579 13.1226L0.69846 11.9825C-0.0535541 10.9205 0.20593 9.44886 1.27582 8.70812L2.42441 7.91288C2.99989 7.51444 3.36665 6.87918 3.42397 6.18158L3.53837 4.78925C3.64494 3.49233 4.78964 2.53181 6.08536 2.65208L7.4764 2.78119C8.17336 2.84588 8.86265 2.595 9.35497 2.09745L10.3376 1.1044Z"
										fill="url(#paint0_linear_59_59)" />
									<path
										d="M10.6256 16.5337C10.2738 16.5337 9.92193 16.399 9.65393 16.131L6.90517 13.3823C6.36779 12.8449 6.36779 11.9763 6.90517 11.4389C7.44255 10.9015 8.31116 10.9015 8.84854 11.4389L10.6256 13.216L15.1514 8.69015C15.6888 8.15276 16.5574 8.15276 17.0948 8.69015C17.6322 9.22753 17.6322 10.0961 17.0948 10.6335L11.5973 16.131C11.3293 16.399 10.9775 16.5337 10.6256 16.5337Z"
										fill="#181818" />
								</g>
								<defs>
									<linearGradient
										id="paint0_linear_59_59"
										x1="12"
										y1="0.410645"
										x2="12"
										y2="23.589"
										gradientUnits="userSpaceOnUse">
										<stop stop-color="#FDFDFD" />
										<stop offset="1" stop-color="#D7D7D7" />
									</linearGradient>
									<clipPath id="clip0_59_59">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</span>
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

export const card11Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClipboardCheck, lucidePlus, lucideUser } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import {
	HlmCardContentDirective,
	HlmCardDescriptionDirective,
	HlmCardDirective,
	HlmCardFooterDirective,
} from '@spartan-ng/helm/card';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

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
						<span class="flex items-center gap-2 text-xl font-medium text-white">
							Annie Stanley
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_59_59)">
									<path
										d="M10.3376 1.1044C11.2529 0.179393 12.7472 0.179395 13.6624 1.1044L14.645 2.09745C15.1374 2.595 15.8266 2.84588 16.5236 2.78119L17.9146 2.65208C19.2104 2.53181 20.3551 3.49233 20.4616 4.78925L20.576 6.18158C20.6334 6.87918 21.0001 7.51444 21.5756 7.91288L22.7242 8.70812C23.7941 9.44887 24.0536 10.9205 23.3015 11.9825L22.4942 13.1226C22.0897 13.6938 21.9623 14.4162 22.1471 15.0913L22.5158 16.4388C22.8592 17.694 22.1121 18.9881 20.8533 19.3182L19.502 19.6727C18.825 19.8503 18.2631 20.3218 17.9706 20.9577L17.3869 22.2269C16.8432 23.4092 15.439 23.9203 14.2626 23.3641L12.9996 22.767C12.3668 22.4678 11.6332 22.4678 11.0004 22.767L9.73744 23.3641C8.561 23.9203 7.15681 23.4092 6.6131 22.2269L6.0294 20.9577C5.73694 20.3218 5.17503 19.8503 4.49798 19.6727L3.14666 19.3182C1.88795 18.9881 1.1408 17.694 1.48424 16.4388L1.85294 15.0913C2.03767 14.4162 1.9103 13.6938 1.50579 13.1226L0.69846 11.9825C-0.0535541 10.9205 0.20593 9.44886 1.27582 8.70812L2.42441 7.91288C2.99989 7.51444 3.36665 6.87918 3.42397 6.18158L3.53837 4.78925C3.64494 3.49233 4.78964 2.53181 6.08536 2.65208L7.4764 2.78119C8.17336 2.84588 8.86265 2.595 9.35497 2.09745L10.3376 1.1044Z"
										fill="url(#paint0_linear_59_59)" />
									<path
										d="M10.6256 16.5337C10.2738 16.5337 9.92193 16.399 9.65393 16.131L6.90517 13.3823C6.36779 12.8449 6.36779 11.9763 6.90517 11.4389C7.44255 10.9015 8.31116 10.9015 8.84854 11.4389L10.6256 13.216L15.1514 8.69015C15.6888 8.15276 16.5574 8.15276 17.0948 8.69015C17.6322 9.22753 17.6322 10.0961 17.0948 10.6335L11.5973 16.131C11.3293 16.399 10.9775 16.5337 10.6256 16.5337Z"
										fill="#181818" />
								</g>
								<defs>
									<linearGradient
										id="paint0_linear_59_59"
										x1="12"
										y1="0.410645"
										x2="12"
										y2="23.589"
										gradientUnits="userSpaceOnUse">
										<stop stop-color="#FDFDFD" />
										<stop offset="1" stop-color="#D7D7D7" />
									</linearGradient>
									<clipPath id="clip0_59_59">
										<rect width="24" height="24" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</span>
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
export class Card11Component {}`;
