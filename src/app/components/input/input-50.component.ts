import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-50',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon, NgClass],
	providers: [provideIcons({ lucideCopy, lucideCheck })],
	host: { class: 'w-full' },
	template: `
		<label hlmLabel for="input-50" class="mb-2 text-sm">Copy to clipboard</label>
		<div class="relative">
			<input
				hlmInput
				readonly
				id="input-50"
				class="peer w-full pe-9 text-sm"
				type="email"
				size="sm"
				[value]="shareUrl" />
			<button
				hlmBtn
				variant="link"
				size="icon"
				class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
				[disabled]="copied()"
				(click)="onCopy()">
				<ng-icon
					hlm
					name="lucideCopy"
					size="sm"
					class="transition-all"
					[ngClass]="{
						'scale-0 opacity-0': copied(),
						'scale-100 opacity-100': !copied(),
					}" />
				<ng-icon
					hlm
					name="lucideCheck"
					size="sm"
					class="absolute text-emerald-500 transition-all"
					[ngClass]="{
						'scale-0 opacity-0': !copied(),
						'scale-100 opacity-100': copied(),
					}" />
			</button>
		</div>
	`,
})
export class Input50Component {
	public readonly shareUrl = 'https://simui.dev/JGGH0N';
	public copied = signal<boolean>(false);
	private _clipboard = inject(Clipboard);

	public onCopy(): void {
		this.copied.set(true);
		this._clipboard.copy(this.shareUrl);

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}

export const input50Code = `import { Clipboard } from '@angular/cdk/clipboard';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'sim-input-50',
	imports: [HlmLabel, HlmInput, NgIcon, HlmIcon, NgClass],
	providers: [provideIcons({ lucideCopy, lucideCheck })],
	host: { class: 'w-full' },
	template: \`
		<label hlmLabel for="input-50" class="mb-2 text-sm">Copy to clipboard</label>
		<div class="relative">
			<input
				hlmInput
				readonly
				id="input-50"
				class="peer w-full pe-9 text-sm"
				type="email"
				size="sm"
				[value]="shareUrl" />
			<button
				hlmBtn
				variant="link"
				size="icon"
				class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
				[disabled]="copied()"
				(click)="onCopy()">
				<ng-icon
					hlm
					name="lucideCopy"
					size="sm"
					class="transition-all"
					[ngClass]="{
						'scale-0 opacity-0': copied(),
						'scale-100 opacity-100': !copied(),
					}" />
				<ng-icon
					hlm
					name="lucideCheck"
					size="sm"
					class="absolute text-emerald-500 transition-all"
					[ngClass]="{
						'scale-0 opacity-0': !copied(),
						'scale-100 opacity-100': copied(),
					}" />
			</button>
		</div>
	\`,
})
export class Input50Component {
	public readonly shareUrl = 'https://simui.dev/JGGH0N';
	public copied = signal<boolean>(false);
	private _clipboard = inject(Clipboard);

	public onCopy(): void {
		this.copied.set(true);
		this._clipboard.copy(this.shareUrl);

		setTimeout(() => {
			this.copied.set(false);
		}, 1500);
	}
}`;
