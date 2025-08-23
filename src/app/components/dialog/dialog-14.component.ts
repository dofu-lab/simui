import { Component, inject, viewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent, HlmDialogDescription, HlmDialogHeader } from '@spartan-ng/helm/dialog';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-dialog-14',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		HlmDialog,
		HlmDialogContent,
		HlmDialogHeader,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmDialogDescription,
		HlmLabel,
		HlmInput,
		HlmButton,
	],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Sign Up</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
				*brnDialogContent="let ctx">
				<form [formGroup]="form" (submit)="closeDialog()">
					<div class="flex flex-col items-center gap-1">
						<div class="flex shrink-0 items-center justify-center rounded-full border p-2">
							<svg width="36" height="36" viewBox="0 0 36 36" class="fill-primary" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_380_1629)">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.47059 9C3.79241 9 0 12.7722 0 17.4255C0 22.0788 3.79241 25.8511 8.47059 25.8511H27.5294C32.2076 25.8511 36 22.0788 36 17.4255C36 12.7722 32.2076 9 27.5294 9H8.47059ZM4.23529 17.4255C4.23529 15.0989 6.1315 13.2128 8.47059 13.2128H27.5294C29.8685 13.2128 31.7647 15.0989 31.7647 17.4255C31.7647 19.7521 29.8685 21.6383 27.5294 21.6383H8.47059C6.1315 21.6383 4.23529 19.7521 4.23529 17.4255ZM6.35294 17.4255C6.35294 16.2622 7.30104 15.3191 8.47059 15.3191H27.1444C28.3139 15.3191 29.2621 16.2622 29.2621 17.4255C29.2621 18.5889 28.3139 19.5319 27.1444 19.5319H8.47059C7.30104 19.5319 6.35294 18.5889 6.35294 17.4255Z"
										fill="currentColor" />
								</g>
								<defs>
									<clipPath id="clip0_380_1629">
										<rect width="36" height="16.8511" fill="white" transform="translate(0 9)" />
									</clipPath>
								</defs>
							</svg>
						</div>

						<hlm-dialog-header>
							<h2 class="mb-0 text-center text-lg font-semibold">Sign up SimUI</h2>
							<p hlmDialogDescription>We just need a few details to get you started.</p>
						</hlm-dialog-header>
						<div class="mt-4 flex w-full flex-col gap-4">
							<label hlmLabel class="flex flex-col items-start gap-2">
								Full Name
								<input
									hlmInput
									formControlName="fullName"
									class="h-9 w-full"
									type="text"
									placeholder="Phuong Tran"
									autocomplete="username" />
							</label>
							<label hlmLabel class="flex flex-col items-start gap-2">
								Email
								<input
									hlmInput
									formControlName="email"
									class="h-9 w-full"
									type="email"
									placeholder="phuongtran@simui.com"
									autocomplete="email" />
							</label>
							<label hlmLabel class="flex flex-col items-start gap-2">
								Password
								<input
									hlmInput
									formControlName="password"
									class="h-9 w-full"
									type="password"
									autocomplete="new-password"
									placeholder="Enter your password" />
							</label>
							<button hlmBtn class="w-full" size="sm" type="submit">Sign Up</button>
							<div
								class="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
								<span class="text-muted-foreground text-xs">Or</span>
							</div>
							<button hlmBtn variant="outline" size="sm" class="flex gap-3">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_317_967)">
										<path
											d="M15.8442 8.18417C15.8442 7.64035 15.8001 7.09359 15.706 6.55859H8.16016V9.63925H12.4813C12.302 10.6328 11.7258 11.5117 10.8822 12.0703V14.0692H13.4602C14.9741 12.6758 15.8442 10.6181 15.8442 8.18417Z"
											fill="#4285F4" />
										<path
											d="M8.15974 16.0007C10.3174 16.0007 12.137 15.2923 13.4627 14.0694L10.8847 12.0705C10.1675 12.5585 9.2415 12.8348 8.16268 12.8348C6.0756 12.8348 4.30598 11.4268 3.67104 9.53369H1.01074V11.5943C2.36882 14.2958 5.13494 16.0007 8.15974 16.0007V16.0007Z"
											fill="#34A853" />
										<path
											d="M3.66852 9.53331C3.33341 8.53974 3.33341 7.46387 3.66852 6.4703V4.40967H1.01116C-0.123511 6.67019 -0.123511 9.33342 1.01116 11.5939L3.66852 9.53331V9.53331Z"
											fill="#FBBC04" />
										<path
											d="M8.15974 3.16644C9.30029 3.1488 10.4026 3.57798 11.2286 4.36578L13.5127 2.08174C12.0664 0.72367 10.1469 -0.0229773 8.15974 0.000539111C5.13494 0.000539111 2.36882 1.70548 1.01074 4.40987L3.6681 6.4705C4.3001 4.57449 6.07266 3.16644 8.15974 3.16644V3.16644Z"
											fill="#EA4335" />
									</g>
									<defs>
										<clipPath id="clip0_317_967">
											<rect width="16" height="16" fill="white" />
										</clipPath>
									</defs>
								</svg>
								Sign Up with Google
							</button>
							<span class="text-muted-foreground text-center text-xs">
								By signing up you agree to our
								<a href="#" class="hover:text-primary underline">Terms & Condition</a>
							</span>
						</div>
					</div>
				</form>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog14Component {
	public dialogRef = viewChild(BrnDialog);
	private _formBuilder = inject(FormBuilder);

	public form = this._formBuilder.group({
		fullName: ['', Validators.required],
		email: ['', Validators.compose([Validators.required, Validators.email])],
		password: ['', Validators.required],
	});

	closeDialog() {
		this.form.updateValueAndValidity();
		if (this.form.valid) {
			this.dialogRef()?.close({});
		}
	}
}

