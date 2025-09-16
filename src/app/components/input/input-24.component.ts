import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMic, lucideSearch } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSpinner } from '@spartan-ng/helm/spinner';
import { debounceTime } from 'rxjs';

@Component({
	selector: 'sim-input-24',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon, HlmSpinner, ReactiveFormsModule],
	providers: [provideIcons({ lucideSearch, lucideMic })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-24" class="mb-2 text-sm">Input with inline add-ons</label>
		<div class="relative" [formGroup]="form">
			<input
				hlmInput
				id="input-24"
				type="text"
				formControlName="searchField"
				placeholder="Search..."
				class="peer ps-9 pe-12" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
				@if (isSearching()) {
					<hlm-spinner class="size-4" />
				} @else {
					<ng-icon hlm name="lucideSearch" size="sm" />
				}
			</div>
			<button
				class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
				<ng-icon hlm size="sm" name="lucideMic" />
			</button>
		</div>
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

export const input24Code = `import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMic, lucideSearch } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSpinner } from '@spartan-ng/helm/spinner';
import { debounceTime } from 'rxjs';

@Component({
	selector: 'sim-input-24',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon, HlmSpinner, ReactiveFormsModule],
	providers: [provideIcons({ lucideSearch, lucideMic })],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-24" class="mb-2 text-sm">Input with inline add-ons</label>
		<div class="relative" [formGroup]="form">
			<input
				hlmInput
				id="input-24"
				type="text"
				formControlName="searchField"
				placeholder="Search..."
				class="peer ps-9 pe-12" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
				@if (isSearching()) {
					<hlm-spinner class="size-4" />
				} @else {
					<ng-icon hlm name="lucideSearch" size="sm" />
				}
			</div>
			<button
				class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
				<ng-icon hlm size="sm" name="lucideMic" />
			</button>
		</div>
	\`,
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
}`;
