import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
	lucideChevronDown,
	lucideHandshake,
	lucideLogOut,
	lucideMessageSquareWarning,
	lucideShield,
	lucideUserPen,
} from '@ng-icons/lucide';
import { HlmAvatar, HlmAvatarFallback, HlmAvatarImage } from '@spartan-ng/helm/avatar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { AuthService } from '../services/auth.service';
import { NavigationService } from './services';
import { SignOutDialogComponent } from './sign-out-dialog';

@Component({
	selector: 'sim-user-menu',
	imports: [
		NgIcon,
		HlmIcon,
		HlmButton,
		HlmAvatar,
		HlmAvatarImage,
		HlmAvatarFallback,
		HlmDropdownMenuImports,
		SignOutDialogComponent,
	],
	providers: [
		provideIcons({
			lucideChevronDown,
			lucideUserPen,
			lucideHandshake,
			lucideShield,
			lucideMessageSquareWarning,
			lucideLogOut,
		}),
	],
	template: `
		<div class="flex w-full items-center justify-center">
			<button
				hlmBtn
				variant="ghost"
				size="lg"
				align="center"
				class="rounded-full border py-[5px] has-[>ng-icon]:pr-[5px] has-[>ng-icon]:pl-[3px]"
				[hlmDropdownMenuTrigger]="menu">
				<hlm-avatar class="border-border/50 size-8 border">
					<img hlmAvatarImage [src]="currentUser()!.pictureUrl!" [alt]="currentUser()!.name" />
					<span hlmAvatarFallback class="bg-primary text-primary-foreground">{{ currentUser()?.name?.charAt(0) }}</span>
				</hlm-avatar>
				<ng-icon hlm name="lucideChevronDown" size="sm" />
			</button>
		</div>
		<ng-template #menu>
			<hlm-dropdown-menu class="w-50">
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideUserPen" size="sm" />
						<span>Profile</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<button hlmDropdownMenuItem (click)="navigateToTerms()">
						<ng-icon hlm name="lucideHandshake" size="sm" />
						<span>Term & Conditions</span>
					</button>
					<button hlmDropdownMenuItem (click)="navigateToPrivacy()">
						<ng-icon hlm name="lucideShield" size="sm" />
						<span>Privacy Policy</span>
					</button>
					<button hlmDropdownMenuItem>
						<ng-icon hlm name="lucideMessageSquareWarning" size="sm" />
						<span>Report a Problem</span>
					</button>
				</hlm-dropdown-menu-group>
				<hlm-dropdown-menu-separator />
				<hlm-dropdown-menu-group>
					<sim-sign-out-dialog />
				</hlm-dropdown-menu-group>
			</hlm-dropdown-menu>
		</ng-template>
	`,
})
export class UserMenuComponent {
	private readonly authService = inject(AuthService);
	private readonly navigation = inject(NavigationService);

	protected readonly currentUser = this.authService.currentUser;

	protected signOut(): void {
		this.authService.signOut();
	}

	protected navigateToTerms(): void {
		this.navigation.navigateTo('/terms-and-conditions');
	}

	protected navigateToPrivacy(): void {
		this.navigation.navigateTo('/privacy-policy');
	}
}
