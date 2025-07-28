import { Component, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideChartColumnStacked,
	lucideChevronDown,
	lucideImagePlus,
	lucideMic,
	lucideNotepadText,
	lucidePaperclip,
	lucidePenLine,
	lucideSparkles,
	lucideSquareSlash,
	lucideZap,
} from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmCheckboxComponent } from '@spartan-ng/helm/checkbox';
import { HlmDialogComponent, HlmDialogContentComponent, HlmDialogHeaderComponent } from '@spartan-ng/helm/dialog';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmInputDirective } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-dialog-26',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmAvatarComponent,
		HlmAvatarFallbackDirective,
		HlmAvatarImageDirective,
		HlmCheckboxComponent,
		HlmInputDirective,
	],
	providers: [
		provideIcons({
			lucideImagePlus,
			lucideChartColumnStacked,
			lucideZap,
			lucideNotepadText,
			lucidePenLine,
			lucideSparkles,
			lucideChevronDown,
			lucideSquareSlash,
			lucidePaperclip,
			lucideMic,
		}),
	],
	template: `
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Request support</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-120! max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-hidden rounded-lg p-0 sm:max-h-[min(640px,80vh)]"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<hlm-dialog-header class="flex flex-col items-center gap-5 p-6">
						<img src="assets/logos/logo-square.svg" alt="Logo" class="size-14 w-full rounded-md" />
						<div class="flex flex-col items-center px-8 text-center">
							<span class="text-muted-foreground text-lg font-semibold">Hi Alexa</span>
							<span class="text-lg font-semibold">Welcome back! How can I help you?</span>
							<span class="text-muted-foreground mt-2 text-sm">
								I’m here to help tackle your tasks. Choose from the prompts below or tell me what you need!
							</span>
						</div>
					</hlm-dialog-header>
					<div class="flex flex-row flex-wrap items-center justify-center gap-2 px-6 pb-8">
						@for (item of reasons; track item.id) {
							<label
								hlmLabel
								class="border-input has-data-[state=checked]:border-ring relative flex w-fit cursor-pointer items-center justify-center gap-1 rounded-md border py-0.75 pr-2.5 pl-2 shadow-xs transition-colors ease-in-out"
								for="checkbox-{{ item.id }}">
								<hlm-checkbox id="checkbox-{{ item.id }}" class="hidden" />
								<ng-icon hlm class="opacity-60" size="xs" [name]="item.icon" />
								<div class="text-secondary-foreground text-sm select-none">{{ item.text }}</div>
							</label>
						}
					</div>
					<div class="px-6 pb-6">
						<div class="bg-secondary rounded-md border">
							<div class="-mx-px -mt-px">
								<div class="relative">
									<textarea
										hlmInput
										type="text"
										placeholder="Ask me anything..."
										class="bg-background min-h-[80px] w-full"></textarea>
									<div
										class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex cursor-pointer items-start justify-center pe-3 pt-2.5 peer-disabled:opacity-50">
										<ng-icon hlm name="lucideMic" size="sm" />
									</div>
								</div>
							</div>

							<div class="flex justify-between">
								<button hlmBtn variant="ghost" size="sm" class="flex gap-1 rounded-full pl-1.5">
									<hlm-avatar class="size-4">
										<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
										<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
									</hlm-avatar>
									<span class="text-sm">Alexa</span>
									<ng-icon hlm name="lucideChevronDown" size="sm" class="text-muted-foreground" />
								</button>
								<div class="flex gap-2 px-3">
									<div class="group flex cursor-pointer items-center gap-1">
										<ng-icon
											hlm
											name="lucideSquareSlash"
											size="sm"
											class="text-muted-foreground group-hover:text-primary" />
										<span class="text-muted-foreground group-hover:text-primary text-xs">Shortcuts</span>
									</div>
									<div class="group flex cursor-pointer items-center gap-1">
										<ng-icon
											hlm
											name="lucidePaperclip"
											size="sm"
											class="text-muted-foreground group-hover:text-primary" />
										<span class="text-muted-foreground group-hover:text-primary text-xs">Attach</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class Dialog26Component {
	public dialogRef = viewChild(BrnDialogComponent);

	reasons = [
		{
			id: 1,
			text: 'Create image',
			icon: 'lucideImagePlus',
		},
		{
			id: 2,
			text: 'Analyze data',
			icon: 'lucideChartColumnStacked',
		},
		{
			id: 3,
			text: 'Make a plan',
			icon: 'lucideZap',
		},
		{
			id: 4,
			text: 'Summarize text',
			icon: 'lucideNotepadText',
		},
		{
			id: 5,
			text: 'Help me write',
			icon: 'lucidePenLine',
		},
		{
			id: 6,
			text: 'More',
			icon: 'lucideSparkles',
		},
	];

	closeDialog() {
		this.dialogRef()?.close({});
	}
}

export const dialog26Code = `import { Component, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideChartColumnStacked,
	lucideChevronDown,
	lucideImagePlus,
	lucideMic,
	lucideNotepadText,
	lucidePaperclip,
	lucidePenLine,
	lucideSparkles,
	lucideSquareSlash,
	lucideZap,
} from '@ng-icons/lucide';
import { BrnDialogComponent, BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/helm/avatar';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmCheckboxComponent } from '@spartan-ng/helm/checkbox';
import { HlmDialogComponent, HlmDialogContentComponent, HlmDialogHeaderComponent } from '@spartan-ng/helm/dialog';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmInputDirective } from '@spartan-ng/helm/input';

