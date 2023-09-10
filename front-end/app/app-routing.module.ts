
import { GitHubProjectsComponent } from './git-hub-projects/git-hub-projects.component';
import { TryComponent } from './try/try.component';
import { AppendixComponent } from './appendix/appendix.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
  ,
  {
    path: 'contact',
    component: ContactComponent

  }
  ,
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)

  }
  ,
  {
    path: 'appendix',
    component: AppendixComponent
  }
  ,
  {
    path: 'try',
    component: TryComponent
  }
  ,
  {
    path: 'git',
    component: GitHubProjectsComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
