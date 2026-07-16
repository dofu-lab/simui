import { Type } from '@angular/core';

export type ComponentCardLayout = 'third' | 'half' | 'full';
export type ComponentCardAlignment = 'center' | 'text-center' | 'column-center' | 'start';

export interface ComponentCardItem {
	id: string;
	component: Type<unknown> | null;
	layout: ComponentCardLayout;
	alignment: ComponentCardAlignment;
}
