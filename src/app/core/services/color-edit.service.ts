import { ThemeStyleProps } from '@/app/types';
import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ColorEditService {
	private readonly _editColorKey = signal<keyof ThemeStyleProps | null>(null);
	public readonly editColorKey = this._editColorKey.asReadonly();

	public requestEditColor(colorKey: keyof ThemeStyleProps): void {
		this._editColorKey.set(colorKey);
	}

	public clearEditRequest(): void {
		this._editColorKey.set(null);
	}
}
