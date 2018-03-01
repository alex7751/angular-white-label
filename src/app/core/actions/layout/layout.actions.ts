import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSidenav = '[Layout] OpenSidenav',
  CloseSidenav = '[Layout] CloseSidenav'
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export type LayoutActions = OpenSidenav | CloseSidenav;
