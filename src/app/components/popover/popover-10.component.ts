import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrnPopover, BrnPopoverContent, BrnPopoverTrigger } from '@spartan-ng/brain/popover';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmPopoverContent } from '@spartan-ng/helm/popover';

@Component({
	selector: 'sim-popover-10',
	imports: [HlmButton, BrnPopover, BrnPopoverTrigger, BrnPopoverContent, HlmPopoverContent, HlmInput, FormsModule],
	template: `
		<brn-popover sideOffset="5" autoFocus="dialog">
			<button hlmBtn brnPopoverTrigger variant="outline" size="sm">Command Palette</button>

			<div hlmPopoverContent class="grid w-80 gap-3 p-3" *brnPopoverContent="let ctx">
				<input hlmInput type="text" placeholder="Type a command..." [(ngModel)]="query" class="w-full" />

				<ul class="grid max-h-56 overflow-y-auto text-sm">
					@for (action of filteredActions(); track $index) {
						<li
							(click)="execute(action, ctx)"
							class="hover:bg-muted flex cursor-pointer items-center justify-between rounded-md p-2 transition-colors">
							<span>{{ action.label }}</span>
							<kbd class="bg-muted rounded px-1 py-0.5 text-xs">
								{{ action.shortcut }}
							</kbd>
						</li>
					}
				</ul>

				@if (filteredActions().length === 0) {
					<p class="text-muted-foreground text-center text-xs">No commands found.</p>
				}
			</div>
		</brn-popover>
	`,
})
export class Popover10Component {
	public readonly actions = [
		{ label: 'Open Settings', shortcut: '⌘ + ,' },
		{ label: 'New File', shortcut: '⌘ + N' },
		{ label: 'Save Project', shortcut: '⌘ + S' },
		{ label: 'Search Files', shortcut: '⌘ + P' },
		{ label: 'Toggle Sidebar', shortcut: '⌘ + B' },
	];

	query = signal('');
	filteredActions = computed(() => {
		const q = this.query().toLowerCase();
		return this.actions.filter((a) => a.label.toLowerCase().includes(q));
	});

	public execute(action: { label: string }, ctx: { close: () => void }): void {
		ctx.close();
	}
}