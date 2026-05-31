import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFolderCode, lucidePlus } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { HlmIconImports } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-card-11',
	imports: [NgIcon, HlmCardImports, HlmButtonImports, HlmIconImports, HlmEmptyImports],
	providers: [provideIcons({ lucidePlus, lucideFolderCode })],
	host: { class: 'w-full' },
	template: `
		<section class="bg-muted w-full gap-4 py-0" hlmCard>
			<div hlmCardHeader class="bg-muted flex items-center justify-between px-6 pt-4">
				<div>
					<h3 hlmCardTitle>Project</h3>
					<p hlmCardDescription>Manage your projects</p>
				</div>
				<button hlmBtn variant="outline" size="sm">
					<ng-icon name="lucidePlus" />
					Add
				</button>
			</div>
			<section class="w-full shadow-none" hlmCard>
				<div hlmCardContent>
					<hlm-empty>
						<hlm-empty-header>
							<hlm-empty-media variant="icon" class="bg-background border">
								<ng-icon name="lucideFolderCode" />
							</hlm-empty-media>
							<div hlmEmptyTitle>No Projects Yet</div>
							<div hlmEmptyDescription>Get started by adding your first project.</div>
						</hlm-empty-header>
					</hlm-empty>
				</div>
			</section>
		</section>
	`,
})
export class Card11Component {}
