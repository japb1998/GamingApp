export interface Game {
  id:number;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: ParentPlatform[];
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}
//<T> means anything that is there is dynamic
export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name:string;
    slug: string;
  };
}

interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshots {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
