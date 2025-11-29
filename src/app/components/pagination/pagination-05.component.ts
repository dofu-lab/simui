import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { hlm } from '@spartan-ng/helm/utils';
import { map } from 'rxjs';

@Component({
	selector: 'app-pagination-05',
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
					<li hlmPaginationItem [class]="computedPreviousClass()">
						<hlm-pagination-previous link="." queryParamsHandling="merge" [queryParams]="{ page: currentPage() - 1 }" />
					</li>
					<li hlmPaginationItem [class]="computedNextClass()">
						<hlm-pagination-next link="." queryParamsHandling="merge" [queryParams]="{ page: currentPage() + 1 }" />
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
	protected readonly computedPreviousClass = computed(() => {
		const isDisabled = this.currentPage() <= 1;
		return hlm(isDisabled ? 'opacity-50 pointer-events-none' : '', 'border rounded-md shadow-xs');
	});
	protected readonly computedNextClass = computed(() => {
		const isDisabled = this.currentPage() >= this.pages.length;
		return hlm(isDisabled ? 'opacity-50 pointer-events-none' : '', 'border rounded-md shadow-xs');
	});
}

export const pagination05Code = `import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { hlm } from '@spartan-ng/helm/utils';
import { map } from 'rxjs';

@Component({
	selector: 'app-pagination-05',
	imports: [HlmPaginationImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'w-full' },
	template: \`
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
					<li hlmPaginationItem [class]="computedPreviousClass()">
						<hlm-pagination-previous link="." queryParamsHandling="merge" [queryParams]="{ page: currentPage() - 1 }" />
					</li>
					<li hlmPaginationItem [class]="computedNextClass()">
						<hlm-pagination-next link="." queryParamsHandling="merge" [queryParams]="{ page: currentPage() + 1 }" />
					</li>
				</ul>
			</nav>
		</div>
	\`,
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
	protected readonly computedPreviousClass = computed(() => {
		const isDisabled = this.currentPage() <= 1;
		return hlm(isDisabled ? 'opacity-50 pointer-events-none' : '', 'border rounded-md shadow-xs');
	});
	protected readonly computedNextClass = computed(() => {
		const isDisabled = this.currentPage() >= this.pages.length;
		return hlm(isDisabled ? 'opacity-50 pointer-events-none' : '', 'border rounded-md shadow-xs');
	});
}`;
