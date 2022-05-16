import { MarvelFooterComponent } from './../marvel-footer/marvel-footer.component';
import { MarvelContainerModule } from './../marvel-container/marvel-container.module';
import { MarvelContainerComponent } from './../marvel-container/marvel-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarvelHeaderComponent } from './marvel-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ MarvelHeaderComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MarvelContainerModule,
    ReactiveFormsModule,
  ],
  exports:[MarvelHeaderComponent]
})
export class MarvelHeaderModule { }
