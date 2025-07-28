import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail, lucideSave } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmAspectRatioDirective } from '@spartan-ng/helm/aspect-ratio';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/helm/dialog';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-dialog-34',
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
		HlmAspectRatioDirective,
		HlmAvatarComponent,
		HlmAvatarImageDirective,
		HlmAvatarFallbackDirective,
		HlmInputDirective,
		HlmLabelDirective,
		BrnSelectImports,
		HlmSelectImports,
	],
	providers: [provideIcons({ lucideSave, lucideMail })],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Edit profile</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-150! max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-hidden rounded-lg p-0 sm:max-h-[min(1000px,85vh)] sm:max-w-150"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<div class="relative p-2">
						<div class="shadow-xs" [hlmAspectRatio]="39 / 8">
							<img src="assets/backgrounds/bg-02.jpg" class="rounded-lg" />
						</div>
						<hlm-avatar class="border-background peer -mt-10 ml-6 size-20 border-4">
							<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
						</hlm-avatar>
					</div>
					<div class="mt-4 flex flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
						<div class="flex flex-col items-start">
							<div class="flex items-center justify-start gap-0.5">
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
							</div>
							<span class="text-md text-muted-foreground">&#64;matlewis</span>
						</div>
						<div class="flex">
							<div class="flex flex-col gap-0.5 border-r pr-4">
								<span class="text-muted-foreground text-xs font-medium">Followers</span>
								<span class="text-md font-semibold">47,198</span>
							</div>
							<div class="flex flex-col gap-0.5 border-r px-4">
								<span class="text-muted-foreground text-xs font-medium">Following</span>
								<span class="text-md font-semibold">2,421</span>
							</div>
							<div class="flex flex-col gap-0.5 border-r px-4">
								<span class="text-muted-foreground text-xs font-medium">Posts</span>
								<span class="text-md font-semibold">873</span>
							</div>
							<div class="flex flex-col gap-0.5 pl-4">
								<span class="text-muted-foreground text-xs font-medium">Collections</span>
								<span class="text-md font-semibold">87</span>
							</div>
						</div>
					</div>
					<form [formGroup]="formGroup">
						<div class="mt-6 flex w-full flex-col gap-4 px-6">
							<div class="flex flex-col gap-2 border-t-[2px] border-dotted pt-4 sm:flex-row sm:justify-between">
								<label hlmLabel class="text-secondary-foreground text-sm">Name</label>
								<div class="grid grid-cols-2 items-center gap-4">
									<input
										hlmInput
										formControlName="firstName"
										type="text"
										placeholder="First name"
										class="flex-1 sm:max-w-43" />
									<input
										hlmInput
										formControlName="lastName"
										type="text"
										placeholder="Last name"
										class="flex-1 sm:max-w-43" />
								</div>
							</div>
							<div class="flex flex-col gap-2 border-t-[2px] border-dotted pt-4 sm:flex-row sm:justify-between">
								<label hlmLabel class="text-secondary-foreground text-sm font-semibold">Email</label>
								<div class="flex w-full flex-1 flex-col gap-2 sm:max-w-90">
									<div class="relative">
										<input
											hlmInput
											formControlName="email"
											type="email"
											placeholder="First name"
											class="peer w-full ps-10 text-sm" />
										<div
											class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-end justify-center ps-3 pb-3 peer-disabled:opacity-50">
											<ng-icon hlm name="lucideMail" size="sm" />
										</div>
									</div>
									<span class="flex items-start justify-start gap-1 text-xs font-semibold text-[#2E90FA]">
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
										@if (isEmailVerified()) {
											Verified 12 Feb, 2025
										}
									</span>
								</div>
							</div>

							<div class="border-t-[2px] border-dotted pt-4">
								<label hlmLabel for="website" class="flex flex-col justify-between gap-2 sm:flex-row">
									Website
									<div class="mt-1 flex w-full flex-1 flex-row -space-x-px sm:max-w-90">
										<span
											class="text-muted-foreground border-input bg-background -z-10 inline-flex w-fit items-center rounded-s-md border px-3 text-sm font-normal">
											simui.dev/&#64;
										</span>
										<input
											hlmInput
											size="sm"
											class="flex-1 rounded-s-none text-sm"
											id="website"
											type="text"
											formControlName="userName" />
									</div>
								</label>
							</div>

							<div class="flex flex-col gap-2 border-t-[2px] border-dotted py-4 sm:flex-row sm:justify-between">
								<label hlmLabel class="text-secondary-foreground text-sm font-semibold">Country</label>
								<div class="flex flex-1 flex-col items-start gap-1 sm:max-w-90">
									<brn-select class="inline-block w-full" placeholder="Select your country" formControlName="country">
										<hlm-select-trigger class="h-9 w-full">
											<hlm-select-value>
												<div class="flex items-center gap-x-2" *brnSelectValue="let value">
													<img [src]="'assets/flags/' + value.icon" />
													<span class="text-secondary-foreground text-sm font-medium">
														{{ value.label }}
													</span>
													<span class="text-muted-foreground text-sm">
														{{ value.timezone }}
													</span>
												</div>
											</hlm-select-value>
										</hlm-select-trigger>

										<hlm-select-content>
											@for (country of countries; track country.label) {
												<hlm-option [value]="country" class="gap-2">
													<img [src]="'assets/flags/' + country.icon" />
													<span class="text-secondary-foreground text-sm font-medium">
														{{ country.label }}
													</span>
													<span class="text-muted-foreground text-sm">
														{{ country.timezone }}
													</span>
												</hlm-option>
											}
										</hlm-select-content>
									</brn-select>
									<span class="text-muted-foreground mt-1 w-full text-sm">Estimates based on recent IP address.</span>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div class="mx-6 border-t-[2px] border-dotted"></div>
				<div class="flex gap-4 p-6">
					<button hlmBtn variant="outline" class="flex-1" size="sm" (click)="ctx.close()">
						<ng-icon hlm name="lucideSave" class="text-muted-foreground mr-2" size="sm" />
						Save as draft
					</button>
					<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Publish changes</button>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog34Component {
	isEmailVerified = signal(true);
	countries = [
		{
			id: 1,
			label: 'Australia',
			icon: 'AU.svg',
			timezone: 'UTC/GMT+10',
		},
		{
			id: 2,
			label: 'Switzerland',
			icon: 'CH.svg',
			timezone: 'UTC/GMT+1',
		},
		{
			id: 3,
			label: 'China',
			icon: 'CN.svg',
			timezone: 'UTC/GMT+8',
		},
		{
			id: 4,
			label: 'Japan',
			icon: 'JP.svg',
			timezone: 'UTC/GMT+9',
		},
		{
			id: 5,
			label: 'Korea',
			icon: 'KR.svg',
			timezone: 'UTC/GMT+9',
		},
		{
			id: 6,
			label: 'United States',
			icon: 'US.svg',
			timezone: 'UTC/GMT-5',
		},
		{
			id: 7,
			label: 'Vietnam',
			icon: 'VN.svg',
			timezone: 'UTC/GMT+7',
		},
	];

	formGroup = new FormGroup({
		firstName: new FormControl('Mathilde'),
		lastName: new FormControl('Lewis'),
		email: new FormControl('mathilde@simui.dev'),
		userName: new FormControl('mathilde.lewis842'),
		country: new FormControl(this.countries[0]),
	});
}

