import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMic, lucideSearch } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { debounceTime } from 'rxjs';

@Component({
	selector: 'sim-input-24',
	imports: [NgIcon, ReactiveFormsModule, HlmLabelImports, HlmInputGroupImports],
	providers: [provideIcons({ lucideSearch, lucideMic })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-24" class="mb-2 text-sm">Input with inline add-ons</label>
		<hlm-input-group>
			<input hlmInputGroupInput placeholder="Search..." />
			<hlm-input-group-addon>
				<ng-icon name="lucideSearch" />
			</hlm-input-group-addon>
			<hlm-input-group-addon align="inline-end">
				<button hlmInputGroupButton aria-label="Send" title="Send" size="icon-xs" variant="ghost">
					<ng-icon name="lucideMic" />
				</button>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input24Component implements OnInit {
	public readonly form = new FormGroup({
		searchField: new FormControl(''),
	});
	public isSearching = signal(false);

	public ngOnInit(): void {
		this.form
			.get('searchField')
			?.valueChanges.pipe(debounceTime(300))
			.subscribe((value) => {
				this.isSearching.set(true);
				setTimeout(() => this.isSearching.set(false), 1500);
			});
	}
}
