import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClipboardCheck, lucidePlus, lucideUser } from '@ng-icons/lucide';
import { HlmAspectRatio } from '@spartan-ng/helm/aspect-ratio';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCard, HlmCardContent, HlmCardDescription, HlmCardFooter } from '@spartan-ng/helm/card';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-card-10',
	imports: [NgIcon, HlmIcon, HlmCardContent, HlmCard, HlmCardDescription, HlmCardFooter, HlmButton, HlmAspectRatio],
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
				<span class="flex items-center gap-2 text-xl font-medium">
					Annie Stanley
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_59_20)">
							<path
								d="M10.3376 1.1044C11.2528 0.179393 12.7471 0.179395 13.6624 1.1044L14.645 2.09745C15.1373 2.595 15.8266 2.84588 16.5236 2.78119L17.9146 2.65208C19.2104 2.53181 20.3551 3.49233 20.4616 4.78925L20.576 6.18158C20.6333 6.87918 21.0001 7.51444 21.5756 7.91288L22.7242 8.70812C23.7941 9.44887 24.0535 10.9205 23.3015 11.9825L22.4942 13.1226C22.0897 13.6938 21.9623 14.4162 22.1471 15.0913L22.5158 16.4388C22.8592 17.694 22.112 18.9881 20.8533 19.3182L19.502 19.6727C18.825 19.8503 18.263 20.3218 17.9706 20.9577L17.3869 22.2269C16.8432 23.4092 15.439 23.9203 14.2625 23.3641L12.9996 22.767C12.3668 22.4678 11.6332 22.4678 11.0004 22.767L9.73743 23.3641C8.56098 23.9203 7.1568 23.4092 6.61309 22.2269L6.02938 20.9577C5.73693 20.3218 5.17501 19.8503 4.49796 19.6727L3.14665 19.3182C1.88793 18.9881 1.14079 17.694 1.48422 16.4388L1.85293 15.0913C2.03766 14.4162 1.91028 13.6938 1.50578 13.1226L0.698444 11.9825C-0.0535694 10.9205 0.205914 9.44886 1.2758 8.70812L2.42439 7.91288C2.99987 7.51444 3.36664 6.87918 3.42396 6.18158L3.53836 4.78925C3.64492 3.49233 4.78962 2.53181 6.08534 2.65208L7.47638 2.78119C8.17334 2.84588 8.86263 2.595 9.35495 2.09745L10.3376 1.1044Z"
								fill="url(#paint0_linear_59_20)" />
							<path
								d="M10.6256 16.5337C10.2738 16.5337 9.92193 16.399 9.65393 16.131L6.90517 13.3823C6.36779 12.8449 6.36779 11.9763 6.90517 11.4389C7.44255 10.9015 8.31116 10.9015 8.84854 11.4389L10.6256 13.216L15.1514 8.69015C15.6888 8.15276 16.5574 8.15276 17.0948 8.69015C17.6322 9.22753 17.6322 10.0961 17.0948 10.6335L11.5973 16.131C11.3293 16.399 10.9775 16.5337 10.6256 16.5337Z"
								fill="url(#paint1_linear_59_20)" />
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_59_20"
								x1="12"
								y1="0.410645"
								x2="12"
								y2="23.589"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#63ED67" />
								<stop offset="1" stop-color="#30C935" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_59_20"
								x1="12"
								y1="16.5337"
								x2="12"
								y2="8.28711"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#004703" />
								<stop offset="1" stop-color="#007004" />
							</linearGradient>
							<clipPath id="clip0_59_20">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</span>
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