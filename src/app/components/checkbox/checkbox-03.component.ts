import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideMoon } from '@ng-icons/lucide';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-03',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	providers: [provideIcons({ lucideMoon })],
	template: `
		<label hlmLabel class="flex items-center" for="checkbox-03">
			<hlm-checkbox id="checkbox-03" class="mr-2" checkIconName="lucideMoon" />
			Custom icon
		</label>
	`,
})
export class Checkbox03Component {}

export const checkbox03Code = `import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideMoon } from '@ng-icons/lucide';
import { HlmCheckbox } from '@spartan-ng/helm/checkbox';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-checkbox-03',
	standalone: true,
	imports: [HlmCheckbox, HlmLabel],
	providers: [provideIcons({ lucideMoon })],
	template: \`
		<label hlmLabel class="flex items-center" for="checkbox-03">
			<hlm-checkbox id="checkbox-03" class="mr-2" checkIconName="lucideMoon" />
			Custom icon
		</label>
	\`,
})
export class Checkbox03Component {}`;
