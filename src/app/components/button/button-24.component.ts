import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBookmark } from '@ng-icons/lucide';
import { HlmToggleImports } from '@spartan-ng/helm/toggle';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'sim-button-24',
	providers: [provideIcons({ lucideBookmark })],
	imports: [HlmToggleImports, NgIcon, HlmTooltipImports],
	template: `
		<button
			hlmToggle
			class="h-8.5 w-8.5 px-2 hover:bg-sky-200 hover:text-sky-600 data-[state=on]:bg-sky-200 data-[state=on]:text-sky-600"
			[hideDelay]="1"
			[showDelay]="1"
			[hlmTooltip]="tooltipContent"
			(click)="onSelect()">
			<ng-icon name="lucideBookmark" />
		</button>
		<ng-template #tooltipContent>
			{{ tooltipLabel() }}
		</ng-template>
	`,
})
export class Button24Component {
	state = signal<'on' | 'off'>('off');
	tooltipLabel = computed(() => (this.state() === 'on' ? 'Remove bookmark' : 'Add bookmark'));

	public onSelect(): void {
		this.state.set(this.state() === 'on' ? 'off' : 'on');
	}
}
