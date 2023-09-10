import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-hub-projects',
  templateUrl: './git-hub-projects.component.html',
  styleUrls: ['./git-hub-projects.component.scss']
})
export class GitHubProjectsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  object : any;

  arrayOfObjects : any;
  

  getProjects(){

    let url = 'https://api.github.com/users/Lemon2311/repos';

    this.http.get(url).subscribe(data => this.object = data);

  }

  ngOnInit(): void {

    var dropdown = document.querySelector('.dropdown');

    if(dropdown!=null)
    dropdown.addEventListener('click', function(event) {


      event.stopPropagation();

      if(dropdown!=null)
      dropdown.classList.toggle('is-active');

    });


    this.getProjects();



  }

}
