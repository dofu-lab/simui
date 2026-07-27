import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';
import { unsavedChangesGuard } from '@core/guards/unsaved-changes.guard';
import { SEO_SITE_ORIGIN } from '@core/services/seo.constants';
import { SeoRouteData } from '@core/services/seo.types';
import { GoogleCallbackComponent } from '@features/auth/google-callback.page';
import { HomeComponent } from '@features/home/home.page';
import { IntroductionComponent } from '@features/introduction/introduction.page';
import { PaymentSuccessComponent } from '@features/payment/payment-success.page';
import { PricingComponent } from '@features/pricing/pricing.page';
import { ProfileSettingsComponent } from '@features/profile/profile-settings.page';
import { ThemeEditor } from '@features/theme-editor/theme-editor.page';

const componentSeo = (name: string, path: string, description: string, keywords: string): SeoRouteData => ({
	title: `${name} Angular Components`,
	description: `${description} Explore copy-paste Angular ${name.toLowerCase()} examples built with Spartan UI primitives and Tailwind CSS.`,
	keywords: `${keywords}, simui ${name.toLowerCase()}, angular ${name.toLowerCase()} component, spartan ui ${name.toLowerCase()}, angular component collection, tailwind css`,
	canonicalPath: `/components/${path}`,
	structuredData: [
		{
			'@type': 'CollectionPage',
			'@id': `${SEO_SITE_ORIGIN}/components/${path}#collection`,
			url: `${SEO_SITE_ORIGIN}/components/${path}`,
			name: `${name} Angular Components - SimUI`,
			description: `${description} These SimUI examples are designed for Angular projects using Spartan UI and Tailwind CSS.`,
			isPartOf: { '@id': `${SEO_SITE_ORIGIN}/#website` },
		},
		{
			'@type': 'BreadcrumbList',
			'@id': `${SEO_SITE_ORIGIN}/components/${path}#breadcrumb`,
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Home', item: SEO_SITE_ORIGIN },
				{ '@type': 'ListItem', position: 2, name: 'Components', item: `${SEO_SITE_ORIGIN}/components` },
				{ '@type': 'ListItem', position: 3, name, item: `${SEO_SITE_ORIGIN}/components/${path}` },
			],
		},
	],
});

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			title: 'SimUI - Angular UI Components Built With Spartan UI',
			description:
				'SimUI is a free, open-source collection of copy-paste Angular UI components built with Spartan UI primitives and Tailwind CSS.',
			keywords:
				'simui, angular components, spartan ui, angular ui components, angular component collection, tailwind css, shadcn angular, copy paste components',
			canonicalPath: '/',
			structuredData: {
				'@type': 'WebPage',
				'@id': `${SEO_SITE_ORIGIN}/#homepage`,
				url: SEO_SITE_ORIGIN,
				name: 'SimUI - Angular UI Components Built With Spartan UI',
				description:
					'Free, open-source copy-paste Angular components for teams building with Spartan UI and Tailwind CSS.',
				about: [
					{ '@type': 'Thing', name: 'Angular UI components' },
					{ '@type': 'Thing', name: 'Spartan UI' },
					{ '@type': 'Thing', name: 'Tailwind CSS' },
				],
			},
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
		loadComponent: () => import('@features/legal/term-condition.page').then((m) => m.TermConditionComponent),
		data: {
			title: 'Terms and Conditions - SimUI',
			description:
				'Read the terms and conditions for using SimUI, including free Angular components and optional paid theme features.',
			keywords: 'terms and conditions, simui, angular, ui components, legal',
			canonicalPath: '/terms-and-conditions',
		},
	},
	{
		path: 'privacy-policy',
		loadComponent: () => import('@features/legal/privacy-policy.page').then((m) => m.PrivacyPolicyComponent),
		data: {
			title: 'Privacy Policy - SimUI',
			description: 'Learn how SimUI collects, uses, and protects your personal information.',
			keywords: 'privacy policy, data protection, simui, gdpr, user privacy',
			canonicalPath: '/privacy-policy',
		},
	},
	{
		path: 'introduction',
		component: IntroductionComponent,
		data: {
			title: 'SimUI Introduction',
			description:
				'Learn how SimUI helps Angular teams copy, customize, and ship Spartan UI based components with Tailwind CSS.',
			keywords:
				'simui introduction, angular spartan ui, angular component collection, copy paste angular components, tailwind css',
			canonicalPath: '/introduction',
			structuredData: {
				'@type': 'TechArticle',
				'@id': `${SEO_SITE_ORIGIN}/introduction#article`,
				headline: 'Get started with SimUI for Angular and Spartan UI',
				proficiencyLevel: 'Beginner',
				dependencies: ['Angular', 'Spartan UI', 'Tailwind CSS'],
			},
		},
	},
	{
		path: 'changelog',
		loadComponent: () => import('@features/changelog/changelog.page').then((m) => m.ChangelogComponent),
		data: {
			title: 'SimUI SpartanUI Changelog',
			description:
				'Compare SimUI component source changes across supported SpartanUI registry releases, including added, updated, and removed components.',
			keywords:
				'simui changelog, spartan ui versions, angular component changelog, simui registry history, component source changes',
			canonicalPath: '/changelog',
			structuredData: {
				'@type': 'CollectionPage',
				'@id': `${SEO_SITE_ORIGIN}/changelog#collection`,
				url: `${SEO_SITE_ORIGIN}/changelog`,
				name: 'SimUI SpartanUI Changelog',
				description: 'Version-by-version SimUI component source changes for supported SpartanUI releases.',
				isPartOf: { '@id': `${SEO_SITE_ORIGIN}/#website` },
			},
		},
	},
	{
		path: 'theme-editor',
		component: ThemeEditor,
		canDeactivate: [unsavedChangesGuard],
		data: {
			title: 'Angular Theme Editor',
			description:
				'Customize SimUI and Spartan UI inspired Angular themes with a visual Tailwind CSS theme editor and exportable CSS tokens.',
			keywords: 'angular theme editor, spartan ui theme, tailwind css theme editor, simui themes',
			canonicalPath: '/theme-editor',
			structuredData: {
				'@type': 'SoftwareApplication',
				'@id': `${SEO_SITE_ORIGIN}/theme-editor#application`,
				applicationCategory: 'DeveloperApplication',
				operatingSystem: 'Web',
				offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
			},
		},
	},
	{
		path: 'auth/google/callback',
		loadComponent: () => Promise.resolve(GoogleCallbackComponent),
		data: {
			title: 'Signing in...',
			description: 'Google authentication callback',
		},
	},
	{
		path: 'pricing',
		loadComponent: () => Promise.resolve(PricingComponent),
		data: {
			title: 'SimUI Pricing',
			description:
				'Use SimUI Angular components for free, then upgrade only when you need unlimited saved themes, full history, and priority support.',
			keywords: 'simui pricing, angular components free, spartan ui theme editor, simui pro, angular theme history',
			canonicalPath: '/pricing',
		},
	},
	{
		path: 'payment/success',
		loadComponent: () => Promise.resolve(PaymentSuccessComponent),
		canActivate: [authGuard],
		data: {
			title: 'Subscription Activated - SimUI',
			description: 'Your SimUI Pro subscription is active.',
		},
	},
	{
		path: 'components',
		loadComponent: () => import('@features/component-showcase/layout').then((m) => m.CompLayoutComponent),
		children: [
			{
				path: 'accordion',
				loadComponent: () =>
					import('@features/component-showcase/categories/accordion').then((m) => m.AccordionComponent),
				data: componentSeo(
					'Accordion',
					'accordion',
					'Accordion components for toggling grouped content visibility.',
					'accordion, angular component, collapse',
				),
			},
			{
				path: 'alert',
				loadComponent: () => import('@features/component-showcase/categories/alert').then((m) => m.AlertComponent),
				data: componentSeo(
					'Alert',
					'alert',
					'Alert components for displaying important messages, notices, and warnings.',
					'alert, notice, warning, angular',
				),
			},
			{
				path: 'avatar',
				loadComponent: () => import('@features/component-showcase/categories/avatar').then((m) => m.AvatarComponent),
				data: componentSeo(
					'Avatar',
					'avatar',
					'Avatar components for user photos, initials, groups, and profile identity.',
					'avatar, profile, image, angular',
				),
			},
			{
				path: 'badge',
				loadComponent: () => import('@features/component-showcase/categories/badge').then((m) => m.BadgeComponent),
				data: componentSeo(
					'Badge',
					'badge',
					'Badge components for labels, statuses, counters, and compact metadata.',
					'badge, label, status, angular',
				),
			},
			{
				path: 'banner',
				loadComponent: () => import('@features/component-showcase/categories/banner').then((m) => m.BannerComponent),
				data: componentSeo(
					'Banner',
					'banner',
					'Banner components for prominent messages, announcements, and page-level calls to action.',
					'banner, hero, notification, angular',
				),
			},
			{
				path: 'breadcrumb',
				loadComponent: () =>
					import('@features/component-showcase/categories/breadcrumb').then((m) => m.BreadcrumbComponent),
				data: componentSeo(
					'Breadcrumb',
					'breadcrumb',
					'Breadcrumb components for hierarchical navigation in Angular applications.',
					'breadcrumb, navigation, angular',
				),
			},
			{
				path: 'button',
				loadComponent: () => import('@features/component-showcase/categories/button').then((m) => m.ButtonComponent),
				data: componentSeo(
					'Button',
					'button',
					'Button components with action states, variants, icon layouts, and loading patterns.',
					'button, action, ui, angular',
				),
			},
			{
				path: 'calendar',
				loadComponent: () =>
					import('@features/component-showcase/categories/calendar').then((m) => m.CalendarComponent),
				data: componentSeo(
					'Calendar',
					'calendar',
					'Calendar components for date selection, scheduling interfaces, and date-driven forms.',
					'calendar, date picker, angular component',
				),
			},
			{
				path: 'card',
				loadComponent: () => import('@features/component-showcase/categories/card').then((m) => m.CardComponent),
				data: componentSeo(
					'Card',
					'card',
					'Card components for organizing content, dashboards, settings, and product UI sections.',
					'card, container, angular',
				),
			},
			{
				path: 'checkbox',
				loadComponent: () =>
					import('@features/component-showcase/categories/checkbox').then((m) => m.CheckboxComponent),
				data: componentSeo(
					'Checkbox',
					'checkbox',
					'Checkbox components for boolean selection, settings, filters, and accessible forms.',
					'checkbox, input, form, angular',
				),
			},
			{
				path: 'color-picker',
				loadComponent: () =>
					import('@features/component-showcase/categories/color-picker').then((m) => m.ColorPickerPageComponent),
				data: componentSeo(
					'Color Picker',
					'color-picker',
					'Solid color picker components for accessible HEX, RGB, HSL, and OKLCH color selection.',
					'color picker, color input, hex, rgb, hsl, oklch, angular',
				),
			},
			{
				path: 'dialog',
				loadComponent: () => import('@features/component-showcase/categories/dialog').then((m) => m.DialogComponent),
				data: componentSeo(
					'Dialog',
					'dialog',
					'Dialog components for modals, confirmations, forms, and focused user tasks.',
					'dialog, modal, popup, angular',
				),
			},
			{
				path: 'dropdown',
				loadComponent: () =>
					import('@features/component-showcase/categories/dropdown').then((m) => m.DropdownComponent),
				data: componentSeo(
					'Dropdown',
					'dropdown',
					'Dropdown components for menus, action lists, navigation controls, and compact choices.',
					'dropdown, menu, angular',
				),
			},
			{
				path: 'event-calendar',
				loadComponent: () =>
					import('@features/component-showcase/categories/event-calendar').then((m) => m.EventCalendarComponent),
				data: componentSeo(
					'Event Calendar',
					'event-calendar',
					'Event calendar components for schedules, timelines, and date-based planning UI.',
					'calendar, events, date, angular',
				),
			},
			{
				path: 'file-upload',
				loadComponent: () =>
					import('@features/component-showcase/categories/file-upload').then((m) => m.FileUploadComponent),
				data: componentSeo(
					'File Upload',
					'file-upload',
					'File upload components for drag-and-drop uploads, file previews, and form attachments.',
					'file upload, dropzone, angular',
				),
			},
			{
				path: 'input',
				loadComponent: () => import('@features/component-showcase/categories/input').then((m) => m.InputComponent),
				data: componentSeo(
					'Input',
					'input',
					'Input components for forms, search fields, grouped controls, and text entry patterns.',
					'input, form, text field, angular',
				),
			},
			{
				path: 'image-cropper',
				loadComponent: () =>
					import('@features/component-showcase/categories/image-cropper').then((m) => m.ImageCropperComponent),
				data: componentSeo(
					'Image Cropper',
					'image-cropper',
					'Image cropper components for avatar editing, uploads, and media preparation.',
					'image cropper, angular component, image upload',
				),
			},
			{
				path: 'notification',
				loadComponent: () =>
					import('@features/component-showcase/categories/notification').then((m) => m.NotificationComponent),
				data: componentSeo(
					'Notification',
					'notification',
					'Notification components for toast messages, alerts, activity updates, and transient feedback.',
					'notification, toast, snackbar, angular',
				),
			},
			{
				path: 'popover',
				loadComponent: () => import('@features/component-showcase/categories/popover').then((m) => m.PopoverComponent),
				data: componentSeo(
					'Popover',
					'popover',
					'Popover components for contextual information, inline controls, and lightweight overlays.',
					'popover, tooltip, angular',
				),
			},
			{
				path: 'radio',
				loadComponent: () => import('@features/component-showcase/categories/radio').then((m) => m.RadioComponent),
				data: componentSeo(
					'Radio',
					'radio',
					'Radio components for single-choice selection, settings, filters, and accessible forms.',
					'radio, form, selection, angular',
				),
			},
			{
				path: 'select',
				loadComponent: () => import('@features/component-showcase/categories/select').then((m) => m.SelectComponent),
				data: componentSeo(
					'Select',
					'select',
					'Select components for dropdown choices, command-style pickers, and form selection UI.',
					'select, dropdown, form, angular',
				),
			},
			{
				path: 'slider',
				loadComponent: () => import('@features/component-showcase/categories/slider').then((m) => m.SliderComponent),
				data: componentSeo(
					'Slider',
					'slider',
					'Slider components for ranges, numeric controls, filters, and interactive settings.',
					'slider, range, input, angular',
				),
			},
			{
				path: 'switch',
				loadComponent: () => import('@features/component-showcase/categories/switch').then((m) => m.SwitchComponent),
				data: componentSeo(
					'Switch',
					'switch',
					'Switch components for toggles, preferences, feature flags, and binary settings.',
					'switch, toggle, angular',
				),
			},
			{
				path: 'tabs',
				loadComponent: () => import('@features/component-showcase/categories/tabs').then((m) => m.TabsComponent),
				data: componentSeo(
					'Tabs',
					'tabs',
					'Tabs components for switching between related views, panels, and settings sections.',
					'tabs, navigation, angular',
				),
			},
			{
				path: 'pagination',
				loadComponent: () =>
					import('@features/component-showcase/categories/pagination').then((m) => m.PaginationComponent),
				data: componentSeo(
					'Pagination',
					'pagination',
					'Pagination components for navigating long lists, tables, and search results.',
					'pagination, navigation, list, angular',
				),
			},
			{ path: '', pathMatch: 'full', redirectTo: 'alert' },
		],
	},
];
