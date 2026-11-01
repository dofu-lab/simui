import { Component, output } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';

@Component({
	selector: 'sim-empty-state-10',
	imports: [HlmEmptyImports, HlmButtonImports],
	host: { class: 'block w-full max-w-lg' },
	template: `
		<hlm-empty class="gap-6 px-4 py-8 sm:px-6">
			<hlm-empty-header class="w-full max-w-none gap-3">
				<hlm-empty-media class="mb-4 h-60 w-56" aria-hidden="true">
					<div class="relative h-48 w-40 drop-shadow-2xl">
						<div
							class="absolute top-2 right-0 h-44 w-28 rounded-2xl border border-neutral-600 bg-linear-to-br from-neutral-800 to-neutral-950 shadow-sm"></div>
						<div
							class="absolute top-6 right-6 h-36 w-24 -rotate-6 rounded-2xl border border-neutral-200 bg-linear-to-br from-neutral-100 to-neutral-300"></div>
						<div
							class="absolute top-9 right-2 flex h-34 w-24 rotate-6 flex-col gap-3 rounded-2xl border border-neutral-200 bg-linear-to-r from-neutral-300 to-neutral-100 px-4 py-6 shadow-sm">
							<span class="h-3 w-full rounded-full bg-neutral-400/40"></span>
							<span class="h-3 w-full rounded-full bg-neutral-400/40"></span>
							<span class="h-3 w-3/4 rounded-full bg-neutral-400/40"></span>
						</div>
						<div
							class="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-neutral-900 via-neutral-600 to-neutral-400 [clip-path:path('M18_0H110Q128_0_128_18V116Q128_124_120_129L110_136Q102_141_102_150V176Q102_192_86_192H18Q0_192_0_174V18Q0_0_18_0Z')]">
							<div
								class="absolute inset-0 rounded-2xl border border-neutral-400/60 shadow-[inset_8px_0_16px_#0008,inset_0_8px_12px_#fff2,inset_0_-12px_16px_#0009]"></div>
							<div
								class="absolute inset-4 rounded-xl bg-linear-to-br from-neutral-900/60 via-transparent to-neutral-200/30 blur-sm"></div>
						</div>
					</div>
				</hlm-empty-media>
				<h3 hlmEmptyTitle>Expect to see your orders appear here soon!</h3>
				<p hlmEmptyDescription class="max-w-96">
					Here is where you’ll manage order fulfillment, payment collection, and order progress tracking.
				</p>
			</hlm-empty-header>
			<hlm-empty-content>
				<button hlmBtn size="sm" type="button" (click)="createOrder.emit()">Create New</button>
			</hlm-empty-content>
		</hlm-empty>
	`,
})
export class EmptyState10Component {
	public readonly createOrder = output<void>();
}
