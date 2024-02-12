export interface MovieInterface {
  "@meta": Meta;
  "@type": string;
  paginationKey: string;
  results: Movie[];
  totalMatches: number;
}

export interface Meta {
  operation: string;
  requestId: string;
  serviceTimeMs: number;
}

export interface Movie {
  id: string;
  image: Image;
  title: string;
  titleType: string;
  year?: number;
  disambiguation?: string;
}

export interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}