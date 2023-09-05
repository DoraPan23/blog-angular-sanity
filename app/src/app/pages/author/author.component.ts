import { Component, OnInit } from "@angular/core";
import { from, take } from "rxjs";
import { SanityService } from "src/app/services/sanity.service";

@Component({
  selector: "app-author",
  templateUrl: "./author.component.html",
})
export class AuthorComponent implements OnInit {
  listAuthor = [];

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    const observable = from(this.getListAuthors());
    observable.pipe(take(1)).subscribe((data) => {
      this.listAuthor = data;
    });
  }

  async getListAuthors() {
    return await this.sanityService.getAllAuthors();
  }
}
