import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from './loading.service';
import {
	Event,
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	RouteConfigLoadEnd,
	RouteConfigLoadStart,
	Router,
} from '@angular/router';

@Component({
	selector: 'loading-spinner',
	standalone: true,
	imports: [CommonModule, MatProgressSpinnerModule],
	providers: [LoadingService],
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
	constructor(public loadingService: LoadingService, private router: Router) {}

	public ngOnInit(): void {
		this.router.events.subscribe((event) => {
			this.manageLoading(event);
		});
	}

	private manageLoading = (event: Event) => {
		if (
			event instanceof NavigationStart ||
			event instanceof RouteConfigLoadStart
		) {
			this.loadingService.loadingOn();
		} else if (
			event instanceof NavigationEnd ||
			event instanceof NavigationError ||
			event instanceof NavigationCancel ||
			event instanceof RouteConfigLoadEnd
		) {
			this.loadingService.loadingOff();
		}
	};
}
