import { ProjectsModule } from './../projects/projects.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  template: `
<!-- hero -->
<section class="hero is-black is-bold is-long is-fullheight">
  <div class="hero-body">
    <p class="title has-text-black line py-6" style="text-shadow: 1px 1px 1px white; position:relative; left:0px; top:130px;">
    <font size="+3">Tighiliu Marco Ulise</font>
    </p>
    <p class="subtitle has-text-black line py-6" style = "position:relative; left:-250px; top:135px; text-shadow: 1px 1px 1px white;">
      <br><br><font size="+2">Technology enthusiast</font>
    </p>
  </div>
</section>
<!-- grid description of capabilities-->

<section>
<div class="columns has-background-grey-darker px-6 py-6">
  <div class="column">

  </div>
  <div class="column">
  <div class="card has-background-danger-dark">
  <div class="card-content">
  <img id="myPhoto" src="./assets/15.jpg" alt="JavaWebDev" height="300" width="315">
  <p class="title" class="is-size-5">
  <strong>Web Developer </strong><br>
  The first domain in which I chose to venture was Web Developement
  as I was interested in creating full stack web aplications. I followed a one year
  programming course from Software Development Academy in which I learned everyhting
  from the basics of java, javaScript and OOP which were pretty easy as I had prior experince with C++, till
   more abstract concepts like streams, various data types, common practices
   and frameworks like Angular(TypeScript), Hibernate(SQL) and Spring(java).
  </p>
  </div>
</div>
  </div>
  <div class="column">
  <div class="card has-background-danger-dark">
  <div class="card-content">
  <img id="myPhoto" src="./assets/10.jpg" alt="Mechatronics" height="300" width="315">
  <p class="title" class="is-size-5">
  <strong>Mechatronics Engineer </strong><br>
  When I had to chose a study programme for my future I wanted to venture
  into a new domain so that I can increase my knowledge in various fields, adding
  on top of my Software skills, electrical, digital and mechanical engineering ones. I am actively studying at Fontys University
  of applied sciences, where I am learing new information and working on exciteing robotics
  projects. &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  ~since 2021
    </p>
  </div>
</div>
  </div>
  <div class="column">
  <div class="card has-background-danger-dark">
  <div class="card-content">
  <img id="myPhoto"  src="./assets/unityLogo.jpg" alt="Unity" height="300" width="315">
  <p class="title" class="is-size-5">
      <strong>Game Developer </strong><br>
      While I was studying at Software Development Academy I got the hang
      of doing research and learning anything from the internet, and have fallen upon
      Unity, a game engine which was free for starting developers, featured great documentation and a great
       comunity. During the course of a year I learned the basics and developed my first Android game.
    </p>
  </div>
  </div>
  </div>
<div class="column">

</div>
</div>
</section>

<!-- about me && what am i looking for -->
<div class="columns">

<div class="column has-background-grey-darker px-6" style="margin-right:1px; margin-bottom:1px;">

<div class="card has-background-grey-darker">
  <div class="card-content px-6 has-background-grey-darker">
    <p class="title has-text-danger-dark has-background-grey-darker">
      About Me:<br> &nbsp; &nbsp; I am a creator from Bucharest Romania, who moved to Eindhoven the Netherlands a year ago
to have a change of pace in my learning jurney.  My learning journey began when I discovered
programming, 5 years ago when i was 15. I have been fascinated with creating my hole life and when I discovered programming
 I found my weapon of choice as I was able to create various projects from various domains
out of nothing. I enjoyed it as I found it very creative and I have been a creative person my
whole life. I started investing time and effort into my pasion and I got interested in learning other
skills which add up nicely (Electrical & Mechanical Engineering). I continued having fun while learning and
 at one point I realized that in my eyes if you do what you love you win the game of life... soo I strive to win it.
My focus is on the technology and leaving a mark on society by helping it grow.
    </p>
  </div>
</div>
  </div>

  <div class="column has-background-grey-darker px-6" style="margin-left:-3px; margin-top:-3px;">

  <div class="card has-background-grey-darker">
  <div class="card-content px-6 has-background-grey-darker">
    <p class="title has-text-danger-dark has-background-grey-darker">
    What I am looking for: <br> &nbsp; &nbsp; I want to learn, I want to create,
    I want to be part of a team of engineers that strive together. I want to make a living doing what I enjoy.
    Right now I am looking forward to find a job
    in the Tech Domain, and to continue working on amazing projects. If you find me fit you can contact me in the contact area.
  </div>
</div>



<br>

<section>
<div class="card has-background-grey-darker">
  <div class="card-content px-6 has-background-grey-darker">
    <p class="title has-text-danger-dark has-background-grey-darker" style="text-align: center;">
    Skills:
  </div>
</div>
</section>

<br>

<section>
<div class="card has-background-grey-darker">
  <div class="card-content px-6 has-background-grey-darker">
    <p class="title has-text-danger-dark has-background-grey-darker">
     Technical: <br> &nbsp; &nbsp; C++, C#, Java, JavaScript, Html, Css, TypeScript,
    SQL, Spring, Hibernate, Angular, Git, Unity, Arduino, RasberryPi, Soldering, Stick Welding,
    Google Play App Deployment, Networking, Bluetooth Technologies.
  </div>
</div>
</section>

<br>

<section>
<div class="card has-background-grey-darker">
  <div class="card-content px-6 has-background-grey-darker">
    <p class="title has-text-danger-dark has-background-grey-darker">
    Soft:  <br> &nbsp; &nbsp; critical thinking, can view problems from an outsiders view,
     problem solving, team working, research skills,
    fast learner, leadership capabilities.
  </div>
</div>
</section>

</div>

</div>

  `,
  styles: [`

   .hero{
    background-image: url('/assets/18.jpg') !important;
    background-size: cover;
    background-position: center center;
    margin-right: -12px;
   }

  #myPhoto {
        border-radius: 5px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%

    }

    .paddingFutHed{
      margin-right: -12px;
    }

    .container{
      width:100%;

    }

    .line {
    width: 500px;
    white-space:nowrap;
    overflow:show;
    text-overflow:ellipsis;
    }



    img {
    float: left;
    width:  250px;
    height: 250px;
    object-fit: cover;
    }




  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
