import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MarvelHomeComponent } from './marvel-home.component';
import { MarvelHomeRoutingModule } from './marvel-home-routing.module';
import { MarvelHeroInfoComponent } from './components/marvel-hero-info/marvel-hero-info.component';



@NgModule({
  declarations: [MarvelHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarvelHomeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
})
export class MarvelHomeModule { }
