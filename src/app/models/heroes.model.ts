export interface HeroesResponse {
  data: Data;
}

interface Data {
  results: Array<Hero>;
}

export interface Hero {
  id?: number;
  name?:string;
  description?:string;
  modified?:number;
  thumbnail?: thumbnail;
}

interface thumbnail {
  path:string;
  extension:string;
}
