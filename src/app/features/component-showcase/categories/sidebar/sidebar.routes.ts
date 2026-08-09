import { Routes } from '@angular/router';

export const SIDEBAR_ROUTES: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./sidebar.page').then((m) => m.SidebarComponent),
	},
	{
		path: 'view/sidebar-01',
		loadComponent: () => import('./previews/sidebar-01-preview.page').then((m) => m.Sidebar01PreviewPage),
		data: {
			title: 'Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 01 component.',
		},
	},
	{
		path: 'view/sidebar-02',
		loadComponent: () => import('./previews/sidebar-02-preview.page').then((m) => m.Sidebar02PreviewPage),
		data: {
			title: 'Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 02 component.',
		},
	},
	{
		path: 'view/sidebar-03',
		loadComponent: () => import('./previews/sidebar-03-preview.page').then((m) => m.Sidebar03PreviewPage),
		data: {
			title: 'Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 03 component.',
		},
	},
	{
		path: 'view/sidebar-04',
		loadComponent: () => import('./previews/sidebar-04-preview.page').then((m) => m.Sidebar04PreviewPage),
		data: {
			title: 'Workspace Command Center Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 04 workspace command center component.',
		},
	},
	{
		path: 'view/sidebar-05',
		loadComponent: () => import('./previews/sidebar-05-preview.page').then((m) => m.Sidebar05PreviewPage),
		data: {
			title: 'Project Pulse Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 05 project pulse component.',
		},
	},
	{
		path: 'view/sidebar-06',
		loadComponent: () => import('./previews/sidebar-06-preview.page').then((m) => m.Sidebar06PreviewPage),
		data: {
			title: 'Smart Favorites Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 06 smart favorites component.',
		},
	},
	{
		path: 'view/sidebar-07',
		loadComponent: () => import('./previews/sidebar-07-preview.page').then((m) => m.Sidebar07PreviewPage),
		data: {
			title: 'Smart Favorites Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 07 smart favorites component.',
		},
	},
	{
		path: 'view/sidebar-08',
		loadComponent: () => import('./previews/sidebar-08-preview.page').then((m) => m.Sidebar08PreviewPage),
		data: {
			title: 'Dashboard Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 08 dashboard component.',
		},
	},
	{
		path: 'view/sidebar-09',
		loadComponent: () => import('./previews/sidebar-09-preview.page').then((m) => m.Sidebar09PreviewPage),
		data: {
			title: 'Dashboard Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 09 dashboard component.',
		},
	},
	{
		path: 'view/sidebar-10',
		loadComponent: () => import('./previews/sidebar-10-preview.page').then((m) => m.Sidebar10PreviewPage),
		data: {
			title: 'Dashboard Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 10 dashboard component.',
		},
	},
	{
		path: 'view/sidebar-11',
		loadComponent: () => import('./previews/sidebar-11-preview.page').then((m) => m.Sidebar11PreviewPage),
		data: {
			title: 'Dashboard Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 11 dashboard component.',
		},
	},
	{
		path: 'view/sidebar-12',
		loadComponent: () => import('./previews/sidebar-12-preview.page').then((m) => m.Sidebar12PreviewPage),
		data: {
			title: 'Dashboard Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 12 dashboard component.',
		},
	},
	{
		path: 'view/sidebar-13',
		loadComponent: () => import('./previews/sidebar-13-preview.page').then((m) => m.Sidebar13PreviewPage),
		data: {
			title: 'Dashboard Sidebar Preview - SimUI',
			description: 'Full-screen preview of the Sidebar 13 dashboard component.',
		},
	},
];
