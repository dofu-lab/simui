import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { IconName, NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideBlocks,
	lucideBrain,
	lucideChartLine,
	lucideChevronDown,
	lucideCpu,
	lucideDatabase,
	lucideGlobe,
	lucideLayout,
	lucideNetwork,
	lucideSearch,
	lucideServer,
} from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCommandImports } from '@spartan-ng/helm/command';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

type Option = {
	value: string;
	label: string;
	icon: IconName;
	number: number;
};

@Component({
	selector: 'sim-select-37',
	imports: [HlmFieldImports, HlmPopoverImports, HlmButton, NgIcon, HlmIcon, HlmCommandImports],
	providers: [
		provideIcons({
			lucideChartLine,
			lucideBrain,
			lucideDatabase,
			lucideCpu,
			lucideNetwork,
			lucideGlobe,
			lucideSearch,
			lucideServer,
			lucideBlocks,
			lucideLayout,
			lucideChevronDown,
		}),
	],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-37">Select with search, icon and number</label>
				<hlm-popover [state]="state()" (stateChanged)="stateChanged($event)" sideOffset="5">
					<button
						id="select-37"
						#triggerBtn
						class="border-input bg-background hover:bg-background w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
						hlmPopoverTrigger
						hlmBtn
						variant="outline"
						[class.text-muted-foreground]="!currentItem()"
						(click)="state.set('open')">
						@if (currentItem()) {
							<div class="flex items-center gap-2">
								<ng-icon hlm size="sm" class="text-muted-foreground" [name]="currentItem()?.icon" />
								<span>{{ currentItem()?.label }}</span>
								<span class="text-muted-foreground bg-muted rounded-sm p-0.5 text-xs">
									{{ currentItem()?.number?.toLocaleString() }}
								</span>
							</div>
						} @else {
							Select service category
						}
						<ng-icon hlm size="sm" name="lucideChevronDown" class="text-muted-foreground/80 shrink-0" />
					</button>
					<hlm-command *hlmPopoverPortal="let ctx" hlmPopoverContent class="p-0" [style.width.px]="triggerWidth()">
						<hlm-command-input placeholder="Search service category" />
						<div *hlmCommandEmptyState hlmCommandEmpty>No results found.</div>
						<hlm-command-list>
							<hlm-command-group>
								@for (item of items; track item.label) {
									<button hlm-command-item [value]="item.value" (selected)="commandSelected(item)">
										<div class="flex items-center gap-2">
											<ng-icon hlm size="sm" class="text-muted-foreground" [name]="item.icon" />
											<span>{{ item.label }}</span>
										</div>
										<span class="text-muted-foreground ml-auto text-xs">
											{{ item.number.toLocaleString() }}
										</span>
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
export class Select37Component {
	private triggerBtn = viewChild.required<ElementRef<HTMLButtonElement>>('triggerBtn');

	private readonly destroyRef = inject(DestroyRef);
	public readonly triggerWidth = signal(0);

	constructor() {
		afterNextRender(() => {
			const el = this.triggerBtn().nativeElement;
			this.triggerWidth.set(el.offsetWidth);
			const observer = new ResizeObserver(() => this.triggerWidth.set(el.offsetWidth));
			observer.observe(el);
			this.destroyRef.onDestroy(() => observer.disconnect());
		});
	}

	protected readonly items: Option[] = [
		{
			icon: 'lucideChartLine',
			label: 'Analytics Platform',
			number: 2451,
			value: 'analytics platform',
		},
		{
			icon: 'lucideBrain',
			label: 'AI Services',
			number: 1832,
			value: 'ai services',
		},
		{
			icon: 'lucideDatabase',
			label: 'Database Systems',
			number: 1654,
			value: 'database systems',
		},
		{
			icon: 'lucideCpu',
			label: 'Compute Resources',
			number: 943,
			value: 'compute resources',
		},
		{
			icon: 'lucideNetwork',
			label: 'Network Services',
			number: 832,
			value: 'network services',
		},
		{
			icon: 'lucideGlobe',
			label: 'Web Services',
			number: 654,
			value: 'web services',
		},
		{
			icon: 'lucideSearch',
			label: 'Monitoring Tools',
			number: 432,
			value: 'monitoring tools',
		},
		{
			icon: 'lucideServer',
			label: 'Server Management',
			number: 321,
			value: 'server management',
		},
		{
			icon: 'lucideBlocks',
			label: 'Infrastructure',
			number: 234,
			value: 'infrastructure',
		},
		{
			icon: 'lucideLayout',
			label: 'Frontend Services',
			number: 123,
			value: 'frontend services',
		},
	];

	public readonly currentItem = signal<Option | undefined>(undefined);
	public readonly state = signal<'closed' | 'open'>('closed');

	protected stateChanged(state: 'open' | 'closed'): void {
		this.state.set(state);
	}

	protected commandSelected(item: Option): void {
		this.state.set('closed');
		if (this.currentItem()?.value === item.value) {
			this.currentItem.set(undefined);
		} else {
			this.currentItem.set(item);
		}
	}
}
