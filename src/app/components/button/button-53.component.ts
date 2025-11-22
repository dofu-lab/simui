import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-53',
	imports: [HlmButton],
	template: `
		<div class="flex flex-col gap-2">
			<button hlmBtn class="h-fit pl-2">
				<div class="flex items-center">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
						<mask
							id="mask0_317_981"
							style="mask-type:alpha"
							maskUnits="userSpaceOnUse"
							x="5"
							y="2"
							width="19"
							height="20">
							<path
								d="M22.5363 10.8003C23.4879 11.324 23.4879 12.676 22.5363 13.1997L7.3172 21.5744C6.39039 22.0844 5.25 21.4226 5.25 20.3747L5.25 3.6253C5.25 2.57743 6.39039 1.91561 7.3172 2.42561L22.5363 10.8003Z"
								fill="#C4C4C4" />
						</mask>
						<g mask="url(#mask0_317_981)">
							<path
								d="M5.72604 21.41L15.2192 11.8634L5.88239 2.47412C5.5099 2.71291 5.25 3.12518 5.25 3.62542V20.3748C5.25 20.8016 5.43917 21.1644 5.72604 21.41Z"
								fill="url(#paint0_linear_317_981)" />
							<path
								d="M22.5363 10.8002C23.4879 11.3239 23.4879 12.6759 22.5363 13.1996L18.6968 15.3123L15.2192 11.8631L18.5195 8.58984L22.5363 10.8002Z"
								fill="url(#paint1_linear_317_981)" />
							<path
								d="M18.6969 15.3125L15.2193 11.8633L5.72607 21.4099C6.14354 21.7673 6.76792 21.8767 7.31726 21.5744L18.6969 15.3125Z"
								fill="url(#paint2_linear_317_981)" />
							<path
								d="M5.88232 2.47399L15.2191 11.8633L18.5194 8.58996L7.31711 2.42561C6.83277 2.15909 6.29009 2.2126 5.88232 2.47399Z"
								fill="url(#paint3_linear_317_981)" />
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_317_981"
								x1="11.7577"
								y1="8.15548"
								x2="5.30329"
								y2="14.663"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#00C3FF" />
								<stop offset="1" stop-color="#1BE2FA" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_317_981"
								x1="15.2192"
								y1="11.8632"
								x2="23.8039"
								y2="11.8632"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#FFCE00" />
								<stop offset="1" stop-color="#FFEA00" />
							</linearGradient>
							<linearGradient
								id="paint2_linear_317_981"
								x1="5.52699"
								y1="22.5752"
								x2="16.9463"
								y2="13.4201"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#DE2453" />
								<stop offset="1" stop-color="#FE3944" />
							</linearGradient>
							<linearGradient
								id="paint3_linear_317_981"
								x1="6.08068"
								y1="1.42603"
								x2="16.948"
								y2="10.3024"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#11D574" />
								<stop offset="1" stop-color="#01F176" />
							</linearGradient>
						</defs>
					</svg>

					<div class="flex flex-col">
						<span class="text-left text-[8px] leading-2">GET IT ON</span>
						<span class="text-left text-[16px] leading-4">Google Play</span>
					</div>
				</div>
			</button>
			<button hlmBtn class="h-fit pl-2">
				<div class="flex items-center">
					<svg viewBox="0 0 24 24" class="fill-background mr-2 size-6" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15.769 12.3008C15.7907 10.6198 16.6934 9.02922 18.1256 8.14876C17.2221 6.85844 15.7088 6.04034 14.1344 5.99108C12.4552 5.81482 10.8272 6.99591 9.97149 6.99591C9.09922 6.99591 7.78172 6.00858 6.36299 6.03777C4.51374 6.09751 2.78977 7.1489 1.89007 8.76564C-0.0439277 12.1141 1.39866 17.0351 3.25127 19.7417C4.17817 21.0671 5.26145 22.5475 6.6789 22.495C8.06596 22.4375 8.584 21.6105 10.2583 21.6105C11.9171 21.6105 12.4031 22.495 13.8493 22.4616C15.3377 22.4375 16.2754 21.1304 17.1698 19.7925C17.8358 18.8481 18.3483 17.8044 18.6882 16.7C16.9391 15.9602 15.771 14.2 15.769 12.3008Z"
							fill="currentColor" />
						<path
							d="M13.0373 4.21108C13.8489 3.23687 14.2487 1.98469 14.1518 0.720459C12.912 0.850679 11.7668 1.44324 10.9443 2.38007C10.14 3.2954 9.72143 4.52555 9.80056 5.74146C11.0408 5.75423 12.2601 5.17773 13.0373 4.21108Z"
							fill="currentColor" />
					</svg>
					<div class="flex flex-col">
						<span class="text-left text-[8px] leading-2">GET IT ON</span>
						<span class="text-left text-[16px] leading-4">Apple Store</span>
					</div>
				</div>
			</button>
		</div>
	`,
})
export class Button53Component {}

