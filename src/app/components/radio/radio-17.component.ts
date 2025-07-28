import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-17',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective, FormsModule],
	template: `
		<div class="flex flex-1 flex-col gap-2">
			<label hlmLabel class="flex-1">How do you feel?</label>
			<div class="flex-1">
				<hlm-radio-group
					class="group mt-2 flex gap-1 rounded-md"
					[ngModel]="rating()"
					(ngModelChange)="rating.set($event)">
					@for (item of items; track item) {
						<label
							class="hover:bg-accent/80 border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
							hlmLabel>
							{{ item.label }}
							<hlm-radio class="hidden space-x-0" [value]="item.value" />
						</label>
					}
				</hlm-radio-group>
			</div>
		</div>
	`,
})
export class Radio17Component {
	rating = signal(3);
	items: { id: number; value: number; label: string }[] = [
		{ id: 1, value: 1, label: '😠' },
		{ id: 2, value: 2, label: '😐' },
		{ id: 3, value: 3, label: '😃' },
		{ id: 4, value: 4, label: '😍' },
		{ id: 5, value: 5, label: '🤩' },
	];
}

export const radio17Code = `import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmRadioComponent, HlmRadioGroupComponent } from '@spartan-ng/helm/radio-group';

@Component({
	selector: 'sim-radio-17',
	imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmLabelDirective, FormsModule],
	template: \`
		<div class="flex flex-1 flex-col gap-2">
			<label hlmLabel class="flex-1">How do you feel?</label>
			<div class="flex-1">
				<hlm-radio-group
					class="group mt-2 flex gap-1 rounded-md"
					[ngModel]="rating()"
					(ngModelChange)="rating.set($event)">
					@for (item of items; track item) {
						<label
							class="hover:bg-accent/80 border-input has-data-[checked=true]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-[disabled=true]:cursor-not-allowed has-data-[disabled=true]:opacity-50"
							hlmLabel>
							{{ item.label }}
							<hlm-radio class="hidden space-x-0" [value]="item.value" />
						</label>
					}
				</hlm-radio-group>
			</div>
		</div>
	\`,
})
export class Radio17Component {
	rating = signal(3);
	items: { id: number; value: number; label: string }[] = [
		{ id: 1, value: 1, label: '😠' },
		{ id: 2, value: 2, label: '😐' },
		{ id: 3, value: 3, label: '😃' },
		{ id: 4, value: 4, label: '😍' },
		{ id: 5, value: 5, label: '🤩' },
	];
}`;
