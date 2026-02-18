import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePencil, lucideSearch, lucideSwatchBook, lucideTrash, lucideTriangleAlert } from '@ng-icons/lucide';
import { BrnDialog, BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';
import { PresetColorPreview } from '../components/theme-editor/preset-color-preview';
import { ThemeStorageService } from '../core/services/theme-storage.service';
import { HistoryDatePipe } from '../pipes/history-date.pipe';
import { ThemePreset } from '../types';

@Component({
	selector: 'sim-profile-settings',
	imports: [
		HlmButton,
		NgIcon,
		HlmIcon,
		HlmCardImports,
		PresetColorPreview,
		HlmInputGroupImports,
		FormsModule,
		HistoryDatePipe,
		HlmEmptyImports,
		HlmDialogImports,
		BrnDialogTrigger,
		BrnDialogContent,
		HlmInput,
		HlmLabel,
	],
	providers: [provideIcons({ lucideSwatchBook, lucidePencil, lucideSearch, lucideTrash, lucideTriangleAlert })],
	host: {
		class: 'flex flex-1 size-full py-2',
	},
	template: `
		<div class="min-h-0 grow grid-cols-[250px_auto] overflow-hidden md:grid">
			<div class="flex h-full flex-col gap-2 rounded-xl p-4">
				<button
					hlmBtn
					variant="ghost"
					class="data-[state=active]:bg-accent justify-start"
					[attr.data-state]="activeTab() === 'themes' ? 'active' : 'inactive'">
					<ng-icon hlmIcon name="lucideSwatchBook" size="sm" />
					Themes
				</button>
			</div>
			<div class="flex flex-col gap-2 pt-4">
				<div class="flex justify-end">
					<div hlmInputGroup class="max-w-[300px]">
						<input hlmInputGroupInput placeholder="Search your theme..." [(ngModel)]="searchTerm" />
						<div hlmInputGroupAddon>
							<ng-icon name="lucideSearch" />
						</div>
					</div>
				</div>
				<div class="relative size-full overflow-y-auto rounded-xl border">
					<div class="absolute grid w-full grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
						@for (theme of customThemes(); track theme.id) {
							<div
								hlmCard
								class="border-input hover:border-muted-foreground/30 flex flex-row justify-between gap-3 p-3 shadow-none">
								<div class="flex flex-col items-start justify-between">
									<p class="text-muted-foreground px-[3px] text-xs">
										{{ theme.createdAt ?? '' | historyDate }}
									</p>
									<sim-theme-color-preview [preset]="theme" />
								</div>
								<div class="flex flex-col items-end gap-1">
									<button hlmBtn variant="ghost" size="icon-sm" (click)="onEditTheme(theme)">
										<ng-icon hlm name="lucidePencil" size="sm" class="text-muted-foreground" />
									</button>
									<button
										hlmBtn
										variant="ghost"
										size="icon-sm"
										class="group hover:bg-destructive/5"
										(click)="onDeleteTheme(theme)">
										<ng-icon
											hlm
											name="lucideTrash"
											size="sm"
											class="text-muted-foreground group-hover:text-destructive" />
									</button>
								</div>
							</div>
						}
					</div>
					@if (themes().length === 0) {
						<div hlmEmpty class="size-full">
							<div hlmEmptyHeader>
								<div hlmEmptyMedia variant="icon">
									<ng-icon name="lucideSwatchBook" />
								</div>
								<div hlmEmptyTitle>No Themes Yet</div>
								<div hlmEmptyDescription>Create your first custom theme to personalize your experience.</div>
							</div>
							<div hlmEmptyContent>
								<button hlmBtn variant="outline" (click)="onCreateTheme()">Create Theme</button>
							</div>
						</div>
					}
				</div>
			</div>
		</div>

		<hlm-dialog #deleteDialog>
			<button id="delete-dialog-button" #deleteDialogButton brnDialogTrigger hlmBtn variant="outline" class="hidden">
				Delete Theme
			</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 max-h-[calc(100vh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg sm:max-h-[min(640px,80vh)] sm:max-w-[400px]"
				*brnDialogContent="let ctx">
				<div class="flex flex-col items-center gap-2">
					<div class="flex size-9 shrink-0 items-center justify-center rounded-full border">
						<ng-icon hlm name="lucideTriangleAlert" size="sm"></ng-icon>
					</div>
					<hlm-dialog-header>
						<h2 class="text-center text-lg font-semibold">Delete Theme</h2>
						<p hlmDialogDescription class="text-center">
							This action cannot be undone. To confirm, please enter the theme name
							<span class="text-primary font-semibold">{{ themeToDelete()?.label }}</span>
							.
						</p>
					</hlm-dialog-header>

					<label hlmLabel class="mt-2 w-full">Theme name</label>
					<input
						hlmInput
						class="h-9 w-full"
						type="text"
						placeholder="Type theme name to confirm"
						[(ngModel)]="deleteConfirmInput"
						[disabled]="isDeleting()" />
				</div>
				<hlm-dialog-footer class="flex-row gap-3 sm:space-x-0">
					<button hlmBtn variant="outline" class="h-9 flex-1" (click)="cancelDelete()" [disabled]="isDeleting()">
						Cancel
					</button>
					<button
						hlmBtn
						type="submit"
						variant="destructive"
						class="flex-1"
						[disabled]="!isDeleteConfirmed() || isDeleting()"
						(click)="confirmDelete()">
						{{ isDeleting() ? 'Deleting...' : 'Delete' }}
					</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class ProfileSettingsComponent {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly router = inject(Router);

	protected readonly searchTerm = signal<string>('');
	protected readonly activeTab = signal<'themes' | 'account'>('themes');
	protected readonly themeToDelete = signal<ThemePreset | null>(null);
	protected readonly deleteConfirmInput = signal<string>('');
	protected readonly isDeleting = signal<boolean>(false);

	protected readonly deleteDialogButton = viewChild<ElementRef<HTMLButtonElement>>('deleteDialogButton');
	protected readonly dialogRef = viewChild<BrnDialog>('deleteDialog');

	protected readonly themes = computed(() => this.themeStorageService.themePresets());
	protected readonly isDeleteConfirmed = computed(() => this.deleteConfirmInput() === this.themeToDelete()?.label);
	protected readonly customThemes = computed(() => {
		const searchTerm = this.searchTerm().toLowerCase().trim();
		const savedThemes = this.themes().filter((theme) => theme.source === 'SAVED');

		if (!searchTerm) {
			return savedThemes;
		}

		return savedThemes.filter((theme) => theme.label?.toLowerCase().includes(searchTerm));
	});

	protected onEditTheme(theme: ThemePreset): void {
		this.themeStorageService.selectTheme(theme);
		this.themeStorageService.enterEditMode(theme);
		this.router.navigate(['/theme-editor']);
	}

	protected onCreateTheme(): void {
		this.router.navigate(['/theme-editor']);
	}

	protected onDeleteTheme(theme: ThemePreset): void {
		this.themeToDelete.set(theme);
		this.deleteConfirmInput.set('');
		this.deleteDialogButton()?.nativeElement.click();
	}

	protected async confirmDelete(): Promise<void> {
		const theme = this.themeToDelete();
		if (!theme) return;

		this.isDeleting.set(true);
		try {
			await this.themeStorageService.deleteTheme(theme);
			this.dialogRef()?.close({});
			this.themeToDelete.set(null);
			this.deleteConfirmInput.set('');
		} catch (error) {
			console.error('Failed to delete theme:', error);
		} finally {
			this.isDeleting.set(false);
		}
	}

	protected cancelDelete(): void {
		this.dialogRef()?.close({});
		this.themeToDelete.set(null);
		this.deleteConfirmInput.set('');
	}
}
