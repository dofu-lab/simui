import { HlmIcon } from '@/libs/ui/ui-icon-helm/src';
import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

type TagItem = {
	id: number;
	value: string;
};

@Component({
	selector: 'sim-input-54',
	imports: [HlmLabel, HlmInput, FormsModule, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideX })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-54" class="mb-2 text-sm">Simple input</label>
		<input
			hlmInput
			id="input-54"
			type="text"
			placeholder="Add a tags"
			[ngModel]="value()"
			(keydown.enter)="addTag()"
			(ngModelChange)="value.set($event)" />
		<div class="flex w-full flex-row flex-wrap gap-1 py-2">
			@for (tag of tags(); track tag.id) {
				<span
					class="text-secondary-foreground animate-fadeIn bg-background border-input hover:bg-background relative inline-flex h-7 cursor-default items-center rounded-md border border-solid ps-2 pe-7 pl-2 text-xs font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50">
					{{ tag.value }}
					<button
						class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground/80 hover:text-foreground absolute -inset-y-px -end-px flex size-7 items-center justify-center rounded-md rounded-s-none rounded-e-md p-0 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-transparent focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
						(click)="removeTag(tag.id)">
						<ng-icon hlm name="lucideX" size="sm" />
					</button>
				</span>
			}
		</div>
	`,
})
export class Input54Component {
	readonly value = model('');
	readonly tags = signal<TagItem[]>([
		{
			id: 1,
			value: 'Sport',
		},
		{ id: 2, value: 'Music' },
		{ id: 3, value: 'Movies' },
	]);

	addTag(): void {
		const currentTags = this.tags();
		const isValueExist = currentTags.some((tag) => tag.value.toLowerCase() === this.value().toLowerCase());
		if (!isValueExist) {
			const newTag: TagItem = { id: currentTags.length + 1, value: this.value() };
			this.tags.set([...currentTags, newTag]);
		}
		this.value.set('');
	}

	removeTag(id: number): void {
		this.tags.set(this.tags().filter((tag) => tag.id !== id));
	}
}

export const input54Code = `import { HlmIcon } from '@/libs/ui/ui-icon-helm/src';
import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

type TagItem = {
	id: number;
	value: string;
};

@Component({
	selector: 'sim-input-54',
	imports: [HlmLabel, HlmInput, FormsModule, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideX })],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-54" class="mb-2 text-sm">Simple input</label>
		<input
			hlmInput
			id="input-54"
			type="text"
			placeholder="Add a tags"
			[ngModel]="value()"
			(keydown.enter)="addTag()"
			(ngModelChange)="value.set($event)" />
		<div class="flex w-full flex-row flex-wrap gap-1 py-2">
			@for (tag of tags(); track tag.id) {
				<span
					class="text-secondary-foreground animate-fadeIn bg-background border-input hover:bg-background relative inline-flex h-7 cursor-default items-center rounded-md border border-solid ps-2 pe-7 pl-2 text-xs font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50">
					{{ tag.value }}
					<button
						class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground/80 hover:text-foreground absolute -inset-y-px -end-px flex size-7 items-center justify-center rounded-md rounded-s-none rounded-e-md p-0 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-transparent focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
						(click)="removeTag(tag.id)">
						<ng-icon hlm name="lucideX" size="sm" />
					</button>
				</span>
			}
		</div>
	\`,
})
export class Input54Component {
	readonly value = model('');
	readonly tags = signal<TagItem[]>([
		{
			id: 1,
			value: 'Sport',
		},
		{ id: 2, value: 'Music' },
		{ id: 3, value: 'Movies' },
	]);

	addTag(): void {
		const currentTags = this.tags();
		const isValueExist = currentTags.some((tag) => tag.value.toLowerCase() === this.value().toLowerCase());
		if (!isValueExist) {
			const newTag: TagItem = { id: currentTags.length + 1, value: this.value() };
			this.tags.set([...currentTags, newTag]);
		}
		this.value.set('');
	}

	removeTag(id: number): void {
		this.tags.set(this.tags().filter((tag) => tag.id !== id));
	}
}`;
