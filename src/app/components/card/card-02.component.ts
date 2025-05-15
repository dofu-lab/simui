import { Component } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-card-02',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmButtonDirective
  ],
  template: `
    <section hlmCard class="w-100">
      <div class="p-6 pb-0">
        <h3 class="text-xl font-semibold leading-none tracking-tight">Recent Activity</h3>
        <p class="text-sm text-muted-foreground pt-1">Last 24 hours</p>

        <div class="pt-4 pb-2">
          <span class="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {{ getNewActivityCount() }} new
          </span>
        </div>
      </div>

      <div class="h-px bg-border mx-6"></div>

      <div class="p-6 h-auto">
        <ul class="space-y-8 relative">
          <div class="absolute left-[9px] top-2 bottom-1 w-px bg-border"></div>

          @for (item of activity; track $index;) {
            <li class="pl-7 relative">
              <span class="absolute left-0 top-1.5 flex h-[18px] w-[18px] items-center justify-center">
                <span class="block h-[9px] w-[9px] rounded-full"
                      [class.bg-primary]="item.isNew"
                      [class.bg-muted]="!item.isNew">
                </span>
              </span>

              <div class="flex items-start justify-between">
                <div>
                  <p class="text-base font-semibold leading-tight">{{ item.text }}</p>
                  <p class="text-sm text-muted-foreground mt-1">{{ item.time }}</p>
                </div>

                @if (item.isNew) {
                  <span class="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">new</span>
                }
              </div>
            </li>
          }
        </ul>
      </div>
      <div class="h-px bg-border mx-6"></div>
      <div class="flex justify-between items-center p-6 pt-4 pb-5">
        <div class="text-sm text-muted-foreground">
          {{ activity.length }} total events
        </div>
        <button hlmBtn>View all</button>
      </div>
    </section>
  `,
})
export class Card02Component {
  activity = [
    { text: 'Signed in from new device', time: '2h ago', isNew: true, type: 'login' },
    { text: 'Uploaded "report.pdf"', time: '5h ago', isNew: true, type: 'upload' },
    { text: 'Changed password', isNew:true,  time: '1d ago', type: 'security' },
    { text: 'Update components', time: '1d ago',  type: 'component' }
  ];

  getNewActivityCount(): number {
    return this.activity.filter(item => item.isNew).length;
  }
}

export const card02Code = `
import { Component } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'sim-card-02',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmButtonDirective
  ],
	template: \`
		<section hlmCard class="w-100">
      <div class="p-6 pb-0">
        <h3 class="text-xl font-semibold leading-none tracking-tight">Recent Activity</h3>
        <p class="text-sm text-muted-foreground pt-1">Last 24 hours</p>

        <div class="pt-4 pb-2">
          <span class="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {{ getNewActivityCount() }} new
          </span>
        </div>
      </div>

      <div class="h-px bg-border mx-6"></div>

      <div class="p-6 h-auto">
        <ul class="space-y-8 relative">
          <div class="absolute left-[9px] top-2 bottom-1 w-px bg-border"></div>

          @for (item of activity; track item.text; let i = $index) {
            <li class="pl-7 relative">
              <span class="absolute left-0 top-1.5 flex h-[18px] w-[18px] items-center justify-center">
                <span class="block h-[9px] w-[9px] rounded-full"
                      [class.bg-primary]="item.isNew"
                      [class.bg-muted]="!item.isNew">
                </span>
              </span>

              <div class="flex items-start justify-between">
                <div>
                  <p class="text-base font-semibold leading-tight">{{ item.text }}</p>
                  <p class="text-sm text-muted-foreground mt-1">{{ item.time }}</p>
                </div>

                @if (item.isNew) {
                  <span class="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">new</span>
                }
              </div>
            </li>
          }
        </ul>
      </div>
      <div class="h-px bg-border mx-6"></div>
      <div class="flex justify-between items-center p-6 pt-4 pb-5">
        <div class="text-sm text-muted-foreground">
          {{ activity.length }} total events
        </div>
        <button hlmBtn>View all</button>
      </div>
    </section>
	\`,
})
export class Card02Component {
  activity = [
    { text: 'Signed in from new device', time: '2h ago', isNew: true, type: 'login' },
    { text: 'Uploaded "report.pdf"', time: '5h ago', isNew: true, type: 'upload' },
    { text: 'Changed password', isNew:true,  time: '1d ago', type: 'security' },
    { text: 'Update components', time: '1d ago',  type: 'component' }
  ];

  getNewActivityCount(): number {
    return this.activity.filter(item => item.isNew).length;
  }
}
`;
