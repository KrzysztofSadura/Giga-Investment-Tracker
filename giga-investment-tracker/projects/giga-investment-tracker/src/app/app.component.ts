import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@Component({
	selector: 'app-root',
	standalone: true,
	template: `<app-main-layout></app-main-layout>`,
	styleUrls: ['./app.component.scss'],
	imports: [MainLayoutComponent],
})
export class AppComponent {
	title = 'giga-investment-tracker';
}
