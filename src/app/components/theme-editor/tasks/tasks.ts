import { Component, inject, signal, type TrackByFunction } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideArrowUpDown,
	lucideChevronDown,
	lucideChevronLeft,
	lucideChevronRight,
	lucideChevronsLeft,
	lucideChevronsRight,
	lucideChevronsUp,
	lucideChevronUp,
	lucideCircle,
	lucideCircleCheckBig,
	lucideCircleDashed,
	lucideCircleDot,
	lucideCircleHelp,
	lucideCircleOff,
	lucideCog,
	lucideDot,
	lucideEllipsis,
	lucideLayers,
	lucideLoader,
	lucideLogOut,
	lucideUser,
} from '@ng-icons/lucide';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { HlmTableImports } from '@spartan-ng/helm/table';
import {
	type ColumnDef,
	type ColumnFiltersState,
	createAngularTable,
	FlexRender,
	flexRenderComponent,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type PaginationState,
	type SortingState,
	type VisibilityState,
} from '@tanstack/angular-table';
import { ActionDropdown } from './components/action-dropdown';
import { PriorityIconCell } from './components/priority-icon-cell';
import { TableHeadSelection, TableRowSelection } from './components/selection-column';
import { TableHeadSortButton } from './components/sort-header-button';
import { StatusIconCell } from './components/status-icon-cell';
import { TableActions } from './components/table-actions';
import { TitleCell } from './components/title-cell';
import { DEFAULT_TASK_TABLE_COLUMNS, TaskLocalStorageService } from './services/task-local-storage.service';
import { type Task, TASK_DATA } from './services/tasks.models';

