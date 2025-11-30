import { ChangeDetectionStrategy, Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronFirst, lucideChevronLast } from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { hlm } from '@spartan-ng/helm/utils';
import { map } from 'rxjs';

@Component({
	selector: 'sim-pagination-11',
	imports: [
		HlmPaginationImports,
		BrnSelectImports,
		HlmSelectImports,
		FormsModule,
		NgIcon,
		HlmIcon,
		HlmButton,
		RouterLink,
	],
	providers: [provideIcons({ lucideChevronLast, lucideChevronFirst })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'block w-full' },
	template: `
		<div class="flex items-center justify-between gap-3">
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
					<div class="flex items-center">
						<brn-select [value]="currentPage()" class="ml-auto" placeholder="Page size">
							<hlm-select-trigger class="w-fit">
								<hlm-select-value />
							</hlm-select-trigger>
							<hlm-select-content>
								@for (pageSize of pages; track pageSize) {
									<hlm-option routerLink="" [value]="pageSize">
										<a
											routerLink="."
											[queryParams]="{ page: pageSize }"
											queryParamsHandling="merge"
											class="h-fit w-full">
											Page {{ pageSize }}
										</a>
									</hlm-option>
								}
							</hlm-select-content>
						</brn-select>
					</div>
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
	`,
})
export class Pagination11Component {
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
		return hlm(isDisabled ? 'opacity-50 pointer-events-none' : '');
	});
	protected readonly computedNextClass = computed(() => {
		const isDisabled = this.currentPage() >= this.pages.length;
		return hlm(isDisabled ? 'opacity-50 pointer-events-none' : '');
	});
}