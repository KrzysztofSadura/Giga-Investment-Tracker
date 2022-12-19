import { RequestService } from '../request.service';
import { Injectable, inject } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as TransactionsActions from './actions';

@Injectable({ providedIn: 'root' })
export class TransactionsEffects {
	private actions$ = inject(Actions);
	private _request = inject(RequestService);

	public getTransactions$: any = createEffect(() =>
		this.actions$.pipe(
			ofType(TransactionsActions.getTransactions),
			mergeMap(() => {
				return this._request.getTransactions().pipe(
					map((transactions) => TransactionsActions.getTransactionsSuccess({ transactions })),
					catchError((error) => of(TransactionsActions.getTransactionsFailure({ error: error.message })))
				);
			})
		)
	);
}
