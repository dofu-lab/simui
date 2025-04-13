import { Routes } from '@angular/router';
import {
	AboutComponent,
	AlertComponent,
	AvatarComponent,
	BadgeComponent,
	BannerComponent,
	BreadcrumbComponent,
	ButtonComponent,
	CheckboxComponent,
	CompLayoutComponent,
	HomeComponent,
	NotificationComponent,
} from './pages';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'components',
		component: CompLayoutComponent,
		children: [
			{ path: 'alert', component: AlertComponent },
			{ path: 'avatar', component: AvatarComponent },
			{ path: 'badge', component: BadgeComponent },
			{ path: 'banner', component: BannerComponent },
			{ path: 'breadcrumb', component: BreadcrumbComponent },
			{ path: 'button', component: ButtonComponent },
			{ path: 'checkbox', component: CheckboxComponent },
			{ path: 'notification', component: NotificationComponent },
			{ path: '', pathMatch: 'full', redirectTo: 'alert' },
		],
	},
];