@Component({
	selector: 'app-tasks-example',
	imports: [
		FormsModule,
		HlmDropdownMenuImports,
		HlmTableImports,
		HlmButtonImports,
		BrnSelectImports,
		HlmSelectImports,
		HlmAvatarImports,
		HlmIcon,
		TableActions,
		NgIcon,
		FlexRender,
		HlmLabel,
	],
	providers: [
		provideIcons({
			lucideArrowUpDown,
			lucideChevronDown,
			lucideChevronLeft,
			lucideChevronRight,
			lucideChevronUp,
			lucideChevronsUp,
			lucideCircle,
			lucideCircleCheckBig,
			lucideCircleDashed,
			lucideCircleDot,
			lucideCircleHelp,
			lucideCircleOff,
			lucideCog,
			lucideDot,
			lucideEllipsis,
			lucideLayers,
			lucideLogOut,
			lucideUser,
			lucideChevronsRight,
			lucideChevronsLeft,
			lucideLoader,
		}),
	],
	host: {
		class: 'flex h-full',
	},
	template: `
		<div class="flex h-full flex-1 flex-col gap-4 overflow-hidden rounded-lg border p-8 py-6">
			<div class="flex items-center justify-between">
				<div class="flex flex-col">
					<h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
					<p class="text-muted-foreground">Here's a list of your tasks for this month!</p>
				</div>
				<hlm-avatar [hlmDropdownMenuTrigger]="profile" align="end" class="grayscale">
					<img src="assets/avatars/phuong-tran-dong.jpg" alt="Phuong Tran Dong (SimUI's Author)" hlmAvatarImage />
					<span class="bg-destructive text-white" hlmAvatarFallback>PT</span>
				</hlm-avatar>

				<ng-template #profile>
					<hlm-dropdown-menu class="min-w-56">
						<div class="flex flex-col gap-1 p-1" hlmDropdownMenuItem>
							<p class="text-sm leading-none font-medium">Phuong Tran Dong</p>
							<p class="text-muted-foreground text-xs leading-none">trandongphuongtdp&#64;gmail.com</p>
						</div>

						<hlm-dropdown-menu-separator />

						<hlm-dropdown-menu-group>
							<hlm-dropdown-menu-group>
								<button hlmDropdownMenuItem>
									<ng-icon hlm name="lucideUser" size="sm" />
									<span>Profile</span>
									<hlm-dropdown-menu-shortcut>⇧⌘P</hlm-dropdown-menu-shortcut>
								</button>

								<button hlmDropdownMenuItem>
									<ng-icon hlm name="lucideLayers" size="sm" />
									<span>Billing</span>
									<hlm-dropdown-menu-shortcut>⌘B</hlm-dropdown-menu-shortcut>
								</button>

								<button hlmDropdownMenuItem>
									<ng-icon hlm name="lucideCog" size="sm" />
									<span>Settings</span>
									<hlm-dropdown-menu-shortcut>⌘S</hlm-dropdown-menu-shortcut>
								</button>
							</hlm-dropdown-menu-group>

							<hlm-dropdown-menu-separator />

							<button hlmDropdownMenuItem>
								<ng-icon hlm name="lucideLogOut" size="sm" />
								<span>Logout</span>
								<hlm-dropdown-menu-shortcut>⇧⌘Q</hlm-dropdown-menu-shortcut>
							</button>
						</hlm-dropdown-menu-group>
					</hlm-dropdown-menu>
				</ng-template>
			</div>

			<spartan-table-actions table="table" />

			@defer {
				<div hlmTableContainer class="mb-auto rounded-md border">
					<table hlmTable>
						<thead hlmTHead class="bg-background sticky top-0 z-10">
							@for (headerGroup of table.getHeaderGroups(); track headerGroup.id) {
								<tr hlmTr>
									@for (header of headerGroup.headers; track header.id) {
										<th hlmTh [attr.colSpan]="header.colSpan">
											@if (!header.isPlaceholder) {
												<ng-container
													*flexRender="header.column.columnDef.header; props: header.getContext(); let headerText">
													<div [innerHTML]="headerText"></div>
												</ng-container>
											}
										</th>
									}
								</tr>
							}
						</thead>
						<tbody hlmTBody class="w-full">
							@for (row of table.getRowModel().rows; track row.id) {
								<tr hlmTr [attr.key]="row.id" [attr.data-state]="row.getIsSelected() && 'selected'">
									@for (cell of row.getVisibleCells(); track $index) {
										<td hlmTd>
											<ng-container *flexRender="cell.column.columnDef.cell; props: cell.getContext(); let cell">
												<div [innerHTML]="cell"></div>
											</ng-container>
										</td>
									}
								</tr>
							} @empty {
								<tr hlmTr>
									<td hlmTd class="h-24 text-center" [attr.colspan]="_columns.length">No results.</td>
								</tr>
							}
						</tbody>
					</table>
				</div>
			} @placeholder {
				<div class="flex h-96 items-center justify-center">
					<ng-icon name="lucideLoader" class="h-4 w-4 animate-spin" />
				</div>
			}

			<div class="hidden size-full flex-1 overflow-auto rounded-md border">
				@defer {
					<div hlmTableContainer>
						<table hlmTable>
							<thead hlmTHead class="bg-background sticky top-0 z-10">
								@for (headerGroup of table.getHeaderGroups(); track headerGroup.id) {
									<tr hlmTr>
										@for (header of headerGroup.headers; track header.id) {
											<th hlmTh [attr.colSpan]="header.colSpan">
												@if (!header.isPlaceholder) {
													<ng-container
														*flexRender="header.column.columnDef.header; props: header.getContext(); let headerText">
														<div [innerHTML]="headerText"></div>
													</ng-container>
												}
											</th>
										}
									</tr>
								}
							</thead>
							<tbody hlmTBody class="w-full">
								@for (row of table.getRowModel().rows; track row.id) {
									<tr hlmTr [attr.key]="row.id" [attr.data-state]="row.getIsSelected() && 'selected'">
										@for (cell of row.getVisibleCells(); track $index) {
											<td hlmTd>
												<ng-container *flexRender="cell.column.columnDef.cell; props: cell.getContext(); let cell">
													<div [innerHTML]="cell"></div>
												</ng-container>
											</td>
										}
									</tr>
								} @empty {
									<tr hlmTr>
										<td hlmTd class="h-24 text-center" [attr.colspan]="_columns.length">No results.</td>
									</tr>
								}
							</tbody>
						</table>
					</div>
				} @placeholder {
					<div class="flex h-96 items-center justify-center">
						<ng-icon name="lucideLoader" class="h-4 w-4 animate-spin" />
					</div>
				}
			</div>
			<div class="flex flex-row justify-between sm:items-center">
				<span class="text-muted-foreground hidden items-center text-sm lg:inline-flex">
					{{ table.getSelectedRowModel().rows.length }} of {{ table.getRowCount() }} row(s) selected
				</span>
				<span class="text-muted-foreground inline-flex items-center text-sm lg:hidden">
					{{ table.getSelectedRowModel().rows.length }}/{{ table.getRowCount() }} selected
				</span>
				<div class="flex gap-4 sm:mt-0 md:gap-8">
					<div class="flex gap-2">
						<span hlmLabel class="hidden lg:inline-flex">Row per page:</span>
						<brn-select
							class="inline-block"
							placeholder="{{ _availablePageSizes[0] }}"
							[ngModel]="table.getState().pagination.pageSize"
							(ngModelChange)="table.setPageSize($event); table.resetPageIndex()">
							<hlm-select-trigger size="sm" class="mr-1 inline-flex h-8 w-fit">
								<hlm-select-value />
							</hlm-select-trigger>
							<hlm-select-content>
								@for (size of _availablePageSizes; track size) {
									<hlm-option [value]="size">
										{{ size === 10000 ? 'All' : size }}
									</hlm-option>
								}
							</hlm-select-content>
						</brn-select>
					</div>

					<span hlmLabel class="hidden md:inline-flex">
						Page {{ table.getState().pagination.pageIndex + 1 }} of {{ table.getPageCount() }}
					</span>

					<div class="flex space-x-1">
						<button
							size="icon-sm"
							variant="outline"
							hlmBtn
							[disabled]="!table.getCanPreviousPage()"
							(click)="table.firstPage()">
							<ng-icon hlm name="lucideChevronsLeft" size="sm" />
						</button>
						<button
							size="icon-sm"
							variant="outline"
							hlmBtn
							[disabled]="!table.getCanPreviousPage()"
							(click)="table.previousPage()">
							<ng-icon hlm name="lucideChevronLeft" size="sm" />
						</button>
						<button
							size="icon-sm"
							variant="outline"
							hlmBtn
							[disabled]="!table.getCanNextPage()"
							(click)="table.nextPage()">
							<ng-icon hlm name="lucideChevronRight" size="sm" />
						</button>
						<button
							size="icon-sm"
							variant="outline"
							hlmBtn
							[disabled]="!table.getCanNextPage()"
							(click)="table.lastPage()">
							<ng-icon hlm name="lucideChevronsRight" size="sm" />
						</button>
					</div>
				</div>
			</div>
		</div>
	`,
})
export class TasksExample {
	protected readonly trackBy: TrackByFunction<Task> = (_: number, p: Task) => p.id;
	protected readonly _availablePageSizes = [5, 10, 20, 10000];
	protected readonly _pageSize = signal(this._availablePageSizes[1]); // default to page size 10
	private readonly _localStorageService = inject(TaskLocalStorageService);

