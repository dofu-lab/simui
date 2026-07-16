import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';

interface CommandAction {
	label: string;
	shortcut: string;
}

@Component({
	selector: 'sim-popover-10',
	imports: [HlmButtonImports, HlmInputImports, FormsModule, HlmPopoverImports],
	template: `
		<hlm-popover sideOffset="5" autoFocus="dialog">
			<button hlmBtn hlmPopoverTrigger variant="outline" size="sm">Command Palette</button>
			<div hlmPopoverContent class="grid w-80 gap-3 p-3" *hlmPopoverPortal="let ctx">
				<input hlmInput type="text" placeholder="Type a command..." [(ngModel)]="query" class="w-full" />

				<ul class="grid max-h-56 overflow-y-auto text-sm">
					@for (action of filteredActions(); track $index) {
						<li
							(click)="execute(action, ctx)"
							class="hover:bg-muted flex cursor-pointer items-center justify-between rounded-md p-2 transition-colors motion-reduce:transition-none">
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
		</hlm-popover>
	`,
})
export class Popover10Component {
	protected readonly actions: CommandAction[] = [
		{ label: 'Open Settings', shortcut: '⌘ + ,' },
		{ label: 'New File', shortcut: '⌘ + N' },
		{ label: 'Save Project', shortcut: '⌘ + S' },
		{ label: 'Search Files', shortcut: '⌘ + P' },
		{ label: 'Toggle Sidebar', shortcut: '⌘ + B' },
	];

	protected readonly query = signal('');
	protected readonly filteredActions = computed(() => {
		const q = this.query().toLowerCase();
		return this.actions.filter((a) => a.label.toLowerCase().includes(q));
	});

	public execute(action: CommandAction, ctx: { close: () => void }): void {
		ctx.close();
	}
}
