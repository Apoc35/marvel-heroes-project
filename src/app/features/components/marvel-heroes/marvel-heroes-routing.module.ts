import { MarvelHeroInfoModule } from './components/marvel-home/components/marvel-hero-info/marvel-hero-info.module';
import { MarvelHeroesComponent } from './marvel-heroes.component';
import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { MarvelHomeComponent } from "./components/marvel-home/marvel-home.component";
import { MarvelHomeModule } from './components/marvel-home/marvel-home.module';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: (): Promise<MarvelHomeModule> =>
    import('./components/marvel-home/marvel-home.module').then(
        (m) => m.MarvelHomeModule
    ),
  },
  {
    path: 'hero-info',
    pathMatch: 'full',
    loadChildren: (): Promise<MarvelHeroInfoModule> =>
      import('./components/marvel-home/components/marvel-hero-info/marvel-hero-info.module').then(
        (m) => m.MarvelHeroInfoModule
    ),
  },

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class MarvelHeroesRoutingModule {

}
