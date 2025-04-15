import { Component } from '@angular/core';
import { buttonComponents } from '../constants/button.constant';
import { ComponentHeaderComponent, PageGridComponent } from '../core';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Button" description="A button is a graphic element that triggers an action when clicked" />
		<div class="mt-[50px] mb-[50px] flex flex-col items-center justify-center">
			<div class="text-display-lg font-bold">Button</div>
			<div class="text-muted-foreground text-lg"></div>
		</div>
		<page-grid [components]="components" />
	`,
})
export class ButtonComponent {
	components = buttonComponents;
}
