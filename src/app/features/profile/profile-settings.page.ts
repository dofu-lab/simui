import { Component, signal } from '@angular/core';
import { ProfileAccountSettings } from './components/profile-account-settings';
import { ProfileSettingsNav, ProfileSettingsTab } from './components/profile-settings-nav';
import { ProfileThemesSettings } from './components/profile-themes-settings';

@Component({
	selector: 'sim-profile-settings',
	imports: [ProfileAccountSettings, ProfileSettingsNav, ProfileThemesSettings],
	host: {
		class: 'flex flex-1 size-full py-2 max-w-7xl mx-auto',
	},
	template: `
		<div class="min-h-0 grow grid-cols-[250px_auto] overflow-hidden md:grid">
			<sim-profile-settings-nav [(activeTab)]="activeTab" />
			<div class="flex min-h-0 flex-col gap-1 pt-4">
				@if (activeTab() === 'themes') {
					<sim-profile-themes-settings />
				} @else {
					<sim-profile-account-settings />
				}
			</div>
		</div>
	`,
})
export class ProfileSettingsComponent {
	protected readonly activeTab = signal<ProfileSettingsTab>('themes');
}
