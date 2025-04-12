import { Component, computed, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-button-49',
	standalone: true,
	providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
	imports: [HlmButtonDirective, HlmIconDirective, NgIcon],
	template: `
		<button hlmBtn variant="ghost" (click)="toggle()">
			{{ buttonLabel() }}
			<ng-icon hlm [name]="buttonIcon()" class="ml-2" />
		</button>
	`,
})
export class Button49Component {
	isShow = signal<boolean>(false);
	buttonLabel = computed(() => (this.isShow() ? 'Show less' : 'Show more'));
	buttonIcon = computed(() => (this.isShow() ? 'lucideChevronUp' : 'lucideChevronDown'));

	toggle() {
		this.isShow.set(!this.isShow());
	}
}

export const button49Code = `
import { Component, computed, signal } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronUp } from '@ng-icons/lucide';

@Component({
  selector: 'sim-button-49',
  standalone: true,
  providers: [provideIcons({ lucideChevronDown, lucideChevronUp })],
  imports: [HlmButtonDirective, HlmIconDirective, NgIcon],
  template: \`
    <button hlmBtn variant="ghost" (click)="toggle()">
      {{ buttonLabel() }}
      <ng-icon hlm [name]="buttonIcon()" class="ml-2" />
    </button>
  \`,
})
export class Button49Component {
  isShow = signal<boolean>(false);
  buttonLabel = computed(() => (this.isShow() ? 'Show less' : 'Show more'));
  buttonIcon = computed(() =>
    this.isShow() ? 'lucideChevronUp' : 'lucideChevronDown'
  );

  toggle() {
    this.isShow.set(!this.isShow());
  }
}
`;
