import { Component, inject, viewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent, HlmDialogDescription, HlmDialogHeader } from '@spartan-ng/helm/dialog';
import { HlmInput } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-dialog-16',
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
		HlmInput,
		HlmButton,
	],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Create account</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
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
							<h2 class="mb-0 text-center text-lg font-semibold">Create an account</h2>
							<p hlmDialogDescription>Start your free 30-day trial. Cancel anytime.</p>
						</hlm-dialog-header>
						<div class="mt-4 flex w-full flex-col gap-4">
							<input
								hlmInput
								formControlName="email"
								class="h-9 w-full"
								type="email"
								placeholder="Enter your email"
								autocomplete="email" />

							<button hlmBtn class="w-full" size="sm" type="submit">Get started</button>
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
								Sign up with Google
							</button>
							<button hlmBtn variant="outline" size="sm" class="flex gap-3">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_317_966)">
										<path
											d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
											fill="#1877F2" />
										<path
											d="M11.1141 10.3125L11.4688 8H9.25V6.5C9.25 5.86734 9.56 5.25 10.5538 5.25H11.5625V3.28125C11.5625 3.28125 10.647 3.125 9.77172 3.125C7.94438 3.125 6.75 4.2325 6.75 6.2375V8H4.71875V10.3125H6.75V15.9028C7.5783 16.0324 8.4217 16.0324 9.25 15.9028V10.3125H11.1141Z"
											fill="white" />
									</g>
									<defs>
										<clipPath id="clip0_317_966">
											<rect width="16" height="16" fill="white" />
										</clipPath>
									</defs>
								</svg>
								Sign up with Facebook
							</button>
							<button hlmBtn variant="outline" size="sm" class="flex gap-3">
								<svg width="16" height="16" viewBox="0 0 16 16" class="fill-primary" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13.8954 11.4298C13.6736 11.9422 13.411 12.4139 13.1068 12.8475C12.6922 13.4387 12.3527 13.8479 12.0911 14.0751C11.6855 14.4481 11.2509 14.6392 10.7856 14.65C10.4515 14.65 10.0487 14.555 9.57971 14.3621C9.10922 14.1702 8.67684 14.0751 8.28148 14.0751C7.86685 14.0751 7.42215 14.1702 6.9465 14.3621C6.47012 14.555 6.08635 14.6554 5.79294 14.6654C5.34671 14.6844 4.90192 14.488 4.45795 14.0751C4.17459 13.828 3.82015 13.4043 3.39556 12.8041C2.94 12.1631 2.56547 11.4198 2.27206 10.5724C1.95782 9.65716 1.80029 8.77085 1.80029 7.91279C1.80029 6.92988 2.01268 6.08214 2.43809 5.37173C2.77243 4.80111 3.21721 4.35098 3.77389 4.02054C4.33057 3.6901 4.93207 3.52171 5.57983 3.51093C5.93426 3.51093 6.39905 3.62057 6.97665 3.83603C7.55261 4.05222 7.92243 4.16186 8.08458 4.16186C8.2058 4.16186 8.61663 4.03366 9.3131 3.77809C9.97172 3.54108 10.5276 3.44294 10.983 3.4816C12.2169 3.58119 13.144 4.06761 13.7605 4.94397C12.6569 5.61264 12.111 6.54919 12.1219 7.75065C12.1318 8.68648 12.4713 9.46524 13.1385 10.0836C13.4409 10.3706 13.7786 10.5924 14.1543 10.7499C14.0728 10.9862 13.9868 11.2125 13.8954 11.4298V11.4298ZM11.0653 0.293417C11.0653 1.02692 10.7974 1.71179 10.2632 2.34569C9.61864 3.09928 8.83898 3.53474 7.9935 3.46603C7.98273 3.37803 7.97648 3.28542 7.97648 3.18809C7.97648 2.48393 8.28302 1.73034 8.82739 1.11418C9.09917 0.802208 9.44482 0.542806 9.86398 0.335876C10.2822 0.132034 10.6779 0.0193044 11.05 0C11.0608 0.0980576 11.0653 0.196121 11.0653 0.293407V0.293417Z"
										fill="currentColor" />
								</svg>
								Sign up with Apple
							</button>
							<button hlmBtn variant="outline" size="sm" class="flex gap-3">
								<svg width="16" height="16" viewBox="0 0 16 16" class="fill-primary" xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M10.5112 15L6.97974 9.96643L2.55881 15H0.688477L6.14995 8.78342L0.688477 1H5.49044L8.8188 5.7441L12.9891 1H14.8594L9.65137 6.92867L15.3132 15H10.5112ZM12.594 13.5809H11.3348L3.36652 2.41909H4.62587L7.81725 6.88837L8.36912 7.66391L12.594 13.5809Z"
										fill="currentColor" />
								</svg>
								Sign up with X
							</button>
						</div>
					</div>
				</form>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog16Component {
	public dialogRef = viewChild(BrnDialog);
	private _formBuilder = inject(FormBuilder);

	public form = this._formBuilder.group({
		email: ['', Validators.compose([Validators.required, Validators.email])],
	});

	closeDialog() {
		this.form.updateValueAndValidity();
		if (this.form.valid) {
			this.dialogRef()?.close({});
		}
	}
}

