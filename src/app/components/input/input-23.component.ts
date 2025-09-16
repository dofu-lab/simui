import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideSearch } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-23',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSearch, lucideArrowRight })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-23" class="mb-2 text-sm">Input input with icon and button</label>
		<div class="relative">
			<input hlmInput id="input-23" type="text" placeholder="Search..." class="peer ps-9 pe-12" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
				<ng-icon hlm name="lucideSearch" size="sm" />
			</div>
			<button
				class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
				<ng-icon hlm size="sm" name="lucideArrowRight" />
			</button>
		</div>
	`,
})
export class Input23Component {}

export const input23Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideSearch } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-23',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideSearch, lucideArrowRight })],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-23" class="mb-2 text-sm">Input input with icon and button</label>
		<div class="relative">
			<input hlmInput id="input-23" type="text" placeholder="Search..." class="peer ps-9 pe-12" />
			<div
				class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
				<ng-icon hlm name="lucideSearch" size="sm" />
			</div>
			<button
				class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50">
				<ng-icon hlm size="sm" name="lucideArrowRight" />
			</button>
		</div>
	\`,
})
export class Input23Component {}`;
