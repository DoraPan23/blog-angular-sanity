import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthorComponent } from "./index/author.component";
import { AuthorDetailComponent } from "./author-detail/author-detail.component";
import { AuthorRoutingModule } from "./author.routing.module";
import { PipeModule } from "src/app/pipes/pipe.module";
import { ComponentShareModule } from "src/app/components/component-share.module";

@NgModule({
    imports: [
        AuthorRoutingModule,
        CommonModule,
        PipeModule,
        ComponentShareModule
    ],
    declarations: [AuthorComponent, AuthorDetailComponent],
})
export class AuthorModule { }