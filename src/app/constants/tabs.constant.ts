import {
	tabs01Code,
	Tabs01Component,
	tabs02Code,
	Tabs02Component,
	Tabs03Component,
	tabs04Code,
	Tabs04Component,
	tabs05Code,
	Tabs05Component,
	tabs06Code,
	Tabs06Component,
} from '../components/tabs';
import { ComponentCardItem } from '../core';

export const tabsComponents: ComponentCardItem[] = [
	{
		id: 'tabs-01',
		component: Tabs01Component,
		code: tabs01Code,
		colNumber: 2,
		itemStyle: 1,
	},
	{
		id: 'tabs-02',
		component: Tabs02Component,
		code: tabs02Code,
		colNumber: 2,
		itemStyle: 1,
	},
	{
		id: 'tabs-03',
		component: Tabs03Component,
		code: tabs02Code,
		colNumber: 2,
		itemStyle: 1,
	},
	{
		id: 'tabs-04',
		component: Tabs04Component,
		code: tabs04Code,
		colNumber: 2,
		itemStyle: 1,
	},
	{
		id: 'tabs-05',
		component: Tabs05Component,
		code: tabs05Code,
		colNumber: 2,
		itemStyle: 1,
	},
	{
		id: 'tabs-06',
		component: Tabs06Component,
		code: tabs06Code,
		colNumber: 2,
		itemStyle: 1,
	},
];
