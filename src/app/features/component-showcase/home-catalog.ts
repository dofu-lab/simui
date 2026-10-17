import { Type } from '@angular/core';
import { ComponentInfo } from '@shared/types';
import { AccordionThumbnailComponent } from './categories/accordion/accordion.thumbnail';
import { AlertThumbnailComponent } from './categories/alert/alert.thumbnail';
import { AttachmentThumbnailComponent } from './categories/attachment/attachment.thumbnail';
import { AvatarThumbnailComponent } from './categories/avatar/avatar.thumbnail';
import { BadgeThumbnailComponent } from './categories/badge/badge.thumbnail';
import { BannerThumbnailComponent } from './categories/banner/banner.thumbnail';
import { BreadcrumbThumbnailComponent } from './categories/breadcrumb/breadcrumb.thumbnail';
import { ButtonThumbnailComponent } from './categories/button/button.thumbnail';
import { CalendarThumbnailComponent } from './categories/calendar/calendar.thumbnail';
import { CardThumbnailComponent } from './categories/card/card.thumbnail';
import { CheckboxThumbnailComponent } from './categories/checkbox/checkbox.thumbnail';
import { ColorPickerThumbnailComponent } from './categories/color-picker/color-picker.thumbnail';
import { DialogThumbnailComponent } from './categories/dialog/dialog.thumbnail';
import { DropdownThumbnailComponent } from './categories/dropdown/dropdown.thumbnail';
import { EventCalendarThumbnailComponent } from './categories/event-calendar/event-calendar.thumbnail';
import { FileUploadThumbnailComponent } from './categories/file-upload/file-upload.thumbnail';
import { ImageCropperThumbnailComponent } from './categories/image-cropper/image-cropper.thumbnail';
import { InputThumbnailComponent } from './categories/input/input.thumbnail';
import { NotificationThumbnailComponent } from './categories/notification/notification.thumbnail';
import { PaginationThumbnailComponent } from './categories/pagination/pagination.thumbnail';
import { PopoverThumbnailComponent } from './categories/popover/popover.thumbnail';
import { RadioThumbnailComponent } from './categories/radio/radio.thumbnail';
import { SelectThumbnailComponent } from './categories/select/select.thumbnail';
import { SidebarThumbnailComponent } from './categories/sidebar/sidebar.thumbnail';
import { SliderThumbnailComponent } from './categories/slider/slider.thumbnail';
import { SwitchThumbnailComponent } from './categories/switch/switch.thumbnail';
import { TabsThumbnailComponent } from './categories/tabs/tabs.thumbnail';
import { componentCatalog } from './category-catalog';

const thumbnails: Record<string, Type<unknown>> = {
	'components/attachment': AttachmentThumbnailComponent,
	'components/sidebar': SidebarThumbnailComponent,
	'components/color-picker': ColorPickerThumbnailComponent,
	'components/accordion': AccordionThumbnailComponent,
	'components/alert': AlertThumbnailComponent,
	'components/avatar': AvatarThumbnailComponent,
	'components/badge': BadgeThumbnailComponent,
	'components/banner': BannerThumbnailComponent,
	'components/breadcrumb': BreadcrumbThumbnailComponent,
	'components/button': ButtonThumbnailComponent,
	'components/calendar': CalendarThumbnailComponent,
	'components/card': CardThumbnailComponent,
	'components/checkbox': CheckboxThumbnailComponent,
	'components/dialog': DialogThumbnailComponent,
	'components/dropdown': DropdownThumbnailComponent,
	'components/event-calendar': EventCalendarThumbnailComponent,
	'components/file-upload': FileUploadThumbnailComponent,
	'components/image-cropper': ImageCropperThumbnailComponent,
	'components/input': InputThumbnailComponent,
	'components/notification': NotificationThumbnailComponent,
	'components/pagination': PaginationThumbnailComponent,
	'components/popover': PopoverThumbnailComponent,
	'components/radio': RadioThumbnailComponent,
	'components/select': SelectThumbnailComponent,
	'components/slider': SliderThumbnailComponent,
	'components/switch': SwitchThumbnailComponent,
	'components/tabs': TabsThumbnailComponent,
};

export const previewComponents: ComponentInfo[] = componentCatalog.map((category) => ({
	...category,
	thumbnail: thumbnails[category.path],
}));
