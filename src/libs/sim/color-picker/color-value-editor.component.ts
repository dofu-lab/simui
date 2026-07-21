import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePercent } from '@ng-icons/lucide';
import { HlmButtonGroupImports } from '@spartan-ng/helm/button-group';
import { HlmField, HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmNativeSelectImports } from '@spartan-ng/helm/native-select';
import { hlm } from '@spartan-ng/helm/utils';
import { injectColorPicker } from './color-picker.token';
import type { ColorPickerFormat } from './type';
import { clamp, formatColor, parseColor } from './utils';

const COLOR_FORMATS: readonly ColorPickerFormat[] = ['hex', 'rgb', 'hsl', 'oklch'];

@Component({
	selector: 'sim-color-value-editor',
	imports: [NgIcon, HlmButtonGroupImports, HlmFieldImports, HlmInputGroupImports, HlmNativeSelectImports],
	providers: [provideIcons({ lucidePercent })],
	hostDirectives: [HlmField],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'data-slot': 'color-value-editor',
		class: 'grid gap-1.5',
	},
	template: `
		@if (showValue()) {
			<label hlmFieldLabel [for]="valueInputId">Color value</label>
		}
		@if (showFormat() || showValue() || showOpacity()) {
			<div [class]="editorGridClass()">
				@if (showFormat()) {
					<hlm-native-select
						size="sm"
						aria-label="Color format"
						[value]="picker.format()"
						(valueChange)="setFormat($event)">
						@for (option of formats; track option) {
							<option [value]="option">{{ option.toUpperCase() }}</option>
						}
					</hlm-native-select>
				}
				@if (showValue() || showOpacity()) {
					<div hlmButtonGroup [class]="inputGridClass()">
						@if (showValue()) {
							<hlm-input-group class="h-8 min-w-0">
								<hlm-input-group-addon align="inline-start">
									<div aria-hidden="true" class="size-4 rounded-full" [style.background]="previewColor()"></div>
								</hlm-input-group-addon>
								<input
									hlmInputGroupInput
									class="h-8"
									[id]="valueInputId"
									[value]="picker.draft()"
									[attr.aria-invalid]="picker.invalidDraft()"
									[attr.aria-describedby]="picker.invalidDraft() ? errorId : null"
									(input)="setDraft($event)"
									(blur)="commitDraft()"
									(keydown.enter)="commitDraft($event)" />
							</hlm-input-group>
						}
						@if (showOpacity()) {
							<hlm-input-group class="h-8 min-w-0">
								<input
									hlmInputGroupInput
									type="number"
									min="0"
									max="100"
									step="1"
									aria-label="Opacity percentage"
									class="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
									[value]="Math.round(picker.state().a * 100)"
									(change)="setOpacity($event)" />
								<hlm-input-group-addon align="inline-end">
									<ng-icon name="lucidePercent" aria-hidden="true" />
								</hlm-input-group-addon>
							</hlm-input-group>
						}
					</div>
				}
			</div>
		}
		@if (showValue() && picker.invalidDraft()) {
			<hlm-field-error [id]="errorId" forceShow>Enter a valid CSS color.</hlm-field-error>
		}
	`,
})
export class ColorValueEditorComponent {
	private static nextId = 0;

	/** Whether to show the color-format selector. */
	public readonly showFormat = input(true, { transform: booleanAttribute });
	/** Whether to show the editable color-value input. */
	public readonly showValue = input(true, { transform: booleanAttribute });
	/** Whether to show the opacity percentage input. */
	public readonly showOpacity = input(true, { transform: booleanAttribute });

	protected readonly Math = Math;
	protected readonly picker = injectColorPicker();
	protected readonly formats = COLOR_FORMATS;
	protected readonly previewColor = computed(() => formatColor(this.picker.state(), 'rgb'));
	protected readonly valueInputId = `sim-color-picker-value-${ColorValueEditorComponent.nextId++}`;
	protected readonly errorId = `${this.valueInputId}-error`;
	protected readonly editorGridClass = computed(() =>
		hlm(
			'grid min-w-0 gap-2',
			this.showFormat() && (this.showValue() || this.showOpacity()) ? 'grid-cols-[5rem_minmax(0,1fr)]' : 'grid-cols-1',
		),
	);
	protected readonly inputGridClass = computed(() =>
		hlm(
			'grid w-full min-w-0',
			this.showValue() && this.showOpacity() ? 'grid-cols-[minmax(0,65fr)_minmax(0,35fr)]' : 'grid-cols-1',
		),
	);

	protected setDraft(event: Event): void {
		this.picker.draft.set((event.target as HTMLInputElement).value);
	}

	protected commitDraft(event?: Event): void {
		event?.preventDefault();
		const parsed = parseColor(this.picker.draft(), this.picker.state().h);
		if (parsed) this.picker.commit(parsed);
	}

	protected setFormat(value: string | null | undefined): void {
		if (!this.formats.includes(value as ColorPickerFormat)) return;
		this.picker.format.set(value as ColorPickerFormat);
		this.picker.commit(this.picker.state());
	}

	protected setOpacity(event: Event): void {
		const input = event.target as HTMLInputElement;
		const rawValue = input.value.trim();
		if (rawValue === '') return;

		const opacity = Number(rawValue);
		if (!Number.isFinite(opacity)) return;
		const normalizedOpacity = Math.round(clamp(opacity, 0, 100));
		this.picker.commit({ ...this.picker.state(), a: normalizedOpacity / 100 });
		input.value = normalizedOpacity.toString();
	}
}
