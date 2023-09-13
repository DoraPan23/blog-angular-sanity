import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsletterComponent } from "./pages/newsletter/index/newsletter.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

const routes: Routes = [
  { path: "", redirectTo: "/blogs", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "authors",
    loadChildren: () =>
      import("./pages/author/author.module").then((m) => m.AuthorModule),
  },
  { path: "newsletter", component: NewsletterComponent },
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
