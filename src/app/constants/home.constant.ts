import { ComponentInfo } from '../types';
import { accordionComponents } from './accordion.constant';
import { alertComponents } from './alert.constant';
import { avatarComponents } from './avatar.constant';
import { badgeComponents } from './badge.constant';
import { bannerComponents } from './banner.constant';
import { breadcrumbComponents } from './breadcrumb.constant';
import { buttonComponents } from './button.constant';
import { cardComponents } from './card.constant';
import { checkBoxComponents } from './checkbox.constant';
import { dialogComponents } from './dialog.constant';
import { fileUploadComponents } from './file-upload.constant';
import { notificationComponents } from './notification.constant';
import { radioComponents } from './radio.constant';
import { tabsComponents } from './tabs.constant';

export const previewComponents: ComponentInfo[] = [
	{
		name: 'Event Calendar',
		compNumber: 1,
		image: 'tabs.png',
		path: 'components/event-calendar',
		isNew: true,
	},
	{
		name: 'Radio',
		compNumber: radioComponents.length,
		image: 'radio.png',
		path: 'components/radio',
		isNew: true,
	},
	{
		name: 'Tabs',
		compNumber: tabsComponents.length,
		image: 'tabs.png',
		path: 'components/tabs',
		isNew: true,
	},
	{
		name: 'File Upload',
		compNumber: fileUploadComponents.length,
		image: 'file-upload.png',
		path: 'components/file-upload',
		isNew: true,
	},
	{
		name: 'Accordion',
		compNumber: accordionComponents.length,
		image: 'accordion.png',
		path: 'components/accordion',
	},
	{
		name: 'Alert',
		compNumber: alertComponents.length,
		image: 'alert.png',
		path: 'components/alert',
	},
	{
		name: 'Avatar',
		compNumber: avatarComponents.length,
		image: 'avatar.png',
		path: 'components/avatar',
	},
	{
		name: 'Badge',
		compNumber: badgeComponents.length,
		image: 'badge.png',
		path: 'components/badge',
	},
	{
		name: 'Banner',
		compNumber: bannerComponents.length,
		image: 'banner.png',
		path: 'components/banner',
	},
	{
		name: 'Breadcrumb',
		compNumber: breadcrumbComponents.length,
		image: 'breadcrumb.png',
		path: 'components/breadcrumb',
	},
	{
		name: 'Button',
		compNumber: buttonComponents.length,
		image: 'button.png',
		path: 'components/button',
	},
	{
		name: 'Card',
		compNumber: cardComponents.length,
		image: 'card.png',
		path: 'components/card',
		isNew: true,
	},
	{
		name: 'Checkbox',
		compNumber: checkBoxComponents.length,
		image: 'checkbox.png',
		path: 'components/checkbox',
	},
	{
		name: 'Dialog',
		compNumber: dialogComponents.length,
		image: 'dialog.png',
		path: 'components/dialog',
	},
	{
		name: 'Notification',
		compNumber: notificationComponents.length,
		image: 'notification.png',
		path: 'components/notification',
	},
];
