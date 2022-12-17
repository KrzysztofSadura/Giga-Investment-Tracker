import { AppState } from '../types/app-state.interface';

export const selectFeature = (state: AppState) => state.portfolio;