export const dialog16Code = `import { Component, inject, viewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent, HlmDialogDescription, HlmDialogHeader } from '@spartan-ng/helm/dialog';
import { HlmInput } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-dialog-16',
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
		HlmInput,
		HlmButton,
	],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Create account</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
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
							<h2 class="mb-0 text-center text-lg font-semibold">Create an account</h2>
							<p hlmDialogDescription>Start your free 30-day trial. Cancel anytime.</p>
						</hlm-dialog-header>
						<div class="mt-4 flex w-full flex-col gap-4">
							<input
								hlmInput
								formControlName="email"
								class="h-9 w-full"
								type="email"
								placeholder="Enter your email"
								autocomplete="email" />

							<button hlmBtn class="w-full" size="sm" type="submit">Get started</button>
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
								Sign up with Google
							</button>
							<button hlmBtn variant="outline" size="sm" class="flex gap-3">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_317_966)">
										<path
											d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
											fill="#1877F2" />
										<path
											d="M11.1141 10.3125L11.4688 8H9.25V6.5C9.25 5.86734 9.56 5.25 10.5538 5.25H11.5625V3.28125C11.5625 3.28125 10.647 3.125 9.77172 3.125C7.94438 3.125 6.75 4.2325 6.75 6.2375V8H4.71875V10.3125H6.75V15.9028C7.5783 16.0324 8.4217 16.0324 9.25 15.9028V10.3125H11.1141Z"
											fill="white" />
									</g>
									<defs>
										<clipPath id="clip0_317_966">
											<rect width="16" height="16" fill="white" />
										</clipPath>
									</defs>
								</svg>
								Sign up with Facebook
							</button>
							<button hlmBtn variant="outline" size="sm" class="flex gap-3">
								<svg width="16" height="16" viewBox="0 0 16 16" class="fill-primary" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13.8954 11.4298C13.6736 11.9422 13.411 12.4139 13.1068 12.8475C12.6922 13.4387 12.3527 13.8479 12.0911 14.0751C11.6855 14.4481 11.2509 14.6392 10.7856 14.65C10.4515 14.65 10.0487 14.555 9.57971 14.3621C9.10922 14.1702 8.67684 14.0751 8.28148 14.0751C7.86685 14.0751 7.42215 14.1702 6.9465 14.3621C6.47012 14.555 6.08635 14.6554 5.79294 14.6654C5.34671 14.6844 4.90192 14.488 4.45795 14.0751C4.17459 13.828 3.82015 13.4043 3.39556 12.8041C2.94 12.1631 2.56547 11.4198 2.27206 10.5724C1.95782 9.65716 1.80029 8.77085 1.80029 7.91279C1.80029 6.92988 2.01268 6.08214 2.43809 5.37173C2.77243 4.80111 3.21721 4.35098 3.77389 4.02054C4.33057 3.6901 4.93207 3.52171 5.57983 3.51093C5.93426 3.51093 6.39905 3.62057 6.97665 3.83603C7.55261 4.05222 7.92243 4.16186 8.08458 4.16186C8.2058 4.16186 8.61663 4.03366 9.3131 3.77809C9.97172 3.54108 10.5276 3.44294 10.983 3.4816C12.2169 3.58119 13.144 4.06761 13.7605 4.94397C12.6569 5.61264 12.111 6.54919 12.1219 7.75065C12.1318 8.68648 12.4713 9.46524 13.1385 10.0836C13.4409 10.3706 13.7786 10.5924 14.1543 10.7499C14.0728 10.9862 13.9868 11.2125 13.8954 11.4298V11.4298ZM11.0653 0.293417C11.0653 1.02692 10.7974 1.71179 10.2632 2.34569C9.61864 3.09928 8.83898 3.53474 7.9935 3.46603C7.98273 3.37803 7.97648 3.28542 7.97648 3.18809C7.97648 2.48393 8.28302 1.73034 8.82739 1.11418C9.09917 0.802208 9.44482 0.542806 9.86398 0.335876C10.2822 0.132034 10.6779 0.0193044 11.05 0C11.0608 0.0980576 11.0653 0.196121 11.0653 0.293407V0.293417Z"
										fill="currentColor" />
								</svg>
								Sign up with Apple
							</button>
							<button hlmBtn variant="outline" size="sm" class="flex gap-3">
								<svg width="16" height="16" viewBox="0 0 16 16" class="fill-primary" xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M10.5112 15L6.97974 9.96643L2.55881 15H0.688477L6.14995 8.78342L0.688477 1H5.49044L8.8188 5.7441L12.9891 1H14.8594L9.65137 6.92867L15.3132 15H10.5112ZM12.594 13.5809H11.3348L3.36652 2.41909H4.62587L7.81725 6.88837L8.36912 7.66391L12.594 13.5809Z"
										fill="currentColor" />
								</svg>
								Sign up with X
							</button>
						</div>
					</div>
				</form>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog16Component {
	public dialogRef = viewChild(BrnDialog);
	private _formBuilder = inject(FormBuilder);

	public form = this._formBuilder.group({
		email: ['', Validators.compose([Validators.required, Validators.email])],
	});

	closeDialog() {
		this.form.updateValueAndValidity();
		if (this.form.valid) {
			this.dialogRef()?.close({});
		}
	}
}`;
