import { Component, inject, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLogOut } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmDropdownMenuItem } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'sim-sign-out-dialog',
	imports: [HlmDialogImports, HlmButton, BrnDialogTrigger, BrnDialogContent, HlmDropdownMenuItem, HlmIcon, NgIcon],
	providers: [
		provideIcons({
			lucideLogOut,
		}),
	],
	template: `
		<hlm-dialog>
			<button
				id="sign-out-button"
				variant="destructive"
				class="hover:bg-destructive/10 dark:hover:bg-destructive/40"
				hlmDropdownMenuItem
				brnDialogTrigger>
				<ng-icon hlm name="lucideLogOut" size="sm" />
				<span>Logout</span>
			</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h2 class="text-lg font-semibold">Sign Out?</h2>
					<p hlmDialogDescription>Are you sure you want to sign out of your account?</p>
				</hlm-dialog-header>
				<hlm-dialog-footer class="gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" size="sm" (click)="closeDialog()">Cancel</button>
					<button hlmBtn variant="destructive" size="sm" (click)="closeDialog()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class SignOutDialogComponent {
	public readonly dialogRef = viewChild(BrnDialog);
	public readonly authService = inject(AuthService);

	protected closeDialog() {
		this.authService.signOut();
		this.dialogRef()?.close({});
	}
}
