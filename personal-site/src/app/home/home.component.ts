import { Component, OnInit } from '@angular/core';

declare var VANTA;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //for the landing page animations
    //see vantaJS for more info
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
      maxDistance: 18.00
    })
  }

  //to scroll down after clicking view button
  onClickScrollToHome(el: HTMLElement) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

}
