import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelFooterComponent } from './marvel-footer.component';
import { MarvelContainerModule } from './../marvel-container/marvel-container.module';



@NgModule({
  declarations: [MarvelFooterComponent],
  imports: [
    CommonModule,
    MarvelContainerModule
  ],
  exports: [MarvelFooterComponent]
})
export class MarvelFooterModule { }
