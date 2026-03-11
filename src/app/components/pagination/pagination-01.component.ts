import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { map } from 'rxjs';

@Component({
	selector: 'sim-pagination-01',
	imports: [HlmPaginationImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full' },
	template: `
		<nav hlmPagination class="w-full">
			<ul hlmPaginationContent class="w-full justify-between">
				<li hlmPaginationItem>
					<hlm-pagination-previous
						link="."
						[class]="computedPreviousClass()"
						[queryParams]="{ page: currentPage() - 1 }"
						queryParamsHandling="merge" />
				</li>
				<li hlmPaginationItem>
					<hlm-pagination-next
						link="."
						[class]="computedNextClass()"
						[queryParams]="{ page: currentPage() + 1 }"
						queryParamsHandling="merge" />
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
	protected readonly computedPreviousClass = computed(() => this.navButtonClass(this.currentPage() <= 1));
	protected readonly computedNextClass = computed(() => this.navButtonClass(this.currentPage() >= this.pages.length));

	private navButtonClass(isDisabled: boolean): string {
		return ['px-0!', isDisabled && 'opacity-50 select-none pointer-events-none'].filter(Boolean).join(' ');
	}
}
