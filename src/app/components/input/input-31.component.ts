import { Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-31',
	imports: [HlmLabel, FormsModule, HlmInputGroupImports],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-31" class="mb-2 text-sm">Input with character limit</label>
		<hlm-input-group>
			<input
				hlmInputGroupInput
				id="input-31"
				type="text"
				placeholder="Type somethings..."
				[maxLength]="maxLength"
				[ngModel]="value()"
				(ngModelChange)="value.set($event)" />
			<hlm-input-group-addon align="inline-end">
				{{ computedCharacterCount() }}
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input31Component {
	protected readonly maxLength = 50;
	protected readonly value = model('');
	protected readonly computedCharacterCount = computed(() => `${this.value().length}/${this.maxLength}`);
}
