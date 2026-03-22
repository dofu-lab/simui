import { popoverComponents } from '@/app/constants/popover.constant';
import {
	AccordionThumbnailComponent,
	AlertThumbnailComponent,
	AvatarThumbnailComponent,
	BadgeThumbnailComponent,
	BannerThumbnailComponent,
	BreadcrumbThumbnailComponent,
	ButtonThumbnailComponent,
	CheckboxThumbnailComponent,
	DialogThumbnailComponent,
	DropdownThumbnailComponent,
	EventCalendarThumbnailComponent,
	FileUploadThumbnailComponent,
	InputThumbnailComponent,
	NotificationThumbnailComponent,
	PaginationThumbnailComponent,
	PopoverThumbnailComponent,
	RadioThumbnailComponent,
	SelectThumbnailComponent,
	SliderThumbnailComponent,
	SwitchThumbnailComponent,
	TabsThumbnailComponent,
} from '../core/thumbnails';
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
import { selectComponents } from './select.constant';
import { sliderComponents } from './slider.constant';
import { switchComponents } from './switch.constant';
import { tabsComponents } from './tabs.constant';

export const previewComponents: ComponentInfo[] = [
	{
		name: 'Select',
		compNumber: selectComponents.length,
		thumbnail: SelectThumbnailComponent,
		path: 'components/select',
		isNew: true,
	},
	{
		name: 'Accordion',
		compNumber: accordionComponents.length,
		thumbnail: AccordionThumbnailComponent,
		path: 'components/accordion',
	},
	{
		name: 'Alert',
		compNumber: alertComponents.length,
		thumbnail: AlertThumbnailComponent,
		path: 'components/alert',
	},
	{
		name: 'Avatar',
		compNumber: avatarComponents.length,
		thumbnail: AvatarThumbnailComponent,
		path: 'components/avatar',
	},
	{
		name: 'Badge',
		compNumber: badgeComponents.length,
		thumbnail: BadgeThumbnailComponent,
		path: 'components/badge',
	},
	{
		name: 'Banner',
		compNumber: bannerComponents.length,
		thumbnail: BannerThumbnailComponent,
		path: 'components/banner',
	},
	{
		name: 'Breadcrumb',
		compNumber: breadcrumbComponents.length,
		thumbnail: BreadcrumbThumbnailComponent,
		path: 'components/breadcrumb',
	},
	{
		name: 'Button',
		compNumber: buttonComponents.length,
		thumbnail: ButtonThumbnailComponent,
		path: 'components/button',
	},
	{
		name: 'Checkbox',
		compNumber: checkBoxComponents.length,
		thumbnail: CheckboxThumbnailComponent,
		path: 'components/checkbox',
	},
	{
		name: 'Dialog',
		compNumber: dialogComponents.length,
		thumbnail: DialogThumbnailComponent,
		path: 'components/dialog',
	},
	{
		name: 'Dropdown',
		compNumber: dropdownComponents.length,
		thumbnail: DropdownThumbnailComponent,
		path: 'components/dropdown',
	},
	{
		name: 'Event Calendar',
		compNumber: 1,
		thumbnail: EventCalendarThumbnailComponent,
		path: 'components/event-calendar',
	},
	{
		name: 'File Upload',
		compNumber: fileUploadComponents.length,
		thumbnail: FileUploadThumbnailComponent,
		path: 'components/file-upload',
	},
	{
		name: 'Input',
		compNumber: inputComponents.length,
		thumbnail: InputThumbnailComponent,
		path: 'components/input',
	},
	{
		name: 'Notification',
		compNumber: notificationComponents.length,
		thumbnail: NotificationThumbnailComponent,
		path: 'components/notification',
	},
	{
		name: 'Pagination',
		compNumber: paginationComponents.length,
		thumbnail: PaginationThumbnailComponent,
		path: 'components/pagination',
	},
	{
		name: 'Popover',
		compNumber: popoverComponents.length,
		thumbnail: PopoverThumbnailComponent,
		path: 'components/popover',
	},
	{
		name: 'Radio',
		compNumber: radioComponents.length,
		thumbnail: RadioThumbnailComponent,
		path: 'components/radio',
	},
	{
		name: 'Slider',
		compNumber: sliderComponents.length,
		thumbnail: SliderThumbnailComponent,
		path: 'components/slider',
	},
	{
		name: 'Switch',
		compNumber: switchComponents.length,
		thumbnail: SwitchThumbnailComponent,
		path: 'components/switch',
	},
	{
		name: 'Tabs',
		compNumber: tabsComponents.length,
		thumbnail: TabsThumbnailComponent,
		path: 'components/tabs',
	},
];
