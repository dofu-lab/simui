import { Clipboard } from '@angular/cdk/clipboard';
import {
	booleanAttribute,
	ChangeDetectionStrategy,
	Component,
	computed,
	effect,
	inject,
	input,
	numberAttribute,
	signal,
	ViewEncapsulation,
} from '@angular/core';
import type { SafeHtml } from '@angular/platform-browser';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideClipboard, lucideFileCode2, lucideTerminal } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import type { AnalyticsCopyKind } from '../services/analytics.service';
import { AnalyticsService } from '../services/analytics.service';
import { CodePreviewLanguage, ShikiHighlighterService } from './services/shiki-highlighter.service';

@Component({
	selector: 'sim-code-preview',
	imports: [HlmButtonImports, NgIcon, HlmIconImports],
	providers: [provideIcons({ lucideClipboard, lucideCheck, lucideFileCode2, lucideTerminal })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		class:
			'sim-code-preview flex min-h-0 flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground',
		'[class.sim-code-preview--line-numbers]': 'showLineNumbers()',
	},
	template: `
		<div class="border-border bg-card sticky top-0 z-10 flex min-h-10 items-center justify-between gap-3 border-b px-3">
			<div class="flex min-w-0 items-center gap-2">
				<div class="text-muted-foreground flex size-5 shrink-0 items-center justify-center">
					<ng-icon hlm size="sm" [name]="languageIcon()" />
				</div>
				@if (fileName()) {
					<span class="text-muted-foreground truncate text-xs font-medium">{{ fileName() }}</span>
				} @else {
					<span class="text-muted-foreground text-xs font-medium">{{ normalizedLanguage() }}</span>
				}
			</div>

			@if (!disableCopy()) {
				<button
					(click)="copyToClipBoard()"
					hlmBtn
					variant="ghost"
					aria-label="Copy code"
					class="text-muted-foreground hover:text-foreground focus-visible:ring-ring size-7 shrink-0 p-0 focus-visible:ring-2">
					<ng-icon hlm size="xs" [name]="copied() ? 'lucideCheck' : 'lucideClipboard'" />
				</button>
			}
		</div>

		<div class="relative h-fit max-h-full min-h-0">
			<div class="spartan-scroll size-full overflow-auto" [class.max-h-80]="isCollapsed()">
				@if (content()) {
					<div class="sim-code-preview__content text-sm" [innerHTML]="content()"></div>
				} @else {
					<pre class="text-muted-foreground m-0 p-4 font-mono text-sm">Loading...</pre>
				}
			</div>

			@if (isCollapsible()) {
				<div
					class="from-card pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-linear-to-t to-transparent p-3"
					[class.pt-10]="isCollapsed()">
					<button
						hlmBtn
						variant="secondary"
						size="sm"
						class="pointer-events-auto h-8 shadow-sm"
						(click)="expanded.set(!expanded())">
						{{ expanded() ? 'Show less' : 'Show more' }}
					</button>
				</div>
			}
		</div>
	`,
	styles: [
		`
			.sim-code-preview .shiki {
				margin: 0;
				min-width: max-content;
				background: transparent !important;
				color: var(--shiki-light);
				font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
				font-size: inherit;
				line-height: 1;
				tab-size: 2;
			}

			.sim-code-preview .shiki code {
				display: block;
				min-width: max-content;
				padding-block: 0.5rem;
				white-space: pre;
			}

			.sim-code-preview .shiki span {
				color: var(--shiki-light);
			}

			.dark .sim-code-preview .shiki,
			.dark .sim-code-preview .shiki span {
				color: var(--shiki-dark);
			}

			.sim-code-preview .line {
				display: block;
				min-width: 100%;
				padding-inline-end: 1rem;
				padding-inline-start: 3.75rem;
				width: max-content;
			}

			.sim-code-preview--line-numbers .shiki code {
				counter-reset: line;
				position: relative;
			}

			.sim-code-preview--line-numbers .shiki code::before {
				border-inline-end: 1px solid var(--border);
				bottom: 0;
				content: '';
				inset-inline-start: 2.75rem;
				position: absolute;
				top: 0;
			}

			.sim-code-preview--line-numbers .line {
				counter-increment: line;
				position: relative;
			}

			.sim-code-preview--line-numbers .line::before {
				box-sizing: border-box;
				color: var(--muted-foreground);
				content: counter(line);
				display: inline-block;
				margin-inline-end: 1rem;
				margin-inline-start: -3.75rem;
				padding-inline-end: 0.75rem;
				text-align: right;
				user-select: none;
				width: 2.75rem;
			}
		`,
	],
})
export class CodePreviewComponent {
	private readonly clipboard = inject(Clipboard);
	private readonly analyticsService = inject(AnalyticsService);
	private readonly shikiHighlighter = inject(ShikiHighlighterService);
	private renderId = 0;

	protected readonly content = signal<SafeHtml | null>(null);
	protected readonly copied = signal(false);
	protected readonly expanded = signal(false);

	public readonly fileName = input('');
	public readonly analyticsComponentId = input<string | undefined>();
	public readonly analyticsCopyKind = input<AnalyticsCopyKind>('generic_code');
	public readonly disableCopy = input(false, { transform: booleanAttribute });
	public readonly showLineNumbers = input(true, { transform: booleanAttribute });
	public readonly collapsed = input(false, { transform: booleanAttribute });
	public readonly maxCollapsedLines = input(14, { transform: numberAttribute });
	public readonly language = input<CodePreviewLanguage | string>('angular-ts');
	public readonly code = input<string | null | undefined>('');

	protected readonly normalizedLanguage = computed(() => this.shikiHighlighter.normalizeLanguage(this.language()));
	protected readonly lineCount = computed(() => (this.normalizedCode().match(/\n/g) ?? []).length + 1);
	protected readonly isCollapsible = computed(() => this.collapsed() && this.lineCount() > this.maxCollapsedLines());
	protected readonly isCollapsed = computed(() => this.isCollapsible() && !this.expanded());
	protected readonly languageIcon = computed(() =>
		this.normalizedLanguage() === 'sh' ? 'lucideTerminal' : 'lucideFileCode2',
	);
	private readonly normalizedCode = computed(() => this.code()?.trimEnd() ?? '');

	constructor() {
		effect(() => {
			const code = this.normalizedCode();
			const language = this.normalizedLanguage();
			const currentRenderId = ++this.renderId;

			this.expanded.set(false);
			this.content.set(null);
			void this.shikiHighlighter.highlight(code, language).then((content) => {
				if (currentRenderId === this.renderId) {
					this.content.set(content);
				}
			});
		});
	}

	protected copyToClipBoard(): void {
		const code = this.code();
		if (!code) return;

		this.clipboard.copy(code);
		this.copied.set(true);
		setTimeout(() => this.copied.set(false), 3000);

		const componentId = this.analyticsComponentId();
		const copyKind = this.analyticsCopyKind();

		if (componentId && copyKind === 'install_cli') {
			this.analyticsService.trackInstallCliCopied(componentId, code);
			return;
		}

		if (componentId && copyKind === 'component_code') {
			this.analyticsService.trackComponentCodeCopied(componentId, {
				copyKind,
				fileName: this.fileName() || undefined,
				language: this.normalizedLanguage(),
			});
			return;
		}

		this.analyticsService.trackEvent('code_copied', {
			language: this.normalizedLanguage(),
			file_name: this.fileName() || undefined,
		});
	}
}
