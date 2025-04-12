import { ComponentCardComponent, ComponentHeaderComponent, PageGridComponent } from '@/app/core';
import { Component } from '@angular/core';
import { avatarComponents } from '../constants';

@Component({
	selector: 'app-avatar',
	standalone: true,
	imports: [PageGridComponent, ComponentCardComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Avatar" description="A component to show user profile pictures" />
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
export class AvatarComponent {
	components = avatarComponents;
}
