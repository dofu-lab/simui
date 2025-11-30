import { Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-31',
	imports: [HlmLabel, HlmInput, FormsModule],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-31" class="mb-2 text-sm">Input with character limit</label>
		<div class="relative">
			<input
				hlmInput
				id="input-31"
				type="text"
				placeholder="Type somethings..."
				class="peer pe-12"
				[maxLength]="maxLength"
				[ngModel]="value()"
				(ngModelChange)="value.set($event)" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-xs peer-disabled:opacity-50">
				{{ computedCharacterCount() }}
			</div>
		</div>
	`,
})
export class Input31Component {
	readonly maxLength = 50;
	readonly value = model('');
	readonly computedCharacterCount = computed(() => `${this.value().length}/${this.maxLength}`);
}