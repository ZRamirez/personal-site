import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, NavigationEnd } from '@angular/router';

declare var VANTA;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    //for the landing page animations
    VANTA.NET({
      el: "#landingPage",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xd0f25,
      backgroundColor: 0xae95dc,
      points: 9.00,
      maxDistance: 22.00
    })
  }

  onClickScrollToHome(el: HTMLElement) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

}
