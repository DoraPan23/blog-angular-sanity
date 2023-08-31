import { Component, Input } from "@angular/core";
import { Post } from "src/types";

@Component({
  selector: "app-all-blog",
  templateUrl: "./all-blog.component.html",
})
export class AllBlogComponent {
  @Input() data: Post[] = []
}
