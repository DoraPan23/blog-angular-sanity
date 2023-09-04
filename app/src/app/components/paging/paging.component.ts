import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-paging",
  templateUrl: "./paging.component.html",
})
export class PagingComponent {
  @Input() pageNumber: number = 1;
  @Output() currentPage = new EventEmitter<number>();
  selectedPage = 0;

  onPageChanged(selectedPage: number) {
    console.log("selectedPage", selectedPage);
    this.selectedPage = selectedPage;
    this.currentPage.emit(selectedPage);
  }
}
