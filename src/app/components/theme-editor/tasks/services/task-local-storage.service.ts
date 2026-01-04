import { STORAGE_KEYS } from '@/app/constants/storage-keys';
import { LocalStorageService } from '@/app/core/services/local-storage.service';
import { inject, Injectable } from '@angular/core';

export const DEFAULT_TASK_TABLE_COLUMNS = { id: true, title: true, status: true, priority: true } as const;

/**
 * Manages local storage settings for the task table.
 * It persists the users selected columns.
 */
@Injectable({
	providedIn: 'root',
})
export class TaskLocalStorageService {
	private readonly _localStorageService = inject(LocalStorageService);

	private readonly _settings = {
		taskTable: {
			selectedColumns: this.getSelectedColumnsSettings(STORAGE_KEYS.TASK_SETTINGS) ?? DEFAULT_TASK_TABLE_COLUMNS,
		},
	};

	saveTaskTableColumns(value: Record<string, boolean>): void {
		this._settings.taskTable.selectedColumns = value;
		this._localStorageService.setItem(STORAGE_KEYS.TASK_SETTINGS, this._settings.taskTable);
	}

	getTaskTableColumns(): Record<string, boolean> {
		return this._settings.taskTable.selectedColumns;
	}

	private getSelectedColumnsSettings(key: string) {
		const settings = this._localStorageService.getItem<{ selectedColumns: Record<string, boolean> }>(key);
		if (!settings) {
			return undefined;
		}
		return settings.selectedColumns;
	}
}
