import { booleanAttribute, Component, inject, Input, input, ViewEncapsulation } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { markedHighlight } from 'marked-highlight';

import { Clipboard } from '@angular/cdk/clipboard';
import { lucideCheck, lucideClipboard } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import { AnalyticsService } from '../services/analytics.service';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
declare const Prism: typeof import('prismjs');

@Component({
	selector: 'code-preview',
	imports: [HlmButton, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideClipboard, lucideCheck })],
	host: {
		class: 'flex flex-col flex-1 h-full border-border rounded-lg border overflow-hidden',
	},
	template: `
		<div class="sticky top-0 z-10 bg-zinc-50 dark:bg-zinc-950">
			@if (fileName()) {
				<div class="border-border flex flex-row items-center gap-1.5 border-b px-4 py-2.5">
					@if (language === 'ts' || language === 'css') {
						<div class="fill-muted-foreground size-4 shrink-0">
							@switch (language) {
								@case ('ts') {
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
									</svg>
								}
								@case ('css') {
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
										<path
											d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"></path>
									</svg>
								}
							}
						</div>
					} @else if (language === 'sh') {
						<div class="text-muted-foreground border-input rounded-sm border p-0.5 text-xs">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-terminal-icon lucide-terminal">
								<path d="M12 19h8" />
								<path d="m4 17 6-6-6-6" />
							</svg>
						</div>
					}
					<span class="text-muted-foreground truncate text-xs font-medium">{{ fileName() }}</span>
				</div>
			}
			@if (!_disableCopy) {
				<button
					(click)="copyToClipBoard()"
					hlmBtn
					variant="ghost"
					class="text-muted-foreground hover:text-foreground absolute top-1.5 right-2 z-10 size-7 p-0">
					<ng-icon hlm size="xs" [name]="_copied ? 'lucideCheck' : 'lucideClipboard'" />
				</button>
			}
		</div>
		<div
			class="spartan-scroll relative h-fit overflow-auto bg-zinc-50 font-mono text-sm text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
			@if (language === 'sh') {
				<div class="min-h-0 max-w-full p-4" [innerHTML]="_content"></div>
			} @else {
				<div class="min-h-0 max-w-full" [innerHTML]="_content"></div>
			}
		</div>
	`,
	styles: [
		`
			/* ── Base ─────────────────────────────────────────── */
			.spartan-scroll pre {
				margin: 0;
				padding: 1rem;
			}

			.spartan-scroll pre code {
				background: none;
				padding: 0;
				font-size: inherit;
				color: inherit;
				white-space: pre;
			}

			/* ── Light mode token colors (GitHub Light) ───────── */
			.spartan-scroll .token.comment,
			.spartan-scroll .token.prolog,
			.spartan-scroll .token.doctype,
			.spartan-scroll .token.cdata {
				color: #6a737d;
			}

			.spartan-scroll .token.punctuation {
				color: #24292e;
			}

			.spartan-scroll .token.property,
			.spartan-scroll .token.boolean,
			.spartan-scroll .token.number,
			.spartan-scroll .token.constant,
			.spartan-scroll .token.symbol,
			.spartan-scroll .token.deleted {
				color: #005cc5;
			}

			.spartan-scroll .token.tag {
				color: #22863a;
			}

			.spartan-scroll .token.selector,
			.spartan-scroll .token.attr-name,
			.spartan-scroll .token.char,
			.spartan-scroll .token.builtin,
			.spartan-scroll .token.inserted {
				color: #6f42c1;
			}

			.spartan-scroll .token.string {
				color: #032f62;
			}

			.spartan-scroll .token.operator,
			.spartan-scroll .token.entity,
			.spartan-scroll .token.url,
			.spartan-scroll .language-css .token.string,
			.spartan-scroll .style .token.string {
				color: #d73a49;
			}

			.spartan-scroll .token.atrule,
			.spartan-scroll .token.attr-value,
			.spartan-scroll .token.keyword {
				color: #d73a49;
			}

			.spartan-scroll .token.function,
			.spartan-scroll .token.class-name {
				color: #6f42c1;
			}

			.spartan-scroll .token.regex,
			.spartan-scroll .token.important,
			.spartan-scroll .token.variable {
				color: #e36209;
			}

			/* ── Dark mode token colors (One Dark) ────────────── */
			.dark .spartan-scroll .token.comment,
			.dark .spartan-scroll .token.prolog,
			.dark .spartan-scroll .token.doctype,
			.dark .spartan-scroll .token.cdata {
				color: #5c6370;
			}

			.dark .spartan-scroll .token.punctuation {
				color: #abb2bf;
			}

			.dark .spartan-scroll .token.property,
			.dark .spartan-scroll .token.boolean,
			.dark .spartan-scroll .token.number,
			.dark .spartan-scroll .token.constant,
			.dark .spartan-scroll .token.symbol,
			.dark .spartan-scroll .token.deleted {
				color: #d19a66;
			}

			.dark .spartan-scroll .token.tag {
				color: #e06c75;
			}

			.dark .spartan-scroll .token.selector,
			.dark .spartan-scroll .token.attr-name,
			.dark .spartan-scroll .token.char,
			.dark .spartan-scroll .token.builtin,
			.dark .spartan-scroll .token.inserted {
				color: #d19a66;
			}

			.dark .spartan-scroll .token.string {
				color: #98c379;
			}

			.dark .spartan-scroll .token.operator,
			.dark .spartan-scroll .token.entity,
			.dark .spartan-scroll .token.url,
			.dark .spartan-scroll .language-css .token.string,
			.dark .spartan-scroll .style .token.string {
				color: #56b6c2;
			}

			.dark .spartan-scroll .token.atrule,
			.dark .spartan-scroll .token.attr-value,
			.dark .spartan-scroll .token.keyword {
				color: #c678dd;
			}

			.dark .spartan-scroll .token.function,
			.dark .spartan-scroll .token.class-name {
				color: #61afef;
			}

			.dark .spartan-scroll .token.regex,
			.dark .spartan-scroll .token.important,
			.dark .spartan-scroll .token.variable {
				color: #e06c75;
			}

			/* ── Line numbers ─────────────────────────────────── */
			.spartan-scroll pre.line-numbers {
				position: relative;
				padding-left: calc(3rem + 1rem);
				padding-top: 0.5rem;
				counter-reset: linenumber;
			}

			.spartan-scroll .line-numbers-rows {
				position: absolute;
				pointer-events: none;
				top: 0;
				bottom: 0;
				left: 0;
				width: 3rem;
				letter-spacing: -1px;
				border-right: 1px solid oklch(0.922 0 0);
				user-select: none;
				padding-top: 0.5rem;
			}

			.dark .spartan-scroll .line-numbers-rows {
				border-right-color: oklch(1 0 0 / 10%);
			}

			.spartan-scroll .line-numbers-rows > span {
				display: block;
				counter-increment: linenumber;
			}

			.spartan-scroll .line-numbers-rows > span::before {
				content: counter(linenumber);
				color: oklch(0.556 0 0);
				display: block;
				padding-right: 0.8em;
				text-align: right;
			}
		`,
	],
	encapsulation: ViewEncapsulation.None,
})
export class CodePreviewComponent {
	private readonly _clipboard = inject(Clipboard);
	private readonly _analyticsService = inject(AnalyticsService);
	private readonly _marked: typeof marked;
	protected _content = '';
	protected _copied = false;

