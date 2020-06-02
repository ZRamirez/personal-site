import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  onClickScrollToHome(el: HTMLElement) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

}
