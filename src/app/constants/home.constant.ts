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

export const previewComponents: ComponentInfo[] = [
	{
		name: 'File Upload',
		compNumber: fileUploadComponents.length,
		image: 'assets/thumbnails/file-upload.png',
		path: 'components/file-upload',
		isNew: true,
	},
	{
		name: 'Dialog',
		compNumber: dialogComponents.length,
		image: 'assets/thumbnails/dialog.png',
		path: 'components/dialog',
		isNew: true,
	},
	{
		name: 'Accordion',
		compNumber: accordionComponents.length,
		image: 'assets/thumbnails/accordion.png',
		path: 'components/accordion',
	},
	{
		name: 'Alert',
		compNumber: alertComponents.length,
		image: 'assets/thumbnails/alert.png',
		path: 'components/alert',
	},
	{
		name: 'Avatar',
		compNumber: avatarComponents.length,
		image: 'assets/thumbnails/avatar.png',
		path: 'components/avatar',
	},
	{
		name: 'Badge',
		compNumber: badgeComponents.length,
		image: 'assets/thumbnails/badge.png',
		path: 'components/badge',
	},
	{
		name: 'Banner',
		compNumber: bannerComponents.length,
		image: 'assets/thumbnails/banner.png',
		path: 'components/banner',
	},
	{
		name: 'Breadcrumb',
		compNumber: breadcrumbComponents.length,
		image: 'assets/thumbnails/breadcrumb.png',
		path: 'components/breadcrumb',
	},
	{
		name: 'Button',
		compNumber: buttonComponents.length,
		image: 'assets/thumbnails/button.png',
		path: 'components/button',
	},
	{
		name: 'Card',
		compNumber: cardComponents.length,
		image: 'assets/thumbnails/card.png',
		path: 'components/card',
		isNew: true,
	},
	{
		name: 'Checkbox',
		compNumber: checkBoxComponents.length,
		image: 'assets/thumbnails/checkbox-group.png',
		path: 'components/checkbox',
	},
	{
		name: 'Notification',
		compNumber: notificationComponents.length,
		image: 'assets/thumbnails/notification.png',
		path: 'components/notification',
	},
];