export const dialog14Code = `import { Component, inject, viewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent, HlmDialogDescription, HlmDialogHeader } from '@spartan-ng/helm/dialog';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-dialog-14',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		HlmDialog,
		HlmDialogContent,
		HlmDialogHeader,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmDialogDescription,
		HlmLabel,
		HlmInput,
		HlmButton,
	],
	template: \`
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Sign Up</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
				*brnDialogContent="let ctx">
				<form [formGroup]="form" (submit)="closeDialog()">
					<div class="flex flex-col items-center gap-1">
						<div class="flex shrink-0 items-center justify-center rounded-full border p-2">
							<svg width="36" height="36" viewBox="0 0 36 36" class="fill-primary" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_380_1629)">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.47059 9C3.79241 9 0 12.7722 0 17.4255C0 22.0788 3.79241 25.8511 8.47059 25.8511H27.5294C32.2076 25.8511 36 22.0788 36 17.4255C36 12.7722 32.2076 9 27.5294 9H8.47059ZM4.23529 17.4255C4.23529 15.0989 6.1315 13.2128 8.47059 13.2128H27.5294C29.8685 13.2128 31.7647 15.0989 31.7647 17.4255C31.7647 19.7521 29.8685 21.6383 27.5294 21.6383H8.47059C6.1315 21.6383 4.23529 19.7521 4.23529 17.4255ZM6.35294 17.4255C6.35294 16.2622 7.30104 15.3191 8.47059 15.3191H27.1444C28.3139 15.3191 29.2621 16.2622 29.2621 17.4255C29.2621 18.5889 28.3139 19.5319 27.1444 19.5319H8.47059C7.30104 19.5319 6.35294 18.5889 6.35294 17.4255Z"
										fill="currentColor" />
								</g>
								<defs>
									<clipPath id="clip0_380_1629">
										<rect width="36" height="16.8511" fill="white" transform="translate(0 9)" />
									</clipPath>
								</defs>
							</svg>
						</div>

						<hlm-dialog-header>
							<h2 class="mb-0 text-center text-lg font-semibold">Sign up SimUI</h2>
							<p hlmDialogDescription>We just need a few details to get you started.</p>
						</hlm-dialog-header>
						<div class="mt-4 flex w-full flex-col gap-4">
							<label hlmLabel class="flex flex-col items-start gap-2">
								Full Name
								<input
									hlmInput
									formControlName="fullName"
									class="h-9 w-full"
									type="text"
									placeholder="Phuong Tran"
									autocomplete="username" />
							</label>
							<label hlmLabel class="flex flex-col items-start gap-2">
								Email
								<input
									hlmInput
									formControlName="email"
									class="h-9 w-full"
									type="email"
									placeholder="phuongtran@simui.com"
									autocomplete="email" />
							</label>
							<label hlmLabel class="flex flex-col items-start gap-2">
								Password
								<input
									hlmInput
									formControlName="password"
									class="h-9 w-full"
									type="password"
									autocomplete="new-password"
									placeholder="Enter your password" />
							</label>
							<button hlmBtn class="w-full" size="sm" type="submit">Sign Up</button>
							<div
								class="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
								<span class="text-muted-foreground text-xs">Or</span>
							</div>
							<button hlmBtn variant="outline" size="sm" class="flex gap-3">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_317_967)">
										<path
											d="M15.8442 8.18417C15.8442 7.64035 15.8001 7.09359 15.706 6.55859H8.16016V9.63925H12.4813C12.302 10.6328 11.7258 11.5117 10.8822 12.0703V14.0692H13.4602C14.9741 12.6758 15.8442 10.6181 15.8442 8.18417Z"
											fill="#4285F4" />
										<path
											d="M8.15974 16.0007C10.3174 16.0007 12.137 15.2923 13.4627 14.0694L10.8847 12.0705C10.1675 12.5585 9.2415 12.8348 8.16268 12.8348C6.0756 12.8348 4.30598 11.4268 3.67104 9.53369H1.01074V11.5943C2.36882 14.2958 5.13494 16.0007 8.15974 16.0007V16.0007Z"
											fill="#34A853" />
										<path
											d="M3.66852 9.53331C3.33341 8.53974 3.33341 7.46387 3.66852 6.4703V4.40967H1.01116C-0.123511 6.67019 -0.123511 9.33342 1.01116 11.5939L3.66852 9.53331V9.53331Z"
											fill="#FBBC04" />
										<path
											d="M8.15974 3.16644C9.30029 3.1488 10.4026 3.57798 11.2286 4.36578L13.5127 2.08174C12.0664 0.72367 10.1469 -0.0229773 8.15974 0.000539111C5.13494 0.000539111 2.36882 1.70548 1.01074 4.40987L3.6681 6.4705C4.3001 4.57449 6.07266 3.16644 8.15974 3.16644V3.16644Z"
											fill="#EA4335" />
									</g>
									<defs>
										<clipPath id="clip0_317_967">
											<rect width="16" height="16" fill="white" />
										</clipPath>
									</defs>
								</svg>
								Sign Up with Google
							</button>
							<span class="text-muted-foreground text-center text-xs">
								By signing up you agree to our
								<a href="#" class="hover:text-primary underline">Terms & Condition</a>
							</span>
						</div>
					</div>
				</form>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog14Component {
	public dialogRef = viewChild(BrnDialog);
	private _formBuilder = inject(FormBuilder);

	public form = this._formBuilder.group({
		fullName: ['', Validators.required],
		email: ['', Validators.compose([Validators.required, Validators.email])],
		password: ['', Validators.required],
	});

	closeDialog() {
		this.form.updateValueAndValidity();
		if (this.form.valid) {
			this.dialogRef()?.close({});
		}
	}
}`;
