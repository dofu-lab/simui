import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleX } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-21',
	imports: [HlmLabel, NgIcon, ReactiveFormsModule, HlmInputGroupImports],
	providers: [provideIcons({ lucideCircleX })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-21" class="mb-2 text-sm">Input with clear button</label>
		<hlm-input-group [formGroup]="form">
			<input hlmInputGroupInput id="input-21" formControlName="something" type="text" placeholder="Type something" />
			@if (!!this.form.get('something')?.value) {
				<hlm-input-group-addon align="inline-end">
					<button
						hlmInputGroupButton
						aria-label="Send"
						title="Send"
						size="icon-xs"
						variant="ghost"
						(click)="clearInput()">
						<ng-icon name="lucideCircleX" />
					</button>
				</hlm-input-group-addon>
			}
		</hlm-input-group>
	`,
})
export class Input21Component {
	public readonly form = new FormGroup({
		something: new FormControl('You can clear me!'),
	});

	public clearInput(): void {
		this.form.get('something')?.setValue('');
	}
}
