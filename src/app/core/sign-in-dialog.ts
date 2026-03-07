import { Component, computed, input, signal, viewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogContent, HlmDialogDescription, HlmDialogHeader } from '@spartan-ng/helm/dialog';
import { HlmSeparator, HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { GoogleSigninButtonComponent } from './google-signin-button.component';

@Component({
	selector: 'sim-sign-in-dialog',
	providers: [provideIcons({ lucidePlus })],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		RouterLink,
		HlmDialog,
		HlmDialogContent,
		HlmDialogHeader,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmButton,
		HlmDialogDescription,
		GoogleSigninButtonComponent,
		HlmSeparator,
		HlmSeparatorImports,
	],
	template: `
		<hlm-dialog (stateChanged)="onDialogStateChange($event)">
			@if (!hideButton()) {
				<button id="login-button" brnDialogTrigger hlmBtn variant="default" size="sm">Sign up</button>
			}
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
				*brnDialogContent="let ctx">
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
						<h2 class="mb-0 text-center text-lg font-semibold">{{ dialogTitle() }}</h2>
						<p hlmDialogDescription class="text-center">{{ dialogDescription() }}</p>
					</hlm-dialog-header>
					<div class="mt-4 flex w-full flex-col gap-4">
						<app-google-signin-button [buttonLabel]="buttonLabel()" />
						<hlm-separator class="my-2" />
						<div class="bg-muted border-input flex h-8 w-full rounded-md border">
							<button
								class="dark:data-[state=active]:bg-input data-[state=active]:border-input dark:data-[state=active]:text-foreground dark:text-muted-foreground data-[state=active]:bg-background focus-visible:border-ring focus-visible:outline-ring focus-visible:ring-ring/50 text-foreground -my-px -ml-px inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0 [&_ng-icon:not([class*='text-'])]:text-base"
								[attr.data-state]="mode() === 'signIn' ? 'active' : 'inactive'"
								(click)="mode.set('signIn')">
								Sign in
							</button>
							<button
								class="dark:data-[state=active]:bg-input data-[state=active]:border-input dark:data-[state=active]:text-foreground dark:text-muted-foreground data-[state=active]:bg-background focus-visible:border-ring focus-visible:outline-ring focus-visible:ring-ring/50 text-foreground -my-px -mr-px inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0 [&_ng-icon:not([class*='text-'])]:text-base"
								[attr.data-state]="mode() === 'signUp' ? 'active' : 'inactive'"
								(click)="mode.set('signUp')">
								Sign up
							</button>
						</div>
						<span class="text-muted-foreground text-center text-xs">
							@if (mode() === 'signUp') {
								By signing up you agree to our
								<a routerLink="/terms-and-conditions" class="hover:text-primary underline">Terms & Conditions</a>
								and
								<a routerLink="/privacy-policy" class="hover:text-primary underline">Privacy Policy</a>
							} @else {
								By signing in you accept our
								<a routerLink="/terms-and-conditions" class="hover:text-primary underline">Terms & Conditions</a>
								and
								<a routerLink="/privacy-policy" class="hover:text-primary underline">Privacy Policy</a>
							}
						</span>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class SignInDialogComponent {
	public readonly hideButton = input<boolean>(false);
	public readonly dialogRef = viewChild(BrnDialog);

	protected mode = signal<'signIn' | 'signUp'>('signUp');

	protected readonly dialogTitle = computed(() =>
		this.mode() === 'signIn' ? 'Sign in to SimUI' : 'Create your SimUI account',
	);
	protected readonly dialogDescription = computed(() =>
		this.mode() === 'signIn'
			? 'Welcome back! Sign in with your Google account to get started.'
			: 'Sign up with your Google account to get started.',
	);

	protected readonly buttonLabel = computed(() =>
		this.mode() === 'signIn' ? 'Sign in with Google' : 'Sign up with Google',
	);

	protected onDialogStateChange(state: 'open' | 'closed'): void {
		if (state === 'open') {
			this.mode.set('signUp');
		}
	}

	public open(): void {
		this.mode.set('signUp'); // Reset to default mode
		this.dialogRef()?.open();
	}
}
