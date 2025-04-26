import {
	dialog01Code,
	Dialog01Component,
	dialog02Code,
	Dialog02Component,
	dialog03Code,
	Dialog03Component,
} from '../components/dialog';
import { ComponentCardItem } from '../core';

export const dialogComponents: ComponentCardItem[] = [
	{
		id: 'dialog-01',
		component: Dialog01Component,
		code: dialog01Code,
		colNumber: 4,
		itemStyle: 1,
	},
	{
		id: 'dialog-02',
		component: Dialog02Component,
		code: dialog02Code,
		colNumber: 4,
		itemStyle: 1,
	},
	{
		id: 'dialog-03',
		component: Dialog03Component,
		code: dialog03Code,
		colNumber: 4,
		itemStyle: 1,
	},
];
