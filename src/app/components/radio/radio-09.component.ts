import { Component } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-09',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel],
	template: `
		<hlm-radio-group class="flex flex-col gap-3 text-sm font-medium" value="1">
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<div>
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
					</div>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Small</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
					</div>
					<hlm-radio class="space-x-0" value="1">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
							<div
								class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<div>
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
					</div>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Large</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
					</div>
					<hlm-radio class="space-x-0" value="2">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
							<div
								class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
		</hlm-radio-group>
	`,
})
export class Radio09Component {}

export const radio09Code = `import { Component } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmRadio, HlmRadioGroup } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-09',
	imports: [HlmRadioGroup, HlmRadio, HlmLabel],
	template: \`
		<hlm-radio-group class="flex flex-col gap-3 text-sm font-medium" value="1">
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<div>
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
					</div>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Small</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
					</div>
					<hlm-radio class="space-x-0" value="1">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
							<div
								class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
			<div
				class="border-input has-data-[checked=true]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
				<label
					class="flex items-start gap-2 has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-70"
					hlmLabel>
					<div>
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
					</div>
					<div class="flex flex-col gap-2">
						<span class="flex items-center gap-1">
							<span class="text-sm leading-4">Large</span>
							<span class="text-muted-foreground text-xs leading-[inherit] font-normal">(Sublabel)</span>
						</span>
						<p class="text-muted-foreground text-xs font-normal">This is a small radio button with a sublabel.</p>
					</div>
					<hlm-radio class="space-x-0" value="2">
						<div
							class="relative inline-flex size-4 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50">
							<div
								class="bg-background absolute inset-0 scale-0 scale-[100%] rounded-full border transition-transform duration-100 ease-out group-[.brn-radio-checked]:scale-[37.5%]"></div>
							<div
								class="ring-offset-background group-[.cdk-keyboard-focused]:ring-ring border-input bg-primary group-[.brn-radio-checked]:border-primary! aspect-square rounded-full border group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-offset-2"></div>
						</div>
					</hlm-radio>
				</label>
			</div>
		</hlm-radio-group>
	\`,
})
export class Radio09Component {}`;
