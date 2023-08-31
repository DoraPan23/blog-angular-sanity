import { Component, Input } from "@angular/core";
import { Post } from "src/types";

@Component({
  selector: "app-recent-blog",
  templateUrl: "./recent-blog.component.html",
})
export class RecentBlogComponent {
  @Input() data: Post[] = [];
}
