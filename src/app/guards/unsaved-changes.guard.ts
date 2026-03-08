import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { ThemeStorageService } from '../core/services/theme-storage.service';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<any> = (component) => {
  const themeStorageService = inject(ThemeStorageService);

  // Check if there are unsaved changes in edit mode
  if (themeStorageService.isInEditMode() && themeStorageService.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Do you want to leave without saving?');
  }

  return true;
};
