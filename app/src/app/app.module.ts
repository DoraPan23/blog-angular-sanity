import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { PortableTextToHTML } from "./pipes/portable-text.pipe";
import { SanityImagePipe } from "./pipes/sanity-image.pipe";
import { NavbarComponent } from "./navbar/navbar.component";
import { RecentBlogComponent } from "./pages/home/recent-blog/recent-blog.component";
import { BlogCardComponent } from "./components/blog-card/blog-card.component";
import { AllBlogComponent } from "./pages/home/all-blog/all-blog.component";
import { FooterComponent } from "./footer/footer.component";
import { AuthorComponent } from "./pages/author/author.component";
import { AuthorCardComponent } from "./components/author-card/author-card.component";
import { AuthorDetailComponent } from "./pages/author/author-detail/author-detail.component";
import { BlogDetailComponent } from "./pages/home/blog-detail/blog-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SanityImagePipe,
    PortableTextToHTML,
    NavbarComponent,
    RecentBlogComponent,
    BlogCardComponent,
    AllBlogComponent,
    FooterComponent,
    AuthorComponent,
    AuthorCardComponent,
    AuthorDetailComponent,
    BlogDetailComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [SanityImagePipe, PortableTextToHTML],
  bootstrap: [AppComponent],
})
export class AppModule { }
