import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideMail } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import {
	HlmDialog,
	HlmDialogContent,
	HlmDialogDescription,
	HlmDialogFooter,
	HlmDialogHeader,
} from '@spartan-ng/helm/dialog';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-dialog-09',
	providers: [provideIcons({ lucideCircleAlert, lucideMail })],
	imports: [
		NgIcon,
		HlmIcon,
		HlmInput,
		FormsModule,
		HlmDialog,
		HlmDialogContent,
		HlmDialogHeader,
		HlmDialogFooter,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmDialogDescription,
	],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Newsletter</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col items-center gap-2">
					<div class="flex size-9 shrink-0 items-center justify-center">
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
						<h2 class="mb-0 text-center text-lg font-semibold">Never miss an update</h2>
						<p hlmDialogDescription class="text-center">Subscribe to receive news and special offers.</p>
					</hlm-dialog-header>
					<div class="w-full *:not-first:mt-2">
						<div class="relative">
							<input hlmInput class="peer mt-4 h-9 w-full ps-9" type="email" placeholder="your-email@simui.dev" />
							<div
								class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
								<ng-icon hlm name="lucideMail" size="sm" />
							</div>
						</div>
					</div>
				</div>
				<hlm-dialog-footer class="flex-row gap-3 sm:space-x-0">
					<button hlmBtn type="submit" class="h-9 flex-1" (click)="closeDialog()">Subscribe</button>
				</hlm-dialog-footer>
				<p class="text-muted-foreground text-center text-xs">
					By subscribing you agree to our
					<a class="underline hover:no-underline" href="#">Privacy Policy</a>
					.
				</p>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog09Component {
	public dialogRef = viewChild(BrnDialog);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}

export const dialog09Code = `import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideMail } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import {
	HlmDialog,
	HlmDialogContent,
	HlmDialogDescription,
	HlmDialogFooter,
	HlmDialogHeader,
} from '@spartan-ng/helm/dialog';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-dialog-09',
	providers: [provideIcons({ lucideCircleAlert, lucideMail })],
	imports: [
		NgIcon,
		HlmIcon,
		HlmInput,
		FormsModule,
		HlmDialog,
		HlmDialogContent,
		HlmDialogHeader,
		HlmDialogFooter,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmDialogDescription,
	],
	template: \`
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Newsletter</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col items-center gap-2">
					<div class="flex size-9 shrink-0 items-center justify-center">
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
						<h2 class="mb-0 text-center text-lg font-semibold">Never miss an update</h2>
						<p hlmDialogDescription class="text-center">Subscribe to receive news and special offers.</p>
					</hlm-dialog-header>
					<div class="w-full *:not-first:mt-2">
						<div class="relative">
							<input hlmInput class="peer mt-4 h-9 w-full ps-9" type="email" placeholder="your-email@simui.dev" />
							<div
								class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
								<ng-icon hlm name="lucideMail" size="sm" />
							</div>
						</div>
					</div>
				</div>
				<hlm-dialog-footer class="flex-row gap-3 sm:space-x-0">
					<button hlmBtn type="submit" class="h-9 flex-1" (click)="closeDialog()">Subscribe</button>
				</hlm-dialog-footer>
				<p class="text-muted-foreground text-center text-xs">
					By subscribing you agree to our
					<a class="underline hover:no-underline" href="#">Privacy Policy</a>
					.
				</p>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog09Component {
	public dialogRef = viewChild(BrnDialog);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}`;
