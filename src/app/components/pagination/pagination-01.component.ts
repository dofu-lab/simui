import { Component, signal } from '@angular/core';
import { HlmPaginationImports } from '@spartan-ng/helm/pagination';

@Component({
	selector: 'app-pagination-01',
	imports: [HlmPaginationImports],
	host: { class: 'block w-full' },
	template: `
		<nav hlmPagination class="w-full">
			<ul hlmPaginationContent class="w-full justify-between">
				<li hlmPaginationItem>
					<hlm-pagination-previous link="." [queryParams]="{ page: currentPage() + 1 }" queryParamsHandling="merge" />
				</li>
				<li hlmPaginationItem>
					<hlm-pagination-next link="." [queryParams]="{ page: currentPage() + 1 }" queryParamsHandling="merge" />
				</li>
			</ul>
		</nav>
	`,
})
export class Pagination01Component {
	currentPage = signal(1);
}
