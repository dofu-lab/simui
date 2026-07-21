import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeStorageService } from '@core/services/theme-storage.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTriangleAlert } from '@ng-icons/lucide';
import { ThemePreset } from '@shared/types';
import { toast } from '@spartan-ng/brain/sonner';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialog, HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-delete-theme-dialog',
	imports: [FormsModule, HlmButtonImports, HlmDialogImports, HlmIconImports, HlmInputImports, HlmLabelImports, NgIcon],
	providers: [provideIcons({ lucideTriangleAlert })],
	template: `
		<hlm-dialog #deleteDialog>
			<button #deleteDialogButton hlmDialogTrigger hlmBtn variant="outline" class="hidden">Delete Theme</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*hlmDialogPortal="let ctx">
				<div class="flex flex-col items-center gap-2">
					<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideTriangleAlert" size="sm" />
					</div>
					<hlm-dialog-header>
						<h2 class="text-center text-lg font-semibold">Delete Theme</h2>
						<p hlmDialogDescription class="text-center">
							This action cannot be undone. To confirm, please enter the theme name
							<span class="text-primary font-semibold">{{ theme()?.label }}</span>
							.
						</p>
					</hlm-dialog-header>

					<label for="delete-input" hlmLabel class="mt-2 w-full">Theme name</label>
					<input
						id="delete-input"
						hlmInput
						class="h-9 w-full"
						type="text"
						placeholder="Type theme name to confirm"
						[(ngModel)]="confirmationInput"
						[disabled]="isDeleting()" />
				</div>
				<hlm-dialog-footer class="flex-row gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" class="h-9 flex-1" (click)="cancel()" [disabled]="isDeleting()">
						Cancel
					</button>
					<button
						hlmBtn
						type="submit"
						variant="destructive"
						class="flex-1"
						[disabled]="!isConfirmed() || isDeleting()"
						(click)="confirm()">
						{{ isDeleting() ? 'Deleting...' : 'Delete' }}
					</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class DeleteThemeDialog {
	private readonly themeStorageService = inject(ThemeStorageService);

	private readonly deleteDialogButton = viewChild<ElementRef<HTMLButtonElement>>('deleteDialogButton');
	private readonly dialogRef = viewChild<HlmDialog>('deleteDialog');

	protected readonly theme = signal<ThemePreset | null>(null);
	protected readonly confirmationInput = signal('');
	protected readonly isDeleting = signal(false);
	protected readonly isConfirmed = computed(() => this.confirmationInput() === this.theme()?.label);

	public open(theme: ThemePreset): void {
		this.theme.set(theme);
		this.confirmationInput.set('');
		this.deleteDialogButton()?.nativeElement.click();
	}

	protected async confirm(): Promise<void> {
		const theme = this.theme();
		if (!theme) return;

		this.isDeleting.set(true);
		try {
			await this.themeStorageService.deleteTheme(theme);
			this.dialogRef()?.close({});
			toast('Theme deleted', { description: `"${theme.label}" has been permanently deleted.` });
			this.reset();
		} catch {
			toast('Failed to delete theme', { description: 'Something went wrong. Please try again.' });
		} finally {
			this.isDeleting.set(false);
		}
	}

	protected cancel(): void {
		this.dialogRef()?.close({});
		this.reset();
	}

	private reset(): void {
		this.theme.set(null);
		this.confirmationInput.set('');
	}
}
