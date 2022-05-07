export interface HeroesResponse {
  data: {
    results: Heroes;
  };
}

export interface Heroes {
  id: number;
  name:string;
  description:string;
  modified:number;
  thumbnail: thumbnail;
}

interface thumbnail {
  path:string;
  extension:string;
}
