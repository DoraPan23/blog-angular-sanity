import { Component, Input } from "@angular/core";
import { Blog } from "src/types";

@Component({
  selector: "app-recent-blog",
  templateUrl: "./recent-blog.component.html",
})
export class RecentBlogComponent {
  @Input() data: Blog[] = [];
}
