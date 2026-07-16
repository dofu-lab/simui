import { ComponentInfo } from '@shared/types';
import { accordionComponents } from './categories/accordion/accordion.registry';
import { AccordionThumbnailComponent } from './categories/accordion/accordion.thumbnail';
import { alertComponents } from './categories/alert/alert.registry';
import { AlertThumbnailComponent } from './categories/alert/alert.thumbnail';
import { avatarComponents } from './categories/avatar/avatar.registry';
import { AvatarThumbnailComponent } from './categories/avatar/avatar.thumbnail';
import { badgeComponents } from './categories/badge/badge.registry';
import { BadgeThumbnailComponent } from './categories/badge/badge.thumbnail';
import { bannerComponents } from './categories/banner/banner.registry';
import { BannerThumbnailComponent } from './categories/banner/banner.thumbnail';
import { breadcrumbComponents } from './categories/breadcrumb/breadcrumb.registry';
import { BreadcrumbThumbnailComponent } from './categories/breadcrumb/breadcrumb.thumbnail';
import { buttonComponents } from './categories/button/button.registry';
import { ButtonThumbnailComponent } from './categories/button/button.thumbnail';
import { calendarComponents } from './categories/calendar/calendar.registry';
import { CalendarThumbnailComponent } from './categories/calendar/calendar.thumbnail';
import { cardComponents } from './categories/card/card.registry';
import { CardThumbnailComponent } from './categories/card/card.thumbnail';
import { checkBoxComponents } from './categories/checkbox/checkbox.registry';
import { CheckboxThumbnailComponent } from './categories/checkbox/checkbox.thumbnail';
import { colorPickerComponents } from './categories/color-picker/color-picker.registry';
import { ColorPickerThumbnailComponent } from './categories/color-picker/color-picker.thumbnail';
import { dialogComponents } from './categories/dialog/dialog.registry';
import { DialogThumbnailComponent } from './categories/dialog/dialog.thumbnail';
import { dropdownComponents } from './categories/dropdown/dropdown.registry';
import { DropdownThumbnailComponent } from './categories/dropdown/dropdown.thumbnail';
import { EventCalendarThumbnailComponent } from './categories/event-calendar/event-calendar.thumbnail';
import { fileUploadComponents } from './categories/file-upload/file-upload.registry';
import { FileUploadThumbnailComponent } from './categories/file-upload/file-upload.thumbnail';
import { imageCropperComponents } from './categories/image-cropper/image-cropper.registry';
import { ImageCropperThumbnailComponent } from './categories/image-cropper/image-cropper.thumbnail';
import { inputComponents } from './categories/input/input.registry';
import { InputThumbnailComponent } from './categories/input/input.thumbnail';
import { notificationComponents } from './categories/notification/notification.registry';
import { NotificationThumbnailComponent } from './categories/notification/notification.thumbnail';
import { paginationComponents } from './categories/pagination/pagination.registry';
import { PaginationThumbnailComponent } from './categories/pagination/pagination.thumbnail';
import { popoverComponents } from './categories/popover/popover.registry';
import { PopoverThumbnailComponent } from './categories/popover/popover.thumbnail';
import { radioComponents } from './categories/radio/radio.registry';
import { RadioThumbnailComponent } from './categories/radio/radio.thumbnail';
import { selectComponents } from './categories/select/select.registry';
import { SelectThumbnailComponent } from './categories/select/select.thumbnail';
import { sliderComponents } from './categories/slider/slider.registry';
import { SliderThumbnailComponent } from './categories/slider/slider.thumbnail';
import { switchComponents } from './categories/switch/switch.registry';
import { SwitchThumbnailComponent } from './categories/switch/switch.thumbnail';
import { tabsComponents } from './categories/tabs/tabs.registry';
import { TabsThumbnailComponent } from './categories/tabs/tabs.thumbnail';

export const previewComponents: ComponentInfo[] = [
	{
		name: 'Card',
		compNumber: cardComponents.length,
		thumbnail: CardThumbnailComponent,
		path: 'components/card',
		isNew: true,
	},
	{
		name: 'Calendar',
		compNumber: calendarComponents.length,
		thumbnail: CalendarThumbnailComponent,
		path: 'components/calendar',
		isNew: true,
	},
	{
		name: 'Color Picker',
		compNumber: colorPickerComponents.length,
		thumbnail: ColorPickerThumbnailComponent,
		path: 'components/color-picker',
		isNew: true,
	},
	{
		name: 'Image Cropper',
		compNumber: imageCropperComponents.length,
		thumbnail: ImageCropperThumbnailComponent,
		path: 'components/image-cropper',
		isNew: true,
	},
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
