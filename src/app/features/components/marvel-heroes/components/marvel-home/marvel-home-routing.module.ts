import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { MarvelHomeComponent } from './marvel-home.component';

const routes: Routes = [
  {
    path:'',
    component:MarvelHomeComponent,
  },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class MarvelHomeRoutingModule { }
