import { ChangeDetectionStrategy, Component, computed, inject, model, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronFirst, lucideChevronLast } from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { hlm } from '@spartan-ng/helm/utils';
import { map } from 'rxjs';

@Component({
	selector: 'app-pagination-10',
	imports: [
		HlmPaginationImports,
		BrnSelectImports,
		HlmSelectImports,
		FormsModule,
		NgIcon,
		HlmIcon,
		HlmButton,
		HlmLabel,
	],
	providers: [provideIcons({ lucideChevronLast, lucideChevronFirst })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'block w-full' },
	template: `
		<div class="flex items-center justify-between gap-3">
			<div class="flex items-center gap-3">
				<label hlmLabel>Rows per page</label>
				<brn-select [(ngModel)]="itemsPerPage" class="ml-auto" placeholder="Page size">
					<hlm-select-trigger class="w-fit">
						<hlm-select-value />
					</hlm-select-trigger>
					<hlm-select-content>
						@for (pageSize of pageSizes; track pageSize) {
							<hlm-option [value]="pageSize">{{ pageSize }}</hlm-option>
						}
					</hlm-select-content>
				</brn-select>
			</div>
			<p aria-live="polite" class="text-muted-foreground flex grow justify-end gap-1 text-sm whitespace-nowrap">
				<span class="text-foreground">1-25</span>
				<span>of</span>
				<span class="text-foreground">100</span>
			</p>
			<div class="grow">
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
			</div>
		</div>
	`,
})
export class Pagination10Component {
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
	protected itemsPerPage = model(this.pageSizes[1]);

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
}

export const pagination10Code = `import { ChangeDetectionStrategy, Component, computed, inject, model, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronFirst, lucideChevronLast } from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { hlm } from '@spartan-ng/helm/utils';
import { map } from 'rxjs';

@Component({
	selector: 'app-pagination-10',
	imports: [
		HlmPaginationImports,
		BrnSelectImports,
		HlmSelectImports,
		FormsModule,
		NgIcon,
		HlmIcon,
		HlmButton,
		HlmLabel,
	],
	providers: [provideIcons({ lucideChevronLast, lucideChevronFirst })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'block w-full' },
	template: \`
		<div class="flex items-center justify-between gap-3">
			<div class="flex items-center gap-3">
				<label hlmLabel>Rows per page</label>
				<brn-select [(ngModel)]="itemsPerPage" class="ml-auto" placeholder="Page size">
					<hlm-select-trigger class="w-fit">
						<hlm-select-value />
					</hlm-select-trigger>
					<hlm-select-content>
						@for (pageSize of pageSizes; track pageSize) {
							<hlm-option [value]="pageSize">{{ pageSize }}</hlm-option>
						}
					</hlm-select-content>
				</brn-select>
			</div>
			<p aria-live="polite" class="text-muted-foreground flex grow justify-end gap-1 text-sm whitespace-nowrap">
				<span class="text-foreground">1-25</span>
				<span>of</span>
				<span class="text-foreground">100</span>
			</p>
			<div class="grow">
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
			</div>
		</div>
	\`,
})
export class Pagination10Component {
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
	protected itemsPerPage = model(this.pageSizes[1]);

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
