import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmLabelImports } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-50',
	imports: [NgIcon, NgClass, HlmLabelImports, HlmInputGroupImports],
	providers: [provideIcons({ lucideCopy, lucideCheck })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-50" class="mb-2 text-sm">Copy to clipboard</label>
		<hlm-input-group>
			<input
				hlmInputGroupInput
				readonly
				id="input-50"
				class="peer w-full pe-9 text-sm"
				type="email"
				size="sm"
				[value]="shareUrl" />
			<hlm-input-group-addon align="inline-end">
				<button
					hlmInputGroupButton
					variant="link"
					size="icon-xs"
					class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 ease absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] duration-150 outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed motion-reduce:transition-none"
					[disabled]="copied()"
					(click)="onCopy()">
					<ng-icon
						name="lucideCopy"
						class="transition-all motion-reduce:transition-none"
						[ngClass]="{
							'scale-95 opacity-0': copied(),
							'scale-100 opacity-100': !copied(),
						}" />
					<ng-icon
						name="lucideCheck"
						class="absolute text-emerald-500 transition-all motion-reduce:transition-none"
						[ngClass]="{
							'scale-95 opacity-0': !copied(),
							'scale-100 opacity-100': copied(),
						}" />
				</button>
			</hlm-input-group-addon>
		</hlm-input-group>
	`,
})
export class Input50Component {
	public readonly shareUrl = 'https://simui.dev/JGGH0N';
	public readonly copied = signal<boolean>(false);
	private readonly _clipboard = inject(Clipboard);

	public onCopy(): void {
		this.copied.set(true);
		this._clipboard.copy(this.shareUrl);

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}
