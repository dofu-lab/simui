import { ChangeDetectionStrategy, Component, computed, inject, model, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronFirst, lucideChevronLast } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { map } from 'rxjs';

@Component({
	selector: 'sim-pagination-10',
	imports: [
		HlmPaginationImports,
		HlmSelectImports,
		FormsModule,
		NgIcon,
		HlmIconImports,
		HlmButtonImports,
		HlmLabelImports,
	],
	providers: [provideIcons({ lucideChevronLast, lucideChevronFirst })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'block w-full' },
	template: `
		<div class="flex items-center justify-between gap-3">
			<div class="flex items-center gap-3">
				<label for="row-select" hlmLabel>Rows per page</label>
				<hlm-select id="row-select" class="ml-auto" [(ngModel)]="itemsPerPage">
					<hlm-select-trigger class="w-fit">
						<hlm-select-value />
					</hlm-select-trigger>
					<hlm-select-content *hlmSelectPortal>
						<hlm-select-group>
							@for (pageSize of pageSizes; track pageSize) {
								<hlm-select-item [value]="pageSize">{{ pageSize }}</hlm-select-item>
							}
						</hlm-select-group>
					</hlm-select-content>
				</hlm-select>
			</div>
			<p aria-live="polite" class="text-muted-foreground flex w-fit justify-end gap-1 text-sm whitespace-nowrap">
				<span class="text-foreground">1-25</span>
				<span>of</span>
				<span class="text-foreground">100</span>
			</p>
			<div class="w-fit">
				<nav hlmPagination class="mx-0 w-fit">
					<ul hlmPaginationContent>
						<li hlmPaginationItem>
							<a
								hlmPaginationLink
								link="."
								queryParamsHandling="merge"
								[class]="computedPreviousClass()"
								[queryParams]="{ page: 1 }">
								<button hlmBtn size="icon" variant="ghost">
									<ng-icon hlm size="sm" name="lucideChevronFirst" />
								</button>
							</a>
						</li>
						<li hlmPaginationItem>
							<hlm-pagination-previous
								link="."
								queryParamsHandling="merge"
								[class]="computedPreviousClass()"
								[queryParams]="{ page: currentPage() - 1 }"
								[iconOnly]="true" />
						</li>
						<li hlmPaginationItem>
							<hlm-pagination-next
								link="."
								queryParamsHandling="merge"
								iconOnly="true"
								[class]="computedNextClass()"
								[queryParams]="{ page: currentPage() + 1 }" />
						</li>
						<li hlmPaginationItem>
							<a
								hlmPaginationLink
								link="."
								queryParamsHandling="merge"
								[class]="computedNextClass()"
								[queryParams]="{ page: 10 }">
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
	protected readonly computedPreviousClass = computed(() => this.navButtonClass(this.currentPage() <= 1));
	protected readonly computedNextClass = computed(() => this.navButtonClass(this.currentPage() >= this.pages.length));

	private navButtonClass(isDisabled: boolean): string {
		return isDisabled ? 'opacity-50 select-none pointer-events-none' : '';
	}
}
