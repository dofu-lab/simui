import { ThemeStorageService } from '@/app/core/services/theme-storage.service';
import { ColorType, ColorTypeItem } from '@/app/types';
import { Component, computed, inject, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

const COLOR_TYPES: ColorTypeItem[] = [
	{ label: 'HEX', value: 'hex' },
	{ label: 'HSL', value: 'hsl' },
	{ label: 'RGB', value: 'rgb' },
	{ label: 'OKLCH', value: 'oklch' },
] as const;

@Component({
	selector: 'sim-color-type',
	imports: [HlmDropdownMenuImports, HlmButtonImports, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideChevronDown })],
	template: `
		<button hlmBtn variant="outline" [hlmDropdownMenuTrigger]="menu">
			{{ selectedColorTypeLabel() }}
			<ng-icon hlm size="sm" name="lucideChevronDown" />
		</button>

		<ng-template #menu>
			<hlm-dropdown-menu class="w-56">
				<hlm-dropdown-menu-group>
					@for (color of colorTypes; track color.value) {
						<button
							hlmDropdownMenuCheckbox
							[checked]="selectedColorType() === color.value"
							(triggered)="onSelectColorType(color.value)">
							<hlm-dropdown-menu-checkbox-indicator />
							<span>{{ color.label }}</span>
						</button>
					}
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class ColorTypeSelector {
	private readonly themeStorage = inject(ThemeStorageService);

	public readonly select = output<ColorType>();

	protected readonly selectedColorType = computed(() => this.themeStorage.colorType());
	protected readonly selectedColorTypeLabel = computed(() => {
		return this.colorTypes.find((color) => color.value === this.selectedColorType())?.label;
	});
	protected readonly colorTypes = COLOR_TYPES;

	public onSelectColorType(colorType: ColorType): void {
		this.themeStorage.setColorType(colorType);
		this.select.emit(colorType);
	}
}
