import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './shared/utils';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

/**
 * Common modules associated with the Angular framework
 */
const modules = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule.forRoot(routes, {useHash: true})
];

/**
 * Modules/configurations associated with ngrx library
 */
const ngrxModules = [
  /**
   * StoreModule.forRoot is imported once in the root module, accepting a reducer
   * function or object map of reducer functions. If passed an object of
   * reducers, combineReducers will be run creating your application
   * meta-reducer. This returns all providers for an @ngrx/store
   * based application.
   */
  StoreModule.forRoot(reducers, {metaReducers}),
  /**
   * Use the dev tools if not production. Install Redux DevTools Chrome extension.
   */
  !environment.production ? StoreDevtoolsModule.instrument() : [],
  /**
   * EffectsModule.forRoot() is imported once in the root module and
   * sets up the effects class to be initialized immediately when the
   * application starts.
   *
   * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
   */
  EffectsModule.forRoot([AppEffects]),
  /**
   * The stateKey defines the name of the state used by the router-store reducer.
   * This matches the key defined in the map of reducers
   */
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router',
  }),
];

/**
 * App providers
 */
const providers = [
  /**
   * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
   * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
   * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
   */
  {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...modules,
    ...ngrxModules
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
