import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronFirst, lucideChevronLast } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { hlm } from '@spartan-ng/helm/utils';
import { map } from 'rxjs';

type PaginationReturn = {
	pages: number[];
	showLeftEllipsis: boolean;
	showRightEllipsis: boolean;
};

@Component({
	selector: 'app-pagination-07',
	imports: [HlmPaginationImports, HlmButton, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideChevronLast, lucideChevronFirst })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full' },
	template: `
		<nav hlmPagination>
			<ul hlmPaginationContent>
				<li hlmPaginationItem [class]="computedPreviousClass()">
					<a hlmPaginationLink link="." [queryParams]="{ page: 1 }" queryParamsHandling="merge">
						<button hlmBtn size="icon" variant="ghost">
							<ng-icon hlm size="sm" name="lucideChevronFirst" />
						</button>
					</a>
				</li>
				<li hlmPaginationItem [class]="computedPreviousClass()">
					<hlm-pagination-previous
						link="."
						queryParamsHandling="merge"
						[queryParams]="{ page: currentPage() - 1 }"
						[iconOnly]="true" />
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
						iconOnly="true"
						[queryParams]="{ page: currentPage() + 1 }" />
				</li>
				<li hlmPaginationItem [class]="computedNextClass()">
					<a hlmPaginationLink link="." [queryParams]="{ page: 10 }" queryParamsHandling="merge">
						<button hlmBtn size="icon" variant="ghost">
							<ng-icon hlm size="sm" name="lucideChevronLast" />
						</button>
					</a>
				</li>
			</ul>
		</nav>
	`,
})
export class Pagination07Component {
	private readonly _route = inject(ActivatedRoute);
	private readonly _pageQuery = toSignal(
		this._route.queryParamMap.pipe(
			map((params) => {
				const pageQuery = params.get('page');
				return pageQuery ? numberAttribute(pageQuery, 1) : undefined;
			}),
		),
	);

	protected pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
	protected paginationRange = computed(() => calculatePaginationRange(this.currentPage(), this.totalPages(), 5));
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

export const pagination07Code = `import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronFirst, lucideChevronLast } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { hlm } from '@spartan-ng/helm/utils';
import { map } from 'rxjs';

type PaginationReturn = {
	pages: number[];
	showLeftEllipsis: boolean;
	showRightEllipsis: boolean;
};

@Component({
	selector: 'app-pagination-07',
	imports: [HlmPaginationImports, HlmButton, NgIcon, HlmIcon],
	providers: [provideIcons({ lucideChevronLast, lucideChevronFirst })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full' },
	template: \`
		<nav hlmPagination>
			<ul hlmPaginationContent>
				<li hlmPaginationItem [class]="computedPreviousClass()">
					<a hlmPaginationLink link="." [queryParams]="{ page: 1 }" queryParamsHandling="merge">
						<button hlmBtn size="icon" variant="ghost">
							<ng-icon hlm size="sm" name="lucideChevronFirst" />
						</button>
					</a>
				</li>
				<li hlmPaginationItem [class]="computedPreviousClass()">
					<hlm-pagination-previous
						link="."
						queryParamsHandling="merge"
						[queryParams]="{ page: currentPage() - 1 }"
						[iconOnly]="true" />
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
						iconOnly="true"
						[queryParams]="{ page: currentPage() + 1 }" />
				</li>
				<li hlmPaginationItem [class]="computedNextClass()">
					<a hlmPaginationLink link="." [queryParams]="{ page: 10 }" queryParamsHandling="merge">
						<button hlmBtn size="icon" variant="ghost">
							<ng-icon hlm size="sm" name="lucideChevronLast" />
						</button>
					</a>
				</li>
			</ul>
		</nav>
	\`,
})
export class Pagination07Component {
	private readonly _route = inject(ActivatedRoute);
	private readonly _pageQuery = toSignal(
		this._route.queryParamMap.pipe(
			map((params) => {
				const pageQuery = params.get('page');
				return pageQuery ? numberAttribute(pageQuery, 1) : undefined;
			}),
		),
	);

	protected pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
	protected paginationRange = computed(() => calculatePaginationRange(this.currentPage(), this.totalPages(), 5));
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
}`;
