import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TagComponent } from "./pages/tag/index/tag.component";
import { NewsletterComponent } from "./pages/newsletter/index/newsletter.component";
import { HomeComponent } from "./pages/home/index/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  // {
  //   path: "blogs", children: [
  //     { path: "", component: HomeComponent },
  //     { path: ":slug", component: BlogDetailComponent },
  //   ]
  // },
  // { path: "blog/:slug", component: BlogDetailComponent, pathMatch: "full" },
  // { path: "authors", component: AuthorComponent, pathMatch: "full" },
  // { path: "author/:slug", component: AuthorDetailComponent, pathMatch: "full" },
  // { path: "tag/:tag", component: TagComponent, pathMatch: "full" },
  { path: "newsletter", component: NewsletterComponent, pathMatch: "full" },

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
