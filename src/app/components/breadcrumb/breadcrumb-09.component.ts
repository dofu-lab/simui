import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDatabase } from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmBreadcrumbImports } from '@spartan-ng/helm/breadcrumb';
import { HlmIconImports } from '@spartan-ng/helm/icon';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'sim-breadcrumb-09',
	providers: [provideIcons({ lucideDatabase })],
	imports: [NgIcon, FormsModule, HlmBreadcrumbImports, HlmIconImports, BrnSelectImports, HlmSelectImports],
	template: `
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/databases" class="flex items-center">Databases</a>
				</li>
				<li hlmBreadcrumbSeparator class="flex items-center"></li>
				<li hlmBreadcrumbItem>
					<hlm-select id="select-breadcrumb" value="Accounts" class="w-[150px]">
						<hlm-select-trigger class="[&>button]:w-full">
							<span class="flex items-center gap-2" *hlmSelectValueTemplate="let value">
								<div class="flex items-center">
									<ng-icon hlm name="lucideDatabase" size="sm" />
								</div>
								<span class="truncate">{{ value }}</span>
							</span>
						</hlm-select-trigger>
						<hlm-select-content *hlmSelectPortal>
							<hlm-select-group>
								<hlm-select-item value="Accounts">Accounts</hlm-select-item>
								<hlm-select-item value="Appointments">Appointments</hlm-select-item>
								<hlm-select-item value="Schedule">Schedule</hlm-select-item>
							</hlm-select-group>
						</hlm-select-content>
					</hlm-select>
				</li>
			</ol>
		</nav>
	`,
})
export class Breadcrumb09Component {}
