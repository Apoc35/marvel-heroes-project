import { ComicsResponse } from './../../models/comics.model';
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
      `${urlConfig.heroes}?&limit=20nameStartsWith=da&orderBy=name&${urlParams}`
    )
  }

  public alfaOrder():Observable<HeroesResponse>{
    return this.httpClient.get<HeroesResponse>(
      `${urlConfig.heroes}?&nameStartsWith=da&orderBy=-name&${urlParams}`
    )
  }

  public searchHeroes(name: string):Observable<HeroesResponse>{
    return this.httpClient.get<HeroesResponse>(
      `${urlConfig.heroes}?&nameStartsWith=${name}&orderBy=name&${urlParams}`
    )
  }

  public getComics(id: string):Observable<ComicsResponse>{
    return this.httpClient.get<ComicsResponse>(
      `${urlConfig.heroes}/${id}/comics?ts=1&apikey=edc13921ce2d3563dcd2a150281f5c23&hash=1acefe488f2631cef41c7443649d0483`
    )
  }
}
