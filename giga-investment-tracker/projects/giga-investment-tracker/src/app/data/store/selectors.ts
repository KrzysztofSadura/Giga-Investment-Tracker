import { createSelector } from '@ngrx/store';
import { AppState } from '../types/app-state.interface';

export const selectFeature = (state: AppState) => state.transactions;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);

export const transactionsSelector = createSelector(selectFeature, (state) => state.transactions);

export const errorSelector = createSelector(selectFeature, (state) => state.error);
