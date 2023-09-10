import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

  <footer class="footer has-background-dark has-text-white">
      <div class="container content has-text-centered py-6">
        <p><!-- Inspired by creating to create -->Made with <img src="./assets/angularLogo.png" alt="Angular" width="75" height="75" style = "position:relative; top:5px;"></p>
        <!-- menu -->
    <div class="navbar-menu">
    <div class="navbar-end py-6">
      <p class="navbar-item"></p>
      <p class="navbar-item"></p>
      <p class="navbar-item"></p>
      <p class="navbar-item"></p>
      <p class="navbar-item"></p>
      <p class="navbar-item"></p>
    </div>
    </div>
      </div>
    </footer>

  `,
  styles: [`

   footer {
     overflow-x: hidden;
     background-color: black;
     min-height: 100vh;
     margin-right: -11px;
     margin-bottom : -60px;

    }





  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
