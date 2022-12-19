import { createReducer, on } from '@ngrx/store';
import * as TransactionsActions from './actions';

import { TransactionsState } from '../types/transactions-state.interface';
export const initialState: TransactionsState = {
	isLoading: false,
	transactions: [],
	error: null,
};

export const transactionsReducer = createReducer(
	initialState,
	on(TransactionsActions.getTransactions, (state) => ({ ...state, isLoading: true })),
	on(TransactionsActions.getTransactionsSuccess, (state, action) => ({
		...state,
		isLoading: false,
		transactions: action.transactions,
	})),
	on(TransactionsActions.getTransactionsFailure, (state, action) => ({
		...state,
		isLoading: false,
		error: action.error,
	}))
);
