import { Component, OnInit } from "@angular/core";
import { SanityService } from "../../../services/sanity.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Blog } from "src/types";
import { DataSharingService } from "src/app/services/data-sharing.service";

@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  slug: string = "";

  constructor(
    private sanityService: SanityService,
    private dataShare: DataSharingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.slug = this.route.snapshot.params["slug"];
  }

  ngOnInit(): void {
    this.getBlogBySlug(this.slug);
  }

  async getBlogBySlug(slug: string): Promise<Blog> {
    this.blog = await this.sanityService.getBlogBySlug(slug);
    console.log("data", this.blog);

    return this.blog;
  }

  navigateToAuthor(author: { name: string; _id: string }) {
    this.dataShare.updateData(author._id);
    localStorage.setItem("authorId", author._id);
    this.router.navigate(["/author/" + author.name]);
  }
}
