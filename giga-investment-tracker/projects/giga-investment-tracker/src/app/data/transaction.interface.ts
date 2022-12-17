export interface Transaction {
	id: number;
	account: string;
	date: string;
	name: string;
	assetType: string;
	ticker: string;
	amount: number;
	currency: string;
	exchangeRate: number;
	price: number;
	totalPrice: number;
	transactionCost: number;
	transactionType: string;
}
