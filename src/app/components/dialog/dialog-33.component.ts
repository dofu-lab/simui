import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleDollarSign } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmCheckboxComponent } from '@spartan-ng/helm/checkbox';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/helm/dialog';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmLabelDirective } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-dialog-33',
	imports: [
		NgIcon,
		FormsModule,
		ReactiveFormsModule,
		HlmIconDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmCheckboxComponent,
		HlmLabelDirective,
	],
	providers: [provideIcons({ lucideCircleDollarSign })],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Payment method</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-120! max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-6 sm:max-h-[min(640px,80vh)] sm:max-w-120"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<div class="flex flex-col gap-4">
						<div class="flex size-11 items-center justify-center rounded-lg border">
							<ng-icon hlm name="lucideCircleDollarSign" />
						</div>
						<div class="flex flex-col gap-1">
							<h2 class="text-lg leading-none font-semibold">Change your payment method</h2>
							<p class="text-muted-foreground text-sm">Update your plan payment details.</p>
						</div>
					</div>
					<div class="flex flex-col gap-4" [formGroup]="formGroup">
						<label
							hlmLabel
							class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
							for="checkbox-visa">
							<div class="peer flex flex-1 items-start gap-2">
								<svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z"
										fill="white" />
									<path
										d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z"
										stroke="#E9EAEB" />
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M14.3337 21.1441H11.5874L9.52796 13.0563C9.43022 12.6843 9.22267 12.3554 8.91737 12.2003C8.15547 11.8108 7.31591 11.5007 6.40002 11.3444V11.033H10.8241C11.4347 11.033 11.8927 11.5007 11.969 12.044L13.0375 17.878L15.7825 11.033H18.4525L14.3337 21.1441ZM19.979 21.1441H17.3853L19.521 11.033H22.1147L19.979 21.1441ZM25.4703 13.8341C25.5466 13.2895 26.0046 12.9781 26.5388 12.9781C27.3784 12.8999 28.2929 13.0563 29.0562 13.4445L29.5141 11.2676C28.7509 10.9562 27.9113 10.7998 27.1494 10.7998C24.6321 10.7998 22.8003 12.2003 22.8003 14.1441C22.8003 15.6228 24.0978 16.3993 25.0137 16.867C26.0046 17.3334 26.3862 17.6448 26.3099 18.1112C26.3099 18.8108 25.5466 19.1222 24.7847 19.1222C23.8688 19.1222 22.9529 18.889 22.1147 18.4994L21.6568 20.6777C22.5727 21.066 23.5635 21.2223 24.4794 21.2223C27.3021 21.2992 29.0562 19.9 29.0562 17.7998C29.0562 15.1551 25.4703 15.0001 25.4703 13.8341V13.8341ZM38.1334 21.1441L36.074 11.033H33.8619C33.404 11.033 32.946 11.3444 32.7934 11.8108L28.9798 21.1441H31.6498L32.1828 19.6668H35.4634L35.7687 21.1441H38.1334ZM34.2435 13.7559L35.0054 17.5666H32.8697L34.2435 13.7559Z"
										fill="#172B85" />
								</svg>

								<div class="grid grow gap-2 pt-0.5 select-none">
									<span>Visa ending in</span>
									<span class="text-muted-foreground truncate text-xs">Expiry 06/2024</span>
								</div>
								<hlm-checkbox id="checkbox-visa" formControlName="visa" />
							</div>
						</label>
						<label
							hlmLabel
							class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
							for="checkbox-mtcard">
							<div class="peer flex flex-1 items-start gap-2">
								<svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z"
										fill="white" />
									<path
										d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z"
										stroke="#E4E7EC" />
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M22.9053 22.4392C21.3266 23.7699 19.2787 24.5733 17.0409 24.5733C12.0478 24.5733 8 20.5737 8 15.6399C8 10.7062 12.0478 6.7066 17.0409 6.7066C19.2787 6.7066 21.3266 7.50994 22.9053 8.84066C24.484 7.50994 26.5319 6.7066 28.7697 6.7066C33.7628 6.7066 37.8106 10.7062 37.8106 15.6399C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.7699 22.9053 22.4392Z"
										fill="#ED0006" />
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M22.9053 22.4392C24.8492 20.8007 26.0818 18.3625 26.0818 15.6399C26.0818 12.9173 24.8492 10.4792 22.9053 8.84066C24.484 7.50993 26.5319 6.7066 28.7697 6.7066C33.7628 6.7066 37.8106 10.7062 37.8106 15.6399C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.7699 22.9053 22.4392Z"
										fill="#F9A000" />
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M22.905 22.4392C24.8489 20.8007 26.0815 18.3625 26.0815 15.6399C26.0815 12.9174 24.8489 10.4792 22.905 8.8407C20.9611 10.4792 19.7285 12.9174 19.7285 15.6399C19.7285 18.3625 20.9611 20.8007 22.905 22.4392Z"
										fill="#FF5E00" />
								</svg>
								<div class="grid grow gap-2 pt-0.5 select-none">
									<span>Mastercard ending in 1234</span>
									<span class="text-muted-foreground truncate text-xs">Expiry 06/2024</span>
								</div>
								<hlm-checkbox id="checkbox-mtcard" formControlName="mastercard" />
							</div>
						</label>
						<label
							hlmLabel
							class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
							for="checkbox-apple">
							<div class="peer flex flex-1 items-start gap-2">
								<svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z"
										fill="white" />
									<path
										d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z"
										stroke="#E9EAEB" />
									<path
										d="M34.3748 12.9482L36.2117 19.0342H36.244L38.0809 12.9482H39.6668L36.9276 20.8252C36.3023 22.6292 35.5865 23.2236 34.0653 23.2236C33.9494 23.2236 33.5634 23.2109 33.4725 23.1846V21.9482C33.5693 21.9614 33.8071 21.9746 33.9295 21.9746C34.6192 21.9746 35.0064 21.6775 35.2449 20.9043L35.3865 20.4482L32.744 12.9482H34.3748ZM13.2576 12.0361C13.606 12.0626 14.6113 12.1687 15.2557 13.1465C15.202 13.1874 14.0631 13.8616 14.076 15.2744C14.0891 16.9658 15.5201 17.5278 15.533 17.541C15.5193 17.5837 15.306 18.342 14.785 19.1201C14.3274 19.8073 13.8568 20.4808 13.1092 20.4941C12.3873 20.5074 12.1486 20.0518 11.3172 20.0518C10.4921 20.0518 10.2212 20.4814 9.53791 20.5078C8.81601 20.5342 8.26802 19.781 7.81038 19.0938C6.87574 17.706 6.16007 15.1815 7.12678 13.4766C7.59734 12.6241 8.45501 12.0884 9.37678 12.0752C10.0858 12.062 10.7369 12.5576 11.1688 12.5576C11.5942 12.5576 12.3616 11.9833 13.2576 12.0361ZM29.1922 12.8486C30.9777 12.8487 32.1375 13.8071 32.1375 15.2939V20.4219H30.6942V19.1865H30.6619C30.2493 19.9926 29.3399 20.501 28.3602 20.501C26.9102 20.5008 25.8985 19.6158 25.8983 18.2812C25.8983 16.9596 26.8779 16.1993 28.6893 16.0869L30.6356 15.9678V15.3994C30.6355 14.5603 30.101 14.1046 29.1473 14.1045C28.3609 14.1045 27.7868 14.5209 27.6707 15.1553H26.2655C26.3106 13.8204 27.5356 12.8486 29.1922 12.8486ZM22.2049 10.1191C24.1514 10.1193 25.5115 11.4941 25.5115 13.5029C25.5115 15.5118 24.1255 16.8993 22.1531 16.8994H19.994V20.4219H18.4334V10.1191H22.2049ZM28.9022 17.1572C27.9288 17.2167 27.4198 17.5936 27.4198 18.2412C27.4198 18.8689 27.9478 19.2782 28.7791 19.2783C29.8361 19.2783 30.6353 18.5916 30.6356 17.627V17.0449L28.9022 17.1572ZM19.993 15.5586H21.785C23.145 15.5586 23.9187 14.8115 23.9188 13.5098C23.9188 12.2079 23.1455 11.4678 21.7918 11.4678H19.993V15.5586ZM13.2635 9.33301C13.328 9.99385 13.0764 10.6416 12.6961 11.124C12.3093 11.5931 11.6908 11.963 11.0721 11.9102C10.9948 11.2758 11.2977 10.6019 11.6522 10.1855C12.0389 9.70323 12.7156 9.35956 13.2635 9.33301Z"
										fill="black" />
								</svg>
								<div class="grid grow gap-2 pt-0.5 select-none">
									<span>Apple Pay ending in 2299</span>
									<span class="text-muted-foreground truncate text-xs">Expiry 11/2026</span>
								</div>
								<hlm-checkbox id="checkbox-apple" formControlName="applepay" />
							</div>
						</label>
					</div>
					<div class="flex gap-2">
						<button hlmBtn variant="outline" class="flex-1" size="sm" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Confirm</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog33Component {
	formGroup = new FormGroup({
		visa: new FormControl(true),
		mastercard: new FormControl(false),
		applepay: new FormControl(false),
	});
}

