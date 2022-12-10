import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-page-not-found',
	standalone: true,
	imports: [CommonModule, MatButtonModule, RouterLink],
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {}
