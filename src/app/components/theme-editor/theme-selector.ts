import { ThemeStorageService } from '@/app/core/services/theme-storage.service';
import { ThemePreset } from '@/app/types';
import { Component, computed, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideChevronDown, lucideSearch } from '@ng-icons/lucide';
import { BrnPopoverImports } from '@spartan-ng/brain/popover';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { SelectorColorPreview } from './selector-color-preview';

@Component({
	selector: 'app-theme-selector',
	imports: [
		HlmButton,
		NgIcon,
		HlmIcon,
		HlmSeparator,
		SelectorColorPreview,
		HlmInputGroupImports,
		HlmPopoverImports,
		BrnPopoverImports,
	],
	providers: [provideIcons({ lucideChevronDown, lucideSearch, lucideCheck })],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-popover sideOffset="5" align="start">
			<button hlmPopoverTrigger hlmBtn variant="outline" class="w-full max-w-100 justify-between border">
				<span class="flex-1 truncate text-left">{{ currentPreset().label ?? 'Select a theme' }}</span>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
			<div hlmPopoverContent class="grid w-80 p-0" *brnPopoverContent="let ctx">
				<div class="p-1">
					<div hlmInputGroup>
						<input
							hlmInputGroupInput
							placeholder="Search..."
							[value]="searchQuery()"
							(input)="onSearch($event)"
							(click)="$event.stopPropagation()" />
						<div hlmInputGroupAddon>
							<ng-icon name="lucideSearch" />
						</div>
					</div>
				</div>
				<hlm-separator />

				<div class="grid h-fit max-h-100 gap-1 overflow-y-auto p-1">
					@if (filteredSavedPresets().length > 0) {
						<span class="text-muted-foreground px-2 pt-2 text-xs">My Themes</span>
						@for (preset of filteredSavedPresets(); track $index) {
							<button
								class="hover:bg-accent h-9 w-full rounded-md px-2 text-left text-base"
								(click)="onPresetSelect(preset)"
								(keydown)="$event.stopPropagation()">
								<span class="flex items-center justify-between gap-2 text-sm">
									<sim-selector-color-preview [preset]="preset" />
									<span class="flex-1 truncate text-left">{{ preset.label }}</span>
									@if (preset.id === currentPreset().id) {
										<ng-icon hlm name="lucideCheck" size="sm" />
									}
								</span>
							</button>
						}
						<hlm-separator />
					}

					@if (filteredBuildInPresets().length > 0) {
						<span class="text-muted-foreground px-2 pt-2 text-xs">Built-in Themes</span>
					}
					@for (preset of filteredBuildInPresets(); track $index) {
						<button
							class="hover:bg-accent h-9 w-full rounded-md px-2 text-left text-base"
							(click)="onPresetSelect(preset)"
							(keydown)="$event.stopPropagation()">
							<span class="flex items-center justify-between gap-2 text-sm">
								<sim-selector-color-preview [preset]="preset" />
								<span class="flex-1 truncate text-left">
									{{ preset.label }}
								</span>
								@if (preset.id === currentPreset().id) {
									<ng-icon hlm name="lucideCheck" size="sm" />
								}
							</span>
						</button>
					} @empty {
						<div class="text-muted-foreground h-20 items-center px-2 py-1.5 text-center text-sm">No themes found.</div>
					}
				</div>
			</div>
		</hlm-popover>
	`,
})
export class ThemeSelector {
	private readonly themeStorageService = inject(ThemeStorageService);

	protected readonly themes = this.themeStorageService.themePresets;
	protected readonly currentPreset = this.themeStorageService.currentTheme;

	protected searchQuery = signal('');

	protected filteredPresets = computed(() => {
		const query = this.searchQuery().toLowerCase();
		const result = this.themes().filter((preset) => preset?.label?.toLowerCase().includes(query));
		return result;
	});

	protected filteredSavedPresets = computed(() => this.filteredPresets().filter((preset) => preset.source === 'SAVED'));
	protected filteredBuildInPresets = computed(() =>
		this.filteredPresets().filter((preset) => preset.source === 'BUILT_IN'),
	);

	protected onSearch(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.searchQuery.set(input.value);
	}

	protected onPresetSelect(preset: ThemePreset) {
		if (preset.id !== this.currentPreset()?.id) {
			this.themeStorageService.selectTheme(preset);
		}
	}
}
