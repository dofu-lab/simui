import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSave, lucideX } from '@ng-icons/lucide';
import { BrnTooltipContentTemplate } from '@spartan-ng/brain/tooltip';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmScrollArea } from '@spartan-ng/helm/scroll-area';
import { HlmSlider } from '@spartan-ng/helm/slider';
import { HlmTooltip, HlmTooltipTrigger } from '@spartan-ng/helm/tooltip';
import { NgScrollbarModule } from 'ngx-scrollbar';

type ProfileSetting = {
	setting60Hz: number;
	setting250Hz: number;
	setting1kHz: number;
	setting4kHz: number;
	setting16kHz: number;
};

type Profile = {
	name: string;
	settings: ProfileSetting;
};

@Component({
	selector: 'sim-slider-18',
	imports: [
		HlmSlider,
		HlmLabel,
		FormsModule,
		NgClass,
		HlmButton,
		NgIcon,
		HlmIcon,
		HlmTooltip,
		HlmTooltipTrigger,
		HlmScrollArea,
		BrnTooltipContentTemplate,
		NgScrollbarModule,
	],
	providers: [provideIcons({ lucideSave, lucideX })],
	host: {
		class: 'w-full h-100',
	},
	template: `
		<span hlmLabel class="mb-4">Equalizer</span>
		<table class="w-full border-0">
			<thead>
				<tr class="border-0">
					<td>
						<hlm-tooltip>
							<button hlmTooltipTrigger hlmBtn variant="outline" class="size-8" size="icon" (click)="saveProfile()">
								<ng-icon hlm name="lucideSave" class="opacity-60" size="sm" />
							</button>
							<span *brnTooltipContent class="flex items-center">
								Save profile
								<span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
									<svg
										class="bg-primary fill-primary z-50 block size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
										width="10"
										height="5"
										viewBox="0 0 30 10"
										preserveAspectRatio="none">
										<polygon points="0,0 30,0 15,10"></polygon>
									</svg>
								</span>
							</span>
						</hlm-tooltip>
					</td>
					<th class="text-muted-foreground border-0 pb-2 text-left text-xs font-normal">
						<div
							class="text-muted-foreground mt-3 flex w-full items-center justify-between gap-1 px-3 text-xs font-medium">
							@for (tick of ticks; track tick) {
								<span class="flex w-0 flex-col items-center justify-center gap-2">
									<span [ngClass]="{ 'opacity-0': tick % skipInterval !== 0 }">
										{{ valueLabels[tick] }}
									</span>
									<span
										class="bg-muted-foreground/70 h-1 w-px"
										[ngClass]="{ 'h-0.5!': tick % skipInterval !== 0 }"></span>
								</span>
							}
						</div>
					</th>
				</tr>
			</thead>
			<tbody class="space-y-2">
				<tr class="h-8 border-0">
					<td class="text-muted-foreground w-10 border-0 py-1 text-xs">60</td>
					<td class="border-0 py-1">
						<hlm-slider
							class="[&>span]:h-4 [&>span]:w-6 [&>span]:rounded"
							[min]="-5"
							[max]="5"
							[(value)]="slider60Hz" />
					</td>
				</tr>
				<tr class="h-8 border-0">
					<td class="text-muted-foreground w-10 border-0 py-1 text-xs">250</td>
					<td class="border-0 py-1">
						<hlm-slider
							class="[&>span]:h-4 [&>span]:w-6 [&>span]:rounded"
							[min]="-5"
							[max]="5"
							[(value)]="slider250Hz" />
					</td>
				</tr>
				<tr class="h-8 border-0">
					<td class="text-muted-foreground w-10 border-0 py-1 text-xs">1k</td>
					<td class="border-0 py-1">
						<hlm-slider
							class="[&>span]:h-4 [&>span]:w-6 [&>span]:rounded"
							[min]="-5"
							[max]="5"
							[(value)]="slider1000Hz" />
					</td>
				</tr>
				<tr class="h-8 border-0">
					<td class="text-muted-foreground w-10 border-0 py-1 text-xs">4k</td>
					<td class="border-0 py-1">
						<hlm-slider
							[min]="-5"
							[max]="5"
							[(value)]="slider4000Hz"
							class="[&>span]:h-4 [&>span]:w-6 [&>span]:rounded" />
					</td>
				</tr>
				<tr class="h-8 border-0">
					<td class="text-muted-foreground w-10 border-0 py-1 text-xs">16k</td>
					<td class="border-0 py-1">
						<hlm-slider
							class="[&>span]:h-4 [&>span]:w-6 [&>span]:rounded"
							[min]="-5"
							[max]="5"
							[(value)]="slider16000Hz" />
					</td>
				</tr>
			</tbody>
		</table>

		<span hlmLabel class="mt-6 mb-4 block">Setting profiles</span>
		<ng-scrollbar hlm class="h-25">
			<div class="flex w-full flex-row flex-wrap gap-2 py-2">
				@for (savedProfile of savedProfile(); track $index; let i = $index) {
					<div>
						<div class="relative w-fit">
							<button hlmBtn variant="outline" class="flex-1" (click)="onLoadProfile(savedProfile.settings)">
								{{ savedProfile.name }}
							</button>
							<button
								hlmBtn
								size="icon"
								class="border-background absolute -top-2 -right-2 size-5 cursor-pointer rounded-full border-2"
								(click)="onRemoveProfile(i)">
								<ng-icon hlm name="lucideX" size="xs" />
							</button>
						</div>
					</div>
				}
			</div>
		</ng-scrollbar>
	`,
})
export class Slider18Component {
	public readonly skipInterval = 2;
	public readonly ticks = [...Array(11)].map((_, i) => i);
	public readonly valueLabels = ['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3', '4', '5'];
	public readonly slider60Hz = signal(-1);
	public readonly slider250Hz = signal(3);
	public readonly slider1000Hz = signal(1);
	public readonly slider4000Hz = signal(2);
	public readonly slider16000Hz = signal(-4);
	public readonly savedProfile = signal<Profile[]>([
		{
			name: 'Bass Boost',
			settings: {
				setting60Hz: 4,
				setting250Hz: 0,
				setting1kHz: 2,
				setting4kHz: 1,
				setting16kHz: -4,
			},
		},
		{
			name: 'Vocal Boost',
			settings: {
				setting60Hz: -2,
				setting250Hz: 4,
				setting1kHz: 1,
				setting4kHz: 4,
				setting16kHz: -1,
			},
		},
		{
			name: 'Treble Boost',
			settings: {
				setting60Hz: -3,
				setting250Hz: 3,
				setting1kHz: 0,
				setting4kHz: 1,
				setting16kHz: 4,
			},
		},
	]);
	public profileCount = signal(1);

