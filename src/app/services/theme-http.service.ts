import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
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

@Service()
export class ThemeHttpService {
	private readonly apiUrl = `${environment.apiUrl}/v1/theme`;
	private readonly http = inject(HttpClient);
	private readonly authService = inject(AuthService);

	public getThemes(page = 1, pageSize = 50): Observable<ThemePreset[]> {
		// Only fetch user themes if authenticated
		if (!this.authService.isAuthenticated()) {
			return of([]);
		}

		return this.http
			.get<ThemeListResponse>(`${this.apiUrl}`, {
				params: { page: page.toString(), pageSize: pageSize.toString() },
			})
			.pipe(map((response) => response.items));
	}

	public createTheme(theme: ThemePreset): Observable<ThemePreset> {
		const payload = {
			id: theme.id,
			label: theme.label,
			styles: theme.styles,
		};
		return this.http.post<ThemePreset>(`${this.apiUrl}`, payload);
	}

	public updateTheme(themeId: string, theme: ThemeHistoryPayload): Observable<ThemePreset> {
		if (!this.authService.isAuthenticated()) {
			return of({} as ThemePreset);
		}

		const payload = {
			label: theme.label,
			styles: theme.styles,
			changeNote: theme.changeNote,
		};
		return this.http.put<ThemePreset>(`${this.apiUrl}/${themeId}`, payload);
	}

	public deleteTheme(themeId: string): Observable<void> {
		if (!this.authService.isAuthenticated()) {
			return of(undefined);
		}

		return this.http.delete<void>(`${this.apiUrl}/${themeId}`);
	}

	public getThemeHistory(themeId: string, page = 1, pageSize = 20): Observable<ThemeVersionHistoryEntry[]> {
		if (!this.authService.isAuthenticated()) {
			return of([]);
		}

		return this.http
			.get<ThemeVersionHistoryListResponse>(`${this.apiUrl}/${themeId}/history`, {
				params: { page: page.toString(), pageSize: pageSize.toString() },
			})
			.pipe(map((response) => response.history));
	}
}
