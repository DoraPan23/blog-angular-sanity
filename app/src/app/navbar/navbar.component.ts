import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnDestroy {
  lightTheme: boolean = true;
  ngOnDestroy(): void {
    localStorage.clear();
  }
  switchTheme() {
    this.lightTheme = !this.lightTheme;
    if (this.lightTheme) {
      document.documentElement.style.setProperty(
        "--theme-background-selected",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--theme-background-unselected",
        "#090d1f"
      );
      document.documentElement.style.setProperty(
        "--theme-color-selected",
        "#090d1f"
      );
      document.documentElement.style.setProperty(
        "--theme-color-unselected",
        "#fff"
      );
    } else {
      document.documentElement.style.setProperty(
        "--theme-background-selected",
        "#090d1f"
      );
      document.documentElement.style.setProperty(
        "--theme-background-unselected",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--theme-color-selected",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--theme-color-unselected",
        "#090d1f"
      );
    }
  }
}
