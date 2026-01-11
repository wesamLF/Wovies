
export type Cast = {

    id:number;
    character:string;
    profile_path:string;
    name:string;
    order:number;
}


export type Movie = {
    id: number
    title: string;
    poster_path: string;
    backdrop_path: string;
    genre_ids: number[];
}

export type MovieDetails = {
    videos: any;
    id: number
    title: string;
    runtime: number;
    poster_path: string;
    overview: string;
    backdrop_path: string;
    original_language: string;
    release_date: string;
    genres: { id: number, name: string }[];
    vote_average: number;
    imdb_id: string;
    production_countries: { name: string }[]
    similar: {
        results: Movie[]
    }
    credits: {cast: Cast[]}
}