export const button53Code = `import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'sim-button-53',
	imports: [HlmButton],
	template: \`
		<div class="flex flex-col gap-2">
			<button hlmBtn class="h-fit pl-2">
				<div class="flex items-center">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
						<mask
							id="mask0_317_981"
							style="mask-type:alpha"
							maskUnits="userSpaceOnUse"
							x="5"
							y="2"
							width="19"
							height="20">
							<path
								d="M22.5363 10.8003C23.4879 11.324 23.4879 12.676 22.5363 13.1997L7.3172 21.5744C6.39039 22.0844 5.25 21.4226 5.25 20.3747L5.25 3.6253C5.25 2.57743 6.39039 1.91561 7.3172 2.42561L22.5363 10.8003Z"
								fill="#C4C4C4" />
						</mask>
						<g mask="url(#mask0_317_981)">
							<path
								d="M5.72604 21.41L15.2192 11.8634L5.88239 2.47412C5.5099 2.71291 5.25 3.12518 5.25 3.62542V20.3748C5.25 20.8016 5.43917 21.1644 5.72604 21.41Z"
								fill="url(#paint0_linear_317_981)" />
							<path
								d="M22.5363 10.8002C23.4879 11.3239 23.4879 12.6759 22.5363 13.1996L18.6968 15.3123L15.2192 11.8631L18.5195 8.58984L22.5363 10.8002Z"
								fill="url(#paint1_linear_317_981)" />
							<path
								d="M18.6969 15.3125L15.2193 11.8633L5.72607 21.4099C6.14354 21.7673 6.76792 21.8767 7.31726 21.5744L18.6969 15.3125Z"
								fill="url(#paint2_linear_317_981)" />
							<path
								d="M5.88232 2.47399L15.2191 11.8633L18.5194 8.58996L7.31711 2.42561C6.83277 2.15909 6.29009 2.2126 5.88232 2.47399Z"
								fill="url(#paint3_linear_317_981)" />
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_317_981"
								x1="11.7577"
								y1="8.15548"
								x2="5.30329"
								y2="14.663"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#00C3FF" />
								<stop offset="1" stop-color="#1BE2FA" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_317_981"
								x1="15.2192"
								y1="11.8632"
								x2="23.8039"
								y2="11.8632"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#FFCE00" />
								<stop offset="1" stop-color="#FFEA00" />
							</linearGradient>
							<linearGradient
								id="paint2_linear_317_981"
								x1="5.52699"
								y1="22.5752"
								x2="16.9463"
								y2="13.4201"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#DE2453" />
								<stop offset="1" stop-color="#FE3944" />
							</linearGradient>
							<linearGradient
								id="paint3_linear_317_981"
								x1="6.08068"
								y1="1.42603"
								x2="16.948"
								y2="10.3024"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#11D574" />
								<stop offset="1" stop-color="#01F176" />
							</linearGradient>
						</defs>
					</svg>

					<div class="flex flex-col">
						<span class="text-left text-[8px] leading-2">GET IT ON</span>
						<span class="text-left text-[16px] leading-4">Google Play</span>
					</div>
				</div>
			</button>
			<button hlmBtn class="h-fit pl-2">
				<div class="flex items-center">
					<svg viewBox="0 0 24 24" class="fill-background mr-2 size-6" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15.769 12.3008C15.7907 10.6198 16.6934 9.02922 18.1256 8.14876C17.2221 6.85844 15.7088 6.04034 14.1344 5.99108C12.4552 5.81482 10.8272 6.99591 9.97149 6.99591C9.09922 6.99591 7.78172 6.00858 6.36299 6.03777C4.51374 6.09751 2.78977 7.1489 1.89007 8.76564C-0.0439277 12.1141 1.39866 17.0351 3.25127 19.7417C4.17817 21.0671 5.26145 22.5475 6.6789 22.495C8.06596 22.4375 8.584 21.6105 10.2583 21.6105C11.9171 21.6105 12.4031 22.495 13.8493 22.4616C15.3377 22.4375 16.2754 21.1304 17.1698 19.7925C17.8358 18.8481 18.3483 17.8044 18.6882 16.7C16.9391 15.9602 15.771 14.2 15.769 12.3008Z"
							fill="currentColor" />
						<path
							d="M13.0373 4.21108C13.8489 3.23687 14.2487 1.98469 14.1518 0.720459C12.912 0.850679 11.7668 1.44324 10.9443 2.38007C10.14 3.2954 9.72143 4.52555 9.80056 5.74146C11.0408 5.75423 12.2601 5.17773 13.0373 4.21108Z"
							fill="currentColor" />
					</svg>
					<div class="flex flex-col">
						<span class="text-left text-[8px] leading-2">GET IT ON</span>
						<span class="text-left text-[16px] leading-4">Apple Store</span>
					</div>
				</div>
			</button>
		</div>
	\`,
})
export class Button53Component {}`;
