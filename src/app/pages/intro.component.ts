import { Component } from '@angular/core';
import { ComponentHeaderComponent, FooterComponent } from '../core';

@Component({
	selector: 'app-intro',
	imports: [ComponentHeaderComponent, FooterComponent],
	host: {
		class: 'flex flex-col flex-1',
	},
	template: `
		<div class="flex flex-1 flex-col justify-between">
			<sim-component-header name="Introduction" description="" />
			<div class="mt-[50px] mb-auto flex flex-col items-center justify-center">
				<div class="flex max-w-[1000px] flex-col items-start justify-center gap-12">
					<div>
						<div class="h-[58px] text-2xl font-semibold">About This Project</div>
						<span class="text-primary text-lg">
							SimUI is a free, open-source collection of copy-paste Angular components for developers building with
							<a href="https://spartan.ng/" target="_blank" class="font-semibold underline">Spartan UI</a>
							and
							<a href="https://tailwindcss.com/" target="_blank" class="font-semibold underline">Tailwind CSS</a>
							. Browse a component, copy the source, and customize it directly in your own Angular project.
						</span>
						<br />
						<br />
						<span class="text-primary text-lg">
							Spartan UI provides accessible headless primitives for Angular. SimUI builds on top of those primitives
							with polished examples for buttons, dialogs, menus, forms, calendars, uploads, and more, so teams can
							start from working UI patterns instead of assembling every interface from scratch.
						</span>
					</div>
					<div>
						<div class="h-[58px] text-2xl font-semibold">When To Use SimUI</div>
						<span class="text-primary text-lg">
							Use SimUI when you are starting an Angular application with Spartan UI and want production-ready examples
							that you can own. The component source is meant to be copied into your codebase, reviewed, renamed,
							extended, and themed without depending on a closed component API.
						</span>
					</div>
					<div>
						<div class="h-[58px] text-2xl font-semibold">Inspiration</div>
						<span class="text-primary text-lg">
							The design and visual direction of this project were heavily inspired by
							<a href="https://originui.com/" target="_blank" class="font-semibold underline">Origin UI</a>
							. Some component designs were directly influenced by their aesthetic and UX patterns, which helped shape
							the look and feel of this application.
						</span>
					</div>
				</div>
			</div>
			<app-footer />
		</div>
	`,
})
export class IntroductionComponent {}
