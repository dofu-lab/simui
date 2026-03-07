import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';
import { HomeComponent, IntroductionComponent, ProfileSettingsComponent, ThemeEditor } from './pages';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			title: 'SimUI - Modern Angular UI Components',
			description:
				'SimUI is a comprehensive Angular UI component library building with TailwindCSS, inspired by Shadcn UI and Spartan UI. Perfect for building modern web applications.',
			keywords:
				'simui, angular, tailwind css, shadcn, spartan ui, ui components, angular ui collection, react ui collection, web development',
		},
	},
	{
		path: 'profile',
		component: ProfileSettingsComponent,
		canActivate: [authGuard],
		data: {
			title: 'Profile Settings - SimUI',
			description: 'Manage your profile settings and preferences in SimUI.',
			keywords: 'profile settings, user preferences, simui, angular',
		},
	},
	{
		path: 'terms-and-conditions',
		loadComponent: () => import('./pages/term-condition').then((m) => m.TermConditionComponent),
		data: {
			title: 'Terms and Conditions - SimUI',
			description: 'Read the terms and conditions for using SimUI, the Angular UI component library.',
			keywords: 'terms and conditions, simui, angular, ui components, legal',
		},
	},
	{
		path: 'privacy-policy',
		loadComponent: () => import('./pages/privacy-policy').then((m) => m.PrivacyPolicyComponent),
		data: {
			title: 'Privacy Policy - SimUI',
			description: 'Learn how SimUI collects, uses, and protects your personal information.',
			keywords: 'privacy policy, data protection, simui, gdpr, user privacy',
		},
	},
	{
		path: 'introduction',
		component: IntroductionComponent,
		data: {
			title: 'Introduction - SimUI',
			description:
				'Get started with SimUI. Learn how to install and use our Angular UI components, based on Spartan UI and Tailwind CSS.',
			keywords: 'introduction, getting started, installation, angular, simui, spartan ui, shadcn, ui components',
		},
	},
	{
		path: 'theme-editor',
		component: ThemeEditor,
		canDeactivate: [unsavedChangesGuard],
	},
	{
		path: 'auth/google/callback',
		loadComponent: () => import('./pages/google-callback.component').then((m) => m.GoogleCallbackComponent),
		data: {
			title: 'Signing in...',
			description: 'Google authentication callback',
		},
	},
	{
		path: 'pricing',
		loadComponent: () => import('./pages/pricing').then((m) => m.PricingComponent),
		data: {
			title: 'Pricing - SimUI',
			description:
				'Simple, transparent pricing for SimUI. Get unlimited themes and full version history with the Pro plan.',
			keywords: 'pricing, pro, subscription, simui, upgrade',
		},
	},
	{
		path: 'payment/success',
		loadComponent: () => import('./pages/payment-success').then((m) => m.PaymentSuccessComponent),
		canActivate: [authGuard],
		data: {
			title: 'Subscription Activated - SimUI',
			description: 'Your SimUI Pro subscription is active.',
		},
	},
	{
		path: 'components',
		loadComponent: () => import('./pages').then((m) => m.CompLayoutComponent),
		children: [
			{
				path: 'accordion',
				loadComponent: () => import('./pages').then((m) => m.AccordionComponent),
				data: {
					title: 'Accordion',
					description: 'Accordion component for toggling content visibility.',
					keywords: 'accordion, angular component, collapse',
				},
			},
			{
				path: 'alert',
				loadComponent: () => import('./pages').then((m) => m.AlertComponent),
				data: {
					title: 'Alert',
					description: 'Alert component for displaying important messages.',
					keywords: 'alert, notice, warning, angular',
				},
			},
			{
				path: 'avatar',
				loadComponent: () => import('./pages').then((m) => m.AvatarComponent),
				data: {
					title: 'Avatar',
					description: 'Avatar component to represent users or entities.',
					keywords: 'avatar, profile, image, angular',
				},
			},
			{
				path: 'badge',
				loadComponent: () => import('./pages').then((m) => m.BadgeComponent),
				data: {
					title: 'Badge',
					description: 'Badge component for status and labeling.',
					keywords: 'badge, label, status, angular',
				},
			},
			{
				path: 'banner',
				loadComponent: () => import('./pages').then((m) => m.BannerComponent),
				data: {
					title: 'Banner',
					description: 'Banner component for prominent messages.',
					keywords: 'banner, hero, notification, angular',
				},
			},
			{
				path: 'breadcrumb',
				loadComponent: () => import('./pages').then((m) => m.BreadcrumbComponent),
				data: {
					title: 'Breadcrumb',
					description: 'Breadcrumb navigation component.',
					keywords: 'breadcrumb, navigation, angular',
				},
			},
			{
				path: 'button',
				loadComponent: () => import('./pages').then((m) => m.ButtonComponent),
				data: {
					title: 'Button',
					description: 'Button component with various styles and sizes.',
					keywords: 'button, action, ui, angular',
				},
			},
			{
				path: 'card',
				loadComponent: () => import('./pages').then((m) => m.CardComponent),
				data: {
					title: 'Card',
					description: 'Card container for organizing content.',
					keywords: 'card, container, angular',
				},
			},
			{
				path: 'checkbox',
				loadComponent: () => import('./pages').then((m) => m.CheckboxComponent),
				data: {
					title: 'Checkbox',
					description: 'Checkbox input for boolean selection.',
					keywords: 'checkbox, input, form, angular',
				},
			},
			{
				path: 'dialog',
				loadComponent: () => import('./pages').then((m) => m.DialogComponent),
				data: {
					title: 'Dialog',
					description: 'Modal dialog component for focused tasks.',
					keywords: 'dialog, modal, popup, angular',
				},
			},
			{
				path: 'dropdown',
				loadComponent: () => import('./pages').then((m) => m.DropdownComponent),
				data: {
					title: 'Dropdown',
					description: 'Dropdown menu for displaying lists of actions.',
					keywords: 'dropdown, menu, angular',
				},
			},
			{
				path: 'event-calendar',
				loadComponent: () => import('./pages').then((m) => m.EventCalendarComponent),
				data: {
					title: 'Event Calendar',
					description: 'Calendar component for displaying events.',
					keywords: 'calendar, events, date, angular',
				},
			},
			{
				path: 'file-upload',
				loadComponent: () => import('./pages').then((m) => m.FileUploadComponent),
				data: {
					title: 'File Upload',
					description: 'Component for uploading files.',
					keywords: 'file upload, dropzone, angular',
				},
			},
			{
				path: 'input',
				loadComponent: () => import('./pages').then((m) => m.InputComponent),
				data: {
					title: 'Input',
					description: 'Input field for text data.',
					keywords: 'input, form, text field, angular',
				},
			},
			{
				path: 'notification',
				loadComponent: () => import('./pages').then((m) => m.NotificationComponent),
				data: {
					title: 'Notification',
					description: 'Toast notification component.',
					keywords: 'notification, toast, snackbar, angular',
				},
			},
			{
				path: 'popover',
				loadComponent: () => import('./pages').then((m) => m.PopoverComponent),
				data: {
					title: 'Popover',
					description: 'Popover component for contextual information.',
					keywords: 'popover, tooltip, angular',
				},
			},
			{
				path: 'radio',
				loadComponent: () => import('./pages').then((m) => m.RadioComponent),
				data: {
					title: 'Radio',
					description: 'Radio button for single selection.',
					keywords: 'radio, form, selection, angular',
				},
			},
			{
				path: 'slider',
				loadComponent: () => import('./pages').then((m) => m.SliderComponent),
				data: { title: 'Slider', description: 'Range slider component.', keywords: 'slider, range, input, angular' },
			},
			{
				path: 'switch',
				loadComponent: () => import('./pages').then((m) => m.SwitchComponent),
				data: { title: 'Switch', description: 'Toggle switch component.', keywords: 'switch, toggle, angular' },
			},
			{
				path: 'tabs',
				loadComponent: () => import('./pages').then((m) => m.TabsComponent),
				data: {
					title: 'Tabs',
					description: 'Tabs component for navigation between views.',
					keywords: 'tabs, navigation, angular',
				},
			},
			{
				path: 'pagination',
				loadComponent: () => import('./pages').then((m) => m.PaginationComponent),
				data: {
					title: 'Pagination',
					description: 'Pagination for navigating lists.',
					keywords: 'pagination, navigation, list, angular',
				},
			},
			{ path: '', pathMatch: 'full', redirectTo: 'alert' },
		],
	},
];
