import { Transaction } from '../transaction.interface';

export interface TransactionsState {
	isLoading: boolean;
	transactions: Transaction[];
	error: string | null;
}
