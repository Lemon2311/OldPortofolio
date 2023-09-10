import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  template: `

<section>
<div class="columns has-background-grey-darker py-6">
  <div class="column">

  </div>
  <div class="column py-5 px-6">
  <div class="card">
  <div class="card-content">
    <p class="title has-text-danger-dark line">
      RewindMaze
    </p>
    <img class="pb-4" id="myPhoto" src="./assets/RewindMaze.jpg" alt="RewindMazeLogo" height="300" width="315">
    <p class="subtitle">
      Game made for the Brackeys Game jam with the theme Rewind
      featuring randomly generated mazes
      that need to be completed without being caught by the enemy.
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://play.google.com/store/apps/details?id=com.rewind.lemon231&gl=RO">GooglePlay</a>
      </span>
    </p>
  </footer>
</div>
  </div>
  <div class="column py-5 px-6">
  <div class="card">
  <div class="card-content">

    <a href="https://github.com/Lemon2311"> <img src="./assets/githubIcon.png" alt="Github" width="75" height="75" style="text-align: right;"> </a>

    <a href="{{project.html_url}}" class="dropdown-item" *ngFor="let project of object">

    {{project.full_name.slice(10)}}

     </a>

  </div>
</div>

  </div>
  <div class="column">

  </div>
  <div class="column">

  </div>
</div>
</section>
<!--
<section>
<div class="columns has-background-grey-darker">
  <div class="column">

  </div>
  <div class="column">

  </div>
  <div class="column">

  </div>
  <div class="column px-6">
  <div class="card">
  <div class="card-content">
    <p class="title has-text-danger-dark">
      More
    </p>
    <img id="myPhoto" src="./assets/index.jpeg" alt="index" height="300" width="315">
    <p class="subtitle">
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        Coming soon!
      </span>
    </p>
  </footer>
  </div>
  </div>
  <div class="column">

  </div>
</div>
</section>
-->



  `,
  styles: [`

    #myPhoto {
        border-radius: 5px;
        display: block;
        margin-left: auto;
        margin-right: auto
    }

    .line {
    width: 200px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    }

    .title {
      align-text:center;
    }

  `
  ]
})
export class ProjectListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  object : any;


  getProjects(){

    let url = 'https://api.github.com/users/Lemon2311/repos';

    return this.http.get(url).subscribe(data => this.object = data);



  }

  ngOnInit(): void {

    this.getProjects();

  }

}
