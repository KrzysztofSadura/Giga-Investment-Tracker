import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideHttpClient } from '@angular/common/http';
import { RequestService } from './app/data/request.service';

import { APP_ROUTES } from './app/app.routes';

import { provideAnimations } from '@angular/platform-browser/animations';
import { NoPreloading, provideRouter, withPreloading } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { transactionsReducer } from './app/data/store/reducers';
import { provideEffects } from '@ngrx/effects';
import { TransactionsEffects } from './app/data/store/effects';

bootstrapApplication(AppComponent, {
	providers: [
		{ provide: RequestService, useClass: RequestService },
		provideHttpClient(),
		provideRouter(APP_ROUTES, withPreloading(NoPreloading)),
		provideAnimations(),
		provideStore({ transactions: transactionsReducer }),
		provideEffects([TransactionsEffects]),
		provideStoreDevtools({
			maxAge: 25,
			autoPause: true,
		}),
	],
});
