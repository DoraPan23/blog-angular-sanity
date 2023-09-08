import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PipeModule } from "src/app/pipes/pipe.module";
import { TagRoutingModule } from "./tag.routing.module";
import { SanityService } from "src/app/services/sanity.service";
import { ComponentShareModule } from "src/app/components/component-share.module";
import { TagComponent } from "./index/tag.component";

@NgModule({
    imports: [
        TagRoutingModule,
        CommonModule,
        PipeModule,
        ComponentShareModule
    ],
    providers: [SanityService],
    declarations: [TagComponent],
    exports: [TagRoutingModule, CommonModule, PipeModule, ComponentShareModule]
})
export class TagModule { }