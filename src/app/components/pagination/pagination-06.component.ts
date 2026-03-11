import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { map } from 'rxjs';

type PaginationReturn = {
	pages: number[];
	showLeftEllipsis: boolean;
	showRightEllipsis: boolean;
};

@Component({
	selector: 'sim-pagination-06',
	imports: [HlmPaginationImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full' },
	template: `
		<nav hlmPagination>
			<ul hlmPaginationContent>
				<li hlmPaginationItem>
					<hlm-pagination-previous
						link="."
						[class]="computedPreviousClass()"
						[queryParams]="{ page: currentPage() - 1 }"
						queryParamsHandling="merge" />
				</li>
				@if (paginationRange().showLeftEllipsis) {
					<li hlmPaginationItem>
						<hlm-pagination-ellipsis />
					</li>
				}
				@for (page of paginationRange().pages; track page) {
					<li hlmPaginationItem>
						<a
							hlmPaginationLink
							link="."
							[isActive]="currentPage() === page"
							[queryParams]="{ page: page }"
							queryParamsHandling="merge">
							{{ page }}
						</a>
					</li>
				}
				@if (paginationRange().showRightEllipsis) {
					<li hlmPaginationItem>
						<hlm-pagination-ellipsis />
					</li>
				}
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
export class Pagination06Component {
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
	protected readonly paginationRange = computed(() =>
		calculatePaginationRange(this.currentPage(), this.totalPages(), 5),
	);
	protected readonly currentPage = computed(() => this._pageQuery() ?? 1);
	protected readonly totalPages = computed(() => this.pages.length);
	protected readonly computedPreviousClass = computed(() => this.navButtonClass(this.currentPage() <= 1));
	protected readonly computedNextClass = computed(() => this.navButtonClass(this.currentPage() >= this.pages.length));

	private navButtonClass(isDisabled: boolean): string {
		return ['px-0!', isDisabled && 'opacity-50 select-none pointer-events-none'].filter(Boolean).join(' ');
	}
}

function calculatePaginationRange(
	currentPage: number,
	totalPages: number,
	paginationItemsToDisplay: number,
): PaginationReturn {
	const showLeftEllipsis = currentPage - 1 > paginationItemsToDisplay / 2;
	const showRightEllipsis = totalPages - currentPage + 1 > paginationItemsToDisplay / 2;

	function calculatePaginationRange(): number[] {
		if (totalPages <= paginationItemsToDisplay) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		const halfDisplay = Math.floor(paginationItemsToDisplay / 2);
		const initialRange = {
			end: currentPage + halfDisplay,
			start: currentPage - halfDisplay,
		};

		const adjustedRange = {
			end: Math.min(totalPages, initialRange.end),
			start: Math.max(1, initialRange.start),
		};

		if (adjustedRange.start === 1) {
			adjustedRange.end = paginationItemsToDisplay;
		}
		if (adjustedRange.end === totalPages) {
			adjustedRange.start = totalPages - paginationItemsToDisplay + 1;
		}

		if (showLeftEllipsis) adjustedRange.start++;
		if (showRightEllipsis) adjustedRange.end--;

		return Array.from({ length: adjustedRange.end - adjustedRange.start + 1 }, (_, i) => adjustedRange.start + i);
	}

	const pages = calculatePaginationRange();

	return {
		pages,
		showLeftEllipsis,
		showRightEllipsis,
	};
}
