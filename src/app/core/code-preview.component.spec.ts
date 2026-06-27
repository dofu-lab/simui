import { Clipboard } from '@angular/cdk/clipboard';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsService } from '../services/analytics.service';
import { CodePreviewComponent } from './code-preview.component';

describe('CodePreviewComponent analytics', () => {
	let fixture: ComponentFixture<CodePreviewComponent>;
	let analyticsService: jasmine.SpyObj<AnalyticsService>;
	let clipboard: jasmine.SpyObj<Clipboard>;

	beforeEach(async () => {
		analyticsService = jasmine.createSpyObj<AnalyticsService>('AnalyticsService', [
			'trackComponentCodeCopied',
			'trackEvent',
			'trackInstallCliCopied',
		]);
		clipboard = jasmine.createSpyObj<Clipboard>('Clipboard', ['copy']);

		await TestBed.configureTestingModule({
			imports: [CodePreviewComponent],
			providers: [
				{ provide: AnalyticsService, useValue: analyticsService },
				{ provide: Clipboard, useValue: clipboard },
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
			language: 'ts',
		});
	});

	function clickCopyButton(): void {
		const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement | null;
		expect(button).withContext('copy button').not.toBeNull();
		button?.click();
	}
});
