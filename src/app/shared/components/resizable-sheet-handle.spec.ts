import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorageService } from '@core/services/local-storage.service';
import { STORAGE_KEYS } from '@shared/constants/storage-keys';
import { ResizableSheetHandle } from './resizable-sheet-handle';

@Component({
	imports: [ResizableSheetHandle],
	template: `
		<aside><sim-resizable-sheet-handle /></aside>
	`,
})
class TestHost {}

describe('ResizableSheetHandle', () => {
	let fixture: ComponentFixture<TestHost>;
	let localStorageService: jasmine.SpyObj<LocalStorageService>;

	beforeEach(async () => {
		localStorageService = jasmine.createSpyObj<LocalStorageService>('LocalStorageService', ['getItem', 'setItem']);
		spyOnProperty(window, 'innerWidth', 'get').and.returnValue(1000);

		await TestBed.configureTestingModule({
			imports: [TestHost],
			providers: [{ provide: LocalStorageService, useValue: localStorageService }],
		}).compileComponents();
	});

	it('restores the saved percentage width', () => {
		localStorageService.getItem.and.returnValue(72);

		fixture = TestBed.createComponent(TestHost);
		fixture.detectChanges();

		const sheet = fixture.nativeElement.querySelector('aside') as HTMLElement;
		expect(sheet.style.width).toBe('72dvw');
		expect(sheet.style.maxWidth).toBe('none');
	});

	it('resizes with the keyboard and persists the new width', () => {
		localStorageService.getItem.and.returnValue(50);
		fixture = TestBed.createComponent(TestHost);
		fixture.detectChanges();
		const handle = fixture.nativeElement.querySelector('sim-resizable-sheet-handle') as HTMLElement;

		handle.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
		fixture.detectChanges();

		const sheet = fixture.nativeElement.querySelector('aside') as HTMLElement;
		expect(sheet.style.width).toBe('55dvw');
		expect(localStorageService.setItem).toHaveBeenCalledWith(STORAGE_KEYS.CODE_SHEET_WIDTH_PERCENT, 55);
	});
});
