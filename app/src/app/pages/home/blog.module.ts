import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PipeModule } from "src/app/pipes/pipe.module";
import { HomeComponent } from "./index/home.component";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { BlogRoutingModule } from "./blog.routing.module";
import { ComponentShareModule } from "src/app/components/component-share.module";
import { NewsletterComponent } from "../newsletter/index/newsletter.component";
import { SanityImagePipe } from "src/app/pipes/sanity-image.pipe";

@NgModule({
    imports: [
        BlogRoutingModule,
        CommonModule,
        ComponentShareModule
    ],
    providers: [SanityImagePipe],
    declarations: [HomeComponent, BlogDetailComponent, NewsletterComponent],
})
export class BlogModule { }