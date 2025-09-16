import { Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-32',
	imports: [HlmLabel, HlmInput, FormsModule],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-32" class="mb-2 text-sm">Input with characters left</label>
		<input
			hlmInput
			id="input-32"
			type="text"
			placeholder="Type somethings..."
			class="peer pe-12"
			[maxLength]="maxLength"
			[ngModel]="value()"
			(ngModelChange)="value.set($event)" />
		<p class="text-muted-foreground mt-2 text-xs">
			{{ computedCharacterCount() }}
		</p>
	`,
})
export class Input32Component {
	readonly maxLength = 10;
	readonly value = model('');
	readonly computedCharacterCount = computed(() => `${this.maxLength - this.value().length} characters left`);
}

export const input32Code = `import { Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-32',
	imports: [HlmLabel, HlmInput, FormsModule],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-32" class="mb-2 text-sm">Input with characters left</label>
		<input
			hlmInput
			id="input-32"
			type="text"
			placeholder="Type somethings..."
			class="peer pe-12"
			[maxLength]="maxLength"
			[ngModel]="value()"
			(ngModelChange)="value.set($event)" />
		<p class="text-muted-foreground mt-2 text-xs">
			{{ computedCharacterCount() }}
		</p>
	\`,
})
export class Input32Component {
	readonly maxLength = 10;
	readonly value = model('');
	readonly computedCharacterCount = computed(() => \`${this.maxLength - this.value().length} characters left\`);
}`;
