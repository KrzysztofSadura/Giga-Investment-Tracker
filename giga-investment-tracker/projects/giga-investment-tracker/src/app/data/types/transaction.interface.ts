export interface Transaction {
	id: number;
	name: string;
	ticker: string;
	date: string;
	account: string;
	assetType: string;
	amount: number;
	price: number;
	transactionCost: number;
	transactionType: string;
	currency: string;
	exchangeRate: number;
	totalPrice: number;
}
