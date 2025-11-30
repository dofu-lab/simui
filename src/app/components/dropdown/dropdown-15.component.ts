import { Component, computed, signal } from '@angular/core';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMonitorCog, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-15',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideSun, lucideMoon, lucideMonitorCog })],
	template: `
		<div class="flex w-40 items-center justify-center">
			<button hlmBtn variant="outline" size="icon" align="center" [hlmDropdownMenuTrigger]="menu">
				<ng-icon hlm size="sm" [name]="computedIcon()" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem (triggered)="themeValue.set('light')">
						<ng-icon hlm name="lucideSun" size="sm" />
						<span>Light</span>
					</button>
					<button hlmDropdownMenuItem (triggered)="themeValue.set('dark')">
						<ng-icon hlm name="lucideMoon" size="sm" />
						<span>Dark</span>
					</button>
					<button hlmDropdownMenuItem (triggered)="themeValue.set('system')">
						<ng-icon hlm name="lucideMonitorCog" size="sm" />
						<span>System</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
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
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-dropdown-15',
	imports: [NgIcon, HlmIcon, HlmButton, HlmDropdownMenuImports],
	providers: [provideIcons({ lucideSun, lucideMoon, lucideMonitorCog })],
	template: \`
		<div class="flex w-40 items-center justify-center">
			<button hlmBtn variant="outline" size="icon" align="center" [hlmDropdownMenuTrigger]="menu">
				<ng-icon hlm size="sm" [name]="computedIcon()" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-40">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem (triggered)="themeValue.set('light')">
						<ng-icon hlm name="lucideSun" size="sm" />
						<span>Light</span>
					</button>
					<button hlmDropdownMenuItem (triggered)="themeValue.set('dark')">
						<ng-icon hlm name="lucideMoon" size="sm" />
						<span>Dark</span>
					</button>
					<button hlmDropdownMenuItem (triggered)="themeValue.set('system')">
						<ng-icon hlm name="lucideMonitorCog" size="sm" />
						<span>System</span>
					</button>
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
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
