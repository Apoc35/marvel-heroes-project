export interface ComicsResponse {
  data: Data;
}

interface Data {
  results: Array<Comics>;
}

export interface Comics {
  title: string;
  description: string;
  pageCount:number;
  thumbnail: ComicThumbnail;
}

export interface ComicThumbnail {
  path:string;
  extension:string;
}
