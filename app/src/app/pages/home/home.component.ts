import { SanityService } from "../../services/sanity.service";
import { Component, OnInit } from "@angular/core";
import { from, skip, switchMap, take, tap, toArray } from "rxjs";
import { Blog } from "src/types";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  recentBlogs: Blog[] = [];
  allBlogs: Blog[] = [];
  showBlogsByItemPerPage: Blog[] = [];
  itemPerPaged = 6;
  pageNumber = 0;

  constructor(private sanityService: SanityService) {}
  async ngOnInit(): Promise<void> {
    // const posts: Post[] = await this.getAllPosts();
    // this.recentBlogs = posts.slice(0, 4);
    // this.allBlogs = posts.slice(4);

    const observable = from(this.getAllPosts());
    observable.subscribe((data) => {
      this.recentBlogs = data.slice(0, 4);
      this.allBlogs = data.slice(4);

      this.showBlogsByItemPerPage = this.allBlogs.slice(0, this.itemPerPaged);
      this.pageNumber = Math.ceil(this.allBlogs.length / this.itemPerPaged);
    });
  }

  async getAllPosts(): Promise<Blog[]> {
    return await this.sanityService.getAllBlogs();
  }

  handlePageChanged(selectedPage: any) {
    console.log("selectedPage", selectedPage);

    this.showBlogsByItemPerPage = this.allBlogs.slice(
      selectedPage * this.itemPerPaged,
      selectedPage * this.itemPerPaged + this.itemPerPaged
    );
  }
}
