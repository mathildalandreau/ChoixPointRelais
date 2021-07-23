import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListPointrelaisComponent } from "./list-pointrelais/list-pointrelais.component";

const appRoutes : Routes = [
{path: '', component : ListPointrelaisComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}