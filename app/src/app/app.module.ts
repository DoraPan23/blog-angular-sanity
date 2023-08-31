import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./post/post.component";
import { HttpClientModule } from "@angular/common/http";
import { PortableTextToHTML } from "./pipes/portable-text.pipe";
import { SanityImagePipe } from "./pipes/sanity-image.pipe";
import { NavbarComponent } from "./navbar/navbar.component";
import { RecentBlogComponent } from './home/recent-blog/recent-blog.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { AllBlogComponent } from './home/all-blog/all-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    SanityImagePipe,
    PortableTextToHTML,
    NavbarComponent,
    RecentBlogComponent,
    BlogCardComponent,
    AllBlogComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [SanityImagePipe, PortableTextToHTML],
  bootstrap: [AppComponent],
})
export class AppModule {}
