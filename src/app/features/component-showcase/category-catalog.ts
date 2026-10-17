import type { ComponentInfo } from '@shared/types';

// Keep navigation and counts independent of executable examples and thumbnails.
// scripts/component-catalog.spec.mjs verifies counts against the category registries.
export const componentCatalog: Omit<ComponentInfo, 'thumbnail'>[] = [
	{
		name: 'Attachment',
		compNumber: 14,
		path: 'components/attachment',
		isNew: true,
	},
	{
		name: 'Sidebar',
		compNumber: 13,
		path: 'components/sidebar',
		isNew: true,
	},
	{
		name: 'Color Picker',
		compNumber: 8,
		path: 'components/color-picker',
		isNew: true,
	},
	{
		name: 'Accordion',
		compNumber: 22,
		path: 'components/accordion',
	},
	{
		name: 'Alert',
		compNumber: 25,
		path: 'components/alert',
	},
	{
		name: 'Avatar',
		compNumber: 22,
		path: 'components/avatar',
	},
	{
		name: 'Badge',
		compNumber: 23,
		path: 'components/badge',
	},
	{
		name: 'Banner',
		compNumber: 11,
		path: 'components/banner',
	},
	{
		name: 'Breadcrumb',
		compNumber: 9,
		path: 'components/breadcrumb',
	},
	{
		name: 'Button',
		compNumber: 54,
		path: 'components/button',
	},
	{
		name: 'Calendar',
		compNumber: 19,
		path: 'components/calendar',
	},
	{
		name: 'Card',
		compNumber: 16,
		path: 'components/card',
	},
	{
		name: 'Checkbox',
		compNumber: 22,
		path: 'components/checkbox',
	},
	{
		name: 'Dialog',
		compNumber: 36,
		path: 'components/dialog',
	},
	{
		name: 'Dropdown',
		compNumber: 16,
		path: 'components/dropdown',
	},
	{
		name: 'Event Calendar',
		compNumber: 1,
		path: 'components/event-calendar',
	},
	{
		name: 'File Upload',
		compNumber: 13,
		path: 'components/file-upload',
	},
	{
		name: 'Image Cropper',
		compNumber: 10,
		path: 'components/image-cropper',
	},
	{
		name: 'Input',
		compNumber: 55,
		path: 'components/input',
	},
	{
		name: 'Notification',
		compNumber: 33,
		path: 'components/notification',
	},
	{
		name: 'Pagination',
		compNumber: 12,
		path: 'components/pagination',
	},
	{
		name: 'Popover',
		compNumber: 11,
		path: 'components/popover',
	},
	{
		name: 'Radio',
		compNumber: 20,
		path: 'components/radio',
	},
	{
		name: 'Select',
		compNumber: 39,
		path: 'components/select',
	},
	{
		name: 'Slider',
		compNumber: 20,
		path: 'components/slider',
	},
	{
		name: 'Switch',
		compNumber: 18,
		path: 'components/switch',
	},
	{
		name: 'Tabs',
		compNumber: 20,
		path: 'components/tabs',
	},
];
