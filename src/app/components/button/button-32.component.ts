import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignCenter, lucideAlignJustify, lucideAlignLeft, lucideAlignRight } from '@ng-icons/lucide';
import { BrnToggleGroupComponent, BrnToggleGroupItemDirective } from '@spartan-ng/brain/toggle-group';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmToggleGroupItemDirective } from '@spartan-ng/ui-togglegroup-helm';

@Component({
	selector: 'spartan-toggle-group-preview',
	standalone: true,
	imports: [
		BrnToggleGroupItemDirective,
		BrnToggleGroupComponent,
		HlmIconDirective,
		HlmToggleGroupItemDirective,
		NgIcon,
	],
	providers: [provideIcons({ lucideAlignLeft, lucideAlignRight, lucideAlignCenter, lucideAlignJustify })],
	template: `
		<brn-toggle-group multiple="false" nullable="true" class="divide-background inline-flex divide-x">
			<button
				hlmToggleGroupItem
				value="left"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-l-md shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignLeft" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="top"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignCenter" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="bottom"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignRight" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="right"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-r-md shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignJustify" size="sm" />
			</button>
		</brn-toggle-group>
	`,
})
export class Button32Component {}

export const button32Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignCenter, lucideAlignJustify, lucideAlignLeft, lucideAlignRight } from '@ng-icons/lucide';
import { BrnToggleGroupComponent, BrnToggleGroupItemDirective } from '@spartan-ng/brain/toggle-group';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmToggleGroupItemDirective } from '@spartan-ng/ui-togglegroup-helm';

@Component({
	selector: 'spartan-toggle-group-preview',
	standalone: true,
	imports: [
		BrnToggleGroupItemDirective,
		BrnToggleGroupComponent,
		HlmIconDirective,
		HlmToggleGroupItemDirective,
		NgIcon,
	],
	providers: [provideIcons({ lucideAlignLeft, lucideAlignRight, lucideAlignCenter, lucideAlignJustify })],
	template: \`
		<brn-toggle-group multiple="false" nullable="true" class="divide-background inline-flex divide-x">
			<button
				hlmToggleGroupItem
				value="left"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-l-md shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignLeft" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="top"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignCenter" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="bottom"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignRight" size="sm" />
			</button>
			<button
				hlmToggleGroupItem
				value="right"
				variant="default"
				class="bg-primary/80! text-primary-foreground hover:bg-primary! hover:text-primary-foreground data-[state=on]:bg-primary! data-[state=on]:text-primary-foreground min-w-0 shrink-0 rounded-none rounded-r-md shadow-none focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l">
				<ng-icon hlm name="lucideAlignJustify" size="sm" />
			</button>
		</brn-toggle-group>
	\`,
})
export class Button32Component {}
`;
