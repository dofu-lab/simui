import { ThemeStyleProps } from '@/app/types';
import { Service, signal } from '@angular/core';

@Service()
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
