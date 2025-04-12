import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDot, lucideHouse } from '@ng-icons/lucide';
import {
	HlmBreadcrumbDirective,
	HlmBreadcrumbItemDirective,
	HlmBreadcrumbLinkDirective,
	HlmBreadcrumbListDirective,
	HlmBreadcrumbPageDirective,
	HlmBreadcrumbSeparatorComponent,
} from '@spartan-ng/ui-breadcrumb-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-breadcrumb-07',
	standalone: true,
	providers: [provideIcons({ lucideHouse, lucideDot })],
	imports: [
		HlmBreadcrumbDirective,
		HlmBreadcrumbSeparatorComponent,
		HlmBreadcrumbListDirective,
		HlmBreadcrumbItemDirective,
		HlmBreadcrumbPageDirective,
		HlmBreadcrumbLinkDirective,
		HlmIconDirective,
		NgIcon,
	],
	template: `
		<nav hlmBreadcrumb>
			<ol hlmBreadcrumbList>
				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink link="/home" class="flex items-center">
						<ng-icon hlm name="lucideHouse" size="sm" />
					</a>
				</li>
				<li hlmBreadcrumbSeparator>
					<ng-icon hlm size="sm" name="lucideDot" />
				</li>

				<li hlmBreadcrumbItem>
					<a hlmBreadcrumbLink hlmL link="/components">Components</a>
				</li>
				<li hlmBreadcrumbSeparator>
					<ng-icon hlm size="sm" name="lucideDot" />
				</li>
				<li hlmBreadcrumbItem>
					<span hlmBreadcrumbPage>Breadcrumb</span>
				</li>
			</ol>
		</nav>
	`,
})
export class Breadcrumb07Component {}

export const breadcrumb07Code = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDot, lucideHouse } from '@ng-icons/lucide';
import {
  HlmBreadcrumbDirective,
  HlmBreadcrumbItemDirective,
  HlmBreadcrumbLinkDirective,
  HlmBreadcrumbListDirective,
  HlmBreadcrumbPageDirective,
  HlmBreadcrumbSeparatorComponent,
} from '@spartan-ng/ui-breadcrumb-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-breadcrumb-07',
  standalone: true,
  providers: [provideIcons({ lucideHouse, lucideDot })],
  imports: [
    HlmBreadcrumbDirective,
    HlmBreadcrumbSeparatorComponent,
    HlmBreadcrumbListDirective,
    HlmBreadcrumbItemDirective,
    HlmBreadcrumbPageDirective,
    HlmBreadcrumbLinkDirective,
    HlmIconDirective,
    NgIcon,
  ],
  template: \`
    <nav hlmBreadcrumb>
      <ol hlmBreadcrumbList>
        <li hlmBreadcrumbItem>
          <a hlmBreadcrumbLink link="/home" class="flex items-center">
            <ng-icon hlm name="lucideHouse" size="sm" />
          </a>
        </li>
        <li hlmBreadcrumbSeparator>
          <ng-icon hlm size="sm" name="lucideDot" />
        </li>

        <li hlmBreadcrumbItem>
          <a hlmBreadcrumbLink hlmL link="/components">Components</a>
        </li>
        <li hlmBreadcrumbSeparator>
          <ng-icon hlm size="sm" name="lucideDot" />
        </li>
        <li hlmBreadcrumbItem>
          <span hlmBreadcrumbPage>Breadcrumb</span>
        </li>
      </ol>
    </nav>
  \`,
})
export class Breadcrumb07Component {}
`;
