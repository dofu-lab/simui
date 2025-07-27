import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
	selector: 'sim-popover-10',
	standalone: true,
	imports: [
		HlmButtonDirective,
		BrnPopoverComponent,
		BrnPopoverTriggerDirective,
		BrnPopoverContentDirective,
		HlmPopoverContentDirective,
		HlmInputDirective,
		FormsModule,
	],
	template: `
		<brn-popover sideOffset="5">
			<button hlmBtn variant="outline" brnPopoverTrigger>Command Palette</button>

			<div hlmPopoverContent class="grid w-80 gap-4 p-4" *brnPopoverContent="let ctx">
				<input hlmInput type="text" placeholder="Type a command..." [(ngModel)]="query" class="w-full" />

				<ul class="grid max-h-56 gap-1 overflow-y-auto text-sm">
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
	query = '';

	actions = [
		{ label: 'Open Settings', shortcut: '⌘ + ,' },
		{ label: 'New File', shortcut: '⌘ + N' },
		{ label: 'Save Project', shortcut: '⌘ + S' },
		{ label: 'Search Files', shortcut: '⌘ + P' },
		{ label: 'Toggle Sidebar', shortcut: '⌘ + B' },
	];

	filteredActions() {
		const q = this.query.toLowerCase();
		return this.actions.filter((a) => a.label.toLowerCase().includes(q));
	}

	execute(action: { label: string }, ctx: { close: () => void }) {
		ctx.close();
	}
}
export const Popover10Code = `
import { Component } from '@angular/core';
import {
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/brain/popover';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sim-popover-10',
  standalone: true,
  imports: [
    HlmButtonDirective,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
    HlmInputDirective,
    FormsModule,
  ],
  template: \`
    <brn-popover sideOffset="5">
      <button hlmBtn variant="outline" brnPopoverTrigger>Command Palette</button>

      <div hlmPopoverContent class="w-80 p-4 grid gap-4" *brnPopoverContent="let ctx">
        <input
          hlmInput
          type="text"
          placeholder="Type a command..."
          [(ngModel)]="query"
          class="w-full"
        />

        <ul class="grid gap-1 max-h-56 overflow-y-auto text-sm">
          @for (action of filteredActions(); track $index) {
            <li (click)="execute(action, ctx)"
              class="flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors hover:bg-muted"
            >
              <span>{{ action.label }}</span>
              <kbd  class="text-xs bg-muted px-1 py-0.5 rounded">
                {{ action.shortcut }}
              </kbd>
            </li>
          }
        </ul>

        @if (filteredActions().length === 0) {
          <p class="text-xs text-muted-foreground text-center">
            No commands found.
          </p>
        }
      </div>
    </brn-popover>
  \`,
})
export class Popover10Component {
  query = '';

  actions = [
    { label: 'Open Settings', shortcut: '⌘ + ,' },
    { label: 'New File', shortcut: '⌘ + N' },
    { label: 'Save Project', shortcut: '⌘ + S' },
    { label: 'Search Files', shortcut: '⌘ + P' },
    { label: 'Toggle Sidebar', shortcut: '⌘ + B' },
  ];

  filteredActions() {
    const q = this.query.toLowerCase();
    return this.actions.filter(a => a.label.toLowerCase().includes(q));
  }

  execute(action: { label: string }, ctx: { close: () => void }) {
    ctx.close();
  }
}
`;
