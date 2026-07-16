import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';
import { injectColorPicker } from './color-picker.token';
import type { ColorPickerPreset } from './type';
import { colorsEqual, parseColor } from './utils';

export type ColorPalette = readonly (readonly ColorPickerPreset[])[];

/** The 17-by-11 palette from the SimUI color-palette design. */
export const COLOR_PICKER_DEFAULT_PALETTE: ColorPalette = [
	[
		'#F7FEE7',
		'#F0FDF4',
		'#ECFDF5',
		'#F0FDFA',
		'#ECFEFF',
		'#F0F9FF',
		'#EFF6FF',
		'#EEF2FF',
		'#F5F3FF',
		'#FAF5FF',
		'#FDF4FF',
		'#FDF2F8',
		'#FFF1F2',
		'#FEF2F2',
		'#FFF7ED',
		'#FFFBEB',
		'#FEFCE8',
	],
	[
		'#ECFCCB',
		'#DCFCE7',
		'#D1FAE5',
		'#CCFBF1',
		'#CFFAFE',
		'#E0F2FE',
		'#DBEAFE',
		'#E0E7FF',
		'#EDE9FE',
		'#F3E8FF',
		'#FAE8FF',
		'#FCE7F3',
		'#FFE4E6',
		'#FEE2E2',
		'#FFEDD5',
		'#FEF3C7',
		'#FEF9C3',
	],
	[
		'#D9F99D',
		'#BBF7D0',
		'#A7F3D0',
		'#99F6E4',
		'#A5F3FC',
		'#BAE6FD',
		'#BFDBFE',
		'#C7D2FE',
		'#DDD6FE',
		'#E9D5FF',
		'#F5D0FE',
		'#FBCFE8',
		'#FECDD3',
		'#FECACA',
		'#FED7AA',
		'#FDE68A',
		'#FEF08A',
	],
	[
		'#BEF264',
		'#86EFAC',
		'#6EE7B7',
		'#5EEAD4',
		'#67E8F9',
		'#7DD3FC',
		'#93C5FD',
		'#A5B4FC',
		'#C4B5FD',
		'#D8B4FE',
		'#F0ABFC',
		'#F9A8D4',
		'#FDA4AF',
		'#FCA5A5',
		'#FDBA74',
		'#FCD34D',
		'#FDE047',
	],
	[
		'#A3E635',
		'#4ADE80',
		'#34D399',
		'#2DD4BF',
		'#22D3EE',
		'#38BDF8',
		'#60A5FA',
		'#818CF8',
		'#A78BFA',
		'#C084FC',
		'#E879F9',
		'#F472B6',
		'#FB7185',
		'#F87171',
		'#FB923C',
		'#FBBF24',
		'#FACC15',
	],
	[
		'#84CC16',
		'#22C55E',
		'#10B981',
		'#14B8A6',
		'#06B6D4',
		'#0EA5E9',
		'#3B82F6',
		'#6366F1',
		'#8B5CF6',
		'#A855F7',
		'#D946EF',
		'#EC4899',
		'#F43F5E',
		'#EF4444',
		'#F97316',
		'#F59E0B',
		'#EAB308',
	],
	[
		'#65A30D',
		'#16A34A',
		'#059669',
		'#0D9488',
		'#0891B2',
		'#0284C7',
		'#2563EB',
		'#4F46E5',
		'#7C3AED',
		'#9333EA',
		'#C026D3',
		'#DB2777',
		'#E11D48',
		'#DC2626',
		'#EA580C',
		'#D97706',
		'#CA8A04',
	],
	[
		'#4D7C0F',
		'#15803D',
		'#047857',
		'#0F766E',
		'#0E7490',
		'#0369A1',
		'#1D4ED8',
		'#4338CA',
		'#6D28D9',
		'#7E22CE',
		'#A21CAF',
		'#BE185D',
		'#BE123C',
		'#B91C1C',
		'#C2410C',
		'#B45309',
		'#A16207',
	],
	[
		'#3F6212',
		'#166534',
		'#065F46',
		'#115E59',
		'#155E75',
		'#075985',
		'#1E40AF',
		'#3730A3',
		'#5B21B6',
		'#6B21A8',
		'#86198F',
		'#9D174D',
		'#9F1239',
		'#991B1B',
		'#9A3412',
		'#92400E',
		'#854D0E',
	],
	[
		'#365314',
		'#14532D',
		'#064E3B',
		'#134E4A',
		'#164E63',
		'#0C4A6E',
		'#1E3A8A',
		'#312E81',
		'#4C1D95',
		'#581C87',
		'#701A75',
		'#831843',
		'#881337',
		'#7F1D1D',
		'#7C2D12',
		'#78350F',
		'#713F12',
	],
	[
		'#1A2E05',
		'#052E16',
		'#022C22',
		'#042F2E',
		'#083344',
		'#082F49',
		'#172554',
		'#1E1B4B',
		'#2E1065',
		'#3B0764',
		'#4A044E',
		'#500724',
		'#4C0519',
		'#450A0A',
		'#431407',
		'#451A03',
		'#422006',
	],
] as const;

