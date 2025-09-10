import {
	input01Code,
	Input01Component,
	input02Code,
	Input02Component,
	input03Code,
	Input03Component,
	input04Code,
	Input04Component,
	input05Code,
	Input05Component,
	input06Code,
	Input06Component,
} from '../components/input';
import { ComponentCardItem } from '../core';

export const inputComponents: ComponentCardItem[] = [
	{
		component: Input01Component,
		code: input01Code,
		colNumber: 4,
		itemStyle: 1,
		id: 'input-01',
	},
	{
		component: Input02Component,
		code: input02Code,
		colNumber: 4,
		itemStyle: 1,
		id: 'input-02',
	},
	{
		component: Input03Component,
		code: input03Code,
		colNumber: 4,
		itemStyle: 1,
		id: 'input-03',
	},
	{
		component: Input04Component,
		code: input04Code,
		colNumber: 4,
		itemStyle: 1,
		id: 'input-04',
	},
	{
		component: Input05Component,
		code: input05Code,
		colNumber: 4,
		itemStyle: 1,
		id: 'input-05',
	},
	{
		component: Input06Component,
		code: input06Code,
		colNumber: 4,
		itemStyle: 1,
		id: 'input-06',
	},
];
