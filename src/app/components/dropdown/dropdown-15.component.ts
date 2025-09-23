import { Component, computed, signal } from '@angular/core';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMonitorCog, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-15',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger],
	providers: [provideIcons({ lucideSun, lucideMoon, lucideMonitorCog })],
	template: `
		<div class="flex w-40 items-center justify-center">
			<button hlmBtn variant="outline" size="icon" align="center" [brnMenuTriggerFor]="menu">
				<ng-icon hlm size="sm" [name]="computedIcon()" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<button hlmMenuItem (triggered)="themeValue.set('light')">
						<ng-icon hlm name="lucideSun" size="sm" />
						<span>Light</span>
					</button>
					<button hlmMenuItem (triggered)="themeValue.set('dark')">
						<ng-icon hlm name="lucideMoon" size="sm" />
						<span>Dark</span>
					</button>
					<button hlmMenuItem (triggered)="themeValue.set('system')">
						<ng-icon hlm name="lucideMonitorCog" size="sm" />
						<span>System</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	`,
})
export class Dropdown15Component {
	themeValue = signal<'light' | 'dark' | 'system'>('light');
	computedIcon = computed<IconType>(() => {
		switch (this.themeValue()) {
			case 'light':
				return 'lucideSun';
			case 'dark':
				return 'lucideMoon';
			case 'system':
				return 'lucideMonitorCog';
		}
	});
}

export const dropdown15Code = `import { Component, computed, signal } from '@angular/core';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMonitorCog, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmMenu, HlmMenuGroup, HlmMenuItem } from '@spartan-ng/helm/menu';

@Component({
	selector: 'sim-dropdown-15',
	imports: [NgIcon, HlmIcon, HlmMenu, HlmMenuItem, HlmButton, HlmMenuGroup, BrnMenuTrigger],
	providers: [provideIcons({ lucideSun, lucideMoon, lucideMonitorCog })],
	template: \`
		<div class="flex w-40 items-center justify-center">
			<button hlmBtn variant="outline" size="icon" align="center" [brnMenuTriggerFor]="menu">
				<ng-icon hlm size="sm" [name]="computedIcon()" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-menu class="w-40">
				<hlm-menu-group>
					<button hlmMenuItem (triggered)="themeValue.set('light')">
						<ng-icon hlm name="lucideSun" size="sm" />
						<span>Light</span>
					</button>
					<button hlmMenuItem (triggered)="themeValue.set('dark')">
						<ng-icon hlm name="lucideMoon" size="sm" />
						<span>Dark</span>
					</button>
					<button hlmMenuItem (triggered)="themeValue.set('system')">
						<ng-icon hlm name="lucideMonitorCog" size="sm" />
						<span>System</span>
					</button>
				</hlm-menu-group>
			</hlm-menu>
		</ng-template>
	\`,
})
export class Dropdown15Component {
	themeValue = signal<'light' | 'dark' | 'system'>('light');
	computedIcon = computed<IconType>(() => {
		switch (this.themeValue()) {
			case 'light':
				return 'lucideSun';
			case 'dark':
				return 'lucideMoon';
			case 'system':
				return 'lucideMonitorCog';
		}
	});
}`;
