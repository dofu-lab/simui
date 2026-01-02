import { Component } from '@angular/core';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { AuthenticationExample } from './authentication/authentication';
import { OverviewExample } from './overview/overview';
import { PlaygroundExample } from './playground/playground';
import { TasksExample } from './tasks/tasks';

@Component({
	selector: 'app-editor-preview',
	imports: [HlmTabsImports, OverviewExample, PlaygroundExample, AuthenticationExample, TasksExample],
	template: `
		<hlm-tabs tab="examples" class="size-full p-4">
			<hlm-tabs-list
				aria-label="tabs example"
				class="bg-background dark:[&>a]:bg-background [&>a]:text-muted-foreground [&>a]:data-[state=active]:text-primary [&>a]:hover:text-primary dark:[&>a]:data-[state=active]:bg-background [&>a]:cursor-pointer [&>a]:data-[state=active]:shadow-none dark:[&>a]:data-[state=active]:border-none">
				<a hlmTabsTrigger="examples" routerLink=".">Examples</a>
				<a hlmTabsTrigger="tasks" routerLink="." fragment="tasks">Tasks</a>
				<a hlmTabsTrigger="playground" routerLink="." fragment="playground">Playground</a>
				<a hlmTabsTrigger="authentication" routerLink="." fragment="authentication">Authentication</a>
			</hlm-tabs-list>
			<div class="relative h-full w-full overflow-auto rounded-xl border">
				<div class="absolute w-full">
					<div hlmTabsContent="examples" class="mt-0 p-4">
						<app-overview-example />
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
			</div>
		</hlm-tabs>
	`,
})
export class EditorPreview {}
