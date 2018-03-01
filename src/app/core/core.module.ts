import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./containers/app/app.component";
import { PageNotFoundComponent } from "./containers/page-not-found/page-not-found.component";

export const COMPONENTS = [
    AppComponent,
    PageNotFoundComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: []
        }
    }
}
