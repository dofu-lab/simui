import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignCenter, lucideAlignJustify, lucideAlignLeft, lucideAlignRight } from '@ng-icons/lucide';
import { BrnToggleGroup, BrnToggleGroupItem } from '@spartan-ng/brain/toggle-group';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmToggleGroupItem } from '@spartan-ng/helm/toggle-group';

@Component({
	selector: 'spartan-toggle-group-preview',
	standalone: true,
	imports: [BrnToggleGroupItem, BrnToggleGroup, HlmIcon, HlmToggleGroupItem, NgIcon],
	providers: [provideIcons({ lucideAlignLeft, lucideAlignRight, lucideAlignCenter, lucideAlignJustify })],
	template: `
		<brn-toggle-group multiple="false" nullable="true" class="divide-background inline-flex divide-x">
			<button
				hlmToggleGroupItem
				value="left"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-l-md px-3 shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignLeft" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="top"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none px-3 shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignCenter" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="bottom"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none px-3 shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignRight" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="right"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-r-md px-3 shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignJustify" size="sm" />
			</button>
		</brn-toggle-group>
	`,
})
export class Button32Component {}

export const button32Code = `import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignCenter, lucideAlignJustify, lucideAlignLeft, lucideAlignRight } from '@ng-icons/lucide';
import { BrnToggleGroup, BrnToggleGroupItem } from '@spartan-ng/brain/toggle-group';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmToggleGroupItem } from '@spartan-ng/helm/toggle-group';

@Component({
	selector: 'spartan-toggle-group-preview',
	standalone: true,
	imports: [BrnToggleGroupItem, BrnToggleGroup, HlmIcon, HlmToggleGroupItem, NgIcon],
	providers: [provideIcons({ lucideAlignLeft, lucideAlignRight, lucideAlignCenter, lucideAlignJustify })],
	template: \`
		<brn-toggle-group multiple="false" nullable="true" class="divide-background inline-flex divide-x">
			<button
				hlmToggleGroupItem
				value="left"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-l-md px-3 shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignLeft" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="top"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none px-3 shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignCenter" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="bottom"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none px-3 shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignRight" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="right"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-r-md px-3 shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignJustify" size="sm" />
			</button>
		</brn-toggle-group>
	\`,
})
export class Button32Component {}`;
