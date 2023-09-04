import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { DataSharingService } from "src/app/services/data-sharing.service";

@Component({
  selector: "app-author-card",
  templateUrl: "./author-card.component.html",
})
export class AuthorCardComponent {
  @Input() author: any;

  constructor(private router: Router, private dataShare: DataSharingService) {}

  navigateToAuthor(author: { name: string; _id: string }) {
    this.dataShare.updateData(author._id);
    localStorage.setItem("authorId", author._id);
    this.router.navigate(["/author/" + author.name]);
  }
}
