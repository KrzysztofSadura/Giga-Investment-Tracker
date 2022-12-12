import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
	public loading$: Observable<boolean>;
	private loading = new BehaviorSubject<boolean>(false);

	constructor() {
		this.loading$ = this.loading.asObservable();
	}

	public loadingOn = () => {
		this.loading.next(true);
	};

	public loadingOff = () => {
		this.loading.next(false);
	};
}
