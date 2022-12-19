import { ALPHA_VANTAGE_API_KEY } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RequestService {
	private alphaVantageUrl = 'https://www.alphavantage.co';
	constructor(private httpClient: HttpClient) {}

	public getTestData = (functionType: string, companyName: string): Observable<any> => {
		return this.httpClient.get<any>(
			`${this.alphaVantageUrl}/query?function=${functionType}&keywords=${companyName}&apikey=${ALPHA_VANTAGE_API_KEY}`
		);
	};

	public getTransactions = () => {
		return this.httpClient.get('/assets/data.json').pipe(map((res: any) => res.transactions));
	};
}
