import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideArrowRight,
	lucideCheck,
	lucideChevronDown,
	lucideSearch,
	lucideSquareCheck,
	lucideSquareX,
	lucideX,
} from '@ng-icons/lucide';
import {
	BrnComboboxAnchor,
	BrnComboboxContent,
	BrnComboboxEmpty,
	BrnComboboxInput,
	BrnComboboxItem,
	BrnComboboxList,
	BrnComboboxMultiple,
	BrnComboboxPopoverTrigger,
	BrnComboboxTrigger,
	comboboxContainsFilter,
} from '@spartan-ng/brain/combobox';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { HlmScrollAreaImports } from '@spartan-ng/helm/scroll-area';
import { NgScrollbar } from 'ngx-scrollbar';

interface Option {
	value: string;
	version: string;
	label: string;
}

@Component({
	selector: 'sim-select-42',
	imports: [
		NgIcon,
		NgScrollbar,
		BrnComboboxAnchor,
		BrnComboboxContent,
		BrnComboboxEmpty,
		BrnComboboxInput,
		BrnComboboxItem,
		BrnComboboxList,
		BrnComboboxMultiple,
		BrnComboboxPopoverTrigger,
		BrnComboboxTrigger,
		HlmInputGroupImports,
		HlmButtonImports,
		HlmFieldImports,
		HlmIconImports,
		HlmPopoverImports,
		HlmScrollAreaImports,
	],
	providers: [
		provideIcons({
			lucideArrowRight,
			lucideCheck,
			lucideChevronDown,
			lucideSearch,
			lucideSquareCheck,
			lucideSquareX,
			lucideX,
		}),
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full max-w-[350px]' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-42">Combobox with search</label>
				<hlm-popover
					brnCombobox
					[autoFocus]="false"
					sideOffset="5"
					[autoHighlight]="false"
					[closeOnSelect]="false"
					[itemToString]="itemToString"
					[(search)]="searchText"
					[(value)]="selectedFrameworks">
					<button
						id="select-42"
						brnComboboxAnchor
						brnComboboxPopoverTrigger
						brnComboboxTrigger
						class="w-full justify-between px-3 font-normal"
						hlmBtn
						variant="outline">
						<span class="truncate" [class.text-muted-foreground]="selectedFrameworks().length === 0">
							{{ selectedFrameworkLabel() }}
						</span>
						<ng-icon hlm size="sm" name="lucideChevronDown" class="text-muted-foreground/80 shrink-0" />
					</button>

					<div
						*hlmPopoverPortal
						brnComboboxContent
						hlmPopoverContent
						class="group/combobox-content w-(--brn-combobox-width) gap-0 overflow-hidden rounded-xl! p-0">
						<div class="flex gap-1 p-1 pb-0">
							<hlm-input-group
								class="bg-input/30 border-input/30 h-8! rounded-lg! shadow-none! *:data-[slot=input-group-addon]:pl-2!">
								<input brnComboboxInput hlmInputGroupInput id="select-42-search" placeholder="Search framework..." />
								<hlm-input-group-addon>
									<ng-icon name="lucideSearch" />
								</hlm-input-group-addon>
								<hlm-input-group-addon align="inline-end">
									<button
										hlmInputGroupButton
										aria-label="Clear search"
										title="Clear search"
										size="icon-xs"
										variant="ghost"
										(click)="clearSearchText()">
										<ng-icon name="lucideX" />
									</button>
								</hlm-input-group-addon>
							</hlm-input-group>
							<button
								type="button"
								hlmBtn
								variant="outline"
								size="icon-sm"
								[disabled]="filteredFrameworks().length === 0"
								[attr.aria-label]="
									allFilteredFrameworksSelected() ? 'Unselect all visible frameworks' : 'Select all visible frameworks'
								"
								[attr.aria-pressed]="allFilteredFrameworksSelected()"
								(click)="selectAll()">
								<ng-icon [name]="allFilteredFrameworksSelected() ? 'lucideSquareX' : 'lucideSquareCheck'" />
							</button>
						</div>

						<div
							brnComboboxEmpty
							class="text-muted-foreground hidden py-6 text-center text-sm group-data-empty/combobox-content:block">
							No results found.
						</div>

						<div brnComboboxList aria-label="Frameworks" class="max-h-72 overflow-y-auto p-1">
							<ng-scrollbar hlm class="rounded-none">
								@for (framework of frameworks; track framework.value) {
									<button
										brnComboboxItem
										class="group/option data-highlighted:bg-accent data-highlighted:text-accent-foreground flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-hidden:hidden"
										[value]="framework">
										<div class="flex items-start gap-1">
											<span>{{ framework.label }}</span>
											<span class="text-muted-foreground text-sm">(v{{ framework.version }})</span>
										</div>
										<ng-icon
											hlm
											size="sm"
											name="lucideCheck"
											class="ms-auto opacity-0 group-aria-selected/option:opacity-100" />
									</button>
								}
							</ng-scrollbar>
						</div>
					</div>
				</hlm-popover>
			</div>
		</div>
	`,
})
export class Select42Component {
	private readonly filterCollator = new Intl.Collator(undefined, {
		usage: 'search',
		sensitivity: 'base',
		ignorePunctuation: true,
	});

	protected readonly selectedFrameworks = signal<Option[]>([]);
	protected readonly searchText = signal('');
	protected readonly filteredFrameworks = computed(() =>
		this.frameworks.filter((framework) =>
			comboboxContainsFilter(framework, this.searchText(), this.filterCollator, this.itemToString),
		),
	);
	protected readonly allFilteredFrameworksSelected = computed(() => {
		const filteredFrameworks = this.filteredFrameworks();
		const selectedValues = new Set(this.selectedFrameworks().map((framework) => framework.value));

		return (
			filteredFrameworks.length > 0 && filteredFrameworks.every((framework) => selectedValues.has(framework.value))
		);
	});
	protected readonly selectedFrameworkLabel = computed(() => {
		const selected = this.selectedFrameworks();
		return selected.length === 0 ? 'Select frameworks...' : selected.map((framework) => framework.label).join(', ');
	});

	protected readonly itemToString = (framework: Option): string => framework.label + '' + framework.version;

	protected readonly frameworks: Option[] = [
		{ label: 'Angular', version: '22.1.3', value: 'angular' },
		{ label: 'Next.js', version: '16.2.1', value: 'next.js' },
		{ label: 'SvelteKit', version: '2.48.5', value: 'sveltekit' },
		{ label: 'Nuxt.js', version: '4.1.2', value: 'nuxt.js' },
		{ label: 'Remix', version: '2.17.0', value: 'remix' },
		{ label: 'Astro', version: '5.13.4', value: 'astro' },
		{ label: 'Vue.js', version: '3.5.21', value: 'vue' },
		{ label: 'React', version: '19.1.1', value: 'react' },
		{ label: 'Ember.js', version: '6.6.0', value: 'ember' },
		{ label: 'Gatsby', version: '5.14.6', value: 'gatsby' },
		{ label: 'Eleventy', version: '3.1.2', value: 'eleventy' },
		{ label: 'SolidJS', version: '1.9.9', value: 'solid' },
		{ label: 'Preact', version: '10.27.1', value: 'preact' },
		{ label: 'Qwik', version: '1.16.0', value: 'qwik' },
		{ label: 'Alpine.js', version: '3.15.0', value: 'alpine' },
		{ label: 'Lit', version: '3.3.1', value: 'lit' },
	];

	protected selectAll(): void {
		const filteredFrameworks = this.filteredFrameworks();
		if (filteredFrameworks.length === 0) {
			return;
		}

		if (this.allFilteredFrameworksSelected()) {
			this.unselectAll();
			return;
		}

		this.selectedFrameworks.update((selectedFrameworks) => {
			const selectedValues = new Set(selectedFrameworks.map((framework) => framework.value));
			const newSelections = filteredFrameworks.filter((framework) => !selectedValues.has(framework.value));

			return [...selectedFrameworks, ...newSelections];
		});
	}

	protected unselectAll(): void {
		const filteredValues = new Set(this.filteredFrameworks().map((framework) => framework.value));
		this.selectedFrameworks.update((selectedFrameworks) =>
			selectedFrameworks.filter((framework) => !filteredValues.has(framework.value)),
		);
	}

	protected clearSearchText(): void {
		this.searchText.set('');
	}
}
