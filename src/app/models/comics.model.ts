export interface ComicsResponse {
  data: Data;
}

interface Data {
  results: Array<Comics>;
}

export interface Comics {
  title: string;
  description: string;
  format:string;
  pageCount:number;
  heroThumbnail: ComicThumbnail;
}

export interface ComicThumbnail {
  path:string;
  extension:string;
}
