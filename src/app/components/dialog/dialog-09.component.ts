import { HlmIconDirective } from '@/libs/ui/ui-icon-helm/src';
import { HlmInputDirective } from '@/libs/ui/ui-input-helm/src';
import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideMail } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';

@Component({
	selector: 'sim-dialog-09',
	providers: [provideIcons({ lucideCircleAlert, lucideMail })],
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmInputDirective,
		FormsModule,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmDialogDescriptionDirective,
	],
	template: `
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Newsletter</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col items-center gap-2">
					<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideCircleAlert" size="sm" />
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
	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}

export const dialog09Code = `
import { HlmIconDirective } from '@/libs/ui/ui-icon-helm/src';
import { HlmInputDirective } from '@/libs/ui/ui-input-helm/src';
import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleAlert, lucideMail } from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
	HlmDialogComponent,
	HlmDialogContentComponent,
	HlmDialogDescriptionDirective,
	HlmDialogFooterComponent,
	HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';

@Component({
	selector: 'sim-dialog-09',
	providers: [provideIcons({ lucideCircleAlert, lucideMail })],
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmInputDirective,
		FormsModule,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		HlmDialogFooterComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmDialogDescriptionDirective,
	],
	template: \`
		<hlm-dialog>
			<button id="dialog-01-button" brnDialogTrigger hlmBtn variant="outline">Newsletter</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-[400px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px] sm:min-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col items-center gap-2">
					<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideCircleAlert" size="sm" />
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
	public dialogRef = viewChild(BrnDialogComponent);

	closeDialog() {
		this.dialogRef()?.close({});
	}
}
`;
