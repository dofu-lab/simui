import { environment } from '@/environments/environment';
import { InjectionToken } from '@angular/core';

export const MCP_ADVERTISEMENT_ENABLED = new InjectionToken<boolean>('MCP_ADVERTISEMENT_ENABLED', {
	providedIn: 'root',
	factory: () => environment.mcpAdvertisementEnabled,
});
