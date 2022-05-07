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
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class MarvelHeroesRoutingModule {

}