export const dialog34Code = `import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMail, lucideSave } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmAspectRatioDirective } from '@spartan-ng/helm/aspect-ratio';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmDialogComponent, HlmDialogContentComponent } from '@spartan-ng/helm/dialog';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-dialog-34',
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
		HlmAspectRatioDirective,
		HlmAvatarComponent,
		HlmAvatarImageDirective,
		HlmAvatarFallbackDirective,
		HlmInputDirective,
		HlmLabelDirective,
		BrnSelectImports,
		HlmSelectImports,
	],
	providers: [provideIcons({ lucideSave, lucideMail })],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Edit profile</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-150! max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-hidden rounded-lg p-0 sm:max-h-[min(1000px,85vh)] sm:max-w-150"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<div class="relative p-2">
						<div class="shadow-xs" [hlmAspectRatio]="39 / 8">
							<img src="assets/backgrounds/bg-02.jpg" class="rounded-lg" />
						</div>
						<hlm-avatar class="border-background peer -mt-10 ml-6 size-20 border-4">
							<img hlmAvatarImage src="assets/avatars/mathilde-lewis.png" alt="Mathilde Lewis" />
							<span hlmAvatarFallback class="bg-primary text-primary-foreground">ML</span>
						</hlm-avatar>
					</div>
					<div class="mt-4 flex flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
						<div class="flex flex-col items-start">
							<div class="flex items-center justify-start gap-0.5">
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
							</div>
							<span class="text-md text-muted-foreground">&#64;matlewis</span>
						</div>
						<div class="flex">
							<div class="flex flex-col gap-0.5 border-r pr-4">
								<span class="text-muted-foreground text-xs font-medium">Followers</span>
								<span class="text-md font-semibold">47,198</span>
							</div>
							<div class="flex flex-col gap-0.5 border-r px-4">
								<span class="text-muted-foreground text-xs font-medium">Following</span>
								<span class="text-md font-semibold">2,421</span>
							</div>
							<div class="flex flex-col gap-0.5 border-r px-4">
								<span class="text-muted-foreground text-xs font-medium">Posts</span>
								<span class="text-md font-semibold">873</span>
							</div>
							<div class="flex flex-col gap-0.5 pl-4">
								<span class="text-muted-foreground text-xs font-medium">Collections</span>
								<span class="text-md font-semibold">87</span>
							</div>
						</div>
					</div>
					<form [formGroup]="formGroup">
						<div class="mt-6 flex w-full flex-col gap-4 px-6">
							<div class="flex flex-col gap-2 border-t-[2px] border-dotted pt-4 sm:flex-row sm:justify-between">
								<label hlmLabel class="text-secondary-foreground text-sm">Name</label>
								<div class="grid grid-cols-2 items-center gap-4">
									<input
										hlmInput
										formControlName="firstName"
										type="text"
										placeholder="First name"
										class="flex-1 sm:max-w-43" />
									<input
										hlmInput
										formControlName="lastName"
										type="text"
										placeholder="Last name"
										class="flex-1 sm:max-w-43" />
								</div>
							</div>
							<div class="flex flex-col gap-2 border-t-[2px] border-dotted pt-4 sm:flex-row sm:justify-between">
								<label hlmLabel class="text-secondary-foreground text-sm font-semibold">Email</label>
								<div class="flex w-full flex-1 flex-col gap-2 sm:max-w-90">
									<div class="relative">
										<input
											hlmInput
											formControlName="email"
											type="email"
											placeholder="First name"
											class="peer w-full ps-10 text-sm" />
										<div
											class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-end justify-center ps-3 pb-3 peer-disabled:opacity-50">
											<ng-icon hlm name="lucideMail" size="sm" />
										</div>
									</div>
									<span class="flex items-start justify-start gap-1 text-xs font-semibold text-[#2E90FA]">
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
										@if (isEmailVerified()) {
											Verified 12 Feb, 2025
										}
									</span>
								</div>
							</div>

							<div class="border-t-[2px] border-dotted pt-4">
								<label hlmLabel for="website" class="flex flex-col justify-between gap-2 sm:flex-row">
									Website
									<div class="mt-1 flex w-full flex-1 flex-row -space-x-px sm:max-w-90">
										<span
											class="text-muted-foreground border-input bg-background -z-10 inline-flex w-fit items-center rounded-s-md border px-3 text-sm font-normal">
											simui.dev/&#64;
										</span>
										<input
											hlmInput
											size="sm"
											class="flex-1 rounded-s-none text-sm"
											id="website"
											type="text"
											formControlName="userName" />
									</div>
								</label>
							</div>

							<div class="flex flex-col gap-2 border-t-[2px] border-dotted py-4 sm:flex-row sm:justify-between">
								<label hlmLabel class="text-secondary-foreground text-sm font-semibold">Country</label>
								<div class="flex flex-1 flex-col items-start gap-1 sm:max-w-90">
									<brn-select class="inline-block w-full" placeholder="Select your country" formControlName="country">
										<hlm-select-trigger class="h-9 w-full">
											<hlm-select-value>
												<div class="flex items-center gap-x-2" *brnSelectValue="let value">
													<img [src]="'assets/flags/' + value.icon" />
													<span class="text-secondary-foreground text-sm font-medium">
														{{ value.label }}
													</span>
													<span class="text-muted-foreground text-sm">
														{{ value.timezone }}
													</span>
												</div>
											</hlm-select-value>
										</hlm-select-trigger>

										<hlm-select-content>
											@for (country of countries; track country.label) {
												<hlm-option [value]="country" class="gap-2">
													<img [src]="'assets/flags/' + country.icon" />
													<span class="text-secondary-foreground text-sm font-medium">
														{{ country.label }}
													</span>
													<span class="text-muted-foreground text-sm">
														{{ country.timezone }}
													</span>
												</hlm-option>
											}
										</hlm-select-content>
									</brn-select>
									<span class="text-muted-foreground mt-1 w-full text-sm">Estimates based on recent IP address.</span>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div class="mx-6 border-t-[2px] border-dotted"></div>
				<div class="flex gap-4 p-6">
					<button hlmBtn variant="outline" class="flex-1" size="sm" (click)="ctx.close()">
						<ng-icon hlm name="lucideSave" class="text-muted-foreground mr-2" size="sm" />
						Save as draft
					</button>
					<button hlmBtn class="flex-1" size="sm" (click)="ctx.close()">Publish changes</button>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog34Component {
	isEmailVerified = signal(true);
	countries = [
		{
			id: 1,
			label: 'Australia',
			icon: 'AU.svg',
			timezone: 'UTC/GMT+10',
		},
		{
			id: 2,
			label: 'Switzerland',
			icon: 'CH.svg',
			timezone: 'UTC/GMT+1',
		},
		{
			id: 3,
			label: 'China',
			icon: 'CN.svg',
			timezone: 'UTC/GMT+8',
		},
		{
			id: 4,
			label: 'Japan',
			icon: 'JP.svg',
			timezone: 'UTC/GMT+9',
		},
		{
			id: 5,
			label: 'Korea',
			icon: 'KR.svg',
			timezone: 'UTC/GMT+9',
		},
		{
			id: 6,
			label: 'United States',
			icon: 'US.svg',
			timezone: 'UTC/GMT-5',
		},
		{
			id: 7,
			label: 'Vietnam',
			icon: 'VN.svg',
			timezone: 'UTC/GMT+7',
		},
	];

	formGroup = new FormGroup({
		firstName: new FormControl('Mathilde'),
		lastName: new FormControl('Lewis'),
		email: new FormControl('mathilde@simui.dev'),
		userName: new FormControl('mathilde.lewis842'),
		country: new FormControl(this.countries[0]),
	});
}`;