export const dialog33Code = `import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleDollarSign } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmCheckboxComponent } from '@spartan-ng/helm/checkbox';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/helm/dialog';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmLabelDirective } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-dialog-33',
	imports: [
		NgIcon,
		FormsModule,
		ReactiveFormsModule,
		HlmIconDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmCheckboxComponent,
		HlmLabelDirective,
	],
	providers: [provideIcons({ lucideCircleDollarSign })],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Payment method</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-120! max-w-[calc(100%-2rem)] -translate-x-1/2 gap-0 rounded-lg p-6 sm:max-h-[min(640px,80vh)] sm:max-w-120"
				*brnDialogContent="let ctx">
				<div class="flex flex-col gap-6">
					<div class="flex flex-col gap-4">
						<div class="flex size-11 items-center justify-center rounded-lg border">
							<ng-icon hlm name="lucideCircleDollarSign" />
						</div>
						<div class="flex flex-col gap-1">
							<h2 class="text-lg leading-none font-semibold">Change your payment method</h2>
							<p class="text-muted-foreground text-sm">Update your plan payment details.</p>
						</div>
					</div>
					<div class="flex flex-col gap-4" [formGroup]="formGroup">
						<label
							hlmLabel
							class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
							for="checkbox-visa">
							<div class="peer flex flex-1 items-start gap-2">
								<svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z"
										fill="white" />
									<path
										d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z"
										stroke="#E9EAEB" />
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M14.3337 21.1441H11.5874L9.52796 13.0563C9.43022 12.6843 9.22267 12.3554 8.91737 12.2003C8.15547 11.8108 7.31591 11.5007 6.40002 11.3444V11.033H10.8241C11.4347 11.033 11.8927 11.5007 11.969 12.044L13.0375 17.878L15.7825 11.033H18.4525L14.3337 21.1441ZM19.979 21.1441H17.3853L19.521 11.033H22.1147L19.979 21.1441ZM25.4703 13.8341C25.5466 13.2895 26.0046 12.9781 26.5388 12.9781C27.3784 12.8999 28.2929 13.0563 29.0562 13.4445L29.5141 11.2676C28.7509 10.9562 27.9113 10.7998 27.1494 10.7998C24.6321 10.7998 22.8003 12.2003 22.8003 14.1441C22.8003 15.6228 24.0978 16.3993 25.0137 16.867C26.0046 17.3334 26.3862 17.6448 26.3099 18.1112C26.3099 18.8108 25.5466 19.1222 24.7847 19.1222C23.8688 19.1222 22.9529 18.889 22.1147 18.4994L21.6568 20.6777C22.5727 21.066 23.5635 21.2223 24.4794 21.2223C27.3021 21.2992 29.0562 19.9 29.0562 17.7998C29.0562 15.1551 25.4703 15.0001 25.4703 13.8341V13.8341ZM38.1334 21.1441L36.074 11.033H33.8619C33.404 11.033 32.946 11.3444 32.7934 11.8108L28.9798 21.1441H31.6498L32.1828 19.6668H35.4634L35.7687 21.1441H38.1334ZM34.2435 13.7559L35.0054 17.5666H32.8697L34.2435 13.7559Z"
										fill="#172B85" />
								</svg>

								<div class="grid grow gap-2 pt-0.5 select-none">
									<span>Visa ending in</span>
									<span class="text-muted-foreground truncate text-xs">Expiry 06/2024</span>
								</div>
								<hlm-checkbox id="checkbox-visa" formControlName="visa" />
							</div>
						</label>
						<label
							hlmLabel
							class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
							for="checkbox-mtcard">
							<div class="peer flex flex-1 items-start gap-2">
								<svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z"
										fill="white" />
									<path
										d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z"
										stroke="#E4E7EC" />
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M22.9053 22.4392C21.3266 23.7699 19.2787 24.5733 17.0409 24.5733C12.0478 24.5733 8 20.5737 8 15.6399C8 10.7062 12.0478 6.7066 17.0409 6.7066C19.2787 6.7066 21.3266 7.50994 22.9053 8.84066C24.484 7.50994 26.5319 6.7066 28.7697 6.7066C33.7628 6.7066 37.8106 10.7062 37.8106 15.6399C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.7699 22.9053 22.4392Z"
										fill="#ED0006" />
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M22.9053 22.4392C24.8492 20.8007 26.0818 18.3625 26.0818 15.6399C26.0818 12.9173 24.8492 10.4792 22.9053 8.84066C24.484 7.50993 26.5319 6.7066 28.7697 6.7066C33.7628 6.7066 37.8106 10.7062 37.8106 15.6399C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.7699 22.9053 22.4392Z"
										fill="#F9A000" />
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M22.905 22.4392C24.8489 20.8007 26.0815 18.3625 26.0815 15.6399C26.0815 12.9174 24.8489 10.4792 22.905 8.8407C20.9611 10.4792 19.7285 12.9174 19.7285 15.6399C19.7285 18.3625 20.9611 20.8007 22.905 22.4392Z"
										fill="#FF5E00" />
								</svg>
								<div class="grid grow gap-2 pt-0.5 select-none">
									<span>Mastercard ending in 1234</span>
									<span class="text-muted-foreground truncate text-xs">Expiry 06/2024</span>
								</div>
								<hlm-checkbox id="checkbox-mtcard" formControlName="mastercard" />
							</div>
						</label>
						<label
							hlmLabel
							class="border-input has-data-[state=checked]:border-ring relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs transition-colors ease-in-out"
							for="checkbox-apple">
							<div class="peer flex flex-1 items-start gap-2">
								<svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z"
										fill="white" />
									<path
										d="M4 0.5H42C43.933 0.5 45.5 2.067 45.5 4V28C45.5 29.933 43.933 31.5 42 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4C0.5 2.067 2.067 0.5 4 0.5Z"
										stroke="#E9EAEB" />
									<path
										d="M34.3748 12.9482L36.2117 19.0342H36.244L38.0809 12.9482H39.6668L36.9276 20.8252C36.3023 22.6292 35.5865 23.2236 34.0653 23.2236C33.9494 23.2236 33.5634 23.2109 33.4725 23.1846V21.9482C33.5693 21.9614 33.8071 21.9746 33.9295 21.9746C34.6192 21.9746 35.0064 21.6775 35.2449 20.9043L35.3865 20.4482L32.744 12.9482H34.3748ZM13.2576 12.0361C13.606 12.0626 14.6113 12.1687 15.2557 13.1465C15.202 13.1874 14.0631 13.8616 14.076 15.2744C14.0891 16.9658 15.5201 17.5278 15.533 17.541C15.5193 17.5837 15.306 18.342 14.785 19.1201C14.3274 19.8073 13.8568 20.4808 13.1092 20.4941C12.3873 20.5074 12.1486 20.0518 11.3172 20.0518C10.4921 20.0518 10.2212 20.4814 9.53791 20.5078C8.81601 20.5342 8.26802 19.781 7.81038 19.0938C6.87574 17.706 6.16007 15.1815 7.12678 13.4766C7.59734 12.6241 8.45501 12.0884 9.37678 12.0752C10.0858 12.062 10.7369 12.5576 11.1688 12.5576C11.5942 12.5576 12.3616 11.9833 13.2576 12.0361ZM29.1922 12.8486C30.9777 12.8487 32.1375 13.8071 32.1375 15.2939V20.4219H30.6942V19.1865H30.6619C30.2493 19.9926 29.3399 20.501 28.3602 20.501C26.9102 20.5008 25.8985 19.6158 25.8983 18.2812C25.8983 16.9596 26.8779 16.1993 28.6893 16.0869L30.6356 15.9678V15.3994C30.6355 14.5603 30.101 14.1046 29.1473 14.1045C28.3609 14.1045 27.7868 14.5209 27.6707 15.1553H26.2655C26.3106 13.8204 27.5356 12.8486 29.1922 12.8486ZM22.2049 10.1191C24.1514 10.1193 25.5115 11.4941 25.5115 13.5029C25.5115 15.5118 24.1255 16.8993 22.1531 16.8994H19.994V20.4219H18.4334V10.1191H22.2049ZM28.9022 17.1572C27.9288 17.2167 27.4198 17.5936 27.4198 18.2412C27.4198 18.8689 27.9478 19.2782 28.7791 19.2783C29.8361 19.2783 30.6353 18.5916 30.6356 17.627V17.0449L28.9022 17.1572ZM19.993 15.5586H21.785C23.145 15.5586 23.9187 14.8115 23.9188 13.5098C23.9188 12.2079 23.1455 11.4678 21.7918 11.4678H19.993V15.5586ZM13.2635 9.33301C13.328 9.99385 13.0764 10.6416 12.6961 11.124C12.3093 11.5931 11.6908 11.963 11.0721 11.9102C10.9948 11.2758 11.2977 10.6019 11.6522 10.1855C12.0389 9.70323 12.7156 9.35956 13.2635 9.33301Z"
										fill="black" />
								</svg>
								<div class="grid grow gap-2 pt-0.5 select-none">
									<span>Apple Pay ending in 2299</span>
									<span class="text-muted-foreground truncate text-xs">Expiry 11/2026</span>
								</div>
								<hlm-checkbox id="checkbox-apple" formControlName="applepay" />
							</div>
						</label>
					</div>
					<div class="flex gap-2">
						<button hlmBtn variant="outline" class="flex-1" size="sm" (click)="ctx.close()">Cancel</button>
						<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Confirm</button>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog33Component {
	formGroup = new FormGroup({
		visa: new FormControl(true),
		mastercard: new FormControl(false),
		applepay: new FormControl(false),
	});
}`;
