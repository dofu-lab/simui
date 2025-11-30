import { Component } from '@angular/core';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';

@Component({
	selector: 'sim-avatar-22',
	imports: [HlmAvatar, HlmAvatarImage, HlmAvatarFallback],
	template: `
		<div class="flex -space-x-4.5">
			<div class="group/avatar relative transition-transform duration-200 hover:-translate-y-5">
				<svg viewBox="0 0 500 500" class="absolute -top-2.5 -left-2.5 z-0 opacity-0 group-hover/avatar:opacity-100">
					<path
						id="curve"
						fill="transparent"
						d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
					<text
						class="fill-foreground"
						width="500"
						style="font-size: 60px; font-family: 'Poppins', sans-serif; font-weight: 600;">
						<textPath xlink:href="#curve">mathilde</textPath>
					</text>
				</svg>
				<hlm-avatar class="border-background size-14 border-[2px]">
					<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
			</div>
			<div class="group/avatar relative transition-transform duration-200 hover:-translate-y-5">
				<svg viewBox="0 0 500 500" class="absolute -top-2.5 -left-2.5 z-0 opacity-0 group-hover/avatar:opacity-100">
					<path
						id="curve"
						fill="transparent"
						d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
					<text
						class="fill-foreground"
						width="500"
						style="font-size: 60px; font-family: 'Poppins', sans-serif; font-weight: 600;">
						<textPath xlink:href="#curve">alan</textPath>
					</text>
				</svg>
				<hlm-avatar class="border-background size-14 border-[2px]">
					<img hlmAvatarImage src="assets/avatars/alan-cooper.png" alt="Alan Cooper" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
			</div>
			<div class="group/avatar relative transition-transform duration-200 hover:-translate-y-5">
				<svg viewBox="0 0 500 500" class="absolute -top-2.5 -left-2.5 z-0 opacity-0 group-hover/avatar:opacity-100">
					<path
						id="curve"
						fill="transparent"
						d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
					<text
						class="fill-foreground"
						width="500"
						style="font-size: 60px; font-family: 'Poppins', sans-serif; font-weight: 600;">
						<textPath xlink:href="#curve">skylar</textPath>
					</text>
				</svg>
				<hlm-avatar class="border-background size-14 border-[2px]">
					<img hlmAvatarImage src="assets/avatars/skylar-dias.png" alt="Skylar Dias" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
			</div>
			<div class="group/avatar relative transition-transform duration-200 hover:-translate-y-5">
				<svg viewBox="0 0 500 500" class="absolute -top-2.5 -left-2.5 z-0 opacity-0 group-hover/avatar:opacity-100">
					<path
						id="curve"
						fill="transparent"
						d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
					<text
						class="fill-foreground"
						width="500"
						style="font-size: 60px; font-family: 'Poppins', sans-serif; font-weight: 600;">
						<textPath xlink:href="#curve">alexis</textPath>
					</text>
				</svg>
				<hlm-avatar class="border-background size-14 border-[2px]">
					<img hlmAvatarImage src="assets/avatars/alexis-sears.png" alt="Alexis Sears" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
				</hlm-avatar>
			</div>
		</div>
	`,
})
export class Avatar22Component {}