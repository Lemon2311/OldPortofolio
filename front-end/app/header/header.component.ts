import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `



  <div class='navbar body has-background-black-ter is-dark py-4 pr-6'>
    <!-- logo -->
    <div class="navbar-end has-background-black-ter">
       <!--<a class="navbar-item">
        my logo
       </a>-->
      </div>

    <!-- menu -->

    <div class="navbar-end is-long has-background-black-ter">
      <a class="navbar-item has-text-white has-background-black-ter" routerLink="/">About Me</a>
      <a class="navbar-item has-text-white has-background-black-ter" routerLink="/projects">Projects</a>
      <a class="navbar-item has-text-white has-background-black-ter" routerLink="/appendix">Certificates</a>
      <a class="navbar-item has-text-white has-background-black-ter" href="assets/CV - Marco Ulise Tighiliu.pdf">CV</a>
      <a class="navbar-item has-text-white has-background-black-ter" routerLink="/contact">Contact</a>



    </div>



  </div>












  `,
  styles: [`


    body {
      width: 100%;
      height: 100%;
      margin: 5px;
      padding: 0px;
      overflow-x: hidden;
    }

    .navbar-item{

        border-radius: 5px;
        display: block;
        margin-left: 45px;
        margin-right: auto;


    }

    div{
      background-color:black;
    }



    @media only screen  and (max-width: 5000px){

    div {

    overflow-x: hidden;
    background-color: black;
    margin-right: -12px;

    }

    }

   @media only screen  and (max-width: 1000px){

   .navbar-end{
   margin-right: -60px;

   }

   }


    .navbar-item:hover{
      opacity: 0.5;
    }


    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
