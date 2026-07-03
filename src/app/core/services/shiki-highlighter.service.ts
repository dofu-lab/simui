import { inject, Service } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { createHighlighter, type BundledLanguage, type BundledTheme, type Highlighter } from 'shiki/bundle/web';

export type CodePreviewLanguage = 'angular-ts' | 'angular-html' | 'ts' | 'js' | 'css' | 'json' | 'sh' | 'text';

const SUPPORTED_LANGUAGES = new Set<CodePreviewLanguage>([
	'angular-ts',
	'angular-html',
	'ts',
	'js',
	'css',
	'json',
	'sh',
	'text',
]);

const SHIKI_LANGUAGES: BundledLanguage[] = ['angular-ts', 'angular-html', 'ts', 'js', 'css', 'json', 'sh'];
const SHIKI_THEMES: BundledTheme[] = ['github-light', 'github-dark'];

@Service()
export class ShikiHighlighterService {
	private readonly sanitizer = inject(DomSanitizer);
	private highlighterPromise?: Promise<Highlighter>;

	async highlight(code: string, language: string): Promise<SafeHtml> {
		const highlighter = await this.getHighlighter();
		const lang = this.normalizeLanguage(language);
		const html =
			lang === 'text'
				? this.renderPlainText(code)
				: highlighter.codeToHtml(code, {
						lang,
						themes: {
							light: 'github-light',
							dark: 'github-dark',
						},
						defaultColor: false,
					});

		return this.sanitizer.bypassSecurityTrustHtml(html);
	}

	normalizeLanguage(language: string | null | undefined): CodePreviewLanguage {
		const normalized = language?.trim() as CodePreviewLanguage | undefined;
		return normalized && SUPPORTED_LANGUAGES.has(normalized) ? normalized : 'text';
	}

	private getHighlighter(): Promise<Highlighter> {
		this.highlighterPromise ??= createHighlighter({
			langs: SHIKI_LANGUAGES,
			themes: SHIKI_THEMES,
		});

		return this.highlighterPromise;
	}

	private renderPlainText(code: string): string {
		const lines = this.escapeHtml(code).split('\n');
		const content = lines.map((line) => `<span class="line">${line || ' '}</span>`).join('\n');

		return `<pre class="shiki"><code>${content}</code></pre>`;
	}

	private escapeHtml(value: string): string {
		return value
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}
}
