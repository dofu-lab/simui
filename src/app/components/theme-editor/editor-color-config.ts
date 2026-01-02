import { ThemeInjectorService } from '@/app/core/services/theme-injector.service';
import { ThemeStyleProps } from '@/app/types';
import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { EditorColorPicker } from './editor-color-picker';

@Component({
	selector: 'app-editor-color-config',
	imports: [HlmAccordionImports, NgIcon, HlmIcon, EditorColorPicker],
	providers: [provideIcons({ lucideChevronDown })],
	template: `
		<div class="relative h-full overflow-y-auto">
			<div hlmAccordion type="multiple" class="absolute w-full gap-4 p-4">
				<div
					hlmAccordionItem
					[isOpened]="true"
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 class="contents">
						<button
							hlmAccordionTrigger
							class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<span class="text-sm leading-6">Primary color</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-4 border-t p-3">
							<sim-editor-color-picker
								label="Primary"
								[color]="currentPresetStyles()?.primary"
								(colorChange)="updateColor('primary', $event)" />
							<sim-editor-color-picker
								label="Primary Foreground"
								[color]="currentPresetStyles()?.['primary-foreground']"
								(colorChange)="updateColor('primary-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</div>

				<div
					hlmAccordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 class="contents">
						<button
							hlmAccordionTrigger
							class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<span class="text-sm leading-6">Secondary color</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-4 border-t p-3">
							<sim-editor-color-picker
								label="Secondary"
								[color]="currentPresetStyles()?.secondary"
								(colorChange)="updateColor('secondary', $event)" />
							<sim-editor-color-picker
								label="Secondary Foreground"
								[color]="currentPresetStyles()?.['secondary-foreground']"
								(colorChange)="updateColor('secondary-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</div>

				<div
					hlmAccordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 class="contents">
						<button
							hlmAccordionTrigger
							class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<span class="text-sm leading-6">Accent color</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-4 border-t p-3">
							<sim-editor-color-picker
								label="Accent"
								[color]="currentPresetStyles()?.accent"
								(colorChange)="updateColor('accent', $event)" />
							<sim-editor-color-picker
								label="Accent Foreground"
								[color]="currentPresetStyles()?.['accent-foreground']"
								(colorChange)="updateColor('secondary-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</div>

				<div
					hlmAccordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 class="contents">
						<button
							hlmAccordionTrigger
							class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<span class="text-sm leading-6">Base color</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-4 border-t p-3">
							<sim-editor-color-picker
								label="Accent"
								[color]="currentPresetStyles()?.background"
								(colorChange)="updateColor('background', $event)" />
							<sim-editor-color-picker
								label="Foreground"
								[color]="currentPresetStyles()?.foreground"
								(colorChange)="updateColor('foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</div>

				<div
					hlmAccordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 class="contents">
						<button
							hlmAccordionTrigger
							class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<span class="text-sm leading-6">Card color</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-4 border-t p-3">
							<sim-editor-color-picker
								label="Card Background"
								[color]="currentPresetStyles()?.card"
								(colorChange)="updateColor('card', $event)" />
							<sim-editor-color-picker
								label="Card Foreground"
								[color]="currentPresetStyles()?.['card-foreground']"
								(colorChange)="updateColor('foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</div>

				<div
					hlmAccordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 class="contents">
						<button
							hlmAccordionTrigger
							class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<span class="text-sm leading-6">Popover color</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-4 border-t p-3">
							<sim-editor-color-picker
								label="Popover Background"
								[color]="currentPresetStyles()?.popover"
								(colorChange)="updateColor('popover', $event)" />
							<sim-editor-color-picker
								label="Popover Foreground"
								[color]="currentPresetStyles()?.['popover-foreground']"
								(colorChange)="updateColor('popover-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</div>

				<div
					hlmAccordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 class="contents">
						<button
							hlmAccordionTrigger
							class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<span class="text-sm leading-6">Muted color</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-4 border-t p-3">
							<sim-editor-color-picker
								label="Muted Background"
								[color]="currentPresetStyles()?.muted"
								(colorChange)="updateColor('muted', $event)" />
							<sim-editor-color-picker
								label="Muted Foreground"
								[color]="currentPresetStyles()?.['muted-foreground']"
								(colorChange)="updateColor('popover-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</div>

				<div
					hlmAccordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 class="contents">
						<button
							hlmAccordionTrigger
							class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<span class="text-sm leading-6">Destructive color</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-4 border-t p-3">
							<sim-editor-color-picker
								label="Destructive Background"
								[color]="currentPresetStyles()?.destructive"
								(colorChange)="updateColor('destructive', $event)" />
							<sim-editor-color-picker
								label="Destructive Foreground"
								[color]="currentPresetStyles()?.['destructive-foreground']"
								(colorChange)="updateColor('destructive-foreground', $event)" />
						</div>
					</hlm-accordion-content>
				</div>

				<div
					hlmAccordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 class="contents">
						<button
							hlmAccordionTrigger
							class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<span class="text-sm leading-6">Border & Input color</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-4 border-t p-3">
							<sim-editor-color-picker
								label="Border"
								[color]="currentPresetStyles()?.border"
								(colorChange)="updateColor('border', $event)" />
							<sim-editor-color-picker
								label="Input"
								[color]="currentPresetStyles()?.input"
								(colorChange)="updateColor('input', $event)" />
							<sim-editor-color-picker
								label="Ring"
								[color]="currentPresetStyles()?.ring"
								(colorChange)="updateColor('ring', $event)" />
						</div>
					</hlm-accordion-content>
				</div>

				<div
					hlmAccordionItem
					class="has-focus-visible:ring-ring/50 rounded-md border has-focus-visible:ring-[3px] has-focus-visible:outline-none">
					<h3 class="contents">
						<button
							hlmAccordionTrigger
							class="p-3 hover:no-underline focus-visible:ring-transparent focus-visible:ring-offset-0">
							<span class="text-sm leading-6">Sidebar Colors</span>
							<ng-icon hlm hlmAccIcon name="lucideChevronDown" class="opacity-60" />
						</button>
					</h3>

					<hlm-accordion-content class="[&>div]:pb-0">
						<div class="flex flex-col gap-4 border-t p-3">
							<sim-editor-color-picker
								label="Sidebar Background"
								[color]="currentPresetStyles()?.sidebar"
								(colorChange)="updateColor('sidebar', $event)" />
							<sim-editor-color-picker
								label="Sidebar Foreground"
								[color]="currentPresetStyles()?.['sidebar-foreground']"
								(colorChange)="updateColor('sidebar-foreground', $event)" />
							<sim-editor-color-picker
								label="Sidebar Primary"
								[color]="currentPresetStyles()?.['sidebar-primary']"
								(colorChange)="updateColor('sidebar-primary', $event)" />
							<sim-editor-color-picker
								label="Sidebar Primary Foreground"
								[color]="currentPresetStyles()?.['sidebar-primary-foreground']"
								(colorChange)="updateColor('sidebar-primary-foreground', $event)" />
							<sim-editor-color-picker
								label="Sidebar Accent"
								[color]="currentPresetStyles()?.['sidebar-accent']"
								(colorChange)="updateColor('sidebar-accent', $event)" />
							<sim-editor-color-picker
								label="Sidebar Accent Foreground"
								[color]="currentPresetStyles()?.['sidebar-accent-foreground']"
								(colorChange)="updateColor('sidebar-accent-foreground', $event)" />
							<sim-editor-color-picker
								label="Sidebar Border"
								[color]="currentPresetStyles()?.['sidebar-border']"
								(colorChange)="updateColor('sidebar-border', $event)" />
							<sim-editor-color-picker
								label="Sidebar Ring"
								[color]="currentPresetStyles()?.['sidebar-ring']"
								(colorChange)="updateColor('sidebar-ring', $event)" />
						</div>
					</hlm-accordion-content>
				</div>
			</div>
		</div>
	`,
})
export class EditorColorConfig {
	private _themeInjector = inject(ThemeInjectorService);
	protected currentPresetStyles = this._themeInjector.currentPresetStyles;

	protected updateColor(colorKey: keyof ThemeStyleProps, color: string) {
		this._themeInjector.updateColor(colorKey, color);
	}
}
