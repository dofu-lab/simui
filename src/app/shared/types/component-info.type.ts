import { Type } from '@angular/core';

export type ComponentInfo = {
	name: string;
	description?: string;
	compNumber: number;
	thumbnail: Type<unknown>;
	path: string;
	isNew?: boolean;
};
