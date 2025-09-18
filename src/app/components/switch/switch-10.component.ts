import { Component, computed, model } from '@angular/core';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-10',
	imports: [HlmSwitch, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSun, lucideMoon })],
	template: `
		<div class="flex items-center gap-2">
			<hlm-switch
				id="switch-10"
				class="h-6 w-10 border-[2px] [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-4px)]"
				[(checked)]="value" />
			<ng-icon hlm size="sm" [name]="computedIcon()" />
		</div>
	`,
})
export class Switch10Component {
	readonly value = model(true);
	readonly computedIcon = computed<IconType>(() => (this.value() ? 'lucideSun' : 'lucideMoon'));
}

export const switch10Code = `import { Component, computed, model } from '@angular/core';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'sim-switch-10',
	imports: [HlmSwitch, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSun, lucideMoon })],
	template: \`
		<div class="flex items-center gap-2">
			<hlm-switch
				id="switch-10"
				class="h-6 w-10 border-[2px] [&>brn-switch-thumb]:size-5 [&>brn-switch-thumb]:group-data-[state=checked]:translate-x-[calc(100%-4px)]"
				[(checked)]="value" />
			<ng-icon hlm size="sm" [name]="computedIcon()" />
		</div>
	\`,
})
export class Switch10Component {
	readonly value = model(true);
	readonly computedIcon = computed<IconType>(() => (this.value() ? 'lucideSun' : 'lucideMoon'));
}`;
