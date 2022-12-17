import { createReducer, on } from '@ngrx/store';
import { PortfolioState } from '../types/portfolio-state.interface';
import * as PortfolioActions from './actions';

export const initialState: PortfolioState = {
	isLoading: false,
	portfolio: [],
	error: null,
};

export const portfolioReducer = createReducer(
	initialState,
	on(PortfolioActions.getPortfolio, (state) => ({ ...state, isLoading: true }))
);
