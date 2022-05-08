import { Hero, HeroesResponse, Thumbnail } from './../../../../../models/heroes.model';
import { take } from 'rxjs';
import { HeroesService } from './../../../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.scss']
})
export class MarvelHomeComponent implements OnInit {

  public heroes: Array<Hero> = this.heroesService.heroes;

  constructor(
    public readonly heroesService: HeroesService,
  ){}

  public takeImage(thumbnail: Thumbnail): string {
    return `${thumbnail.path}.${thumbnail.extension}`
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().pipe(take(1)).subscribe((response) => {
      this.heroesService.addHeroes(response);
      this.heroes = response.data.results;
    })
  }

}
