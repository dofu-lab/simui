import { ComponentInfo } from '../types';
import { alertComponents } from './alert.constant';
import { avatarComponents } from './avatar.constant';
import { badgeComponents } from './badge.constant';
import { bannerComponents } from './banner.constant';
import { breadcrumbComponents } from './breadcrumb.constant';
import { buttonComponents } from './button.constant';
import { checkBoxComponents } from './checkbox.constant';
import { notificationComponents } from './notification.constant';

export const previewComponents: ComponentInfo[] = [
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
		description: 'Basic badge component',
		image: 'assets/thumbnails/button.png',
		path: 'components/button',
	},
	{
		name: 'Checkbox',
		compNumber: checkBoxComponents.length,
		description: 'Basic badge component',
		image: 'assets/thumbnails/checkbox-group.png',
		path: 'components/checkbox',
	},
	{
		name: 'Notification',
		compNumber: notificationComponents.length,
		description: 'Basic badge component',
		image: 'assets/thumbnails/notification.png',
		path: 'components/notification',
	},
];
