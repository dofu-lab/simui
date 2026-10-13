import {
	Component,
	computed,
	DestroyRef,
	effect,
	inject,
	input,
	linkedSignal,
	OnInit,
	output,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ThemeStorageService } from '@core/services/theme-storage.service';
import { ThemeStyleProps } from '@shared/types';
import { getLabelForColor } from '@shared/utils/color-label.utils';
import { type ColorPickerFormat, formatColor, parseColor, SimColorPickerImports } from '@sim/color-picker';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
	selector: 'sim-editor-color-picker',
	imports: [
		SimColorPickerImports,
		HlmButtonImports,
		HlmInputImports,
		HlmLabelImports,
		HlmPopoverImports,
		ReactiveFormsModule,
	],
	host: {
		'[class.ring-2]': 'isHighlighted()',
		'[class.ring-primary]': 'isHighlighted()',
		'[class.rounded-md]': 'isHighlighted()',
	},
	template: `
		<div class="flex w-full flex-col items-start gap-2 p-1.5">
			<label hlmLabel class="text-xs font-medium" [for]="inputId">{{ label() }}</label>
			<div class="flex w-full items-center gap-2">
				<hlm-popover sideOffset="8" align="start">
					<button
						hlmBtn
						hlmPopoverTrigger
						type="button"
						variant="outline"
						size="icon-sm"
						class="size-8 shrink-0 p-0.5"
						[attr.aria-label]="'Edit ' + label() + ' color'">
						<span class="size-full rounded-sm border" [style.background]="pickerValue()"></span>
					</button>
					<div
						*hlmPopoverPortal="let ctx"
						class="max-h-[calc(100dvh-1rem)] w-auto max-w-[calc(100vw-1rem)] overflow-y-auto bg-transparent p-0 shadow-none ring-0">
						<sim-color-picker
							[value]="pickerValue()"
							[format]="pickerFormat()"
							(valueChange)="onPickerValueChange($event)"
							(formatChange)="onPickerFormatChange($event)">
							<sim-color-area />
							<sim-color-adjustment-controls />
							<sim-color-value-editor />
							<sim-color-presets />
						</sim-color-picker>
					</div>
				</hlm-popover>
				<input
					hlmInput
					type="text"
					class="h-8"
					[id]="inputId"
					[formControl]="colorInput"
					[attr.aria-invalid]="invalidText()" />
			</div>
		</div>
	`,
})
export class EditorColorPicker implements OnInit {
	private static nextId = 0;
	private readonly destroyRef = inject(DestroyRef);
	private readonly themeStorage = inject(ThemeStorageService);
	protected readonly inputId = `editor-color-picker-${EditorColorPicker.nextId++}`;

	readonly colorChange = output<string>();

	readonly colorKey = input<keyof ThemeStyleProps | null>(null);
	readonly highlightedColorKey = input<keyof ThemeStyleProps | null>(null);
	readonly currentColorStyles = input<ThemeStyleProps | null>(null);

	readonly isHighlighted = computed(() => this.colorKey() === this.highlightedColorKey());
	readonly color = computed(() => {
		const key = this.colorKey();
		const styles = this.currentColorStyles();
		return key && styles ? styles[key] : null;
	});
	readonly label = computed(() => getLabelForColor(this.colorKey() ?? undefined));

	protected readonly pickerValue = linkedSignal(() => this.color() ?? '#000000');
	protected readonly pickerFormat = linkedSignal<ColorPickerFormat>(() => this.themeStorage.colorType());
	protected readonly invalidText = signal(false);
	readonly colorInput = new FormControl('', { nonNullable: true });

	constructor() {
		effect(() => {
			this.colorInput.setValue(this.color() ?? '#000000', { emitEvent: false });
			this.invalidText.set(false);
		});
	}

	ngOnInit(): void {
		this.colorInput.valueChanges
			.pipe(debounceTime(100), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
			.subscribe((value) => {
				const parsed = parseColor(value);
				this.invalidText.set(!parsed);
				if (!parsed) return;

				this.pickerValue.set(value);
				if (!this.matchesCurrentColor(parsed)) this.colorChange.emit(value);
			});
	}

	protected onPickerValueChange(value: string): void {
		if (value === this.pickerValue()) return;
		this.pickerValue.set(value);
		this.invalidText.set(false);
		const parsed = parseColor(value);
		if (parsed && this.matchesCurrentColor(parsed)) {
			this.colorInput.setValue(value, { emitEvent: false });
			return;
		}
		this.colorInput.setValue(value);
	}

	protected onPickerFormatChange(format: ColorPickerFormat): void {
		if (format === this.pickerFormat()) return;
		this.pickerFormat.set(format);
		this.themeStorage.setColorType(format);
	}

	private matchesCurrentColor(value: NonNullable<ReturnType<typeof parseColor>>): boolean {
		const current = parseColor(this.color() ?? '');
		return current ? formatColor(value, 'hex') === formatColor(current, 'hex') : false;
	}
}
