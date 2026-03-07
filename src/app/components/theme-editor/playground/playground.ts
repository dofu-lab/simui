import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerBrowserPlus, tablerEdit, tablerMessageCheck, tablerRotate } from '@ng-icons/tabler-icons';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { HlmTextarea } from '@spartan-ng/helm/textarea';
import {
	CodeViewer,
	MaxLengthSelector,
	ModelSelector,
	PresetActions,
	PresetSave,
	PresetSelector,
	PresetShare,
	TemperatureSelector,
	TopPSelector,
} from './components';
import { MODELS, TYPES } from './data/models';
import { PRESETS_DATA } from './data/presets';

@Component({
	selector: 'app-playground-example',
	imports: [
		PresetShare,
		PresetSave,
		PresetSelector,
		PresetActions,
		CodeViewer,
		HlmSeparator,
		HlmTabsImports,
		HlmIcon,
		NgIcon,
		HlmTextarea,
		HlmButton,
		HlmLabel,
		ModelSelector,
		TemperatureSelector,
		TopPSelector,
		MaxLengthSelector,
	],
	providers: [provideIcons({ tablerMessageCheck, tablerBrowserPlus, tablerEdit, tablerRotate })],
	host: {
		class: 'size-full',
	},
	template: `
		<div class="bg-background flex h-full flex-col overflow-hidden rounded-lg border shadow-md md:shadow-xl">
			<div
				class="flex flex-col items-start justify-between gap-2 px-8 py-4 sm:flex-row sm:items-center sm:gap-0 md:h-16">
				<h2 class="pl-0.5 text-lg font-semibold">Playground</h2>
				<div class="ml-auto flex w-full gap-2 sm:justify-end">
					<app-preset-selector [presets]="_presets" />
					<app-preset-save />
					<div class="hidden gap-2 md:flex">
						<app-code-viewer />
						<app-preset-share />
					</div>
					<app-preset-actions />
				</div>
			</div>
			<hlm-separator />
			<hlm-tabs tab="complete" class="grid flex-1 gap-6 p-6 md:grid-cols-[1fr_200px]">
				<div class="col-span-2 h-full md:col-span-1">
					<div hlmTabsContent="complete" class="mt-0 h-full">
						<div class="flex h-full flex-col gap-4">
							<textarea hlmTextarea placeholder="Write a tagline for an ice cream shop" class="flex-1 p-4"></textarea>
							<div class="flex items-center gap-2">
								<button hlmBtn>Submit</button>
								<button hlmBtn variant="secondary" size="icon">
									<span class="sr-only">Show history</span>
									<ng-icon hlm name="tablerRotate" />
								</button>
							</div>
						</div>
					</div>
					<div hlmTabsContent="insert" class="mt-0 h-full">
						<div class="flex h-full flex-col gap-4">
							<div class="grid flex-1 grid-cols-2 gap-4">
								<textarea
									hlmTextarea
									placeholder="We're writing to [inset]. Congrats from OpenAI!"
									class="flex-1 p-4"></textarea>
								<div class="bg-muted rounded-md border"></div>
							</div>

							<div class="flex items-center gap-2">
								<button hlmBtn>Submit</button>
								<button hlmBtn variant="secondary" size="icon">
									<span class="sr-only">Show history</span>
									<ng-icon hlm name="tablerRotate" />
								</button>
							</div>
						</div>
					</div>
					<div hlmTabsContent="edit" class="mt-0 h-full">
						<div class="flex h-full flex-col gap-4">
							<div class="grid flex-1 grid-cols-2 gap-4">
								<div class="flex flex-col gap-4">
									<textarea
										hlmTextarea
										placeholder="We're writing to [inset]. Congrats from OpenAI!"
										class="flex-1 p-4"></textarea>
									<div class="flex flex-col gap-2">
										<span hlmLabel>Instructions</span>
										<textarea hlmTextarea placeholder="Fix the spelling mistakes"></textarea>
									</div>
								</div>
								<div class="bg-muted rounded-md border"></div>
							</div>

							<div class="flex items-center gap-2">
								<button hlmBtn>Submit</button>
								<button hlmBtn variant="secondary" size="icon">
									<span class="sr-only">Show history</span>
									<ng-icon hlm name="tablerRotate" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="hidden flex-col gap-6 sm:flex md:order-2">
					<div class="grid gap-3">
						<span hlmLabel>Mode</span>
						<hlm-tabs-list aria-label="tabs example" class="w-full">
							<button hlmTabsTrigger="complete">
								<ng-icon hlm name="tablerMessageCheck" size="sm" />
							</button>
							<button hlmTabsTrigger="insert">
								<ng-icon hlm name="tablerBrowserPlus" size="sm" />
							</button>
							<button hlmTabsTrigger="edit">
								<ng-icon hlm name="tablerEdit" size="sm" />
							</button>
						</hlm-tabs-list>
					</div>
					<app-model-selector [models]="_models" [types]="_types" />
					<app-temperature-selector />
					<app-max-length-selector />
					<app-top-p-selector />
				</div>
			</hlm-tabs>
		</div>
	`,
})
export class PlaygroundExample {
	protected readonly _presets = PRESETS_DATA;
	protected readonly _models = MODELS;
	protected readonly _types = TYPES;
}
