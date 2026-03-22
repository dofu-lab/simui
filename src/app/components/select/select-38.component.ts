import {
	afterNextRender,
	Component,
	computed,
	DestroyRef,
	ElementRef,
	inject,
	model,
	signal,
	viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideX } from '@ng-icons/lucide';
import { HlmCommandImports } from '@spartan-ng/helm/command';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

type Option = {
	value: string;
	label: string;
};

@Component({
	selector: 'sim-select-38',
	imports: [HlmFieldImports, HlmPopoverImports, NgIcon, HlmIcon, HlmCommandImports, FormsModule],
	providers: [provideIcons({ lucideChevronDown, lucideX })],
	host: { class: 'block w-full' },
	template: `
		<div hlmFieldGroup>
			<div hlmField class="gap-2">
				<label hlmFieldLabel for="select-38">Multiple select</label>
				<hlm-popover autoFocus="none" sideOffset="5" [state]="state()" (stateChanged)="stateChanged($event)">
					<button
						id="select-38"
						#triggerBtn
						hlmPopoverTrigger
						variant="outline"
						class="w-full"
						[class.text-muted-foreground]="!currentFramework()"
						(click)="state.set('open')">
						<div
							class="border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none">
							<div class="flex flex-row flex-wrap gap-1 p-1">
								@for (framework of currentFramework(); track framework.value) {
									<span
										class="text-secondary-foreground animate-fadeIn bg-background border-input hover:bg-background relative inline-flex h-7 cursor-default items-center rounded-md border border-solid ps-2 pe-7 pl-2 text-xs font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50">
										{{ framework.label }}
										<button
											class="focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground/80 hover:text-foreground absolute -inset-y-px -end-px flex size-7 items-center justify-center rounded-md rounded-s-none rounded-e-md p-0 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-transparent focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
											(click)="removeFramework(framework.value); $event.stopPropagation()">
											<ng-icon hlm name="lucideX" size="sm" />
										</button>
									</span>
								}
								<input
									id="input-55"
									type="text"
									placeholder="Add framework"
									[ngModel]="filterValue()"
									(ngModelChange)="filterValue.set($event)"
									class="border-input placeholder:text-muted-foreground flex h-7 w-full min-w-20 flex-1 rounded-md border-0 bg-transparent px-2 py-1 text-sm shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
									(keydown.backspace)="handleBackspace()" />
							</div>
						</div>
					</button>

					<hlm-command *hlmPopoverPortal="let ctx" hlmPopoverContent class="p-0" [style.width.px]="triggerWidth()">
						<div *hlmCommandEmptyState hlmCommandEmpty>No results found.</div>
						<hlm-command-list autofocus="">
							<hlm-command-group>
								@for (framework of displayedFrameworks(); track framework.value) {
									<button hlm-command-item [value]="framework.value" (selected)="commandSelected(framework)">
										<span>{{ framework.label }}</span>
										<ng-icon
											hlm
											hlmCommandIcon
											class="ml-auto"
											name="lucideCheck"
											size="sm"
											[class.opacity-0]="!isSelected(framework)" />
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
export class Select38Component {
	protected triggerBtn = viewChild.required<ElementRef<HTMLButtonElement>>('triggerBtn');
	private readonly destroyRef = inject(DestroyRef);

	protected readonly frameworks: Option[] = [
		{
			label: 'Angular',
			value: 'angular',
		},
		{
			label: 'Next.js',
			value: 'next.js',
		},
		{
			label: 'SvelteKit',
			value: 'sveltekit',
		},
		{
			label: 'Nuxt.js',
			value: 'nuxt.js',
		},
		{
			label: 'Remix',
			value: 'remix',
		},
		{
			label: 'Astro',
			value: 'astro',
		},
		{
			label: 'Vue.js',
			value: 'vue',
		},
		{
			label: 'React',
			value: 'react',
		},
		{
			label: 'Ember.js',
			value: 'ember',
		},
		{
			label: 'Gatsby',
			value: 'gatsby',
		},
		{
			label: 'Eleventy',
			value: 'eleventy',
		},
		{
			label: 'SolidJS',
			value: 'solid',
		},
		{
			label: 'Preact',
			value: 'preact',
		},
		{
			label: 'Qwik',
			value: 'qwik',
		},
		{
			label: 'Alpine.js',
			value: 'alpine',
		},
		{
			label: 'Lit',
			value: 'lit',
		},
	];
	protected readonly filterValue = model<string>('');
	protected readonly displayedFrameworks = computed(() =>
		this.frameworks.filter((framework) => framework.label.toLowerCase().includes(this.filterValue().toLowerCase())),
	);

	public readonly triggerWidth = signal(0);
	public readonly currentFramework = signal<Option[] | undefined>([this.frameworks[0]]);
	public readonly state = signal<'closed' | 'open'>('closed');

	constructor() {
		afterNextRender(() => {
			const el = this.triggerBtn().nativeElement;
			this.triggerWidth.set(el.offsetWidth);
			const observer = new ResizeObserver(() => {
				this.triggerWidth.set(el.offsetWidth);
				if (this.state() === 'open') {
					window.dispatchEvent(new Event('resize'));
				}
			});
			observer.observe(el);
			this.destroyRef.onDestroy(() => observer.disconnect());
		});
	}

	protected isSelected(framework: Option): boolean {
		return this.currentFramework()?.some((f) => f.value === framework.value) ?? false;
	}

	protected stateChanged(state: 'open' | 'closed'): void {
		this.state.set(state);
	}

	protected commandSelected(framework: Option): void {
		const currentFramework = this.currentFramework();
		const isValueExist = currentFramework?.some((f) => f.value.toLowerCase() === framework.value.toLowerCase());
		if (!isValueExist) {
			const newFramework: Option = { ...framework };
			this.currentFramework.set([...(currentFramework ?? []), newFramework]);
		} else {
			this.currentFramework.set(
				currentFramework?.filter((f) => f.value.toLowerCase() !== framework.value.toLowerCase()),
			);
		}
	}

	protected removeFramework(value: string): void {
		this.currentFramework.set(this.currentFramework()?.filter((framework) => framework.value !== value));
	}

	protected handleBackspace(): void {
		if (this.filterValue()) {
			return;
		}
		const currentFramework = this.currentFramework();
		if (currentFramework && currentFramework.length > 0) {
			currentFramework.pop();
			this.currentFramework.set([...currentFramework]);
		}
	}
}