@Component({
	selector: 'sim-dialog-26',
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmDialogComponent,
		HlmDialogContentComponent,
		HlmDialogHeaderComponent,
		BrnDialogTriggerDirective,
		BrnDialogContentDirective,
		HlmButtonDirective,
		HlmAvatarComponent,
		HlmAvatarFallbackDirective,
		HlmAvatarImageDirective,
		HlmCheckboxComponent,
		HlmInputDirective,
	],
	providers: [
		provideIcons({
			lucideImagePlus,
			lucideChartColumnStacked,
			lucideZap,
			lucideNotepadText,
			lucidePenLine,
			lucideSparkles,
			lucideChevronDown,
			lucideSquareSlash,
			lucidePaperclip,
			lucideMic,
		}),
	],
	template: \`
		<hlm-dialog autoFocus="dialog">
			<button brnDialogTrigger hlmBtn variant="outline">Request support</button>
			<hlm-dialog-content
				class="top-1/2 left-1/2 flex max-h-[calc(100vh-2rem)] w-120! max-w-[calc(100%-2rem)] -translate-x-1/2 flex-col gap-0 overflow-hidden rounded-lg p-0 sm:max-h-[min(640px,80vh)]"
				*brnDialogContent="let ctx">
				<div class="flex-1 overflow-y-auto">
					<hlm-dialog-header class="flex flex-col items-center gap-5 p-6">
						<img src="assets/logos/logo-square.svg" alt="Logo" class="size-14 w-full rounded-md" />
						<div class="flex flex-col items-center px-8 text-center">
							<span class="text-muted-foreground text-lg font-semibold">Hi Alexa</span>
							<span class="text-lg font-semibold">Welcome back! How can I help you?</span>
							<span class="text-muted-foreground mt-2 text-sm">
								I’m here to help tackle your tasks. Choose from the prompts below or tell me what you need!
							</span>
						</div>
					</hlm-dialog-header>
					<div class="flex flex-row flex-wrap items-center justify-center gap-2 px-6 pb-8">
						@for (item of reasons; track item.id) {
							<label
								hlmLabel
								class="border-input has-data-[state=checked]:border-ring relative flex w-fit cursor-pointer items-center justify-center gap-1 rounded-md border py-0.75 pr-2.5 pl-2 shadow-xs transition-colors ease-in-out"
								for="checkbox-{{ item.id }}">
								<hlm-checkbox id="checkbox-{{ item.id }}" class="hidden" />
								<ng-icon hlm class="opacity-60" size="xs" [name]="item.icon" />
								<div class="text-secondary-foreground text-sm select-none">{{ item.text }}</div>
							</label>
						}
					</div>
					<div class="px-6 pb-6">
						<div class="bg-secondary rounded-md border">
							<div class="-mx-px -mt-px">
								<div class="relative">
									<textarea
										hlmInput
										type="text"
										placeholder="Ask me anything..."
										class="bg-background min-h-[80px] w-full"></textarea>
									<div
										class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex cursor-pointer items-start justify-center pe-3 pt-2.5 peer-disabled:opacity-50">
										<ng-icon hlm name="lucideMic" size="sm" />
									</div>
								</div>
							</div>

							<div class="flex justify-between">
								<button hlmBtn variant="ghost" size="sm" class="flex gap-1 rounded-full pl-1.5">
									<hlm-avatar class="size-4">
										<img src="assets/avatars/alan-cooper.png" alt="Alan Cooper" hlmAvatarImage />
										<span class="bg-primary text-primary-foreground" hlmAvatarFallback>AC</span>
									</hlm-avatar>
									<span class="text-sm">Alexa</span>
									<ng-icon hlm name="lucideChevronDown" size="sm" class="text-muted-foreground" />
								</button>
								<div class="flex gap-2 px-3">
									<div class="group flex cursor-pointer items-center gap-1">
										<ng-icon
											hlm
											name="lucideSquareSlash"
											size="sm"
											class="text-muted-foreground group-hover:text-primary" />
										<span class="text-muted-foreground group-hover:text-primary text-xs">Shortcuts</span>
									</div>
									<div class="group flex cursor-pointer items-center gap-1">
										<ng-icon
											hlm
											name="lucidePaperclip"
											size="sm"
											class="text-muted-foreground group-hover:text-primary" />
										<span class="text-muted-foreground group-hover:text-primary text-xs">Attach</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</hlm-dialog-content>
		</hlm-dialog>
	\`,
})
export class Dialog26Component {
	public dialogRef = viewChild(BrnDialogComponent);

	reasons = [
		{
			id: 1,
			text: 'Create image',
			icon: 'lucideImagePlus',
		},
		{
			id: 2,
			text: 'Analyze data',
			icon: 'lucideChartColumnStacked',
		},
		{
			id: 3,
			text: 'Make a plan',
			icon: 'lucideZap',
		},
		{
			id: 4,
			text: 'Summarize text',
			icon: 'lucideNotepadText',
		},
		{
			id: 5,
			text: 'Help me write',
			icon: 'lucidePenLine',
		},
		{
			id: 6,
			text: 'More',
			icon: 'lucideSparkles',
		},
	];

	closeDialog() {
		this.dialogRef()?.close({});
	}
}`;
