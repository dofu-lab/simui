import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MCP_ADVERTISEMENT_ENABLED } from '@core/tokens/mcp-advertisement';
import { McpSettings } from './components/mcp-settings';
import { ProfileAccountSettings } from './components/profile-account-settings';
import { ProfileSettingsNav, ProfileSettingsTab } from './components/profile-settings-nav';
import { ProfileThemesSettings } from './components/profile-themes-settings';

@Component({
	selector: 'sim-profile-settings',
	imports: [McpSettings, ProfileAccountSettings, ProfileSettingsNav, ProfileThemesSettings],
	host: {
		class: 'flex flex-1 size-full py-2 max-w-7xl mx-auto',
	},
	template: `
		<div class="min-h-0 grow grid-cols-[250px_auto] overflow-hidden md:grid">
			<sim-profile-settings-nav [(activeTab)]="activeTab" />
			<div class="flex min-h-0 flex-col gap-1 pt-4">
				@if (activeTab() === 'themes') {
					<sim-profile-themes-settings />
				} @else if (activeTab() === 'account') {
					<sim-profile-account-settings />
				} @else if (activeTab() === 'mcp' && mcpAdvertised) {
					<sim-mcp-settings />
				} @else {
					<sim-profile-themes-settings />
				}
			</div>
		</div>
	`,
})
export class ProfileSettingsComponent {
	private readonly route = inject(ActivatedRoute);
	protected readonly mcpAdvertised = inject(MCP_ADVERTISEMENT_ENABLED);
	protected readonly activeTab = signal<ProfileSettingsTab>(
		this.mcpAdvertised && this.route.snapshot.queryParamMap.get('tab') === 'mcp' ? 'mcp' : 'themes',
	);
}
