import { MarvelContainerModule } from './shared/marvel-container/marvel-container.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarvelHeaderModule } from './shared/marvel-header/marvel-header.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { MarvelHeroesModule } from './features/components/marvel-heroes/marvel-heroes.module';
import { MarvelContainerComponent } from './shared/marvel-container/marvel-container.component';
import { MarvelFooterModule } from './shared/marvel-footer/marvel-footer.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarvelHeaderModule,
    MatGridListModule,
    MarvelHeroesModule,
    MarvelFooterModule,
    MarvelContainerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