	constructor() {
		const cols = this._localStorageService.getTaskTableColumns();
		this._visibility.set(cols as VisibilityState);
	}

	protected readonly _columns: ColumnDef<Task>[] = [
		{
			accessorKey: 'select',
			id: 'select',
			header: () => flexRenderComponent(TableHeadSelection),
			cell: () => flexRenderComponent(TableRowSelection),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: 'id',
			id: 'id',
			header: () => flexRenderComponent(TableHeadSortButton, { inputs: { header: '' } }),
			cell: (info) => info.getValue(),
		},
		{
			accessorKey: 'title',
			id: 'title',
			header: () => flexRenderComponent(TableHeadSortButton, { inputs: { header: '' } }),
			cell: () => flexRenderComponent(TitleCell),
		},
		{
			accessorKey: 'status',
			id: 'status',
			filterFn: 'arrIncludesSome',
			header: () => flexRenderComponent(TableHeadSortButton, { inputs: { header: '' } }),
			cell: () => flexRenderComponent(StatusIconCell),
		},
		{
			accessorKey: 'priority',
			id: 'priority',
			filterFn: 'arrIncludesSome',
			header: () => flexRenderComponent(TableHeadSortButton, { inputs: { header: '' } }),
			cell: () => flexRenderComponent(PriorityIconCell),
		},
		{
			id: 'action',
			enableHiding: false,
			cell: () => flexRenderComponent(ActionDropdown),
		},
	];

	private readonly _visibility = signal<VisibilityState>(DEFAULT_TASK_TABLE_COLUMNS);
	private readonly _columnFilters = signal<ColumnFiltersState>([]);
	private readonly _sorting = signal<SortingState>([]);
	private readonly _pagination = signal<PaginationState>({
		pageSize: 20,
		pageIndex: 0,
	});

	public readonly table = createAngularTable<Task>(() => ({
		data: TASK_DATA,
		columns: this._columns,
		state: {
			columnFilters: this._columnFilters(),
			sorting: this._sorting(),
			pagination: this._pagination(),
			columnVisibility: this._visibility(),
		},
		onColumnVisibilityChange: (updater) => {
			typeof updater === 'function' ? this._visibility.update(updater) : this._visibility.set(updater);
			this._localStorageService.saveTaskTableColumns(this._visibility());
		},

		onColumnFiltersChange: (updater) => {
			typeof updater === 'function' ? this._columnFilters.update(updater) : this._columnFilters.set(updater);
		},
		onSortingChange: (updater) => {
			typeof updater === 'function' ? this._sorting.update(updater) : this._sorting.set(updater);
		},
		onPaginationChange: (updater) => {
			typeof updater === 'function' ? this._pagination.update(updater) : this._pagination.set(updater);
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 20,
			},
		},
	}));
}
