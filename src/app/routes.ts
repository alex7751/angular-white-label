import { Routes } from '@angular/router';
import { AppComponent } from './core/containers/app/app.component';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: '**', component: AppComponent},
];
