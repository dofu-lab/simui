import { Component, signal } from '@angular/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
	selector: 'sim-popover-09',
	imports: [
		HlmButtonDirective,
		BrnPopoverComponent,
		BrnPopoverTriggerDirective,
		BrnPopoverContentDirective,
		HlmPopoverContentDirective,
	],
	template: `
		<brn-popover sideOffset="5">
			<button
				hlmBtn
				variant="outline"
				size="icon"
				class="size-9 text-xl"
				brnPopoverTrigger
				aria-label="Open emoji picker">
				{{ currentEmoji() }}
			</button>

			<div hlmPopoverContent class="grid w-64 gap-2 p-4 text-center text-xl" *brnPopoverContent="let ctx">
				<div class="text-left text-sm font-semibold">Pick an emoji</div>

				<div class="grid grid-cols-6 gap-2">
					@for (emoji of emojis; track $index) {
						<button
							hlmBtn
							size="icon"
							variant="ghost"
							(click)="selectEmoji(emoji, ctx)"
							[attr.aria-label]="emoji"
							class="size-8 text-xl">
							{{ emoji }}
						</button>
					}
				</div>
			</div>
		</brn-popover>
	`,
})
export class Popover09Component {
	public readonly emojis = ['😀', '😂', '😍', '😎', '🤔', '👍', '🎉', '😢', '🔥', '🙏', '🙌', '🚀'];
	currentEmoji = signal(this.emojis[0]);

	public selectEmoji(emoji: string, ctx: { close: () => void }): void {
		this.currentEmoji.set(emoji);
		ctx.close();
	}
}

export const Popover09Code = `
import { Component, signal } from '@angular/core';
import { BrnPopoverComponent, BrnPopoverContentDirective, BrnPopoverTriggerDirective } from '@spartan-ng/brain/popover';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';

@Component({
	selector: 'sim-popover-09',
	imports: [
		HlmButtonDirective,
		BrnPopoverComponent,
		BrnPopoverTriggerDirective,
		BrnPopoverContentDirective,
		HlmPopoverContentDirective,
	],
	template: \`
		<brn-popover sideOffset="5">
			<button
				hlmBtn
				variant="outline"
				size="icon"
				class="size-9 text-xl"
				brnPopoverTrigger
				aria-label="Open emoji picker">
				{{ currentEmoji() }}
			</button>

			<div hlmPopoverContent class="grid w-64 gap-2 p-4 text-center text-xl" *brnPopoverContent="let ctx">
				<div class="text-left text-sm font-semibold">Pick an emoji</div>

				<div class="grid grid-cols-6 gap-2">
					@for (emoji of emojis; track $index) {
						<button
							hlmBtn
							size="icon"
							variant="ghost"
							(click)="selectEmoji(emoji, ctx)"
							[attr.aria-label]="emoji"
							class="size-8 text-xl">
							{{ emoji }}
						</button>
					}
				</div>
			</div>
		</brn-popover>
	\`,
})
export class Popover09Component {
	public readonly emojis = ['😀', '😂', '😍', '😎', '🤔', '👍', '🎉', '😢', '🔥', '🙏', '🙌', '🚀'];
	currentEmoji = signal(this.emojis[0]);

	public selectEmoji(emoji: string, ctx: { close: () => void }): void {
		this.currentEmoji.set(emoji);
		ctx.close();
	}
}
`;
