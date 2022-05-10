import { MarvelHeroInfoRoutingModule } from './marvel-hero-info-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelHeroInfoComponent } from './marvel-hero-info.component';



@NgModule({
  declarations: [MarvelHeroInfoComponent],
  imports: [
    CommonModule,
    MarvelHeroInfoRoutingModule
  ]
})
export class MarvelHeroInfoModule { }
