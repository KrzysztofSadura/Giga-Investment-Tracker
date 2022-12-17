import { Transaction } from '../transaction.interface';

export interface PortfolioState {
	isLoading: boolean;
	portfolio: Transaction[];
	error: string | null;
}
