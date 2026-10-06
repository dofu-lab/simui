import { Component, inject, viewChild } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';

@Component({
	selector: 'sim-sign-out-dialog',
	imports: [HlmButtonImports, HlmDialogImports],
	template: `
		<hlm-dialog>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*hlmDialogPortal="let ctx">
				<hlm-dialog-header>
					<h2 hlmDialogTitle class="text-lg font-semibold">Sign Out?</h2>
					<p hlmDialogDescription>Are you sure you want to sign out of your account?</p>
				</hlm-dialog-header>
				<hlm-dialog-footer class="gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" size="sm" (click)="close()">Cancel</button>
					<button hlmBtn variant="destructive" size="sm" (click)="confirmSignOut()">Okay</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class SignOutDialogComponent {
	protected readonly dialogRef = viewChild(HlmDialog);
	protected readonly authService = inject(AuthService);

	public open(): void {
		this.dialogRef()?.open();
	}

	protected close(): void {
		this.dialogRef()?.close({});
	}

	protected confirmSignOut(): void {
		this.close();
		this.authService.signOut();
	}
}