	public onLoadProfile(settings: ProfileSetting): void {
		this.slider60Hz.set(settings.setting60Hz);
		this.slider250Hz.set(settings.setting250Hz);
		this.slider1000Hz.set(settings.setting1kHz);
		this.slider4000Hz.set(settings.setting4kHz);
		this.slider16000Hz.set(settings.setting16kHz);
	}

	public saveProfile(): void {
		const newProfile: Profile = {
			name: `Profile ${this.profileCount()}`,
			settings: {
				setting60Hz: this.slider60Hz(),
				setting250Hz: this.slider250Hz(),
				setting1kHz: this.slider1000Hz(),
				setting4kHz: this.slider4000Hz(),
				setting16kHz: this.slider16000Hz(),
			},
		};
		this.savedProfile.update((profiles) => [...profiles, newProfile]);
		this.profileCount.update((count) => count + 1);
	}

	public onRemoveProfile(index: number): void {
		this.savedProfile.update((profiles) => profiles.filter((_, i) => i !== index));
	}
}

export const slider18Code = `import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSave, lucideX } from '@ng-icons/lucide';
import { BrnTooltipContentTemplate } from '@spartan-ng/brain/tooltip';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmScrollArea } from '@spartan-ng/helm/scroll-area';
import { HlmSlider } from '@spartan-ng/helm/slider';
import { HlmTooltip, HlmTooltipTrigger } from '@spartan-ng/helm/tooltip';
import { NgScrollbarModule } from 'ngx-scrollbar';

type ProfileSetting = {
	setting60Hz: number;
	setting250Hz: number;
	setting1kHz: number;
	setting4kHz: number;
	setting16kHz: number;
};

type Profile = {
	name: string;
	settings: ProfileSetting;
};

@Component({
	selector: 'sim-slider-18',
	imports: [
		HlmSlider,
		HlmLabel,
		FormsModule,
		NgClass,
		HlmButton,
		NgIcon,
		HlmIcon,
		HlmTooltip,
		HlmTooltipTrigger,
		HlmScrollArea,
		BrnTooltipContentTemplate,
		NgScrollbarModule,
	],
	providers: [provideIcons({ lucideSave, lucideX })],
	host: {
		class: 'w-full h-100',
	},
	template: \`
		<span hlmLabel class="mb-4">Equalizer</span>
		<table class="w-full border-0">
			<thead>
				<tr class="border-0">
					<td>
						<hlm-tooltip>
							<button hlmTooltipTrigger hlmBtn variant="outline" class="size-8" size="icon" (click)="saveProfile()">
								<ng-icon hlm name="lucideSave" class="opacity-60" size="sm" />
							</button>
							<span *brnTooltipContent class="flex items-center">
								Save profile
								<span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
									<svg
										class="bg-primary fill-primary z-50 block size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
										width="10"
										height="5"
										viewBox="0 0 30 10"
										preserveAspectRatio="none">
										<polygon points="0,0 30,0 15,10"></polygon>
									</svg>
								</span>
							</span>
						</hlm-tooltip>
					</td>
					<th class="text-muted-foreground border-0 pb-2 text-left text-xs font-normal">
						<div
							class="text-muted-foreground mt-3 flex w-full items-center justify-between gap-1 px-3 text-xs font-medium">
							@for (tick of ticks; track tick) {
								<span class="flex w-0 flex-col items-center justify-center gap-2">
									<span [ngClass]="{ 'opacity-0': tick % skipInterval !== 0 }">
										{{ valueLabels[tick] }}
									</span>
									<span
										class="bg-muted-foreground/70 h-1 w-px"
										[ngClass]="{ 'h-0.5!': tick % skipInterval !== 0 }"></span>
								</span>
							}
						</div>
					</th>
				</tr>
			</thead>
			<tbody class="space-y-2">
				<tr class="h-8 border-0">
					<td class="text-muted-foreground w-10 border-0 py-1 text-xs">60</td>
					<td class="border-0 py-1">
						<hlm-slider
							class="[&>span]:h-4 [&>span]:w-6 [&>span]:rounded"
							[min]="-5"
							[max]="5"
							[(value)]="slider60Hz" />
					</td>
				</tr>
				<tr class="h-8 border-0">
					<td class="text-muted-foreground w-10 border-0 py-1 text-xs">250</td>
					<td class="border-0 py-1">
						<hlm-slider
							class="[&>span]:h-4 [&>span]:w-6 [&>span]:rounded"
							[min]="-5"
							[max]="5"
							[(value)]="slider250Hz" />
					</td>
				</tr>
				<tr class="h-8 border-0">
					<td class="text-muted-foreground w-10 border-0 py-1 text-xs">1k</td>
					<td class="border-0 py-1">
						<hlm-slider
							class="[&>span]:h-4 [&>span]:w-6 [&>span]:rounded"
							[min]="-5"
							[max]="5"
							[(value)]="slider1000Hz" />
					</td>
				</tr>
				<tr class="h-8 border-0">
					<td class="text-muted-foreground w-10 border-0 py-1 text-xs">4k</td>
					<td class="border-0 py-1">
						<hlm-slider
							[min]="-5"
							[max]="5"
							[(value)]="slider4000Hz"
							class="[&>span]:h-4 [&>span]:w-6 [&>span]:rounded" />
					</td>
				</tr>
				<tr class="h-8 border-0">
					<td class="text-muted-foreground w-10 border-0 py-1 text-xs">16k</td>
					<td class="border-0 py-1">
						<hlm-slider
							class="[&>span]:h-4 [&>span]:w-6 [&>span]:rounded"
							[min]="-5"
							[max]="5"
							[(value)]="slider16000Hz" />
					</td>
				</tr>
			</tbody>
		</table>

		<span hlmLabel class="mt-6 mb-4 block">Setting profiles</span>
		<ng-scrollbar hlm class="h-25">
			<div class="flex w-full flex-row flex-wrap gap-2 py-2">
				@for (savedProfile of savedProfile(); track $index; let i = $index) {
					<div>
						<div class="relative w-fit">
							<button hlmBtn variant="outline" class="flex-1" (click)="onLoadProfile(savedProfile.settings)">
								{{ savedProfile.name }}
							</button>
							<button
								hlmBtn
								size="icon"
								class="border-background absolute -top-2 -right-2 size-5 cursor-pointer rounded-full border-2"
								(click)="onRemoveProfile(i)">
								<ng-icon hlm name="lucideX" size="xs" />
							</button>
						</div>
					</div>
				}
			</div>
		</ng-scrollbar>
	\`,
})
export class Slider18Component {
	public readonly skipInterval = 2;
	public readonly ticks = [...Array(11)].map((_, i) => i);
	public readonly valueLabels = ['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3', '4', '5'];
	public readonly slider60Hz = signal(-1);
	public readonly slider250Hz = signal(3);
	public readonly slider1000Hz = signal(1);
	public readonly slider4000Hz = signal(2);
	public readonly slider16000Hz = signal(-4);
	public readonly savedProfile = signal<Profile[]>([
		{
			name: 'Bass Boost',
			settings: {
				setting60Hz: 4,
				setting250Hz: 0,
				setting1kHz: 2,
				setting4kHz: 1,
				setting16kHz: -4,
			},
		},
		{
			name: 'Vocal Boost',
			settings: {
				setting60Hz: -2,
				setting250Hz: 4,
				setting1kHz: 1,
				setting4kHz: 4,
				setting16kHz: -1,
			},
		},
		{
			name: 'Treble Boost',
			settings: {
				setting60Hz: -3,
				setting250Hz: 3,
				setting1kHz: 0,
				setting4kHz: 1,
				setting16kHz: 4,
			},
		},
	]);
	public profileCount = signal(1);

	public onLoadProfile(settings: ProfileSetting): void {
		this.slider60Hz.set(settings.setting60Hz);
		this.slider250Hz.set(settings.setting250Hz);
		this.slider1000Hz.set(settings.setting1kHz);
		this.slider4000Hz.set(settings.setting4kHz);
		this.slider16000Hz.set(settings.setting16kHz);
	}

	public saveProfile(): void {
		const newProfile: Profile = {
			name: \`Profile \${this.profileCount()}\`,
			settings: {
				setting60Hz: this.slider60Hz(),
				setting250Hz: this.slider250Hz(),
				setting1kHz: this.slider1000Hz(),
				setting4kHz: this.slider4000Hz(),
				setting16kHz: this.slider16000Hz(),
			},
		};
		this.savedProfile.update((profiles) => [...profiles, newProfile]);
		this.profileCount.update((count) => count + 1);
	}

	public onRemoveProfile(index: number): void {
		this.savedProfile.update((profiles) => profiles.filter((_, i) => i !== index));
	}
}`;
