import { Component, Input } from "@angular/core";
import { Blog } from "src/types";

@Component({
  selector: "app-all-blog",
  templateUrl: "./all-blog.component.html",
})
export class AllBlogComponent {
  @Input() data: Blog[] = [];
  @Input() tag: string = "";
}
