import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PipeModule } from "src/app/pipes/pipe.module";
import { HomeComponent } from "./index/home.component";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { RecentBlogComponent } from "./recent-blog/recent-blog.component";
import { BlogRoutingModule } from "./blog.routing.module";
import { SanityService } from "src/app/services/sanity.service";
import { ComponentShareModule } from "src/app/components/component-share.module";
import { NewsletterComponent } from "../newsletter/index/newsletter.component";

@NgModule({
    imports: [
        BlogRoutingModule,
        CommonModule,
        PipeModule,
        ComponentShareModule
    ],
    providers: [SanityService],
    declarations: [HomeComponent, BlogDetailComponent, RecentBlogComponent, NewsletterComponent],
    exports: [BlogRoutingModule, CommonModule, PipeModule]
})
export class BlogModule { }