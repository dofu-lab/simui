import { NgComponentOutlet } from '@angular/common';
import { Component, computed, input, Type } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCode } from '@ng-icons/lucide';
import { BrnSheetImports } from '@spartan-ng/brain/sheet';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';
import { CodePreviewComponent } from './code-preview.component';

@Component({
	selector: 'component-card',
	providers: [provideIcons({ lucideCode })],
	imports: [NgComponentOutlet, HlmButton, NgIcon, HlmIcon, CodePreviewComponent, BrnSheetImports, HlmSheetImports],
	template: `
		<ng-container *ngComponentOutlet="component()"></ng-container>
		<hlm-sheet side="right">
			<div class="absolute -top-2 -right-2 items-center gap-2 p-4 group-hover:flex lg:hidden">
				<button
					hlmBtn
					size="icon"
					variant="link"
					brnSheetTrigger
					class="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100">
					<ng-icon hlm name="lucideCode" size="sm" />
				</button>
			</div>
			<hlm-sheet-content *brnSheetContent="let ctx" class="w-[calc(100%-(--spacing(12)))] max-w-sm sm:max-w-3xl">
				<hlm-sheet-header>
					<h3 hlmSheetTitle>Code</h3>
				</hlm-sheet-header>
				<div class="grid flex-1 px-4 pb-4">
					<code-preview [code]="code()" class="h-full w-full overflow-auto" />
				</div>
			</hlm-sheet-content>
		</hlm-sheet>
	`,
	host: {
		'[class]': '_computedClass()',
	},
})
export class ComponentCardComponent {
	public readonly component = input.required<Type<any> | null>();
	public readonly componentName = input.required<string>();
	public readonly code = input<string | undefined>('');
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	public readonly colNumber = input<number>(3);
	public readonly itemStyle = input<number>();

	protected styleClasses = computed(() => {
		return this.itemStyle() === 1
			? 'flex justify-center items-center'
			: this.itemStyle() === 2
				? 'text-center'
				: this.itemStyle() === 3
					? 'flex flex-col items-center'
					: this.itemStyle() === 4
						? 'flex justify-start items-center'
						: '';
	});

	protected readonly colSpanClasses = computed(() => {
		const includeStart = false;
		const baseClasses =
			this.colNumber() === 2
				? 'col-span-12 sm:col-span-6 lg:col-span-6'
				: this.colNumber() === 3
					? 'col-span-12 sm:col-span-12 lg:col-span-12'
					: 'col-span-12 sm:col-span-6 lg:col-span-4';

		const startClasses =
			includeStart && this.colNumber() !== 3
				? this.colNumber() === 2
					? 'sm:col-start-4 lg:col-start-4'
					: 'sm:col-start-4 lg:col-start-5'
				: '';

		return `${baseClasses} ${startClasses}`;
	});

	protected readonly _computedClass = computed(() =>
		hlm(
			'group/item flex border has-[[data-comp-loading=true]]:border-none relative group',
			this.colSpanClasses(),
			this.styleClasses(),
			this.userClass(),
		),
	);
}
