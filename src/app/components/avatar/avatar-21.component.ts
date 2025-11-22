import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-21',
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: `
		<div class="flex gap-4">
			<hlm-avatar class="border-border/50 size-14 border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<div class="flex flex-col justify-center py-0.5">
				<div class="flex items-center justify-center gap-0.5">
					<span class="text-lg font-semibold">Mathilde Lewis</span>
					<div class="size-7 p-1.5">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							outline="bg-background"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_292_756)">
								<path
									d="M12.3558 2.83357C12.5077 3.20120 12.7994 3.49321 13.1667 3.64573L14.4546 4.17919C14.8221 4.33143 15.1142 4.62344 15.2664 4.99208C15.4186 5.35852 15.4186 5.77149 15.2664 6.13903L14.7333 7.426C14.581 7.7937 14.5808 8.20720 14.7338 8.57461L15.266 9.86119C15.3414 10.0432 15.3803 10.2384 15.3803 10.4354C15.3804 10.6325 15.3416 10.8276 15.2661 11.0207C15.1907 11.1918 15.0802 11.3572 14.9408 11.4965C14.8014 11.6358 14.636 11.7463 14.4539 11.8217L13.1669 12.3547C12.7994 12.5067 12.5073 12.7984 12.3548 13.1657L11.8213 14.4536C11.6691 14.8211 11.3771 15.1131 11.0205 15.2654C10.642 15.4176 10.229 15.4176 9.86148 15.2654L8.57452 14.7323C8.20696 14.5804 7.79415 14.5807 7.42682 14.7331L6.13894 15.2658C5.7716 15.4177 5.35899 15.4176 4.99175 15.2655C4.6245 15.1134 4.33266 14.8217 4.18031 14.4545L3.64669 13.1663C3.49473 12.7988 3.20305 12.5066 2.83576 12.3541L1.54787 11.8207C1.18049 11.6685 0.888567 11.3767 0.73627 11.0203C0.583972 10.642 0.583766 10.2292 0.735695 9.86175L1.26877 8.57478C1.42064 8.20723 1.42033 7.79441 1.26791 7.42720L0.735598 6.13828C0.660127 5.95624 0.621266 5.76111 0.621234 5.56405C0.621202 5.36698 0.660001 5.17184 0.735414 4.98978C0.810827 4.80772 0.921376 4.6423 1.06074 4.50298C1.20011 4.36365 1.36557 4.25316 1.54765 4.1778L2.83462 3.64473C3.20181 3.4929 3.49376 3.20158 3.64639 2.83472L4.17985 1.54683C4.33220 1.17929 4.6241 0.887276 4.99164 0.735035C5.35918 0.582794 5.77215 0.582794 6.13969 0.735035L7.42666 1.26811C7.79421 1.41998 8.20702 1.41967 8.57435 1.26725L9.86278 0.735862C10.2303 0.583706 10.6431 0.583737 11.0106 0.735948C11.3781 0.888159 11.6701 1.18020 11.8223 1.54753L12.3559 2.8358L12.3558 2.83357Z"
									fill="#2E90FA"
									class="stroke-background" />
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.1333 5.90291C11.2401 5.73503 11.276 5.53157 11.2328 5.33728C11.1897 5.14299 11.0711 4.9738 10.9033 4.86691C10.7354 4.76003 10.5319 4.72422 10.3376 4.76735C10.1433 4.81048 9.97414 4.92903 9.86726 5.20691L6.93026 9.71191L5.58626 8.03191C5.46201 7.8765 5.2811 7.7768 5.08335 7.75477C4.88559 7.73273 4.68718 7.79016 4.53176 7.91441C4.37634 8.03867 4.27665 8.21957 4.25462 8.41733C4.23258 8.61508 4.29001 8.8135 4.41426 8.96891L6.41426 11.4689C6.4888 11.5622 6.58453 11.6363 6.6935 11.6852C6.80246 11.734 6.92151 11.7561 7.04075 11.7497C7.15998 11.7432 7.27595 11.7084 7.37901 11.6481C7.48206 11.5877 7.56923 11.5037 7.63326 11.4029L11.1333 5.90291V5.90291Z"
									fill="white" />
							</g>
							<defs>
								<clipPath id="clip0_292_756">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div class="bg-background rounded-sm border p-1">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_294_765)">
								<path
									d="M16 2.66738L15.4223 11.2376L9.89833 0L16 2.66738ZM12.1739 13.7491L8.00004 15.9989L3.82606 13.7491L4.67499 11.8056H11.325L12.1739 13.7491ZM8.00004 4.26561L10.1872 9.28859H5.81283L8.00004 4.26561ZM0.571838 11.2376L0 2.66738L6.10167 0L0.571838 11.2376Z"
									fill="url(#paint0_linear_294_765)" />
								<path
									d="M16 2.66738L15.4223 11.2376L9.89833 0L16 2.66738ZM12.1739 13.7491L8.00004 15.9989L3.82606 13.7491L4.67499 11.8056H11.325L12.1739 13.7491ZM8.00004 4.26561L10.1872 9.28859H5.81283L8.00004 4.26561ZM0.571838 11.2376L0 2.66738L6.10167 0L0.571838 11.2376Z"
									fill="url(#paint1_linear_294_765)" />
							</g>
							<defs>
								<linearGradient
									id="paint0_linear_294_765"
									x1="401.144"
									y1="1454.77"
									x2="1538.08"
									y2="882.815"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#E40035" />
									<stop offset="0.24" stop-color="#F60A48" />
									<stop offset="0.352" stop-color="#F20755" />
									<stop offset="0.494" stop-color="#DC087D" />
									<stop offset="0.745" stop-color="#9717E7" />
									<stop offset="1" stop-color="#6C00F5" />
								</linearGradient>
								<linearGradient
									id="paint1_linear_294_765"
									x1="349.806"
									y1="192.907"
									x2="1093.81"
									y2="1091.34"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#FF31D9" />
									<stop offset="1" stop-color="#FF5BE1" stop-opacity="0" />
								</linearGradient>
								<clipPath id="clip0_294_765">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<span class="text-md text-muted-foreground">&#64;matlewis</span>
			</div>
		</div>
	`,
})
export class Avatar21Component {}

