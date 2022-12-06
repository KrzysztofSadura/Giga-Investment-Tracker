import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
