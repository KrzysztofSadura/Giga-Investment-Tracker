import { TransactionsComponent } from './features/transactions/transactions.component';
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
		loadComponent: () => import('./features/overview/overview.component').then((m) => m.OverviewComponent),
	},
	{
		path: 'portfolio',
		loadComponent: () => import('./features/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
	},
	{
		path: 'transactions',
		loadComponent: () => import('./features/transactions/transactions.component').then((m) => m.TransactionsComponent),
	},
	{
		path: 'predictions',
		loadComponent: () => import('./features/predictions/predictions.component').then((m) => m.PredictionsComponent),
	},
	{
		path: 'history',
		loadComponent: () => import('./features/history/history.component').then((m) => m.HistoryComponent),
	},
	{
		path: '**',
		component: PageNotFoundComponent,
	},
];
