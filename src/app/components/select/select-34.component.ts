import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucidePlus } from '@ng-icons/lucide';
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
	selector: 'sim-select-34',
	imports: [HlmFieldImports, HlmPopoverImports, HlmButton, NgIcon, HlmIcon, HlmCommandImports],
	providers: [provideIcons({ lucideChevronDown, lucidePlus })],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-34">Select with search and button</label>
				<hlm-popover [state]="state()" (stateChanged)="stateChanged($event)" sideOffset="5">
					<button
						id="select-34"
						#triggerBtn34
						class="border-input bg-background hover:bg-background w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
						hlmPopoverTrigger
						hlmBtn
						variant="outline"
						[class.text-muted-foreground]="!currentFramework()"
						(click)="state.set('open')">
						{{ currentFramework() ? currentFramework()?.label : 'Select framework...' }}
						<ng-icon hlm size="sm" name="lucideChevronDown" class="text-muted-foreground/80 shrink-0" />
					</button>
					<hlm-command *hlmPopoverPortal="let ctx" hlmPopoverContent class="p-0" [style.width.px]="triggerWidth()">
						<hlm-command-input placeholder="Search framework" />
						<hlm-command-separator class="mt-1" />
						<div *hlmCommandEmptyState hlmCommandEmpty>No results found.</div>
						<hlm-command-list>
							<hlm-command-group>
								@for (framework of frameworks; track framework) {
									<button hlm-command-item [value]="framework.value" (selected)="commandSelected(framework)">
										<span>{{ framework.label }}</span>
										<ng-icon
											hlm
											hlmCommandIcon
											class="ml-auto"
											name="lucideCheck"
											size="sm"
											[class.opacity-0]="currentFramework()?.value !== framework.value" />
									</button>
								}
							</hlm-command-group>
							<hlm-command-separator />
							<hlm-command-group>
								<button hlm-command-item [value]="'new'">
									<ng-icon hlm name="lucidePlus" size="sm" />
									<span class="mr-auto">New project</span>
								</button>
							</hlm-command-group>
						</hlm-command-list>
					</hlm-command>
				</hlm-popover>
			</div>
		</div>
	`,
})
export class Select34Component {
	private readonly triggerBtn34 = viewChild.required<ElementRef<HTMLButtonElement>>('triggerBtn34');

	private readonly destroyRef = inject(DestroyRef);
	public readonly triggerWidth = signal(0);

	constructor() {
		afterNextRender(() => {
			const el = this.triggerBtn34().nativeElement;
			this.triggerWidth.set(el.offsetWidth);
			const observer = new ResizeObserver(() => this.triggerWidth.set(el.offsetWidth));
			observer.observe(el);
			this.destroyRef.onDestroy(() => observer.disconnect());
		});
	}

	protected readonly frameworks: Option[] = [
		{
			label: 'SimUI',
			value: 'simui',
		},
		{
			label: 'Spartan UI',
			value: 'spartanui',
		},
	];

	public readonly currentFramework = signal<Option | undefined>(this.frameworks[0]);
	public readonly state = signal<'closed' | 'open'>('closed');

	protected stateChanged(state: 'open' | 'closed'): void {
		this.state.set(state);
	}

	protected commandSelected(framework: Option): void {
		this.state.set('closed');
		if (this.currentFramework()?.value === framework.value) {
			this.currentFramework.set(undefined);
		} else {
			this.currentFramework.set(framework);
		}
	}
}
