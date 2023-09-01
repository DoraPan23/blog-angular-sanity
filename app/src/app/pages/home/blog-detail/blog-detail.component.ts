import { Component, OnInit } from "@angular/core";
import { SanityService } from "../../../services/sanity.service";
import { ActivatedRoute } from "@angular/router";
import { Blog } from "src/types";

@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
})
export class BlogDetailComponent implements OnInit {
  post: Blog;
  slug: string = "";

  constructor(
    private sanityService: SanityService,
    private route: ActivatedRoute
  ) {
    this.slug = this.route.snapshot.params["slug"];
  }

  ngOnInit(): void {
    this.getBlogBySlug(this.slug);
  }

  async getBlogBySlug(slug: string): Promise<Blog> {
    this.post = await this.sanityService.getBlogBySlug(slug);
    console.log(this.post);
    return this.post;
  }
}
