import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { map } from 'rxjs';

@Component({
	selector: 'sim-pagination-05',
	imports: [HlmPaginationImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full' },
	template: `
		<div class="flex items-center justify-between gap-3">
			<p aria-live="polite" class="text-muted-foreground grow text-sm">
				Page
				<span class="text-foreground">{{ currentPage() }}</span>
				of
				<span class="text-foreground">{{ totalPages() }}</span>
			</p>
			<nav hlmPagination class="w-auto">
				<ul hlmPaginationContent class="gap-3">
					<li hlmPaginationItem></li>
					<li hlmPaginationItem>
						<hlm-pagination-previous
							link="."
							queryParamsHandling="merge"
							[class]="computedPreviousClass()"
							[queryParams]="{ page: currentPage() - 1 }" />
					</li>
					<li hlmPaginationItem>
						<hlm-pagination-next
							link="."
							queryParamsHandling="merge"
							[class]="computedNextClass()"
							[queryParams]="{ page: currentPage() + 1 }" />
					</li>
				</ul>
			</nav>
		</div>
	`,
})
export class Pagination05Component {
	private readonly _route = inject(ActivatedRoute);

	private readonly _pageQuery = toSignal(
		this._route.queryParamMap.pipe(
			map((params) => {
				const pageQuery = params.get('page');
				return pageQuery ? numberAttribute(pageQuery, 1) : undefined;
			}),
		),
	);

	protected readonly pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	protected readonly currentPage = computed(() => this._pageQuery() ?? 1);
	protected readonly totalPages = computed(() => this.pages.length);
	protected readonly computedPreviousClass = computed(() => this.navButtonClass(this.currentPage() <= 1));
	protected readonly computedNextClass = computed(() => this.navButtonClass(this.currentPage() >= this.pages.length));

	private navButtonClass(isDisabled: boolean): string {
		return [
			'[&>a]:border [&>a]:rounded-md [&>a]:shadow-xs px-0!',
			isDisabled && 'opacity-50 pointer-events-none select-none',
		]
			.filter(Boolean)
			.join(' ');
	}
}
