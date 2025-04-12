import { Component } from '@angular/core';

@Component({
	selector: 'page-grid',
	standalone: true,
	template: `
		<div class="overflow-hidden">
			<div class="-m-px grid grid-cols-12 *:px-1 *:py-12 *:not-first:-ms-px *:not-first:-mt-px sm:*:px-8 xl:*:px-12">
				<ng-content />
			</div>
		</div>
	`,
})
export class PageGridComponent {}
