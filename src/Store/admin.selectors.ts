import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminState } from '../Store/admin.reducers';

export const selectAdminState = createFeatureSelector<AdminState>('admin');

export const selectIsPanelOpen = createSelector(
  selectAdminState,
  (state) => state.isPanelOpen
);
