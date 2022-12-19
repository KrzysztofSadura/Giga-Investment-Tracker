import { inject, Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { isLoadingSelector } from '../../data/store/selectors';

@Injectable({ providedIn: 'root' })
export class LoadingService {
	public store = inject(Store);

	public isRouteLoading$: Observable<boolean>;
	public isDataLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector));
	private loading = new BehaviorSubject<boolean>(false);

	constructor() {
		this.isRouteLoading$ = this.loading.asObservable();
	}

	public loadingOn = () => {
		this.loading.next(true);
	};

	public loadingOff = () => {
		this.loading.next(false);
	};
}