export const avatar21Code = `import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-21',
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: \`
		<div class="flex gap-4">
			<hlm-avatar class="border-border/50 size-14 border">
				<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
				<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
			</hlm-avatar>
			<div class="flex flex-col justify-center py-0.5">
				<div class="flex items-center justify-center gap-0.5">
					<span class="text-lg font-semibold">Mathilde Lewis</span>
					<div class="size-7 p-1.5">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							outline="bg-background"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_292_756)">
								<path
									d="M12.3558 2.83357C12.5077 3.20120 12.7994 3.49321 13.1667 3.64573L14.4546 4.17919C14.8221 4.33143 15.1142 4.62344 15.2664 4.99208C15.4186 5.35852 15.4186 5.77149 15.2664 6.13903L14.7333 7.426C14.581 7.7937 14.5808 8.20720 14.7338 8.57461L15.266 9.86119C15.3414 10.0432 15.3803 10.2384 15.3803 10.4354C15.3804 10.6325 15.3416 10.8276 15.2661 11.0207C15.1907 11.1918 15.0802 11.3572 14.9408 11.4965C14.8014 11.6358 14.636 11.7463 14.4539 11.8217L13.1669 12.3547C12.7994 12.5067 12.5073 12.7984 12.3548 13.1657L11.8213 14.4536C11.6691 14.8211 11.3771 15.1131 11.0205 15.2654C10.642 15.4176 10.229 15.4176 9.86148 15.2654L8.57452 14.7323C8.20696 14.5804 7.79415 14.5807 7.42682 14.7331L6.13894 15.2658C5.7716 15.4177 5.35899 15.4176 4.99175 15.2655C4.6245 15.1134 4.33266 14.8217 4.18031 14.4545L3.64669 13.1663C3.49473 12.7988 3.20305 12.5066 2.83576 12.3541L1.54787 11.8207C1.18049 11.6685 0.888567 11.3767 0.73627 11.0203C0.583972 10.642 0.583766 10.2292 0.735695 9.86175L1.26877 8.57478C1.42064 8.20723 1.42033 7.79441 1.26791 7.42720L0.735598 6.13828C0.660127 5.95624 0.621266 5.76111 0.621234 5.56405C0.621202 5.36698 0.660001 5.17184 0.735414 4.98978C0.810827 4.80772 0.921376 4.6423 1.06074 4.50298C1.20011 4.36365 1.36557 4.25316 1.54765 4.1778L2.83462 3.64473C3.20181 3.4929 3.49376 3.20158 3.64639 2.83472L4.17985 1.54683C4.33220 1.17929 4.6241 0.887276 4.99164 0.735035C5.35918 0.582794 5.77215 0.582794 6.13969 0.735035L7.42666 1.26811C7.79421 1.41998 8.20702 1.41967 8.57435 1.26725L9.86278 0.735862C10.2303 0.583706 10.6431 0.583737 11.0106 0.735948C11.3781 0.888159 11.6701 1.18020 11.8223 1.54753L12.3559 2.8358L12.3558 2.83357Z"
									fill="#2E90FA"
									class="stroke-background" />
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.1333 5.90291C11.2401 5.73503 11.276 5.53157 11.2328 5.33728C11.1897 5.14299 11.0711 4.9738 10.9033 4.86691C10.7354 4.76003 10.5319 4.72422 10.3376 4.76735C10.1433 4.81048 9.97414 4.92903 9.86726 5.20691L6.93026 9.71191L5.58626 8.03191C5.46201 7.8765 5.2811 7.7768 5.08335 7.75477C4.88559 7.73273 4.68718 7.79016 4.53176 7.91441C4.37634 8.03867 4.27665 8.21957 4.25462 8.41733C4.23258 8.61508 4.29001 8.8135 4.41426 8.96891L6.41426 11.4689C6.4888 11.5622 6.58453 11.6363 6.6935 11.6852C6.80246 11.734 6.92151 11.7561 7.04075 11.7497C7.15998 11.7432 7.27595 11.7084 7.37901 11.6481C7.48206 11.5877 7.56923 11.5037 7.63326 11.4029L11.1333 5.90291V5.90291Z"
									fill="white" />
							</g>
							<defs>
								<clipPath id="clip0_292_756">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div class="bg-background rounded-sm border p-1">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_294_765)">
								<path
									d="M16 2.66738L15.4223 11.2376L9.89833 0L16 2.66738ZM12.1739 13.7491L8.00004 15.9989L3.82606 13.7491L4.67499 11.8056H11.325L12.1739 13.7491ZM8.00004 4.26561L10.1872 9.28859H5.81283L8.00004 4.26561ZM0.571838 11.2376L0 2.66738L6.10167 0L0.571838 11.2376Z"
									fill="url(#paint0_linear_294_765)" />
								<path
									d="M16 2.66738L15.4223 11.2376L9.89833 0L16 2.66738ZM12.1739 13.7491L8.00004 15.9989L3.82606 13.7491L4.67499 11.8056H11.325L12.1739 13.7491ZM8.00004 4.26561L10.1872 9.28859H5.81283L8.00004 4.26561ZM0.571838 11.2376L0 2.66738L6.10167 0L0.571838 11.2376Z"
									fill="url(#paint1_linear_294_765)" />
							</g>
							<defs>
								<linearGradient
									id="paint0_linear_294_765"
									x1="401.144"
									y1="1454.77"
									x2="1538.08"
									y2="882.815"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#E40035" />
									<stop offset="0.24" stop-color="#F60A48" />
									<stop offset="0.352" stop-color="#F20755" />
									<stop offset="0.494" stop-color="#DC087D" />
									<stop offset="0.745" stop-color="#9717E7" />
									<stop offset="1" stop-color="#6C00F5" />
								</linearGradient>
								<linearGradient
									id="paint1_linear_294_765"
									x1="349.806"
									y1="192.907"
									x2="1093.81"
									y2="1091.34"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#FF31D9" />
									<stop offset="1" stop-color="#FF5BE1" stop-opacity="0" />
								</linearGradient>
								<clipPath id="clip0_294_765">
									<rect width="16" height="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<span class="text-md text-muted-foreground">&#64;matlewis</span>
			</div>
		</div>
	\`,
})
export class Avatar21Component {}`;
