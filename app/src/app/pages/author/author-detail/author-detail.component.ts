import { Component, OnInit } from "@angular/core";
import { SanityService } from "src/app/services/sanity.service";
import { ActivatedRoute } from "@angular/router";
import { from } from "rxjs";
import { DataSharingService } from "src/app/services/data-sharing.service";
import { Blog } from "src/types";

type Author = {
  image: string;
} & Blog;
@Component({
  selector: "app-author-detail",
  templateUrl: "./author-detail.component.html",
})
export class AuthorDetailComponent implements OnInit {
  listBlogsByAuthor = [];
  author: Author;
  constructor(
    private sanityService: SanityService,
    private dataShare: DataSharingService
  ) {}

  ngOnInit(): void {
    const observable = from(this.getBlogsByAuthorId());
    observable.subscribe((data) => {
      this.listBlogsByAuthor = data;
      this.author = this.listBlogsByAuthor[0];
    });
  }

  getBlogsByAuthorId() {
    let authorId = localStorage.getItem("authorId") || "";
    return this.sanityService.getBlogsByAuthorId(authorId);
  }
}
