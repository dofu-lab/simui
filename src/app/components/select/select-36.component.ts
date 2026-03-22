import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCommandImports } from '@spartan-ng/helm/command';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

type Country = {
	continent: string;
	items: CountryItem[];
};

type CountryItem = {
	value: string;
	label: string;
	flag: string;
};

@Component({
	selector: 'sim-select-36',
	imports: [HlmFieldImports, HlmPopoverImports, HlmButton, NgIcon, HlmIcon, HlmCommandImports],
	providers: [provideIcons({ lucideChevronDown })],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-36">Select country with search</label>
				<hlm-popover [state]="state()" (stateChanged)="stateChanged($event)" sideOffset="5">
					<button
						id="select-36"
						#triggerBtn
						class="border-input bg-background hover:bg-background w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
						hlmPopoverTrigger
						hlmBtn
						variant="outline"
						[class.text-muted-foreground]="!currentCountry()"
						(click)="state.set('open')">
						@if (currentCountry()) {
							<span class="flex gap-2 truncate">
								<span class="flex items-center text-lg leading-none">{{ currentCountry()?.flag }}</span>
								<span class="truncate">{{ currentCountry()?.label }}</span>
							</span>
						} @else {
							Select country...
						}
						<ng-icon hlm size="sm" name="lucideChevronDown" class="text-muted-foreground/80 shrink-0" />
					</button>
					<hlm-command *hlmPopoverPortal="let ctx" hlmPopoverContent class="p-0" [style.width.px]="triggerWidth()">
						<hlm-command-input placeholder="Search country..." />
						<div *hlmCommandEmptyState hlmCommandEmpty>No results found.</div>
						<hlm-command-list>
							@for (country of countries; track country.continent) {
								<hlm-command-group>
									<hlm-command-group-label>{{ country.continent }}</hlm-command-group-label>
									@for (item of country.items; track item.label) {
										<button hlm-command-item [value]="item.value" (selected)="commandSelected(item)">
											<span class="flex gap-2 truncate">
												<span class="text-lg leading-none">{{ item.flag }}</span>
												<span class="truncate">{{ item.label }}</span>
											</span>

											<ng-icon
												hlm
												hlmCommandIcon
												class="ml-auto"
												name="lucideCheck"
												size="sm"
												[class.opacity-0]="currentCountry()?.value !== item.value" />
										</button>
									}
								</hlm-command-group>
							}
						</hlm-command-list>
					</hlm-command>
				</hlm-popover>
			</div>
		</div>
	`,
})
export class Select36Component {
	private triggerBtn = viewChild.required<ElementRef<HTMLButtonElement>>('triggerBtn');
	private readonly destroyRef = inject(DestroyRef);

	public readonly currentCountry = signal<CountryItem | undefined>(undefined);
	public readonly state = signal<'closed' | 'open'>('closed');

	protected readonly triggerWidth = signal(0);
	protected readonly countries: Country[] = [
		{
			continent: 'America',
			items: [
				{ flag: '🇺🇸', label: 'United States', value: 'unitedstates' },
				{ flag: '🇨🇦', label: 'Canada', value: 'canada' },
				{ flag: '🇲🇽', label: 'Mexico', value: 'mexico' },
			],
		},
		{
			continent: 'Africa',
			items: [
				{ flag: '🇿🇦', label: 'South Africa', value: 'southafrica' },
				{ flag: '🇳🇬', label: 'Nigeria', value: 'nigeria' },
				{ flag: '🇲🇦', label: 'Morocco', value: 'morocco' },
			],
		},
		{
			continent: 'Asia',
			items: [
				{ flag: '🇻🇳', label: 'Vietnam', value: 'vietnam' },
				{ flag: '🇯🇵', label: 'Japan', value: 'japan' },
				{ flag: '🇮🇳', label: 'India', value: 'india' },
			],
		},
		{
			continent: 'Europe',
			items: [
				{ flag: '🇬🇧', label: 'United Kingdom', value: 'unitedkingdom' },
				{ flag: '🇫🇷', label: 'France', value: 'france' },
				{ flag: '🇩🇪', label: 'Germany', value: 'germany' },
			],
		},
		{
			continent: 'Oceania',
			items: [
				{ flag: '🇦🇺', label: 'Australia', value: 'australia' },
				{ flag: '🇳🇿', label: 'New Zealand', value: 'newzealand' },
			],
		},
	];

	constructor() {
		afterNextRender(() => {
			const el = this.triggerBtn().nativeElement;
			this.triggerWidth.set(el.offsetWidth);
			const observer = new ResizeObserver(() => this.triggerWidth.set(el.offsetWidth));
			observer.observe(el);
			this.destroyRef.onDestroy(() => observer.disconnect());
		});
	}

	protected stateChanged(state: 'open' | 'closed'): void {
		this.state.set(state);
	}

	protected commandSelected(country: CountryItem): void {
		this.state.set('closed');
		if (this.currentCountry()?.value === country.value) {
			this.currentCountry.set(undefined);
		} else {
			this.currentCountry.set(country);
		}
	}
}
