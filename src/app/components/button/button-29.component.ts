import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucidePlus, lucideVolume, lucideVolume1, lucideVolume2, lucideVolumeX } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';

@Component({
	selector: 'sim-button-29',
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
	imports: [HlmIcon, HlmButton, NgIcon],
	template: `
		<div class="inline-flex items-center">
			<button
				hlmBtn
				variant="outline"
				size="icon"
				class="rounded-full"
				[disabled]="volume() === 0"
				(click)="decreaseVolume()">
				<ng-icon name="lucideMinus" />
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
				<ng-icon name="lucidePlus" />
			</button>
		</div>
	`,
})
export class Button29Component {
	protected readonly volume = signal<number>(4);
	protected readonly volumeIcon = computed(() => this.getVolumeIcon());

	private getVolumeIcon(): string {
		const vol = this.volume();
		if (vol === 0) {
			return 'lucideVolumeX';
		}
		if (vol < 3) {
			return 'lucideVolume';
		}
		if (vol < 5) {
			return 'lucideVolume1';
		}
		return 'lucideVolume2';
	}

	protected decreaseVolume(): void {
		if (this.volume() === 0) {
			return;
		}
		this.volume.set(this.volume() - 1);
	}

	protected increaseVolume(): void {
		if (this.volume() === 6) {
			return;
		}
		this.volume.set(this.volume() + 1);
	}
}
