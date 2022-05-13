export interface HeroesResponse {
  data: Data;
}

interface Data {
  results: Array<Hero>;
}

export interface Hero {
  id?: string;
  name?:string;
  description?:string;
  modified?:number;
  thumbnail?: Thumbnail;
  comics?:Comics;
}

export interface Thumbnail {
  path:string;
  extension:string;
}

export interface Comics {
  avaliable?: number;
  collectionURL?:string;
  items?: Array<Comic>
}

export interface Comic {
  resourceURL:string;
  name:string;
}
