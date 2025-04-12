import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDatabase } from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import {
	HlmBreadcrumbDirective,
	HlmBreadcrumbItemDirective,
	HlmBreadcrumbLinkDirective,
	HlmBreadcrumbListDirective,
	HlmBreadcrumbSeparatorComponent,
} from '@spartan-ng/ui-breadcrumb-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';

@Component({
	selector: 'sim-breadcrumb-09',
	standalone: true,
	providers: [provideIcons({ lucideDatabase })],
	imports: [
		NgIcon,
		FormsModule,
		HlmBreadcrumbDirective,
		HlmBreadcrumbSeparatorComponent,
		HlmBreadcrumbListDirective,
		HlmBreadcrumbItemDirective,
		HlmBreadcrumbLinkDirective,
		HlmIconDirective,
		BrnSelectImports,
		HlmSelectImports,
	],
	template: `
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/databases" class="flex items-center">Databases</a>
				</li>
				<li hlmBreadcrumbSeparator></li>
				<li hlmBreadcrumbItem>
					<brn-select class="inline-block shadow-xs" placeholder="Select a database" [ngModel]="1">
						<hlm-select-trigger class="flex w-[150px] justify-start gap-2">
							<div class="flex items-center">
								<ng-icon hlm name="lucideDatabase" size="sm" />
							</div>
							<hlm-select-value class="text-foreground" />
						</hlm-select-trigger>
						<hlm-select-content>
							<hlm-option [value]="1">Accounts</hlm-option>
							<hlm-option [value]="2">Appointments</hlm-option>
							<hlm-option [value]="3">Schedule</hlm-option>
						</hlm-select-content>
					</brn-select>
				</li>
			</ol>
		</nav>
	`,
})
export class Breadcrumb09Component {}

export const breadcrumb09Code = `
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDatabase } from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import {
  HlmBreadcrumbDirective,
  HlmBreadcrumbItemDirective,
  HlmBreadcrumbLinkDirective,
  HlmBreadcrumbListDirective,
  HlmBreadcrumbSeparatorComponent,
} from '@spartan-ng/ui-breadcrumb-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';

@Component({
  selector: 'sim-breadcrumb-09',
  standalone: true,
  providers: [provideIcons({ lucideDatabase })],
  imports: [
    NgIcon,
    FormsModule,
    HlmBreadcrumbDirective,
    HlmBreadcrumbSeparatorComponent,
    HlmBreadcrumbListDirective,
    HlmBreadcrumbItemDirective,
    HlmBreadcrumbLinkDirective,
    HlmIconDirective,
    BrnSelectImports,
    HlmSelectImports,
  ],
  template: \`
    <nav hlmBreadcrumb>
      <ol hlmBreadcrumbList>
        <li hlmBreadcrumbItem>
          <a hlmBreadcrumbLink link="/databases" class="flex items-center">
            Databases
          </a>
        </li>
        <li hlmBreadcrumbSeparator></li>
        <li hlmBreadcrumbItem>
          <brn-select
            class="inline-block shadow-xs"
            placeholder="Select a database"
            [ngModel]="1"
          >
            <hlm-select-trigger class="flex w-[150px] justify-start gap-2">
              <div class="flex items-center">
                <ng-icon hlm name="lucideDatabase" size="sm" />
              </div>
              <hlm-select-value class="text-foreground" />
            </hlm-select-trigger>
            <hlm-select-content>
              <hlm-option [value]="1">Accounts</hlm-option>
              <hlm-option [value]="2">Appointments</hlm-option>
              <hlm-option [value]="3">Schedule</hlm-option>
            </hlm-select-content>
          </brn-select>
        </li>
      </ol>
    </nav>
  \`,
})
export class Breadcrumb09Component {}
`;
