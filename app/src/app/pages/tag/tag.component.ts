import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs";
import { SanityService } from "src/app/services/sanity.service";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
})
export class TagComponent implements OnInit {
  listBlogsByTag = [];
  tag: string = "";
  constructor(
    private sanityService: SanityService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.tag = params.get("tag") || "";
          return this.sanityService.getBlogsByTag(this.tag);
        })
      )
      .subscribe((blogs) => {
        this.listBlogsByTag = blogs;
      });
  }
}
