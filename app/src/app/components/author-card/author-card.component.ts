import { Component, Input } from "@angular/core";

@Component({
  selector: "app-author-card",
  templateUrl: "./author-card.component.html",
})
export class AuthorCardComponent {
  @Input() author: any;
}
