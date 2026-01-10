import { Component, DestroyRef, effect, inject, input, OnInit, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { debounceTime, distinctUntilChanged, merge } from 'rxjs';

@Component({
	selector: 'sim-editor-color-picker',
	imports: [HlmInput, HlmLabel, ReactiveFormsModule],
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

	readonly color = input<string>();
	readonly label = input.required<string>();
	readonly colorChange = output<string>();

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
