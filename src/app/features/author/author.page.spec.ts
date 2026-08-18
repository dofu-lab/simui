import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AnalyticsService } from '@core/services/analytics.service';
import { AuthorPage } from './author.page';

describe('AuthorPage analytics', () => {
	let fixture: ComponentFixture<AuthorPage>;
	let analyticsService: jasmine.SpyObj<AnalyticsService>;

	beforeEach(async () => {
		analyticsService = jasmine.createSpyObj<AnalyticsService>('AnalyticsService', [
			'trackAuthorProfileViewed',
			'trackAuthorSocialLinkClicked',
		]);

		await TestBed.configureTestingModule({
			imports: [AuthorPage],
			providers: [provideRouter([]), { provide: AnalyticsService, useValue: analyticsService }],
		}).compileComponents();

		fixture = TestBed.createComponent(AuthorPage);
		fixture.detectChanges();
	});

	it('tracks one profile view when the page initializes', () => {
		expect(analyticsService.trackAuthorProfileViewed).toHaveBeenCalledOnceWith();
	});

	it('tracks each social link with its platform and destination', () => {
		const host = fixture.nativeElement as HTMLElement;
		const links = host.querySelectorAll<HTMLAnchorElement>('nav[aria-label="Phuong Tran profiles and contact"] a');

		links.forEach((link) => link.click());

		expect(analyticsService.trackAuthorSocialLinkClicked.calls.allArgs()).toEqual([
			['github', 'https://github.com/dongphuong0905'],
			['linkedin', 'https://www.linkedin.com/in/dongphuongtran/'],
			['x', 'https://x.com/PhuongTranDong'],
		]);
	});
});
