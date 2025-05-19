import { Routes } from '@angular/router';
import {
	AccordionComponent,
	AlertComponent,
	AvatarComponent,
	BadgeComponent,
	BannerComponent,
	BreadcrumbComponent,
	ButtonComponent,
	CheckboxComponent,
	CompLayoutComponent,
	DialogComponent,
	FileUploadComponent,
	HomeComponent,
	IntroductionComponent,
	NotificationComponent,
} from './pages';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'introduction',
		component: IntroductionComponent,
	},
	{
		path: 'components',
		component: CompLayoutComponent,
		children: [
			{ path: 'accordion', component: AccordionComponent },
			{ path: 'alert', component: AlertComponent },
			{ path: 'avatar', component: AvatarComponent },
			{ path: 'badge', component: BadgeComponent },
			{ path: 'banner', component: BannerComponent },
			{ path: 'breadcrumb', component: BreadcrumbComponent },
			{ path: 'button', component: ButtonComponent },
			{ path: 'checkbox', component: CheckboxComponent },
			{ path: 'dialog', component: DialogComponent },
			{ path: 'file-upload', component: FileUploadComponent },
			{ path: 'notification', component: NotificationComponent },
			{ path: '', pathMatch: 'full', redirectTo: 'alert' },
		],
	},
];
