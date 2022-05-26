import { ComicsResponse } from './../models/comics.model';
import { HeroesRepository } from './../repository/heroes/heroes.repository';
import { Observable, ReplaySubject, take } from 'rxjs';
import { Hero, HeroesResponse } from './../models/heroes.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class HeroesService {

  public readonly $heroesData = new ReplaySubject<HeroesResponse>(1);
  public readonly $comicsData = new ReplaySubject<ComicsResponse>(1);
  public readonly $activeHero = new ReplaySubject<Hero>(1);


  constructor(
    private readonly heroesRepository: HeroesRepository,
  )
  {}

  public setActiveHero(hero: Hero) {
    this.$activeHero.next(hero);
  }

  public addHeroes(heroesResponse:HeroesResponse) {
    this.$heroesData.next(heroesResponse);
  }

  public getHeroes():Observable<HeroesResponse>{
    return this.heroesRepository.getHeroes().pipe(take(1));
  }

  public alfaOrder():Observable<HeroesResponse>{
    return this.heroesRepository.alfaOrder().pipe(take(1));
  }

  public searchHeroes(heroName: string):Observable<HeroesResponse>{
    return this.heroesRepository.searchHeroes(heroName).pipe(take(1));
  }

  public getComics(id: string):Observable<ComicsResponse>{
    return this.heroesRepository.getComics(id).pipe(take(1));
  }
}
