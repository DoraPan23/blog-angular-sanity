import { NgModule } from "@angular/core";
import { AllBlogComponent } from "../pages/home/all-blog/all-blog.component";
import { AuthorCardComponent } from "./author-card/author-card.component";
import { BlogCardComponent } from "./blog-card/blog-card.component";
import { NewsletterCardComponent } from "./newsletter-card/newsletter-card.component";
import { CommonModule } from "@angular/common";
import { PipeModule } from "../pipes/pipe.module";
import { AppRoutingModule } from "../app-routing.module";
import { PagingComponent } from "./paging/paging.component";

@NgModule({
    imports: [
        CommonModule,
        PipeModule,
        AppRoutingModule
    ],
    declarations: [BlogCardComponent, AuthorCardComponent, NewsletterCardComponent, AllBlogComponent, PagingComponent],
    exports: [BlogCardComponent, AuthorCardComponent, NewsletterCardComponent, AllBlogComponent, PagingComponent]
})
export class ComponentShareModule { }