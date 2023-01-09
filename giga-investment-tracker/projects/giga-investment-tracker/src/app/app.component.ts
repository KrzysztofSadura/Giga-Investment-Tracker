import { Component, OnInit, inject, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import * as PortfolioActions from './data/store/actions';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

@Component({
	selector: 'app-root',
	standalone: true,
	template: `<app-main-layout></app-main-layout>`,
	styleUrls: ['./app.component.scss'],
	imports: [MainLayoutComponent],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'pl-PL',
		},
		{ provide: DEFAULT_CURRENCY_CODE, useValue: 'zł' },
	],
})
export class AppComponent implements OnInit {
	private store = inject(Store);

	ngOnInit(): void {
		registerLocaleData(localePl);
		this.store.dispatch(PortfolioActions.getTransactions());
	}
}
