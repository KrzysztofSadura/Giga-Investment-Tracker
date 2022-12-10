import { HistoryComponent } from './features/history/history.component';
import { PredictionsComponent } from './features/predictions/predictions.component';
import { TransactionsComponent } from './features/transactions/transactions.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { OverviewComponent } from './features/overview/overview.component';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: OverviewComponent,
	},
	{
		path: 'portfolio',
		component: PortfolioComponent,
	},
	{
		path: 'transactions',
		component: TransactionsComponent,
	},
	{
		path: 'predictions',
		component: PredictionsComponent,
	},
	{
		path: 'history',
		component: HistoryComponent,
	},
	{
		path: '**',
		component: PageNotFoundComponent,
	},
];
