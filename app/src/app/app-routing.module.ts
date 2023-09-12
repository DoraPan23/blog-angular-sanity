import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsletterComponent } from "./pages/newsletter/index/newsletter.component";
import { HomeComponent } from "./pages/home/index/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "authors", loadChildren: () => import('./pages/author/author.module').then(m => m.AuthorModule) },
  { path: "newsletter", component: NewsletterComponent },
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
