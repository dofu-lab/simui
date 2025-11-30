import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { hlm } from '@spartan-ng/helm/utils';
import { map } from 'rxjs';

@Component({
	selector: 'sim-pagination-01',
	imports: [HlmPaginationImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full' },
	template: `
		<nav hlmPagination class="w-full">
			<ul hlmPaginationContent class="w-full justify-between">
				<li hlmPaginationItem [class]="computedPreviousClass()">
					<hlm-pagination-previous link="." [queryParams]="{ page: currentPage() - 1 }" queryParamsHandling="merge" />
				</li>
				<li hlmPaginationItem [class]="computedNextClass()">
					<hlm-pagination-next link="." [queryParams]="{ page: currentPage() + 1 }" queryParamsHandling="merge" />
				</li>
			</ul>
		</nav>
	`,
})
export class Pagination01Component {
	private readonly _route = inject(ActivatedRoute);
	private readonly _pageQuery = toSignal(
		this._route.queryParamMap.pipe(
			map((params) => {
				const pageQuery = params.get('page');
				return pageQuery ? numberAttribute(pageQuery, 1) : undefined;
			}),
		),
	);

	protected readonly pages = [1, 2, 3, 4];

	protected readonly currentPage = computed(() => this._pageQuery() ?? 1);
	protected readonly computedPreviousClass = computed(() =>
		hlm(this.currentPage() <= 1 ? 'opacity-50 pointer-events-none' : ''),
	);
	protected readonly computedNextClass = computed(() =>
		hlm(this.currentPage() >= this.pages.length ? 'opacity-50 pointer-events-none' : ''),
	);
}