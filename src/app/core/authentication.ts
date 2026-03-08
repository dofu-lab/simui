import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SignInDialogComponent } from './sign-in-dialog';
import { UserMenuComponent } from './user-menu';

@Component({
	selector: 'sim-authentication',
	imports: [SignInDialogComponent, UserMenuComponent],
	template: `
		@if (isAuthenticated()) {
			<sim-user-menu />
		} @else {
			<sim-sign-in-dialog />
		}
	`,
})
export class AuthenticationComponent {
	readonly authService = inject(AuthService);
	readonly isAuthenticated = this.authService.isAuthenticated;
}
