import { urlConfig, urlParams } from './../../config/urlconfig.config';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HeroesResponse } from "src/app/models/heroes.model";


@Injectable({
  providedIn: 'root',
})
export class HeroesRepository {

  constructor(
    private readonly httpClient: HttpClient,
  ){}

  public getHeroes():Observable<HeroesResponse>{
    return this.httpClient.get<HeroesResponse>(
      `${urlConfig.heroes}&limit=20&orderBy=name&${urlParams}`
    )
  }

}
