import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store, select } from '@ngrx/store';
import { Transaction } from '../../data/types/transaction.interface';
import { transactionsSelector } from '../../data/store/selectors';
import { AppState } from '../../data/types/app-state.interface';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-transactions',
	standalone: true,
	imports: [CommonModule, MatTableModule, MatButtonModule],
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
	private store: Store<AppState> = inject(Store);

	public transactions$: Observable<Transaction[]>;
	public displayedColumns: string[] = [
		'name',
		'ticker',
		'date',
		'account',
		'assetType',
		'amount',
		'price',
		'transactionCost',
		'transactionType',
		'currency',
		'exchangeRate',
		'totalPrice',
	];

	constructor() {
		this.transactions$ = this.store.pipe(select(transactionsSelector));
	}
}
