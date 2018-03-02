import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoom from '../../../reducers'
import * as layoutActions from '../../actions/layout/layout.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoom.State>) {
    this.showSidenav$ = this.store.pipe(select(fromRoom.getShowSidenav));
  }

  openSidenav() {
    this.store.dispatch(new layoutActions.OpenSidenav());
  }

  closeSidenav() {
    this.store.dispatch(new layoutActions.CloseSidenav());
  }

}
