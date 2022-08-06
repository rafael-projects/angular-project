import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBar } from "./navbar/navbar.component";


@NgModule({
    declarations: [
        NavBar
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavBar
    ]
})


export class CoreModule {


}