import { getLabelForColor } from '@/app/core/utils';
import { ThemeStyleProps } from '@/app/types';
import { Component, computed, DestroyRef, effect, inject, input, OnInit, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { debounceTime, distinctUntilChanged, merge } from 'rxjs';

@Component({
	selector: 'sim-editor-color-picker',
	imports: [HlmInput, HlmLabel, ReactiveFormsModule],
	host: {
		'[class.ring-2]': 'isHighlighted()',
		'[class.ring-primary]': 'isHighlighted()',
		'[class.rounded-md]': 'isHighlighted()',
	},
	template: `
		<div class="flex w-full flex-col items-start gap-2 p-1.5">
			<label hlmLabel class="text-xs font-medium">{{ label() }}</label>
			<div class="flex w-full items-center gap-2">
				<div
					[style.backgroundColor]="colorPicker.value"
					class="relative flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded border">
					<input
						type="color"
						class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
						[formControl]="colorPicker" />
				</div>
				<input hlmInput type="text" class="h-8" [formControl]="colorInput" />
			</div>
		</div>
	`,
})
export class EditorColorPicker implements OnInit {
	private readonly destroyRef = inject(DestroyRef);

	readonly colorChange = output<string>();

	readonly colorKey = input<keyof ThemeStyleProps | null>(null);
	readonly highlightedColorKey = input<keyof ThemeStyleProps | null>(null);
	readonly currentColorStyles = input<ThemeStyleProps | null>(null);

	readonly isHighlighted = computed(() => this.colorKey() === this.highlightedColorKey());
	readonly color = computed(() => {
		const key = this.colorKey();
		const styles = this.currentColorStyles();
		if (key && styles) {
			return styles[key];
		}
		return null;
	});
	readonly label = computed(() => getLabelForColor(this.colorKey() ?? undefined));

	readonly colorInput = new FormControl('', { nonNullable: true });
	readonly colorPicker = new FormControl('', { nonNullable: true });

	constructor() {
		effect(() => {
			const value = this.color();
			this.colorInput.setValue(value ?? '#000000', { emitEvent: false });
			this.colorPicker.setValue(value ?? '#000000', { emitEvent: false });
		});
	}

	ngOnInit(): void {
		this.setupValueChanges();
	}

	private setupValueChanges(): void {
		// Sync colorInput -> colorPicker
		this.colorInput.valueChanges
			.pipe(debounceTime(100), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
			.subscribe((value) => {
				this.colorPicker.setValue(value, { emitEvent: false });
			});

		// Sync colorPicker -> colorInput
		this.colorPicker.valueChanges
			.pipe(debounceTime(100), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
			.subscribe((value) => {
				this.colorInput.setValue(value, { emitEvent: false });
			});

		// Emit changes from either control
		merge(this.colorInput.valueChanges.pipe(debounceTime(100)), this.colorPicker.valueChanges.pipe(debounceTime(100)))
			.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
			.subscribe((value) => {
				this.colorChange.emit(value);
			});
	}
}
