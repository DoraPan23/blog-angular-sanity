import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TagComponent } from "./index/tag.component";

const routes: Routes = [
    {
        path: "tag", children: [
            { path: ":tag", component: TagComponent },
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TagRoutingModule { }