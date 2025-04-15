import { ComponentHeaderComponent, PageGridComponent } from '@/app/core';
import { Component } from '@angular/core';
import { avatarComponents } from '../constants';

@Component({
	selector: 'app-avatar',
	standalone: true,
	imports: [PageGridComponent, ComponentHeaderComponent],
	template: `
		<component-header name="Avatar" description="A component to show user profile pictures" />
		<page-grid [components]="components" />
	`,
})
export class AvatarComponent {
	components = avatarComponents;
}
