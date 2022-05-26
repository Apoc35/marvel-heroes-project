import { Hero, HeroesResponse, Thumbnail } from './../../../../../models/heroes.model';
import { Subject, take, takeUntil } from 'rxjs';
import { HeroesService } from './../../../../../services/heroes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.scss']
})
export class MarvelHomeComponent implements OnInit, OnDestroy {

  public $heroes = this.heroesService.$heroesData.asObservable();
  public heroes: Array<Hero> = [];
  private onDestroy = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly heroesService: HeroesService,
  ){}

  public takeImage(thumbnail: Thumbnail): string {
    return `${thumbnail.path}.${thumbnail.extension}`
  }


  ngOnInit(): void {
    this.heroesService.searchReveal = true;

    this.heroesService.getHeroes().pipe(take(1)).subscribe((response) => {
      this.heroesService.addHeroes(response);
      this.heroes = response.data.results;
    });

    this.$heroes.pipe(takeUntil(this.onDestroy)).subscribe((value) => {
      this.heroes = value.data.results;
    })
  }

  public submit(hero:Hero) : void{
    this.heroesService.searchReveal = false;
    this.heroesService.setActiveHero(hero);
    void this.router.navigate(['hero-info']);
  }

  public ngOnDestroy() {
    this.onDestroy.next(void 0);
    this.onDestroy.complete();
  }

}
