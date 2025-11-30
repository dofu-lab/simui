import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';

type TagItem = {
	id: number;
	value: string;
};

@Component({
	selector: 'sim-input-55',
	imports: [HlmLabel, FormsModule, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideX })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-14" class="mb-2 text-sm">Input with inner tags</label>
		<div
			class="border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none">
			<div class="flex flex-row flex-wrap gap-1 p-1">
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
				<input
					id="input-55"
					type="text"
					placeholder="Add a tag"
					class="border-input placeholder:text-muted-foreground flex h-7 w-full min-w-[80px] flex-1 rounded-md border-0 bg-transparent px-2 py-1 text-sm shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
					[ngModel]="value()"
					(keydown.enter)="addTag()"
					(ngModelChange)="value.set($event)" />
			</div>
		</div>
	`,
})
export class Input55Component {
	readonly value = model('');
	readonly tags = signal<TagItem[]>([
		{
			id: 1,
			value: 'Angular',
		},
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