export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Recommended {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: Genre[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  }
  
  export interface MovieList {
    title_list: string;
    slug: string;
    movies: Movie[];
  }
  
  export interface MovieType {
    list_movie: MovieList[];
    recommended: Recommended;
  }