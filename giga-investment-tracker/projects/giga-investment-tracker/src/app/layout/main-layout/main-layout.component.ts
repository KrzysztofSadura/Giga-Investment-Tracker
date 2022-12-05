import { NavbarComponent } from './../navbar/navbar.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';

@Component({
	selector: 'app-main-layout',
	standalone: true,
	imports: [
		CommonModule,
		DashboardComponent,
		MatGridListModule,
		NavbarComponent,
	],
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {}
