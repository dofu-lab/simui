import { Component } from '@angular/core';
import { buttonComponents } from '../constants/button.constant';
import { ComponentCardComponent, ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [PageGridComponent, ComponentCardComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Button" description="A button is a graphic element that triggers an action when clicked" />
		<div class="mt-[50px] mb-[50px] flex flex-col items-center justify-center">
			<div class="text-display-lg font-bold">Button</div>
			<div class="text-muted-foreground text-lg"></div>
		</div>
		<page-grid>
			@for (component of components; track component.id) {
				<component-card
					[componentName]="component.id"
					[colNumber]="component.colNumber"
					[itemStyle]="component.itemStyle"
					[component]="component.component"
					[code]="component.code" />
			}
		</page-grid>
	`,
})
export class ButtonComponent {
	components = buttonComponents;
}
