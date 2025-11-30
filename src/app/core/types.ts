import { Type } from '@angular/core';

export type ComponentCardItem = {
	id: string;
	component: Type<unknown>;
	colNumber: number;
	itemStyle: number;
};
