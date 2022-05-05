import { MarvelHeroesComponent } from './marvel-heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [MarvelHeroesComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    MarvelHeroesComponent
  ]
})
export class MarvelHeroesModule { }
