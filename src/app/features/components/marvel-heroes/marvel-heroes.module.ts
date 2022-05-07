import { MarvelHeroesComponent } from './marvel-heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MarvelHeroesRoutingModule} from '../marvel-heroes/marvel-heroes-routing.module';
@NgModule({
  declarations: [MarvelHeroesComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MarvelHeroesRoutingModule
  ],
  exports: [
    MarvelHeroesComponent
  ]
})
export class MarvelHeroesModule { }
