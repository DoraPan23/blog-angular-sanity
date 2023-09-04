import { Component, Input } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { DataSharingService } from "src/app/services/data-sharing.service";
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
    author: { name: "", _id: "" },
    categories: [],
    description: "",
    publishedAt: "",
    slug: "",
    title: "",
    mainImage: "",
  };

  constructor(private router: Router, private dataShare: DataSharingService) {}

  navigateToAuthor(author: { name: string; _id: string }) {
    this.dataShare.updateData(author._id);
    localStorage.setItem("authorId", author._id);
    this.router.navigate(["/author/" + author.name]);
  }

  navigateToTag(tag: string) {
    this.router.navigate(["/tag/" + tag]);
  }
}
