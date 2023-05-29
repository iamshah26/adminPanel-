import { createReducer, on } from '@ngrx/store';
import { togglePanel } from '../Store/admin.actions';

export interface AdminState {
  isPanelOpen: boolean;
}

export const initialState: AdminState = {
  isPanelOpen: false,
};

export const adminReducer = createReducer(
  initialState,
  on(togglePanel, (state) => ({ ...state, isPanelOpen: !state.isPanelOpen }))
);
