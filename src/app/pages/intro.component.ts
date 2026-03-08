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
			<component-header name="Introduction" description="" />
			<div class="mt-[50px] mb-auto flex flex-col items-center justify-center">
				<div class="flex max-w-[1000px] flex-col items-start justify-center gap-12">
					<div>
						<div class="h-[58px] text-2xl font-semibold">About This Project</div>
						<span class="text-primary text-lg">
							This project is built with a strong foundation of modern UI practices and open-source technologies. All
							components are crafted using
							<a href="https://spartan.ng/" target="_blank" class="font-semibold underline">Spartan UI</a>
							and
							<a href="https://tailwindcss.com/" target="_blank" class="font-semibold underline">Tailwind CSS</a>
							, allowing for a clean, responsive, and highly customizable interface.
						</span>
						<br />
						<br />
						<span class="text-primary text-lg">
							Spartan UI is a headless, accessible component library for Angular. It provides a robust foundation of
							unstyled and composable UI primitives that let you build your own design system or integrate seamlessly
							with utility-first CSS frameworks like Tailwind CSS. In this project, Spartan UI was used to create
							reusable components such as buttons, dialogs, menus, and forms—ensuring both accessibility and flexibility
							across the application.
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
