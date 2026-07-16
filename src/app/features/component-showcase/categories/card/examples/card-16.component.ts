import { Component, computed, signal } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';

interface Tool {
	name: string;
	category: 'web' | 'file' | 'chat' | 'code' | 'people';
	description: string;
	isEnabled: boolean;
}

const CATEGORY_STYLE: Record<Tool['category'], { label: string; class: string }> = {
	web: { label: 'Web', class: 'text-green-500' },
	file: { label: 'Files', class: 'text-blue-500' },
	chat: { label: 'Chat', class: 'text-purple-500' },
	code: { label: 'Code', class: 'text-orange-500' },
	people: { label: 'People', class: 'text-pink-500' },
};

@Component({
	selector: 'sim-card-16',
	imports: [HlmCardImports, HlmButtonImports, HlmBadgeImports],
	host: { class: 'w-full' },
	template: `
		<section class="bg-muted flex w-full flex-col gap-4 rounded-4xl p-1.5 py-0 shadow-none">
			<div hlmCardHeader class="flex flex-row items-center justify-between px-6 pt-4">
				<div class="flex items-center gap-2">
					<h3 hlmCardTitle>Tools</h3>
					<span hlmBadge variant="outline" class="text-muted-foreground">
						{{ enabledTools().length }} / {{ tools().length }}
					</span>
				</div>
				@if (availableTools().length === 0) {
					<button hlmBtn variant="outline" size="sm" (click)="disableAll()">Disable all</button>
				} @else {
					<button hlmBtn variant="outline" size="sm" (click)="enableAll()">Enable all</button>
				}
			</div>
			<section class="ring-background! w-full rounded-3xl py-4" hlmCard>
				<div hlmCardContent>
					<div class="text-muted-foreground mb-2">ENABLED</div>
					@for (tool of enabledTools(); track tool.name) {
						<div [class]="toolRowClass(tool.name)" (click)="toggle(tool)">
							<div class="flex items-center gap-2">
								<div class="size-2 shrink-0 rounded-full bg-emerald-500"></div>
								<span>{{ tool.name }}</span>
								<span class="text-xs font-medium" [class]="categoryStyle(tool.category).class">
									{{ categoryStyle(tool.category).label }}
								</span>
							</div>
							<p class="text-muted-foreground min-w-0 flex-1 truncate text-right text-sm">{{ tool.description }}</p>
							<button class="text-muted-foreground/50 group-hover/enabled-item:text-red-500">Remove</button>
						</div>
					} @empty {
						<div class="text-muted-foreground py-3">Nothing enabled. Add a tool from below.</div>
					}

					<div class="text-muted-foreground mt-6 mb-2">AVAILABLE</div>
					@for (tool of availableTools(); track tool.name) {
						<div [class]="toolRowClass(tool.name)" (click)="toggle(tool)">
							<div class="flex items-center gap-2">
								<div class="bg-muted-foreground/30 size-2 shrink-0 rounded-full"></div>
								<span>{{ tool.name }}</span>
								<span class="text-xs font-medium" [class]="categoryStyle(tool.category).class">
									{{ categoryStyle(tool.category).label }}
								</span>
							</div>
							<p class="text-muted-foreground/70 min-w-0 flex-1 truncate text-right text-sm">{{ tool.description }}</p>
							<button class="text-muted-foreground/40 group-hover/enabled-item:text-primary">Add</button>
						</div>
					} @empty {
						<div class="text-muted-foreground py-3">Everything is enabled.</div>
					}
				</div>
			</section>
			<div hlmCardFooter class="bg-muted flex flex-row items-center justify-between px-6 pb-4">
				<span class="flex items-center gap-1 text-sm">
					{{ enabledTools().length }}
					<span class="text-muted-foreground">of</span>
					{{ tools().length }}
					<span class="text-muted-foreground">tools enabled</span>
				</span>
				<span class="text-muted-foreground flex items-center gap-1 text-xs">Tap any tool to move it</span>
			</div>
		</section>
	`,
})
export class Card16Component {
	protected readonly tools = signal<Tool[]>([
		{
			name: 'Web search',
			category: 'web',
			description: 'Live results from Google, DuckDuckGo, Brave',
			isEnabled: true,
		},
		{
			name: 'File system',
			category: 'file',
			description: 'Read, write, and edit files in your workspace',
			isEnabled: true,
		},
		{ name: 'Google Drive', category: 'file', description: 'Search and open Drive documents', isEnabled: true },
		{ name: 'Gmail', category: 'chat', description: 'Draft, read, and reply to email threads', isEnabled: true },
		{ name: 'Contacts', category: 'people', description: 'Look up people by name, email, or org', isEnabled: true },
		{
			name: 'Browser',
			category: 'web',
			description: 'Open URLs, extract page content, take screenshots',
			isEnabled: false,
		},
		{ name: 'Slack', category: 'chat', description: 'Read channels, send messages, search history', isEnabled: false },
		{
			name: 'Code editor',
			category: 'code',
			description: 'Run codemods and refactors against your repo',
			isEnabled: false,
		},
		{ name: 'Shell', category: 'code', description: 'Execute shell commands with confirmation', isEnabled: false },
	]);

	protected readonly enteredTools = signal<Set<string>>(new Set());
	protected readonly enabledTools = computed(() => this.tools().filter((t) => t.isEnabled));
	protected readonly availableTools = computed(() => this.tools().filter((t) => !t.isEnabled));

	protected toolRowClass(toolName: string): string {
		const base =
			'group/enabled-item border-border flex items-center gap-4 border-b border-dashed py-3 select-none last:border-b-0';
		return this.enteredTools().has(toolName) ? base + ' animate-in fade-in-0 slide-in-from-top-1.5 duration-200' : base;
	}

	protected categoryStyle(category: Tool['category']) {
		return CATEGORY_STYLE[category];
	}

	protected toggle(tool: Tool): void {
		this.tools.update((tools) => tools.map((t) => (t.name === tool.name ? { ...t, isEnabled: !t.isEnabled } : t)));
		this.enteredTools.update((s) => new Set([...s, tool.name]));
		setTimeout(() => {
			this.enteredTools.update((s) => {
				const n = new Set(s);
				n.delete(tool.name);
				return n;
			});
		}, 250);
	}

	protected enableAll(): void {
		this.tools.update((tools) => tools.map((t) => ({ ...t, isEnabled: true })));
	}

	protected disableAll(): void {
		this.tools.update((tools) => tools.map((t) => ({ ...t, isEnabled: false })));
	}
}
