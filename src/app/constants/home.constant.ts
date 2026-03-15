import { popoverComponents } from '@/app/constants/popover.constant';
import { ComponentInfo } from '../types';
import { accordionComponents } from './accordion.constant';
import { alertComponents } from './alert.constant';
import { avatarComponents } from './avatar.constant';
import { badgeComponents } from './badge.constant';
import { bannerComponents } from './banner.constant';
import { breadcrumbComponents } from './breadcrumb.constant';
import { buttonComponents } from './button.constant';
import { checkBoxComponents } from './checkbox.constant';
import { dialogComponents } from './dialog.constant';
import { dropdownComponents } from './dropdown.constant';
import { fileUploadComponents } from './file-upload.constant';
import { inputComponents } from './input.constant';
import { notificationComponents } from './notification.constant';
import { paginationComponents } from './pagination.constant';
import { radioComponents } from './radio.constant';
import { sliderComponents } from './slider.constant';
import { switchComponents } from './switch.constant';
import { tabsComponents } from './tabs.constant';

export const previewComponents: ComponentInfo[] = [
	{
		name: 'Pagination',
		compNumber: paginationComponents.length,
		image: 'pagination.svg',
		path: 'components/pagination',
		isNew: true,
	},
	{
		name: 'Accordion',
		compNumber: accordionComponents.length,
		image: 'accordion.svg',
		path: 'components/accordion',
	},
	{
		name: 'Alert',
		compNumber: alertComponents.length,
		image: 'alert.svg',
		path: 'components/alert',
	},
	{
		name: 'Avatar',
		compNumber: avatarComponents.length,
		image: 'avatar.svg',
		path: 'components/avatar',
	},
	{
		name: 'Badge',
		compNumber: badgeComponents.length,
		image: 'badge.svg',
		path: 'components/badge',
	},
	{
		name: 'Banner',
		compNumber: bannerComponents.length,
		image: 'banner.svg',
		path: 'components/banner',
	},
	{
		name: 'Breadcrumb',
		compNumber: breadcrumbComponents.length,
		image: 'breadcrumb.svg',
		path: 'components/breadcrumb',
	},
	{
		name: 'Button',
		compNumber: buttonComponents.length,
		image: 'button.svg',
		path: 'components/button',
	},
	// {
	// 	name: 'Card',
	// 	compNumber: cardComponents.length,
	// 	image: 'card.svg',
	// 	path: 'components/card',
	// 	isNew: true,
	// },
	{
		name: 'Checkbox',
		compNumber: checkBoxComponents.length,
		image: 'checkbox.svg',
		path: 'components/checkbox',
	},
	{
		name: 'Dialog',
		compNumber: dialogComponents.length,
		image: 'dialog.svg',
		path: 'components/dialog',
	},
	{
		name: 'Dropdown',
		compNumber: dropdownComponents.length,
		image: 'dropdown.svg',
		path: 'components/dropdown',
	},
	{
		name: 'Event Calendar',
		compNumber: 1,
		image: 'event-calendar.svg',
		path: 'components/event-calendar',
	},
	{
		name: 'File Upload',
		compNumber: fileUploadComponents.length,
		image: 'file-upload.svg',
		path: 'components/file-upload',
	},
	{
		name: 'Input',
		compNumber: inputComponents.length,
		image: 'input.svg',
		path: 'components/input',
	},
	{
		name: 'Notification',
		compNumber: notificationComponents.length,
		image: 'notification.svg',
		path: 'components/notification',
	},
	{
		name: 'Popover',
		compNumber: popoverComponents.length,
		image: 'popover.svg',
		path: 'components/popover',
	},
	{
		name: 'Radio',
		compNumber: radioComponents.length,
		image: 'radio.svg',
		path: 'components/radio',
	},
	{
		name: 'Slider',
		compNumber: sliderComponents.length,
		image: 'slider.svg',
		path: 'components/slider',
	},
	{
		name: 'Switch',
		compNumber: switchComponents.length,
		image: 'switch.svg',
		path: 'components/switch',
	},
	{
		name: 'Tabs',
		compNumber: tabsComponents.length,
		image: 'tabs.svg',
		path: 'components/tabs',
	},
];
