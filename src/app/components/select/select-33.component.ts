import { afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCommandImports } from '@spartan-ng/helm/command';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

interface Option {
	value: string;
	label: string;
}

@Component({
	selector: 'sim-select-33',
	imports: [HlmFieldImports, HlmPopoverImports, HlmButtonImports, NgIcon, HlmIconImports, HlmCommandImports],
	providers: [provideIcons({ lucideChevronDown })],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-33">Select with search</label>
				<hlm-popover [state]="state()" (stateChanged)="stateChanged($event)" sideOffset="5">
					<button
						id="select-33"
						#triggerBtn33
						class="border-input bg-background hover:bg-background w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
						hlmPopoverTrigger
						hlmBtn
						variant="outline"
						[class.text-muted-foreground]="!currentFramework()"
						(click)="state.set('open')">
						{{ currentFramework() ? currentFramework()?.label : 'Select framework...' }}
						<ng-icon hlm size="sm" name="lucideChevronDown" class="text-muted-foreground/80 shrink-0" />
					</button>
					<hlm-command
						*hlmPopoverPortal="let ctx"
						hlmPopoverContent
						class="gap-0 p-0"
						[style.width.px]="triggerWidth()">
						<hlm-command-input placeholder="Search framework..." />
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
						</hlm-command-list>
					</hlm-command>
				</hlm-popover>
			</div>
		</div>
	`,
})
export class Select33Component {
	private readonly triggerBtn33 = viewChild.required<ElementRef<HTMLButtonElement>>('triggerBtn33');
	private readonly destroyRef = inject(DestroyRef);

	protected readonly triggerWidth = signal(0);
	protected readonly currentFramework = signal<Option | undefined>(undefined);
	protected readonly state = signal<'closed' | 'open'>('closed');

	protected readonly frameworks: Option[] = [
		{ label: 'Angular', value: 'angular' },
		{ label: 'Next.js', value: 'next.js' },
		{ label: 'SvelteKit', value: 'sveltekit' },
		{ label: 'Nuxt.js', value: 'nuxt.js' },
		{ label: 'Remix', value: 'remix' },
		{ label: 'Astro', value: 'astro' },
		{ label: 'Vue.js', value: 'vue' },
		{ label: 'React', value: 'react' },
		{ label: 'Ember.js', value: 'ember' },
		{ label: 'Gatsby', value: 'gatsby' },
		{ label: 'Eleventy', value: 'eleventy' },
		{ label: 'SolidJS', value: 'solid' },
		{ label: 'Preact', value: 'preact' },
		{ label: 'Qwik', value: 'qwik' },
		{ label: 'Alpine.js', value: 'alpine' },
		{ label: 'Lit', value: 'lit' },
	];

	constructor() {
		afterNextRender(() => {
			const el = this.triggerBtn33().nativeElement;
			this.triggerWidth.set(el.offsetWidth);
			const observer = new ResizeObserver(() => this.triggerWidth.set(el.offsetWidth));
			observer.observe(el);
			this.destroyRef.onDestroy(() => observer.disconnect());
		});
	}

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
