import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoadingComponent } from '../loading/loading.component';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	imports: [RouterOutlet, LoadingComponent],
})
export class DashboardComponent {}
