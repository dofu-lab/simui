import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { STORAGE_KEYS } from '../../constants/storage-keys';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { AuthenticationExample } from './authentication/authentication';
import { ColorPalettes } from './color-palettes';
import { OverviewExample } from './overview/overview';
import { PlaygroundExample } from './playground/playground';
import { TasksExample } from './tasks/tasks';

@Component({
	selector: 'app-editor-preview',
	imports: [
		HlmTabsImports,
		RouterLink,
		OverviewExample,
		PlaygroundExample,
		AuthenticationExample,
		TasksExample,
		ColorPalettes,
	],
	template: `
		<hlm-tabs [tab]="tab()" class="size-full px-4 pt-2 pb-4">
			<hlm-tabs-list
				aria-label="tabs example"
				class="bg-background dark:[&>a]:bg-background [&>a]:text-muted-foreground [&>a]:data-[state=active]:text-primary [&>a]:hover:text-primary dark:[&>a]:data-[state=active]:bg-background [&>a]:cursor-pointer [&>a]:pr-0 [&>a]:data-[state=active]:shadow-none dark:[&>a]:data-[state=active]:border-none">
				<a hlmTabsTrigger="examples" routerLink="." fragment="examples">Examples</a>
				<a hlmTabsTrigger="tasks" routerLink="." fragment="tasks">Tasks</a>
				<a hlmTabsTrigger="playground" routerLink="." fragment="playground">Playground</a>
				<a hlmTabsTrigger="authentication" routerLink="." fragment="authentication">Authentication</a>
				<a hlmTabsTrigger="colors" routerLink="." fragment="colors">Colors</a>
			</hlm-tabs-list>
			<div class="relative h-full w-full overflow-auto rounded-xl border">
				<div class="absolute w-full">
					<div hlmTabsContent="examples" class="mt-0 p-4">
						@defer {
							<app-overview-example />
						}
					</div>
				</div>
				<div hlmTabsContent="tasks" class="absolute mt-0 size-full p-4">
					<app-tasks-example />
				</div>
				<div hlmTabsContent="playground" class="mt-0 size-full p-4">
					<app-playground-example />
				</div>
				<div hlmTabsContent="authentication" class="mt-0 size-full p-4">
					<app-authentication-example />
				</div>
				<div class="absolute w-full">
					<div hlmTabsContent="colors" class="mt-0 size-full p-4">
						<sim-color-palettes />
					</div>
				</div>
			</div>
		</hlm-tabs>
	`,
})
export class EditorPreview implements OnInit {
	private readonly _router = inject(Router);
	private readonly _route = inject(ActivatedRoute);
	private readonly _localStorageService = inject(LocalStorageService);

	protected readonly tab = signal('examples');

	ngOnInit() {
		this._route.fragment.subscribe((fragment) => {
			if (fragment) {
				this.tab.set(fragment);
				this._localStorageService.setItem(STORAGE_KEYS.THEME_EDITOR_TAB, fragment);
			} else {
				const savedTab = this._localStorageService.getItem<string>(STORAGE_KEYS.THEME_EDITOR_TAB);
				if (savedTab) {
					this.tab.set(savedTab);
				}
			}
		});

		const savedTab = this._localStorageService.getItem<string>(STORAGE_KEYS.THEME_EDITOR_TAB);
		const currentFragment = this._route.snapshot.fragment;

		if (!currentFragment && savedTab && savedTab !== 'examples') {
			this._router.navigate([], { fragment: savedTab, relativeTo: this._route });
		}
	}
}
