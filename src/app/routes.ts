import { Routes } from '@angular/router';
import { AppComponent } from './core/containers/app/app.component';
import { PageNotFoundComponent } from './core/containers/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '**', component: PageNotFoundComponent },
];
