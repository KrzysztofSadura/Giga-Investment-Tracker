export interface Transaction {
	account: string;
	date: string;
	name: string;
	ticker: string;
	amount: number;
	currency: string;
	price: number;
	totalPrice: number;
	transactionCost: number;
	transactionType: string;
}
