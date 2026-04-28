import { ColorEditService, ThemeStorageService } from '@/app/core/services';
import { ThemeStyleProps } from '@/app/types';
import { Component, effect, ElementRef, inject, signal, viewChild, viewChildren } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { BrnAccordion, BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
import { EditorColorPicker } from './editor-color-picker';

type AccordionSection =
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'base'
	| 'card'
	| 'popover'
	| 'muted'
	| 'destructive'
	| 'border'
	| 'sidebar';

const COLOR_TO_SECTION_MAP: Record<string, AccordionSection> = {
	primary: 'primary',
	'primary-foreground': 'primary',
	secondary: 'secondary',
	'secondary-foreground': 'secondary',
	accent: 'accent',
	'accent-foreground': 'accent',
	background: 'base',
	foreground: 'base',
	card: 'card',
	'card-foreground': 'card',
	popover: 'popover',
	'popover-foreground': 'popover',
	muted: 'muted',
	'muted-foreground': 'muted',
	destructive: 'destructive',
	'destructive-foreground': 'destructive',
	border: 'border',
	input: 'border',
	ring: 'border',
	sidebar: 'sidebar',
	'sidebar-foreground': 'sidebar',
	'sidebar-primary': 'sidebar',
	'sidebar-primary-foreground': 'sidebar',
	'sidebar-accent': 'sidebar',
	'sidebar-accent-foreground': 'sidebar',
	'sidebar-border': 'sidebar',
	'sidebar-ring': 'sidebar',
};

@Component({
	selector: 'sim-editor-color-config',
	imports: [HlmAccordionImports, BrnAccordionImports, NgIcon, EditorColorPicker],
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	template: `
		<div #scrollContainer class="relative h-full overflow-y-auto pt-2">
			<hlm-accordion #accordion="brnAccordion" type="multiple" class="absolute w-full gap-4 px-4 pb-4">
				<hlm-accordion-item
					id="primary"
					#accordionItem
					[isOpened]="true"
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Primary color</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-1 border-t p-1.5">
							<sim-editor-color-picker
								id="color-picker-primary"
								colorKey="primary"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('primary', $event)" />
							<sim-editor-color-picker
								id="color-picker-primary-foreground"
								colorKey="primary-foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('primary-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="secondary"
					#accordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Secondary color</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-1 border-t p-1.5">
							<sim-editor-color-picker
								id="color-picker-secondary"
								colorKey="secondary"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('secondary', $event)" />
							<sim-editor-color-picker
								id="color-picker-secondary-foreground"
								colorKey="secondary-foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('secondary-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="accent"
					#accordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Accent color</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-1 border-t p-1.5">
							<sim-editor-color-picker
								id="color-picker-accent"
								colorKey="accent"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('accent', $event)" />
							<sim-editor-color-picker
								id="color-picker-accent-foreground"
								colorKey="accent-foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('accent-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="base"
					#accordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Base color</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-1 border-t p-1.5">
							<sim-editor-color-picker
								id="color-picker-background"
								colorKey="background"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('background', $event)" />
							<sim-editor-color-picker
								id="color-picker-foreground"
								colorKey="foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="card"
					#accordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Card color</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-1 border-t p-1.5">
							<sim-editor-color-picker
								id="color-picker-card"
								colorKey="card"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('card', $event)" />
							<sim-editor-color-picker
								id="color-picker-card-foreground"
								colorKey="card-foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('card-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="popover"
					#accordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Popover color</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-1 border-t p-1.5">
							<sim-editor-color-picker
								id="color-picker-popover"
								colorKey="popover"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('popover', $event)" />
							<sim-editor-color-picker
								id="color-picker-popover-foreground"
								colorKey="popover-foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('popover-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="muted"
					#accordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Muted color</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-1 border-t p-1.5">
							<sim-editor-color-picker
								id="color-picker-muted"
								colorKey="muted"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('muted', $event)" />
							<sim-editor-color-picker
								id="color-picker-muted-foreground"
								colorKey="muted-foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('muted-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="destructive"
					#accordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Destructive color</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-1 border-t p-1.5">
							<sim-editor-color-picker
								id="color-picker-destructive"
								colorKey="destructive"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('destructive', $event)" />
							<sim-editor-color-picker
								id="color-picker-destructive-foreground"
								colorKey="destructive-foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('destructive-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="border"
					#accordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Border & Input color</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-1 border-t p-1.5">
							<sim-editor-color-picker
								id="color-picker-border"
								colorKey="border"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('border', $event)" />
							<sim-editor-color-picker
								id="color-picker-input"
								colorKey="input"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('input', $event)" />
							<sim-editor-color-picker
								id="color-picker-ring"
								colorKey="ring"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('ring', $event)" />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>

				<hlm-accordion-item
					id="sidebar"
					#accordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 brnAccordionHeader class="flex">
						<button
							brnAccordionTrigger
							data-slot="accordion-trigger"
							class="focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground! group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent p-3 text-start text-sm font-medium transition-all motion-reduce:transition-none outline-none focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:text-[calc(var(--spacing)*4)]">
							<span class="text-sm leading-6">Sidebar Colors</span>
							<ng-icon
								name="lucideChevronDown"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
							<ng-icon
								name="lucideChevronUp"
								data-slot="accordion-trigger-icon"
								class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:inline group-aria-[expanded=false]/accordion-trigger:hidden" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-1 border-t p-1.5">
							<sim-editor-color-picker
								id="color-picker-sidebar"
								colorKey="sidebar"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('sidebar', $event)" />
							<sim-editor-color-picker
								id="color-picker-sidebar-foreground"
								colorKey="sidebar-foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('sidebar-foreground', $event)" />
							<sim-editor-color-picker
								id="color-picker-sidebar-primary"
								colorKey="sidebar-primary"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('sidebar-primary', $event)" />
							<sim-editor-color-picker
								id="color-picker-sidebar-primary-foreground"
								colorKey="sidebar-primary-foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('sidebar-primary-foreground', $event)" />
							<sim-editor-color-picker
								id="color-picker-sidebar-accent"
								colorKey="sidebar-accent"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('sidebar-accent', $event)" />
							<sim-editor-color-picker
								id="color-picker-sidebar-accent-foreground"
								colorKey="sidebar-accent-foreground"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('sidebar-accent-foreground', $event)" />
							<sim-editor-color-picker
								id="color-picker-sidebar-border"
								colorKey="sidebar-border"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('sidebar-border', $event)" />
							<sim-editor-color-picker
								id="color-picker-sidebar-ring"
								colorKey="sidebar-ring"
								[highlightedColorKey]="highlightedColorKey()"
								[currentColorStyles]="currentPresetStyles()"
								(colorChange)="updateColor('sidebar-ring', $event)" />
						</div>
					</hlm-accordion-content>
				</hlm-accordion-item>
			</hlm-accordion>
		</div>
	`,
})
export class EditorColorConfig {
	private readonly themeStorageService = inject(ThemeStorageService);
	private readonly colorEditService = inject(ColorEditService);
	protected readonly currentPresetStyles = this.themeStorageService.currentThemeStyles;

	protected readonly scrollContainer = viewChild<ElementRef<HTMLElement>>('scrollContainer');
	protected readonly accordion = viewChild<BrnAccordion>('accordion');
	protected readonly accordionItemElements = viewChildren<ElementRef<HTMLElement>>('accordionItem', {});

	// Signal to track which color picker should be highlighted
	protected readonly highlightedColorKey = signal<keyof ThemeStyleProps | null>(null);

	constructor() {
		effect(() => {
			const colorKey = this.colorEditService.editColorKey();
			if (colorKey) {
				this.scrollToColor(colorKey);
				this.colorEditService.clearEditRequest();
			}
		});
	}

	protected updateColor(colorKey: keyof ThemeStyleProps, color: string) {
		this.themeStorageService.changeColor(colorKey, color);
	}

	private scrollToColor(colorKey: keyof ThemeStyleProps): void {
		const section = COLOR_TO_SECTION_MAP[colorKey];

		if (!section) {
			return;
		}

		const accordion = this.accordion();
		const items = this.accordionItemElements();

		if (!accordion || !items.length) {
			return;
		}

		// Find the section index and get the corresponding accordion item
		const sectionIndex = items.map((item) => item.nativeElement.id).indexOf(section);

		if (sectionIndex === -1 || sectionIndex >= items.length) return;

		// Open the accordion section using BrnAccordion.openItem()
		accordion.openItem(sectionIndex + 1);

		// Wait for DOM to update then scroll and highlight
		setTimeout(() => {
			const element = document.getElementById(`color-picker-${colorKey}`);
			const container = this.scrollContainer()?.nativeElement;
			if (element && container) {
				element.scrollIntoView({ behavior: 'smooth', block: 'center' });
				// Set highlight state via signal
				this.highlightedColorKey.set(colorKey);
				setTimeout(() => {
					this.highlightedColorKey.set(null);
				}, 2000);
			}
		}, 200);
	}
}
