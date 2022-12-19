import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import * as PortfolioActions from './data/store/actions';

@Component({
	selector: 'app-root',
	standalone: true,
	template: `<app-main-layout></app-main-layout>`,
	styleUrls: ['./app.component.scss'],
	imports: [MainLayoutComponent],
})
export class AppComponent implements OnInit {
	private store = inject(Store);

	ngOnInit(): void {
		this.store.dispatch(PortfolioActions.getTransactions());
	}
}
