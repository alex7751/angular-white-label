import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  LayoutAction = '[Layout] Action'
}

export class Layout implements Action {
  readonly type = LayoutActionTypes.LayoutAction;
}

export type LayoutActions = Layout;
