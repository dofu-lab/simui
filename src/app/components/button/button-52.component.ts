import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircle, lucideCircleDot, lucideSquare, lucideTriangle, lucideX } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-52',
	standalone: true,
	providers: [
		provideIcons({
			lucideCircle,
			lucideTriangle,
			lucideSquare,
			lucideX,
			lucideCircleDot,
		}),
	],
	imports: [HlmButtonDirective, HlmIconDirective, NgClass, NgIcon],
	template: `
		<div class="inline-grid w-fit grid-cols-3 gap-1">
			<button
				hlmBtn
				class="col-start-2"
				variant="outline"
				size="icon"
				(mousedown)="onMoveCircle('up')"
				(mouseup)="onMoveCircle('center')">
				<ng-icon hlm name="lucideTriangle" size="sm" />
			</button>
			<button
				hlmBtn
				class="col-start-1"
				variant="outline"
				size="icon"
				(mousedown)="onMoveCircle('left')"
				(mouseup)="onMoveCircle('center')">
				<ng-icon hlm name="lucideSquare" size="sm" />
			</button>
			<div class="flex items-center justify-center" aria-hidden="true">
				<ng-icon
					hlm
					name="lucideCircleDot"
					size="sm"
					class="opacity-100 transition-all duration-300"
					[ngClass]="{
						'translate-x-3': direction() === 'right',
						'-translate-x-3': direction() === 'left',
						'translate-y-3': direction() === 'down',
						'-translate-y-3': direction() === 'up',
						'translate-x-0 translate-y-0 opacity-60': direction() === 'center',
					}" />
			</div>
			<button
				hlmBtn
				variant="outline"
				size="icon"
				(mousedown)="onMoveCircle('right')"
				(mouseup)="onMoveCircle('center')">
				<ng-icon hlm name="lucideCircle" size="sm" />
			</button>
			<button
				hlmBtn
				class="col-start-2"
				variant="outline"
				size="icon"
				(mousedown)="onMoveCircle('down')"
				(mouseup)="onMoveCircle('center')">
				<ng-icon hlm name="lucideX" size="sm" />
			</button>
		</div>
	`,
})
export class Button52Component {
	direction = signal<'up' | 'down' | 'right' | 'left' | 'center'>('center');

	onMoveCircle(newDirection: 'up' | 'down' | 'right' | 'left' | 'center') {
		this.direction.set(newDirection);
	}
}

export const button52Code = `
import { Component, signal } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCircle,
  lucideCircleDot,
  lucideSquare,
  lucideTriangle,
  lucideX,
} from '@ng-icons/lucide';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sim-button-52',
  standalone: true,
  providers: [
    provideIcons({
      lucideCircle,
      lucideTriangle,
      lucideSquare,
      lucideX,
      lucideCircleDot,
    }),
  ],
  imports: [HlmButtonDirective, HlmIconDirective, NgClass, NgIcon],
  template: \`
    <div class="inline-grid w-fit grid-cols-3 gap-1">
      <button
        hlmBtn
        class="col-start-2"
        variant="outline"
        size="icon"
        (mousedown)="onMoveCircle('up')"
        (mouseup)="onMoveCircle('center')"
      >
        <ng-icon hlm name="lucideTriangle" size="sm" />
      </button>
      <button
        hlmBtn
        class="col-start-1"
        variant="outline"
        size="icon"
        (mousedown)="onMoveCircle('left')"
        (mouseup)="onMoveCircle('center')"
      >
        <ng-icon hlm name="lucideSquare" size="sm" />
      </button>
      <div class="flex items-center justify-center" aria-hidden="true">
        <ng-icon
          hlm
          name="lucideCircleDot"
          size="sm"
          class="opacity-100 transition-all duration-300"
          [ngClass]="{
            'translate-x-3': direction() === 'right',
            '-translate-x-3': direction() === 'left',
            'translate-y-3': direction() === 'down',
            '-translate-y-3': direction() === 'up',
            'translate-x-0 translate-y-0 opacity-60': direction() === 'center',
          }"
        />
      </div>
      <button
        hlmBtn
        variant="outline"
        size="icon"
        (mousedown)="onMoveCircle('right')"
        (mouseup)="onMoveCircle('center')"
      >
        <ng-icon hlm name="lucideCircle" size="sm" />
      </button>
      <button
        hlmBtn
        class="col-start-2"
        variant="outline"
        size="icon"
        (mousedown)="onMoveCircle('down')"
        (mouseup)="onMoveCircle('center')"
      >
        <ng-icon hlm name="lucideX" size="sm" />
      </button>
    </div>
  \`,
})
export class Button52Component {
  direction = signal<'up' | 'down' | 'right' | 'left' | 'center'>('center');

  onMoveCircle(newDirection: 'up' | 'down' | 'right' | 'left' | 'center') {
    this.direction.set(newDirection);
  }
}
`;
