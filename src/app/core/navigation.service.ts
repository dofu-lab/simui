import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
	router = inject(Router);

	navigateTo(route: string): void {
		this.router.navigate([route]);
	}
}
