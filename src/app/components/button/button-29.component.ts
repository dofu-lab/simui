import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus, lucideVolume, lucideVolume1, lucideVolume2, lucideVolumeX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-29',
	standalone: true,
	providers: [
		provideIcons({
			lucideMinus,
			lucidePlus,
			lucideVolumeX,
			lucideVolume,
			lucideVolume1,
			lucideVolume2,
		}),
	],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: `
		<div class="inline-flex items-center">
			<button
				hlmBtn
				variant="outline"
				size="icon"
				class="rounded-full"
				[disabled]="volume() === 0"
				(click)="decreaseVolume()">
				<ng-icon hlm name="lucideMinus" size="sm" />
			</button>
			<div class="flex items-center gap-2 px-3 text-sm">
				<ng-icon hlm [name]="volumeIcon()" size="sm" class="opacity-60" />
				<span class="ms-2">{{ volume() }}</span>
			</div>
			<button
				hlmBtn
				variant="outline"
				size="icon"
				class="rounded-full"
				[disabled]="volume() === 6"
				(click)="increaseVolume()">
				<ng-icon hlm name="lucidePlus" size="sm" />
			</button>
		</div>
	`,
})
export class Button29Component {
	volume = signal<number>(4);
	volumeIcon = computed(() => {
		return this.volume() === 0
			? 'lucideVolumeX'
			: this.volume() < 3
				? 'lucideVolume'
				: this.volume() < 5
					? 'lucideVolume1'
					: 'lucideVolume2';
	});

	decreaseVolume() {
		if (this.volume() === 0) {
			return;
		}
		this.volume.set(this.volume() - 1);
	}

	increaseVolume() {
		if (this.volume() === 6) {
			return;
		}
		this.volume.set(this.volume() + 1);
	}
}

export const button29Code = `import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus, lucideVolume, lucideVolume1, lucideVolume2, lucideVolumeX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-29',
	standalone: true,
	providers: [
		provideIcons({
			lucideMinus,
			lucidePlus,
			lucideVolumeX,
			lucideVolume,
			lucideVolume1,
			lucideVolume2,
		}),
	],
	imports: [HlmIconDirective, HlmButtonDirective, NgIcon],
	template: \`
		<div class="inline-flex items-center">
			<button
				hlmBtn
				variant="outline"
				size="icon"
				class="rounded-full"
				[disabled]="volume() === 0"
				(click)="decreaseVolume()">
				<ng-icon hlm name="lucideMinus" size="sm" />
			</button>
			<div class="flex items-center gap-2 px-3 text-sm">
				<ng-icon hlm [name]="volumeIcon()" size="sm" class="opacity-60" />
				<span class="ms-2">{{ volume() }}</span>
			</div>
			<button
				hlmBtn
				variant="outline"
				size="icon"
				class="rounded-full"
				[disabled]="volume() === 6"
				(click)="increaseVolume()">
				<ng-icon hlm name="lucidePlus" size="sm" />
			</button>
		</div>
	\`,
})
export class Button29Component {
	volume = signal<number>(4);
	volumeIcon = computed(() => {
		return this.volume() === 0
			? 'lucideVolumeX'
			: this.volume() < 3
				? 'lucideVolume'
				: this.volume() < 5
					? 'lucideVolume1'
					: 'lucideVolume2';
	});

	decreaseVolume() {
		if (this.volume() === 0) {
			return;
		}
		this.volume.set(this.volume() - 1);
	}

	increaseVolume() {
		if (this.volume() === 6) {
			return;
		}
		this.volume.set(this.volume() + 1);
	}
}`;
