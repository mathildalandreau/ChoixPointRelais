import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { ListPointrelaisComponent } from "./list-pointrelais/list-pointrelais.component";

const appRoutes : Routes = [
{path: '', component : ListPointrelaisComponent},
{path: 'details/:id' , component : DetailsComponent}
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