import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
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
    MarvelHomeRoutingModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
})
export class MarvelHomeModule { }
