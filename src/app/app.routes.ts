import { Routes } from '@angular/router';
import {
	AccordionComponent,
	AlertComponent,
	AvatarComponent,
	BadgeComponent,
	BannerComponent,
	BreadcrumbComponent,
	ButtonComponent,
	CardComponent,
	CheckboxComponent,
	CompLayoutComponent,
	DialogComponent,
	DropdownComponent,
	EventCalendarComponent,
	FileUploadComponent,
	HomeComponent,
	InputComponent,
	IntroductionComponent,
	NotificationComponent,
	PaginationComponent,
	PopoverComponent,
	RadioComponent,
	SliderComponent,
	SwitchComponent,
	TabsComponent,
	ThemeEditor,
} from './pages';

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
	},
	{
		path: 'components',
		component: CompLayoutComponent,
		children: [
			{
				path: 'accordion',
				component: AccordionComponent,
				data: {
					title: 'Accordion',
					description: 'Accordion component for toggling content visibility.',
					keywords: 'accordion, angular component, collapse',
				},
			},
			{
				path: 'alert',
				component: AlertComponent,
				data: {
					title: 'Alert',
					description: 'Alert component for displaying important messages.',
					keywords: 'alert, notice, warning, angular',
				},
			},
			{
				path: 'avatar',
				component: AvatarComponent,
				data: {
					title: 'Avatar',
					description: 'Avatar component to represent users or entities.',
					keywords: 'avatar, profile, image, angular',
				},
			},
			{
				path: 'badge',
				component: BadgeComponent,
				data: {
					title: 'Badge',
					description: 'Badge component for status and labeling.',
					keywords: 'badge, label, status, angular',
				},
			},
			{
				path: 'banner',
				component: BannerComponent,
				data: {
					title: 'Banner',
					description: 'Banner component for prominent messages.',
					keywords: 'banner, hero, notification, angular',
				},
			},
			{
				path: 'breadcrumb',
				component: BreadcrumbComponent,
				data: {
					title: 'Breadcrumb',
					description: 'Breadcrumb navigation component.',
					keywords: 'breadcrumb, navigation, angular',
				},
			},
			{
				path: 'button',
				component: ButtonComponent,
				data: {
					title: 'Button',
					description: 'Button component with various styles and sizes.',
					keywords: 'button, action, ui, angular',
				},
			},
			{
				path: 'card',
				component: CardComponent,
				data: {
					title: 'Card',
					description: 'Card container for organizing content.',
					keywords: 'card, container, angular',
				},
			},
			{
				path: 'checkbox',
				component: CheckboxComponent,
				data: {
					title: 'Checkbox',
					description: 'Checkbox input for boolean selection.',
					keywords: 'checkbox, input, form, angular',
				},
			},
			{
				path: 'dialog',
				component: DialogComponent,
				data: {
					title: 'Dialog',
					description: 'Modal dialog component for focused tasks.',
					keywords: 'dialog, modal, popup, angular',
				},
			},
			{
				path: 'dropdown',
				component: DropdownComponent,
				data: {
					title: 'Dropdown',
					description: 'Dropdown menu for displaying lists of actions.',
					keywords: 'dropdown, menu, angular',
				},
			},
			{
				path: 'event-calendar',
				component: EventCalendarComponent,
				data: {
					title: 'Event Calendar',
					description: 'Calendar component for displaying events.',
					keywords: 'calendar, events, date, angular',
				},
			},
			{
				path: 'file-upload',
				component: FileUploadComponent,
				data: {
					title: 'File Upload',
					description: 'Component for uploading files.',
					keywords: 'file upload, dropzone, angular',
				},
			},
			{
				path: 'input',
				component: InputComponent,
				data: {
					title: 'Input',
					description: 'Input field for text data.',
					keywords: 'input, form, text field, angular',
				},
			},
			{
				path: 'notification',
				component: NotificationComponent,
				data: {
					title: 'Notification',
					description: 'Toast notification component.',
					keywords: 'notification, toast, snackbar, angular',
				},
			},
			{
				path: 'popover',
				component: PopoverComponent,
				data: {
					title: 'Popover',
					description: 'Popover component for contextual information.',
					keywords: 'popover, tooltip, angular',
				},
			},
			{
				path: 'radio',
				component: RadioComponent,
				data: {
					title: 'Radio',
					description: 'Radio button for single selection.',
					keywords: 'radio, form, selection, angular',
				},
			},
			{
				path: 'slider',
				component: SliderComponent,
				data: { title: 'Slider', description: 'Range slider component.', keywords: 'slider, range, input, angular' },
			},
			{
				path: 'switch',
				component: SwitchComponent,
				data: { title: 'Switch', description: 'Toggle switch component.', keywords: 'switch, toggle, angular' },
			},
			{
				path: 'tabs',
				component: TabsComponent,
				data: {
					title: 'Tabs',
					description: 'Tabs component for navigation between views.',
					keywords: 'tabs, navigation, angular',
				},
			},
			{
				path: 'pagination',
				component: PaginationComponent,
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
