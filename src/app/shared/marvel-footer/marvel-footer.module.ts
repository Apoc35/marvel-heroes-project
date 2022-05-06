import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelFooterComponent } from './marvel-footer.component';



@NgModule({
  declarations: [MarvelFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [MarvelFooterComponent]
})
export class MarvelFooterModule { }
