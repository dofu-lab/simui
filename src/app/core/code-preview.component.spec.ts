import { Clipboard } from '@angular/cdk/clipboard';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import type { SafeHtml } from '@angular/platform-browser';
import { AnalyticsService } from '../services/analytics.service';
import { CodePreviewComponent } from './code-preview.component';
import { ShikiHighlighterService } from './services/shiki-highlighter.service';

describe('CodePreviewComponent analytics', () => {
	let fixture: ComponentFixture<CodePreviewComponent>;
	let analyticsService: jasmine.SpyObj<AnalyticsService>;
	let clipboard: jasmine.SpyObj<Clipboard>;
	let highlighter: jasmine.SpyObj<ShikiHighlighterService>;

	beforeEach(async () => {
		analyticsService = jasmine.createSpyObj<AnalyticsService>('AnalyticsService', [
			'trackComponentCodeCopied',
			'trackEvent',
			'trackInstallCliCopied',
		]);
		clipboard = jasmine.createSpyObj<Clipboard>('Clipboard', ['copy']);
		highlighter = jasmine.createSpyObj<ShikiHighlighterService>('ShikiHighlighterService', [
			'highlight',
			'normalizeLanguage',
		]);
		highlighter.highlight.and.returnValue(
			Promise.resolve('<pre class="shiki"><code><span class="line">code</span></code></pre>' as unknown as SafeHtml),
		);
		highlighter.normalizeLanguage.and.callFake((language) => (language === 'sh' ? 'sh' : 'angular-ts'));

		await TestBed.configureTestingModule({
			imports: [CodePreviewComponent],
			providers: [
				{ provide: AnalyticsService, useValue: analyticsService },
				{ provide: Clipboard, useValue: clipboard },
				{ provide: ShikiHighlighterService, useValue: highlighter },
			],
		}).compileComponents();

		fixture = TestBed.createComponent(CodePreviewComponent);
	});

	it('tracks install command copies with component context', () => {
		fixture.componentRef.setInput('language', 'sh');
		fixture.componentRef.setInput('analyticsComponentId', 'button-01');
		fixture.componentRef.setInput('analyticsCopyKind', 'install_cli');
		fixture.componentRef.setInput('code', 'npx @dofu-lab/simui-cli add button-01');
		fixture.detectChanges();

		clickCopyButton();

		expect(clipboard.copy).toHaveBeenCalledWith('npx @dofu-lab/simui-cli add button-01');
		expect(analyticsService.trackInstallCliCopied).toHaveBeenCalledWith(
			'button-01',
			'npx @dofu-lab/simui-cli add button-01',
		);
	});

	it('tracks component source code copies with component context', () => {
		fixture.componentRef.setInput('analyticsComponentId', 'button-01');
		fixture.componentRef.setInput('analyticsCopyKind', 'component_code');
		fixture.componentRef.setInput('fileName', 'button-01');
		fixture.componentRef.setInput('code', 'export class Button01Component {}');
		fixture.detectChanges();

		clickCopyButton();

		expect(clipboard.copy).toHaveBeenCalledWith('export class Button01Component {}');
		expect(analyticsService.trackComponentCodeCopied).toHaveBeenCalledWith('button-01', {
			copyKind: 'component_code',
			fileName: 'button-01',
			language: 'angular-ts',
		});
	});

	it('hides the copy button when copy is disabled', () => {
		fixture.componentRef.setInput('disableCopy', true);
		fixture.componentRef.setInput('code', 'export class Button01Component {}');
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('button[aria-label="Copy code"]')).toBeNull();
	});

	it('renders the line-number mode class by default', async () => {
		fixture.componentRef.setInput('code', 'const one = 1;');
		fixture.detectChanges();
		await fixture.whenStable();
		fixture.detectChanges();

		expect(fixture.nativeElement.classList).toContain('sim-code-preview--line-numbers');
		expect(fixture.nativeElement.querySelector('.line')).withContext('highlighted code line').not.toBeNull();
	});

	function clickCopyButton(): void {
		const button = fixture.nativeElement.querySelector('button[aria-label="Copy code"]') as HTMLButtonElement | null;
		expect(button).withContext('copy button').not.toBeNull();
		button?.click();
	}
});
