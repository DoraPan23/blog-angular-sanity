import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit, OnDestroy {
  lightTheme: boolean = true;
  links = ["blogs", "authors", "newsletter"];
  menuSelected = "";
  toggleHamburger = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuSelected = window.location.pathname.split("/")[1] || "blogs";
  }
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

  navigate(link: string) {
    this.menuSelected = link != "" ? link : "blogs";
    this.toggleHamburger = false;
    this.router.navigate(["/" + link]);
  }
}
