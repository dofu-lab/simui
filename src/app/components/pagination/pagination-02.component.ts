import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { map } from 'rxjs';

@Component({
	selector: 'sim-pagination-02',
	imports: [HlmPaginationImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full' },
	template: `
		<nav hlmPagination>
			<ul hlmPaginationContent class="w-full justify-between">
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
	`,
})
export class Pagination02Component {
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
	protected readonly computedPreviousClass = computed(() => this.navButtonClass(this.currentPage() <= 1));
	protected readonly computedNextClass = computed(() => this.navButtonClass(this.currentPage() >= this.pages.length));

	private navButtonClass(isDisabled: boolean): string {
		return ['[&>a]:border [&>a]:rounded-md [&>a]:shadow-xs px-0!', isDisabled && 'opacity-50 pointer-events-none']
			.filter(Boolean)
			.join(' ');
	}
}
