import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AuthorComponent } from "./pages/author/author.component";
import { AuthorDetailComponent } from "./pages/author/author-detail/author-detail.component";
import { BlogDetailComponent } from "./pages/home/blog-detail/blog-detail.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "blog", component: HomeComponent, pathMatch: "full" },
  {
    path: "blog/:slug",
    component: BlogDetailComponent,
    pathMatch: "full",
  },
  { path: "authors", component: AuthorComponent, pathMatch: "full" },
  { path: "author/:slug", component: AuthorDetailComponent, pathMatch: "full" },
  { path: "about-us", component: HomeComponent, pathMatch: "full" },
  { path: "newsletter", component: HomeComponent, pathMatch: "full" },

  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
