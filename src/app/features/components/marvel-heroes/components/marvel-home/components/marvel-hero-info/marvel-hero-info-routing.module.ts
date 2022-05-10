import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { MarvelHeroInfoComponent } from './marvel-hero-info.component';


const routes: Routes = [
  {
    path:'',
    component:MarvelHeroInfoComponent,
  },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class MarvelHeroInfoRoutingModule { }
