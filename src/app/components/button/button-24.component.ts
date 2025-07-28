import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBookmark } from '@ng-icons/lucide';
import { BrnToggleDirective } from '@spartan-ng/brain/toggle';
import { BrnTooltipContentDirective, BrnTooltipTriggerDirective } from '@spartan-ng/brain/tooltip';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmToggleDirective } from '@spartan-ng/helm/toggle';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-button-24',
	standalone: true,
	providers: [provideIcons({ lucideBookmark })],
	imports: [
		BrnToggleDirective,
		HlmToggleDirective,
		HlmIconDirective,
		HlmTooltipComponent,
		HlmTooltipTriggerDirective,
		BrnTooltipContentDirective,
		NgIcon,
	],
	template: `
		<hlm-tooltip>
			<button
				hlmToggle
				hlmTooltipTrigger
				hideDelay="1"
				showDelay="1"
				exitAnimationDuration="0"
				class="h-8.5 w-8.5 px-2 hover:bg-sky-200 hover:text-sky-600 data-[state=on]:bg-sky-200 data-[state=on]:text-sky-600"
				(click)="onSelect()">
				<ng-icon hlm name="lucideBookmark" size="sm" />
			</button>
			<span *brnTooltipContent class="flex items-center">
				{{ tooltipLabel() }}
			</span>
		</hlm-tooltip>
	`,
})
export class Button24Component {
	tooltip = viewChild<BrnTooltipTriggerDirective>(BrnTooltipTriggerDirective);
	state = signal<'on' | 'off'>('off');
	tooltipLabel = computed(() => (this.state() === 'on' ? 'Remove bookmark' : 'Add bookmark'));

	public onSelect(): void {
		this.tooltip()?.hide();
		this.state.set(this.state() === 'on' ? 'off' : 'on');
	}
}

export const button24Code = `import { Component, computed, signal, viewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBookmark } from '@ng-icons/lucide';
import { BrnToggleDirective } from '@spartan-ng/brain/toggle';
import { BrnTooltipContentDirective, BrnTooltipTriggerDirective } from '@spartan-ng/brain/tooltip';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
import { HlmToggleDirective } from '@spartan-ng/helm/toggle';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-button-24',
	standalone: true,
	providers: [provideIcons({ lucideBookmark })],
	imports: [
		BrnToggleDirective,
		HlmToggleDirective,
		HlmIconDirective,
		HlmTooltipComponent,
		HlmTooltipTriggerDirective,
		BrnTooltipContentDirective,
		NgIcon,
	],
	template: \`
		<hlm-tooltip>
			<button
				hlmToggle
				hlmTooltipTrigger
				hideDelay="1"
				showDelay="1"
				exitAnimationDuration="0"
				class="h-8.5 w-8.5 px-2 hover:bg-sky-200 hover:text-sky-600 data-[state=on]:bg-sky-200 data-[state=on]:text-sky-600"
				(click)="onSelect()">
				<ng-icon hlm name="lucideBookmark" size="sm" />
			</button>
			<span *brnTooltipContent class="flex items-center">
				{{ tooltipLabel() }}
			</span>
		</hlm-tooltip>
	\`,
})
export class Button24Component {
	tooltip = viewChild<BrnTooltipTriggerDirective>(BrnTooltipTriggerDirective);
	state = signal<'on' | 'off'>('off');
	tooltipLabel = computed(() => (this.state() === 'on' ? 'Remove bookmark' : 'Add bookmark'));

	public onSelect(): void {
		this.tooltip()?.hide();
		this.state.set(this.state() === 'on' ? 'off' : 'on');
	}
}`;
