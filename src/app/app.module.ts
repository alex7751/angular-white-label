import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './shared/utils';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app/app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const modules = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule.forRoot(routes, { useHash: true })
];

const appModules = [
  CoreModule
];

const ngrxModules = [
  StoreModule.forRoot(reducers, { metaReducers }),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
  EffectsModule.forRoot([]),
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router',
  }),
];
const providers = [
  { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    ...modules,
    ...ngrxModules,
    ...appModules
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
