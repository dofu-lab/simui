import { Component, output } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';

@Component({
	selector: 'sim-empty-state-07',
	imports: [HlmEmptyImports, HlmButtonImports],
	host: { class: 'block w-full max-w-lg' },
	template: `
		<hlm-empty class="gap-5 px-4 py-8 sm:px-6">
			<hlm-empty-header class="w-full max-w-none gap-3">
				<hlm-empty-media class="relative isolate mb-0 h-52 w-full max-w-80" aria-hidden="true">
					<div
						class="pointer-events-none absolute -inset-x-4 -top-4 -bottom-12 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_15%,transparent_70%)] bg-size-[26px_26px] bg-center opacity-60"></div>
					<div class="relative mt-20 flex items-center justify-center">
						<div
							class="bg-background relative -mx-0.5 mt-3 flex size-14 -rotate-15 items-center justify-center rounded-xl border shadow-md">
							<svg viewBox="0 0 48 48" class="size-8 shrink-0" aria-hidden="true" focusable="false">
								<g transform="translate(3)">
									<path
										d="M8 1h21.586L41 12.414V40a7 7 0 0 1-7 7H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z"
										stroke-width="2"
										class="fill-slate-500 stroke-slate-500" />
									<path d="M33 13h9v-1L30 0h-1v9a4 4 0 0 0 4 4Z" class="fill-slate-400" />
									<path class="fill-white" d="M6 15h10.5a1.5 1.5 0 0 1 0 3H6v-3Zm0 6h21.5a1.5 1.5 0 0 1 0 3H6v-3Z" />
									<text x="21" y="40" text-anchor="middle" class="text-ui-control-xs fill-white font-bold">DOC</text>
								</g>
							</svg>
						</div>
						<div class="bg-background relative flex size-14 items-center justify-center rounded-xl border shadow-md">
							<svg viewBox="0 0 48 48" class="size-8 shrink-0" aria-hidden="true" focusable="false">
								<g transform="translate(3)">
									<path
										d="M8 1h21.586L41 12.414V40a7 7 0 0 1-7 7H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z"
										stroke-width="2"
										class="fill-red-600 stroke-red-600" />
									<path d="M33 13h9v-1L30 0h-1v9a4 4 0 0 0 4 4Z" class="fill-red-500" />
									<path class="fill-white" d="M6 15h10.5a1.5 1.5 0 0 1 0 3H6v-3Zm0 6h21.5a1.5 1.5 0 0 1 0 3H6v-3Z" />
									<text x="21" y="40" text-anchor="middle" class="text-ui-control-xs fill-white font-bold">PDF</text>
								</g>
							</svg>
						</div>
						<div
							class="bg-background relative -mx-0.5 mt-3 flex size-14 rotate-15 items-center justify-center rounded-xl border shadow-md">
							<svg viewBox="0 0 48 48" class="size-8 shrink-0" aria-hidden="true" focusable="false">
								<g transform="translate(3)">
									<path
										d="M8 1h21.586L41 12.414V40a7 7 0 0 1-7 7H8a7 7 0 0 1-7-7V8a7 7 0 0 1 7-7Z"
										stroke-width="2"
										class="fill-emerald-500 stroke-emerald-500" />
									<path d="M33 13h9v-1L30 0h-1v9a4 4 0 0 0 4 4Z" class="fill-emerald-400" />
									<path
										class="fill-white"
										transform="translate(5 5) scale(.5833)"
										d="M22 13v7a1 1 0 0 1-1 1h-8v-8h9Zm-11 0v8H3a1 1 0 0 1-1-1v-7h9Zm0-10v8H2V4a1 1 0 0 1 1-1h8Zm10 0a1 1 0 0 1 1 1v7h-9V3h8Z" />
									<text x="21" y="40" text-anchor="middle" class="text-ui-control-xs fill-white font-bold">XLS</text>
								</g>
							</svg>
						</div>
					</div>
				</hlm-empty-media>
				<h3 hlmEmptyTitle>No files found</h3>
				<p hlmEmptyDescription class="max-w-96">
					We couldn’t find any files matching your search. Try adjusting your keywords or clearing the filters.
				</p>
			</hlm-empty-header>
			<hlm-empty-content>
				<button hlmBtn type="button" variant="outline" (click)="clearFilters.emit()">Clear filters</button>
			</hlm-empty-content>
		</hlm-empty>
	`,
})
export class EmptyState07Component {
	public readonly clearFilters = output<void>();
}
