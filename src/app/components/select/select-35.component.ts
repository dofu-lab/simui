import { afterNextRender, Component, computed, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCommandImports } from '@spartan-ng/helm/command';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

type Option = {
	value: string;
	label: string;
};

@Component({
	selector: 'sim-select-35',
	imports: [HlmFieldImports, HlmPopoverImports, HlmButton, NgIcon, HlmIcon, HlmCommandImports],
	providers: [provideIcons({ lucideChevronDown })],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-35">Timezone select with search</label>
				<hlm-popover [state]="state()" (stateChanged)="stateChanged($event)" sideOffset="5">
					<button
						id="select-35"
						#triggerBtn35
						class="border-input bg-background hover:bg-background w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
						hlmPopoverTrigger
						hlmBtn
						variant="outline"
						[class.text-muted-foreground]="!currentTimezone()"
						(click)="state.set('open')">
						{{ currentTimezone() ? currentTimezone()?.label : 'Select timezone' }}
						<ng-icon hlm size="sm" name="lucideChevronDown" class="text-muted-foreground/80 shrink-0" />
					</button>
					<hlm-command *hlmPopoverPortal="let ctx" hlmPopoverContent class="p-0" [style.width.px]="triggerWidth()">
						<hlm-command-input placeholder="Search timezone..." />
						<div *hlmCommandEmptyState hlmCommandEmpty>No results found.</div>
						<hlm-command-list>
							<hlm-command-group>
								@for (timezone of formattedTimezones(); track timezone) {
									<button hlm-command-item [value]="timezone.value" (selected)="commandSelected(timezone)">
										<span class="truncate">{{ timezone.label }}</span>
										<ng-icon
											hlm
											hlmCommandIcon
											class="ml-auto"
											name="lucideCheck"
											size="sm"
											[class.opacity-0]="currentTimezone()?.value !== timezone.value" />
									</button>
								}
							</hlm-command-group>
						</hlm-command-list>
					</hlm-command>
				</hlm-popover>
			</div>
		</div>
	`,
})
export class Select35Component {
	private readonly triggerBtn35 = viewChild.required<ElementRef<HTMLButtonElement>>('triggerBtn35');
	private readonly timezones = Intl.supportedValuesOf('timeZone');

	private readonly destroyRef = inject(DestroyRef);
	public readonly triggerWidth = signal(0);

	protected readonly formattedTimezones = computed(() => {
		return this.timezones
			.map((timezone) => {
				const formatter = new Intl.DateTimeFormat('en', {
					timeZone: timezone,
					timeZoneName: 'shortOffset',
				});
				const parts = formatter.formatToParts(new Date());
				const offset = parts.find((part) => part.type === 'timeZoneName')?.value || '';
				const modifiedOffset = offset === 'GMT' ? 'GMT+0' : offset;

				return {
					label: `(${modifiedOffset}) ${timezone.replaceAll('_', ' ')}`,
					numericOffset: Number.parseInt(offset.replace('GMT', '').replace('+', '') || '0', 10),
					value: `(${modifiedOffset}) ${timezone.replaceAll('_', ' ')}`,
				};
			})
			.sort((a, b) => a.numericOffset - b.numericOffset);
	});

	public readonly currentTimezone = signal<Option | undefined>(
		this.formattedTimezones().find((tz) => tz.value.includes('Saigon')),
	);
	public readonly state = signal<'closed' | 'open'>('closed');

	constructor() {
		afterNextRender(() => {
			const el = this.triggerBtn35().nativeElement;
			this.triggerWidth.set(el.offsetWidth);
			const observer = new ResizeObserver(() => this.triggerWidth.set(el.offsetWidth));
			observer.observe(el);
			this.destroyRef.onDestroy(() => observer.disconnect());
		});
	}

	protected stateChanged(state: 'open' | 'closed'): void {
		this.state.set(state);
	}

	protected commandSelected(timezone: Option): void {
		this.state.set('closed');
		if (this.currentTimezone()?.value === timezone.value) {
			this.currentTimezone.set(undefined);
		} else {
			this.currentTimezone.set(timezone);
		}
	}
}
