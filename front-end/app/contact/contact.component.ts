import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-danger-dark is-bold">
      <div class="hero-body has-background-danger-dark">
        <div class="container">
          <h1 class="title has-text-grey-dark">Contact me!</h1>
        </div>
      </div>
    </section>

    <section class="section has-background-grey-darker boarderUp">
      <div class="container py-6">

        <!-- contact form-->
       <form id="form" #contactForm="ngForm" (ngSubmit)="submitForm(contactForm.value); contactForm.resetForm()">

        <!--{{name}} to check variable value-->

        <!--name-->
        <div class="field pl-4">
          <label class="label has-text-danger-dark">Name</label>
          <input
           type="name"
           name="name"
           class="input"
           [(ngModel)]="name"
           #nameInput="ngModel"
           required>
          <div class="help is-error has-text-danger-dark" *ngIf="nameInput.invalid && nameInput.touched">
          Your name is required
          </div>
      </div>

        <!--email-->
        <div class="field pl-4">
          <label class="label has-text-danger-dark">Email</label>
          <input
          type="email"
          name="email"
          class="input"
          [(ngModel)]="email"
          #emailInput="ngModel"
          required
          email>
          <div class="help is-error has-text-danger-dark" *ngIf="emailInput.invalid && emailInput.touched">
            Your email is required
          </div>
        </div>

        <!--message-->
        <div class="field pl-4">
          <label class="label has-text-danger-dark">Message</label>

          <input
          type="message"
          name="message"
          class="input"
          [(ngModel)]="message"
          #messageInput="ngModel"
          required
          message>
          <div class="help is-error has-text-danger-dark " *ngIf="messageInput.invalid && messageInput.touched">
            Your message is required
          </div>
        </div>

        <!--submit button-->
        <button type="submit" class="button is-large is-dark has-text-danger-dark py-1"
        [disabled]="contactForm.invalid">
          Send!
        </button>


      </form>

      </div>
    </section>

  `,
  styles: [`

   .button {
   background-color: #585858;
   border: none;
   color: white;
   padding: 20px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   margin: 4px 10px;
   border-radius: 50%;

   }


   @media only screen  and (max-width: 1000px){

   .hero {

     overflow-x: hidden;
     background-color: black;
     margin-right: -11.5px;
     margin-top: 30px;





    }}



     .boarderUp {

    overflow-x: hidden;
    background-color: black;
    min-height: 100vh;
    margin-right: -200px;
    margin-bottom : -50px;

    }

    @media only screen  and (max-width: 5000px){

    .boarderUp {

    overflow-x: hidden;
    background-color: black;
    margin-right: -11.5px;

    }

    .hero {

    overflow-x: hidden;
    background-color: black;
    margin-right: -11.5px;
    margin-top: -0px;

     }


    }

    .boarderUp{
      margin-right: -11.5px;
    }



  `]
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {

    console.warn(this.router.url);

  }

  name: string ="";
  email: string ="";
  message: string ="";

  url = '/api/v1/user';


  constructor(private http: HttpClient, private router : Router ) {}

  saveUser(data:any){
    return this.http.post(this.url, data)
  }

  submitForm(data:any) {



    this.saveUser(data).subscribe((result)=>{
      console.warn(result);

    });

    console.warn("added ");
    console.warn(data);
    console.warn("to database");


  }



}
