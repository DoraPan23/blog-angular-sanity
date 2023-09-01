import { Component, Input } from "@angular/core";
import { Blog } from "src/types";

@Component({
  selector: "app-blog-card",
  templateUrl: "./blog-card.component.html",
})
export class BlogCardComponent {
  @Input() first: boolean = false;
  @Input() last: boolean = false;
  @Input() width: number = 384;
  @Input() height: number = 240;
  @Input() blog: Blog = {
    _id: "",
    author: "",
    categories: [],
    description: "",
    publishedAt: "",
    slug: "",
    title: "",
    mainImage: ""
  };
}
