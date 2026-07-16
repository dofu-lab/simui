import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeStorageService } from '@core/services/theme-storage.service';
import { PresetColorPreview } from '@features/theme-editor/preset-color-preview';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePencil, lucideSearch, lucideSwatchBook, lucideTrash } from '@ng-icons/lucide';
import { HistoryDatePipe } from '@shared/pipes/history-date.pipe';
import { ThemePreset } from '@shared/types';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { DeleteThemeDialog } from './delete-theme-dialog';

@Component({
	selector: 'sim-profile-themes-settings',
	imports: [
		DeleteThemeDialog,
		FormsModule,
		HistoryDatePipe,
		NgIcon,
		PresetColorPreview,
		HlmButtonImports,
		HlmCardImports,
		HlmEmptyImports,
		HlmIconImports,
		HlmInputGroupImports,
	],
	providers: [provideIcons({ lucidePencil, lucideSearch, lucideSwatchBook, lucideTrash })],
	host: {
		class: 'flex min-h-0 flex-1 flex-col gap-1',
	},
	template: `
		<div class="flex">
			<div hlmInputGroup class="max-w-[300px]">
				<input hlmInputGroupInput placeholder="Search your theme..." [(ngModel)]="searchTerm" />
				<div hlmInputGroupAddon><ng-icon name="lucideSearch" /></div>
			</div>
		</div>
		<div class="relative size-full overflow-y-auto rounded-md border">
			<div class="absolute grid w-full grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
				@for (theme of customThemes(); track theme.id) {
					<div
						hlmCard
						class="border-input hover:border-muted-foreground/30 flex flex-row justify-between gap-3 p-3 shadow-none">
						<div class="flex flex-col items-start justify-between">
							<p class="text-muted-foreground px-[3px] text-xs">{{ theme.createdAt ?? '' | historyDate }}</p>
							<sim-theme-color-preview [preset]="theme" />
						</div>
						<div class="flex flex-col items-end gap-1">
							<button hlmBtn variant="ghost" size="icon-sm" (click)="editTheme(theme)">
								<ng-icon hlm name="lucidePencil" size="sm" class="text-muted-foreground" />
							</button>
							<button
								hlmBtn
								variant="ghost"
								size="icon-sm"
								class="group hover:bg-destructive/5"
								(click)="deleteThemeDialog.open(theme)">
								<ng-icon hlm name="lucideTrash" size="sm" class="text-muted-foreground group-hover:text-destructive" />
							</button>
						</div>
					</div>
				}
			</div>
			@if (savedThemes().length === 0) {
				<div hlmEmpty class="size-full">
					<div hlmEmptyHeader>
						<div hlmEmptyMedia variant="icon"><ng-icon name="lucideSwatchBook" /></div>
						<div hlmEmptyTitle>No Themes Yet</div>
						<div hlmEmptyDescription>Create your first custom theme to personalize your experience.</div>
					</div>
					<div hlmEmptyContent>
						<button hlmBtn (click)="createTheme()">Add new theme</button>
					</div>
				</div>
			}
		</div>

		<sim-delete-theme-dialog #deleteThemeDialog />
	`,
})
export class ProfileThemesSettings {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly router = inject(Router);

	protected readonly deleteThemeDialog = viewChild.required(DeleteThemeDialog);
	protected readonly searchTerm = signal('');
	protected readonly themes = computed(() => this.themeStorageService.themePresets());
	protected readonly savedThemes = computed(() => this.themes().filter((theme) => theme.source === 'SAVED'));
	protected readonly customThemes = computed(() => {
		const searchTerm = this.searchTerm().toLowerCase().trim();

		return searchTerm
			? this.savedThemes().filter((theme) => theme.label?.toLowerCase().includes(searchTerm))
			: this.savedThemes();
	});

	protected editTheme(theme: ThemePreset): void {
		this.themeStorageService.selectTheme(theme);
		this.themeStorageService.enterEditMode(theme);
		this.router.navigate(['/theme-editor']);
	}

	protected createTheme(): void {
		this.router.navigate(['/theme-editor']);
	}
}
