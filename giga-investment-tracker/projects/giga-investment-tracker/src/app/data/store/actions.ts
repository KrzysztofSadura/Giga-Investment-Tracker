import { Transaction } from '../types/transaction.interface';
import { createAction, props } from '@ngrx/store';

export const getTransactions = createAction('[Transactions] Get Transactions');
export const getTransactionsSuccess = createAction(
	'[Transactions] Get Transactions success',
	props<{ transactions: Transaction[] }>()
);
export const getTransactionsFailure = createAction(
	'[Transactions] Get Transactions failure',
	props<{ error: string }>()
);
