import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { BlogModule } from "./pages/home/blog.module";
import { TagModule } from "./pages/tag/tag.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BlogModule, TagModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
