import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { PortableTextToHTML } from "./pipes/portable-text.pipe";
import { SanityImagePipe } from "./pipes/sanity-image.pipe";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AuthorModule } from "./pages/author/author.module";
import { BlogModule } from "./pages/home/blog.module";
import { TagModule } from "./pages/tag/tag.module";

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // SanityImagePipe,
    // PortableTextToHTML,
    NavbarComponent,
    // RecentBlogComponent,
    // BlogCardComponent,
    // AllBlogComponent,
    FooterComponent,
    // AuthorComponent,
    // AuthorCardComponent,
    // AuthorDetailComponent,
    // BlogDetailComponent,
    // PagingComponent,
    // TagComponent,
    // NewsletterComponent,
    // NewsletterCardComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, AuthorModule, BlogModule, TagModule],
  providers: [SanityImagePipe, PortableTextToHTML],
  bootstrap: [AppComponent],
})
export class AppModule { }
