import { Component } from '@angular/core';
import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { HlmAvatarImage } from './hlm-avatar-image.directive';

@Component({
	selector: 'hlm-mock',
	standalone: true,
	imports: [HlmAvatarImage],
	template: `
		<img hlmAvatarImage alt="Avatar image" [class]="userCls" />
	`,
})
class HlmMock {
	public userCls = '';
}

describe('HlmAvatarImage', () => {
	let component: HlmMock;
	let fixture: ComponentFixture<HlmMock>;

	beforeEach(() => {
		fixture = TestBed.createComponent(HlmMock);
		component = fixture.componentInstance;
	});

	it('should compile', () => {
		expect(component).toBeTruthy();
	});

	it('should add the default classes if no inputs are provided', () => {
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('img').className).toBe('aspect-square h-full object-cover w-full');
	});

	it('should add any user defined classes', async () => {
		component.userCls = 'test-class';
		fixture.detectChanges();

		// fallback uses Promise.resolve().then() so we need to wait for the next tick
		setTimeout(() => {
			expect(fixture.nativeElement.querySelector('img').className).toContain('test-class');
		});
	});
});
