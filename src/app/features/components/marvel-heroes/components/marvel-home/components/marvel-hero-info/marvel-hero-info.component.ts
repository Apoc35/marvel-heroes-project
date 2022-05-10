import { HeroesService } from './../../../../../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-hero-info',
  templateUrl: './marvel-hero-info.component.html',
  styleUrls: ['./marvel-hero-info.component.css']
})
export class MarvelHeroInfoComponent implements OnInit {

  public hero = this.heroesService.activeHero;

  constructor(
    private readonly heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
  }

}
