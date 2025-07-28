import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFlipHorizontal, lucideFlipVertical } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-31',
	standalone: true,
	providers: [provideIcons({ lucideFlipHorizontal, lucideFlipVertical })],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: `
		<div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
			<button
				hlmBtn
				class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
				variant="outline"
				size="icon">
				<ng-icon hlm name="lucideFlipHorizontal" size="sm" />
			</button>
			<button
				hlmBtn
				class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
				variant="outline"
				size="icon">
				<ng-icon hlm name="lucideFlipVertical" size="sm" />
			</button>
		</div>
	`,
})
export class Button31Component {}

export const button31Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFlipHorizontal, lucideFlipVertical } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-31',
	standalone: true,
	providers: [provideIcons({ lucideFlipHorizontal, lucideFlipVertical })],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: \`
		<div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
			<button
				hlmBtn
				class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
				variant="outline"
				size="icon">
				<ng-icon hlm name="lucideFlipHorizontal" size="sm" />
			</button>
			<button
				hlmBtn
				class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
				variant="outline"
				size="icon">
				<ng-icon hlm name="lucideFlipVertical" size="sm" />
			</button>
		</div>
	\`,
})
export class Button31Component {}`;
