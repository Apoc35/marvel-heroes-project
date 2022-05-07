import { Hero, HeroesResponse } from './../../../../../models/heroes.model';
import { take } from 'rxjs';
import { HeroesService } from './../../../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.css']
})
export class MarvelHomeComponent implements OnInit {

  public heroes: Array<Hero> = [];

  constructor(
    private readonly heroesService: HeroesService,
  ){}

  ngOnInit(): void {
    this.heroesService.getHeroes().pipe(take(1)).subscribe((response) => {
      this.heroes = response.data.results;
    })
  }

}
