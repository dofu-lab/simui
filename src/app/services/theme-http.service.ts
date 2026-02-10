import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {
	ThemeHistoryPayload,
	ThemeListResponse,
	ThemePreset,
	ThemeVersionHistoryEntry,
	ThemeVersionHistoryListResponse,
} from '../types';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class ThemeHttpService {
	private readonly apiUrl = environment.apiUrl;
	private readonly http = inject(HttpClient);
	private readonly authService = inject(AuthService);

	getThemes(page: number = 1, pageSize: number = 100): Observable<ThemePreset[]> {
		// Only fetch user themes if authenticated
		if (!this.authService.isAuthenticated()) {
			return of([]);
		}

		return this.http
			.get<ThemeListResponse>(`${this.apiUrl}/theme`, {
				params: { page: page.toString(), pageSize: pageSize.toString() },
			})
			.pipe(map((response) => response.items));
	}

	createTheme(theme: ThemePreset): Observable<ThemePreset> {
		const payload = {
			id: theme.id,
			label: theme.label,
			styles: theme.styles,
		};
		return this.http.post<ThemePreset>(`${this.apiUrl}/theme`, payload);
	}

	updateTheme(themeId: string, theme: ThemeHistoryPayload): Observable<ThemePreset> {
		if (!this.authService.isAuthenticated()) {
			return of({} as ThemePreset);
		}

		const payload = {
			label: theme.label,
			styles: theme.styles,
			changeNote: theme.changeNote,
		};
		return this.http.put<ThemePreset>(`${this.apiUrl}/theme/${themeId}`, payload);
	}

	getThemeHistory(themeId: string, page: number = 1, pageSize: number = 20): Observable<ThemeVersionHistoryEntry[]> {
		if (!this.authService.isAuthenticated()) {
			return of([]);
		}

		return this.http
			.get<ThemeVersionHistoryListResponse>(`${this.apiUrl}/theme/${themeId}/history`, {
				params: { page: page.toString(), pageSize: pageSize.toString() },
			})
			.pipe(map((response) => response.history));
	}
}
