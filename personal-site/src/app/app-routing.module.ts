import { NgModule } from '@angular/core';
import { Route, RouterModule, Router, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';


const appRoutes: Routes = [
    {path: '', component: PageComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
  ];
  


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
}) 
export class AppRoutingModule {

}