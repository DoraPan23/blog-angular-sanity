import { Component, Input } from "@angular/core";

@Component({
  selector: "app-blog-card",
  templateUrl: "./blog-card.component.html",
})
export class BlogCardComponent {
  @Input() first: boolean = false;
  @Input() last: boolean = false;
}