	public readonly fileName = input('');

	protected _disableCopy = false;
	@Input({ transform: booleanAttribute })
	public set disableCopy(value: boolean) {
		this._disableCopy = value;
	}

	private _language: 'ts' | 'sh' | 'js' | 'css' = 'ts';
	@Input()
	public set language(value: 'ts' | 'sh' | 'js' | 'css') {
		this._language = value;
	}

	public get language() {
		return this._language;
	}

	private _code: string | null | undefined;
	@Input()
	public set code(value: string | null | undefined) {
		this._code = value;
		const codeBlock =
			this._language === 'sh' ? (value?.trim() ?? '') : `\`\`\`${this._language}\n${value?.trim() ?? ''}\n\`\`\``;
		(this._marked.parse(codeBlock) as Promise<string>).then((content: string) => {
			this._content = content;
		});
	}

	constructor() {
		const renderer = new marked.Renderer();
		renderer.code = ({ text, lang }) => {
			if (!lang) {
				return `<pre class="p-4"><code>${text}</code></pre>`;
			}
			const langClass = `language-${lang}`;
			const lineCount = (text.match(/\n/g) ?? []).length + 1;
			const lineNumberSpans = Array.from({ length: lineCount }, () => '<span></span>').join('');
			return `<pre class="line-numbers ${langClass}"><code class="${langClass}">${text}</code><span aria-hidden="true" class="line-numbers-rows">${lineNumberSpans}</span></pre>`;
		};

		marked.use(
			gfmHeadingId(),
			markedHighlight({
				async: true,
				highlight: (code, lang) => {
					lang = lang || 'typescript';
					if (!Prism.languages[lang]) {
						console.warn(`Notice:
    ---------------------------------------------------------------------------------------
    The requested language '${lang}' is not available with the provided setup.
    To enable, import your main.ts as:
      import  'prismjs/components/prism-${lang}';
    ---------------------------------------------------------------------------------------
        `);
						return code;
					}
					return Prism.highlight(code, Prism.languages[lang], lang);
				},
			}),
			{
				renderer,
				pedantic: false,
				gfm: true,
				breaks: false,
			},
		);

		this._marked = marked;
	}

	protected copyToClipBoard(): void {
		if (!this._code) return;
		this._clipboard.copy(this._code);
		this._copied = true;
		setTimeout(() => (this._copied = false), 3000);
		this._analyticsService.trackEvent('code_copied', {
			language: this._language,
			file_name: this.fileName() || undefined,
		});
	}
}
