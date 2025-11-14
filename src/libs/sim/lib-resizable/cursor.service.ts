import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CursorState } from './type';

@Injectable()
export class CursorService {
	private currentCursorStyle: string | null = null;
	private styleElement: HTMLStyleElement | null = null;

	constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

	getCursorStyle(state: CursorState): string {
		switch (state) {
			case 'horizontal':
				return 'ew-resize';
			case 'intersection':
				return 'move';
			case 'vertical':
				return 'ns-resize';
		}
	}

	setCursorStyle(state: CursorState) {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		const style = this.getCursorStyle(state);
		if (this.currentCursorStyle === style) {
			return;
		}

		this.currentCursorStyle = style;

		if (!this.styleElement) {
			this.styleElement = document.createElement('style');
			document.head.appendChild(this.styleElement);
		}

		this.styleElement.textContent = `*:hover { cursor: ${style} !important; }`;
	}

	resetCursorStyle() {
		console.log('resetCursorStyle called');
		if (!isPlatformBrowser(this.platformId) || !this.styleElement) {
			return;
		}

		document.head.removeChild(this.styleElement);
		this.styleElement = null;
		this.currentCursorStyle = null;
	}
}
