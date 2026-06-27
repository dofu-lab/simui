import { ComponentHeaderComponent, PageGridComponent } from '@/app/core';
import { Component } from '@angular/core';
import { avatarComponents } from '../constants';

@Component({
	selector: 'app-avatar',
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<sim-component-header name="Avatar" description="A component to show user profile pictures" />
		<sim-page-grid [components]="components" />
	`,
})
export class AvatarComponent {
	components = avatarComponents;
}
