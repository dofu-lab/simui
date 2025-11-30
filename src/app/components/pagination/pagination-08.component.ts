import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide';
import { buttonVariants, HlmButton } from '@spartan-ng/helm/button';
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
	selector: 'sim-pagination-08',
	imports: [HlmPaginationImports, NgIcon, HlmIcon, HlmButton],
	providers: [provideIcons({ lucideChevronRight, lucideChevronLeft })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full' },
	template: `
		<nav hlmPagination>
			<ul hlmPaginationContent class="inline-flex gap-0 -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
				<li hlmPaginationItem [class]="computedPreviousClass()">
					<a hlmPaginationLink link="." [queryParams]="{ page: currentPage() - 1 }" queryParamsHandling="merge">
						<button hlmBtn size="icon" variant="outline" class="rounded-e-none shadow-none">
							<ng-icon hlm size="sm" name="lucideChevronLeft" />
						</button>
					</a>
				</li>
				@if (paginationRange().showLeftEllipsis) {
					<li hlmPaginationItem class="[&:first-child>a]:rounded-s-md [&:last-child>a]:rounded-e-md">
						<hlm-pagination-ellipsis [class]="generateEllipsisStyle()" />
					</li>
				}
				@for (page of paginationRange().pages; track page) {
					<li hlmPaginationItem>
						<a hlmPaginationLink link="." queryParamsHandling="merge" [queryParams]="{ page: page }">
							<button
								hlmBtn
								size="icon"
								variant="outline"
								[class]="'rounded-none shadow-none focus-visible:z-10 ' + (currentPage() === page ? 'bg-accent' : '')">
								{{ page }}
							</button>
						</a>
					</li>
				}
				@if (paginationRange().showRightEllipsis) {
					<li hlmPaginationItem class="[&:first-child>a]:rounded-s-md [&:last-child>a]:rounded-e-md">
						<hlm-pagination-ellipsis [class]="generateEllipsisStyle()" />
					</li>
				}
				<li hlmPaginationItem [class]="computedNextClass()">
					<a hlmPaginationLink link="." [queryParams]="{ page: currentPage() + 1 }" queryParamsHandling="merge">
						<button hlmBtn size="icon" variant="outline" class="rounded-s-none shadow-none">
							<ng-icon hlm size="sm" name="lucideChevronRight" />
						</button>
					</a>
				</li>
			</ul>
		</nav>
	`,
})
export class Pagination08Component {
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
	protected readonly paginationRange = computed(() =>
		calculatePaginationRange(this.currentPage(), this.totalPages(), 5),
	);
	protected readonly computedPreviousClass = computed(() => {
		const isDisabled = this.currentPage() <= 1;
		return hlm(
			isDisabled ? 'opacity-50 pointer-events-none' : '',
			buttonVariants({
				variant: 'outline',
				size: 'icon',
			}),
			'rounded-e-none',
		);
	});
	protected readonly computedNextClass = computed(() => {
		const isDisabled = this.currentPage() >= this.pages.length;
		return hlm(
			isDisabled ? 'opacity-50 pointer-events-none' : '',
			buttonVariants({
				variant: 'outline',
				size: 'icon',
			}),
			'rounded-s-none',
		);
	});

	protected generatePageStyle(page: number): string {
		return hlm('rounded-none shadow-none focus-visible:z-10', this.currentPage() === page ? 'bg-accent ' : '');
	}

	protected generateEllipsisStyle(): string {
		return hlm(
			buttonVariants({
				variant: 'outline',
				size: 'icon',
			}),
			'rounded-none shadow-none focus-visible:z-10',
		);
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