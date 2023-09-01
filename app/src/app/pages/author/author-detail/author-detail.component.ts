import { Component, OnInit } from "@angular/core";
import { SanityService } from "src/app/services/sanity.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-author-detail",
  templateUrl: "./author-detail.component.html",
})
export class AuthorDetailComponent implements OnInit {
  constructor(private sanityService: SanityService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get("slug") || "";
    console.log("slug", slug);
    this.sanityService.getBlogsByAuthorId("382cf13a-17a8-4085-a22b-09120c759574").then(data => console.log("getBlogsByAuthor", data));
  }


}
