import { LayoutActions, LayoutActionTypes } from '../../actions/layout/layout.actions';


export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: true
};

export function reducer(state = initialState, action: LayoutActions): State {
  switch (action.type) {
    case LayoutActionTypes.CloseSidenav:
      return {
        ...state,
        showSidenav: false
      }
    case LayoutActionTypes.OpenSidenav:
      return {
        ...state,
        showSidenav: true
      }
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
