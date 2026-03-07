import { ThemePreset } from './theme';

/**
 * Response model for paginated theme list from the API
 */
export interface ThemeListResponse {
	items: ThemePreset[];
	total: number;
	page: number;
	pageSize: number;
	hasMore: boolean;
}
