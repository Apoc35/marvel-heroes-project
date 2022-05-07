import { HeroesRepository } from './../repository/heroes/heroes.repository';
import { Observable, ReplaySubject, take } from 'rxjs';
import { HeroesResponse } from './../models/heroes.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class HeroesService {

  public readonly $heroesData = new ReplaySubject<HeroesResponse>(1);

  constructor(
    private readonly heroesRepository: HeroesRepository,
  )
  {}

  public addHeroes(heroesResponse:HeroesResponse) {
    this.$heroesData.next(heroesResponse);
  }

  public getHeroes():Observable<HeroesResponse>{
    return this.heroesRepository.getHeroes().pipe(take(1));
  }

}
