import { Component, inject, model } from '@angular/core';
import { MCP_ADVERTISEMENT_ENABLED } from '@core/tokens/mcp-advertisement';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCable, lucideSwatchBook, lucideUser } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';

export type ProfileSettingsTab = 'themes' | 'account' | 'mcp';

@Component({
	selector: 'sim-profile-settings-nav',
	imports: [HlmButtonImports, HlmIconImports, NgIcon],
	providers: [provideIcons({ lucideCable, lucideSwatchBook, lucideUser })],
	host: {
		class: 'flex h-full flex-col gap-1 rounded-xl px-2 py-4',
	},
	template: `
		<button
			hlmBtn
			variant="ghost"
			class="data-[state=active]:bg-accent justify-start"
			[attr.data-state]="activeTab() === 'themes' ? 'active' : 'inactive'"
			(click)="activeTab.set('themes')">
			<ng-icon hlmIcon name="lucideSwatchBook" size="sm" />
			Themes
		</button>
		<button
			hlmBtn
			variant="ghost"
			class="data-[state=active]:bg-accent justify-start"
			[attr.data-state]="activeTab() === 'account' ? 'active' : 'inactive'"
			(click)="activeTab.set('account')">
			<ng-icon hlmIcon name="lucideUser" size="sm" />
			Account
		</button>
		@if (mcpAdvertised) {
			<button
				hlmBtn
				variant="ghost"
				class="data-[state=active]:bg-accent justify-start"
				[attr.data-state]="activeTab() === 'mcp' ? 'active' : 'inactive'"
				(click)="activeTab.set('mcp')">
				<ng-icon hlmIcon name="lucideCable" size="sm" />
				MCP
			</button>
		}
	`,
})
export class ProfileSettingsNav {
	public readonly activeTab = model.required<ProfileSettingsTab>();
	protected readonly mcpAdvertised = inject(MCP_ADVERTISEMENT_ENABLED);
}
