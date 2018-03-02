import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./containers/app/app.component";
import { PageNotFoundComponent } from "./containers/page-not-found/page-not-found.component";
import { MaterialModule } from "../material";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { SidenavItemComponent } from "./components/sidenav-item/sidenav-item.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { RequestService } from "./services/request/request.service";

export const COMPONENTS = [
    AppComponent,
    PageNotFoundComponent,
    SidenavComponent,
    LayoutComponent,
    SidenavItemComponent,
    ToolbarComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [RequestService]
})
export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: []
        }
    }
}
