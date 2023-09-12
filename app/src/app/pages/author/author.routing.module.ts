import { RouterModule, Routes } from "@angular/router";
import { AuthorComponent } from "./index/author.component";
import { AuthorDetailComponent } from "./author-detail/author-detail.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "", children: [
            { path: "", component: AuthorComponent },
            { path: ":slug", component: AuthorDetailComponent },
        ]
    },
    { path: "author/:slug", component: AuthorDetailComponent, pathMatch: "full" },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthorRoutingModule { }