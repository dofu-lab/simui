import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { hlm } from '@spartan-ng/helm/utils';
import { map } from 'rxjs';

type PaginationReturn = {
	pages: number[];
	showLeftEllipsis: boolean;
	showRightEllipsis: boolean;
};

@Component({
	selector: 'sim-pagination-12',
	imports: [HlmPaginationImports, BrnSelectImports, HlmSelectImports, FormsModule, HlmLabel, HlmInput],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'block w-full' },
	template: `
		<div class="flex items-center justify-between gap-3">
			<div class="grow">
				<nav hlmPagination>
					<ul hlmPaginationContent>
						<li hlmPaginationItem [class]="computedPreviousClass()">
							<hlm-pagination-previous
								link="."
								queryParamsHandling="merge"
								[iconOnly]="true"
								[queryParams]="{ page: currentPage() - 1 }" />
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
						<li hlmPaginationItem [class]="computedNextClass()">
							<hlm-pagination-next
								link="."
								queryParamsHandling="merge"
								[iconOnly]="true"
								[queryParams]="{ page: currentPage() + 1 }" />
						</li>
					</ul>
				</nav>
			</div>
			<div class="flex items-center gap-3">
				<label hlmLabel>Go to page:</label>
				<input hlmInput class="w-14" type="number" [min]="1" [max]="totalPages()" [value]="currentPage()" />
			</div>
		</div>
	`,
})
export class Pagination12Component {
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
	protected readonly pageSizes = [5, 10, 20, 50, 100];
	protected readonly currentPage = computed(() => this._pageQuery() ?? 1);
	protected readonly totalPages = computed(() => this.pages.length);
	protected readonly computedPreviousClass = computed(() => {
		const isDisabled = this.currentPage() <= 1;
		return hlm(isDisabled ? 'opacity-50 pointer-events-none' : '');
	});
	protected readonly computedNextClass = computed(() => {
		const isDisabled = this.currentPage() >= this.pages.length;
		return hlm(isDisabled ? 'opacity-50 pointer-events-none' : '');
	});
	protected readonly paginationRange = computed(() =>
		calculatePaginationRange(this.currentPage(), this.totalPages(), 5),
	);
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