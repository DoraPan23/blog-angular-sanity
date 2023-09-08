import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./index/home.component";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";

const routes: Routes = [
    {
        path: "blogs", children: [
            { path: "", component: HomeComponent },
            { path: ":slug", component: BlogDetailComponent },
        ]
    },
    { path: "blog/:slug", component: BlogDetailComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BlogRoutingModule { }