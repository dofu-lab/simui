import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleX } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'app-input-21',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon, ReactiveFormsModule],
	providers: [provideIcons({ lucideCircleX })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-21" class="mb-2 text-sm">Input with clear button</label>
		<div class="relative" [formGroup]="form">
			<input
				hlmInput
				id="input-21"
				formControlName="something"
				type="text"
				placeholder="Type something"
				class="peer pe-9" />
			@if (!!this.form.get('something')?.value) {
				<button
					class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
					(click)="clearInput()">
					<ng-icon hlm size="sm" name="lucideCircleX" />
				</button>
			}
		</div>
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

export const input21Code = ``;
