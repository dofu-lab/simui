import { Type } from '@angular/core';

export interface ComponentCardItem {
	id: string;
	component: Type<unknown>;
	colNumber: number;
	itemStyle: number;
}
