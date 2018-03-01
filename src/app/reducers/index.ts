import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze'
import { RouterStateUrl } from '../shared/utils';
import * as fromRouter from '@ngrx/router-store';
import * as fromLayout from '../core/reducers/layout/layout.reducer'

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>
  layout: fromLayout.State
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  layout: fromLayout.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
