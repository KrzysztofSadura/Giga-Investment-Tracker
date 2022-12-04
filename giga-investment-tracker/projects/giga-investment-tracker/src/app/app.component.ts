import { DashboardComponent } from './dashboard/dashboard.component';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	imports: [DashboardComponent],
})
export class AppComponent {
	title = 'giga-investment-tracker';
}