@Component({
	selector: 'sim-color-palette',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'data-slot': 'color-palette',
		role: 'grid',
		'[attr.aria-label]': 'ariaLabel()',
		'[attr.aria-rowcount]': 'colors().length',
		'[attr.aria-colcount]': 'columnCount()',
		'[style.--palette-columns]': 'columnCount()',
		'[style.--palette-rows]': 'colors().length',
		'[style.aspect-ratio]': 'paletteAspectRatio()',
	},
	template: `
		@for (row of colors(); track $index; let rowIndex = $index) {
			<div role="row" class="grid grid-cols-[repeat(var(--palette-columns),minmax(0,1fr))]">
				@for (color of row; track $index; let columnIndex = $index) {
					<button
						type="button"
						role="gridcell"
						data-slot="color-palette-swatch"
						class="ring-ring relative min-w-0 cursor-pointer outline-none after:pointer-events-none after:absolute after:inset-0 after:border-[3px] after:border-transparent focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset aria-selected:after:border-white"
						[style.backgroundColor]="color"
						[attr.aria-label]="'Select ' + color"
						[attr.aria-selected]="isSelected(rowIndex, columnIndex)"
						[attr.aria-rowindex]="rowIndex + 1"
						[attr.aria-colindex]="columnIndex + 1"
						[tabIndex]="tabIndex(rowIndex, columnIndex)"
						(click)="select(color)"
						(keydown)="onKeydown($event, rowIndex, columnIndex)"></button>
				}
			</div>
		}
	`,
})
export class ColorPaletteComponent {
	/** Palette rows to render. All rows should contain the same number of colors. */
	public readonly colors = input<ColorPalette>(COLOR_PICKER_DEFAULT_PALETTE);
	/** Accessible name announced for the palette grid. */
	public readonly ariaLabel = input('Color palette');

	protected readonly picker = injectColorPicker();
	protected readonly columnCount = computed(() => this.colors()[0]?.length ?? 0);
	protected readonly paletteAspectRatio = computed(() => `${this.columnCount()} / ${this.colors().length}`);
	private readonly selectedIndex = computed(() => {
		const current = this.picker.state();
		return this.colors()
			.flat()
			.findIndex((color) => {
				const parsed = parseColor(color, current.h);
				return parsed ? colorsEqual({ ...parsed, a: current.a }, current, 0.5) : false;
			});
	});

	constructor() {
		classes(
			() =>
				'border-border grid w-full grid-rows-[repeat(var(--palette-rows),minmax(0,1fr))] overflow-hidden rounded-lg border',
		);
	}

	protected select(color: ColorPickerPreset): void {
		const parsed = parseColor(color, this.picker.state().h);
		if (parsed) this.picker.commit({ ...parsed, a: this.picker.state().a });
	}

	protected isSelected(rowIndex: number, columnIndex: number): boolean {
		return rowIndex * this.columnCount() + columnIndex === this.selectedIndex();
	}

	protected tabIndex(rowIndex: number, columnIndex: number): 0 | -1 {
		const index = rowIndex * this.columnCount() + columnIndex;
		return index === Math.max(this.selectedIndex(), 0) ? 0 : -1;
	}

	protected onKeydown(event: KeyboardEvent, rowIndex: number, columnIndex: number): void {
		const rows = this.colors().length;
		const columns = this.columnCount();
		let nextRow = rowIndex;
		let nextColumn = columnIndex;

		switch (event.key) {
			case 'ArrowLeft':
				nextColumn = Math.max(0, columnIndex - 1);
				break;
			case 'ArrowRight':
				nextColumn = Math.min(columns - 1, columnIndex + 1);
				break;
			case 'ArrowUp':
				nextRow = Math.max(0, rowIndex - 1);
				break;
			case 'ArrowDown':
				nextRow = Math.min(rows - 1, rowIndex + 1);
				break;
			case 'Home':
				nextRow = event.ctrlKey ? 0 : rowIndex;
				nextColumn = 0;
				break;
			case 'End':
				nextRow = event.ctrlKey ? rows - 1 : rowIndex;
				nextColumn = columns - 1;
				break;
			default:
				return;
		}

		event.preventDefault();
		const color = this.colors()[nextRow]?.[nextColumn];
		if (!color) return;
		this.select(color);
		const swatches = (event.currentTarget as HTMLElement)
			.closest('[data-slot="color-palette"]')
			?.querySelectorAll<HTMLElement>('[data-slot="color-palette-swatch"]');
		swatches?.[nextRow * columns + nextColumn]?.focus();
	}
}
