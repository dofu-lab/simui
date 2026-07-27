import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentHeaderComponent } from './component-header.component';

describe('ComponentHeaderComponent', () => {
	let fixture: ComponentFixture<ComponentHeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ComponentHeaderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ComponentHeaderComponent);
		fixture.componentRef.setInput('name', 'Button');
		fixture.componentRef.setInput('description', 'Button examples');
		fixture.detectChanges();
	});

	it('renders the category title, description, and component badges', () => {
		expect(fixture.nativeElement.textContent).toContain('Button');
		expect(fixture.nativeElement.textContent).toContain('Button examples');
		expect(fixture.nativeElement.querySelector('app-component-badges')).not.toBeNull();
	});

	it('does not render component badges for non-showcase header uses', () => {
		fixture.componentRef.setInput('name', 'Introduction');
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('app-component-badges')).toBeNull();
	});
});
