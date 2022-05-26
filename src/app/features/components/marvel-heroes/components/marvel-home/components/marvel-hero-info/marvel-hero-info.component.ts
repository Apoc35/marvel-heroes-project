import { Comics } from './../../../../../../../models/comics.model';
import { Thumbnail, Hero } from './../../../../../../../models/heroes.model';
import { HeroesService } from './../../../../../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { takeUntil, take } from 'rxjs';

@Component({
  selector: 'app-marvel-hero-info',
  templateUrl: './marvel-hero-info.component.html',
  styleUrls: ['./marvel-hero-info.component.scss']
})
export class MarvelHeroInfoComponent implements OnInit {

  public $hero = this.heroesService.$activeHero.asObservable();
  public hero: Hero = {};
  public comics: Array<Comics> = [];
  public heroImage: string = '';

  constructor(
    private readonly heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.$hero.pipe(take(1)).subscribe((value) => {
      this.hero = value;
      this.getComics(String(value?.id));
    })
  }
  public takeImage(thumbnail: Thumbnail): string {
    this.heroImage = `${thumbnail.path}.${thumbnail.extension}`;
    return this.heroImage;
  }

  public getComics(id: string) {
    this.heroesService.getComics(id).pipe(take(1)).subscribe((response) => {
      this.comics = response.data.results;
    });
  }
}
