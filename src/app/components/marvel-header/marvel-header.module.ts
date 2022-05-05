import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarvelHeaderComponent } from './marvel-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ MarvelHeaderComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[MarvelHeaderComponent]
})
export class MarvelHeaderModule { }
