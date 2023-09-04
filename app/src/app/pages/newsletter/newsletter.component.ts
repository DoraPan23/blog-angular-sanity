import { Component } from "@angular/core";
import { from } from "rxjs";
import { SanityService } from "src/app/services/sanity.service";
import { Blog } from "src/types";

@Component({
  selector: "app-newsletter",
  templateUrl: "./newsletter.component.html",
})
export class NewsletterComponent {
  allBlogs: Blog[] = [];

  constructor(private sanityService: SanityService) {}

  async ngOnInit(): Promise<void> {
    // const posts: Post[] = await this.getAllPosts();
    // this.recentBlogs = posts.slice(0, 4);
    // this.allBlogs = posts.slice(4);

    const observable = from(this.getAllPosts());
    observable.subscribe((data) => {
      this.allBlogs = data.slice(0, 3);
    });
  }

  async getAllPosts(): Promise<Blog[]> {
    return await this.sanityService.getAllBlogs();
  }
}
