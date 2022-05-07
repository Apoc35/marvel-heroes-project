import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MarvelHomeComponent } from './marvel-home.component';
import { MarvelHomeRoutingModule } from './marvel-home-routing.module';



@NgModule({
  declarations: [MarvelHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarvelHomeRoutingModule
  ],
})
export class MarvelHomeModule { }
