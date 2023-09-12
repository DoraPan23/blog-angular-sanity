import { NgModule } from "@angular/core";
import { AllBlogComponent } from "../pages/home/all-blog/all-blog.component";
import { AuthorCardComponent } from "./author-card/author-card.component";
import { BlogCardComponent } from "./blog-card/blog-card.component";
import { NewsletterCardComponent } from "./newsletter-card/newsletter-card.component";
import { CommonModule } from "@angular/common";
import { PipeModule } from "../pipes/pipe.module";
import { PagingComponent } from "./paging/paging.component";
import { RouterModule } from "@angular/router";

const components = [
    BlogCardComponent,
    AuthorCardComponent,
    NewsletterCardComponent,
    AllBlogComponent,
    PagingComponent
]

const modules = [
    CommonModule,
    PipeModule,
    RouterModule,
]
@NgModule({
    imports: [modules],
    declarations: [components],
    exports: [modules, components]
})
export class ComponentShareModule { }