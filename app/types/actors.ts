
export type Actor = {
    id: number;
    name: string;
    profile_path: string;
    // known_for: {
    //     name: string;
    //     poster_path: string;
    //     backdrop_path: string;
    //     genre_ids: number[];
    //     vote_average: number;
    // }[]

}

export type KnownFor = {
    id: number
    title: string;
    popularity: string;
    order: number;
    // order = 0 → Lead role
    // order = 1–2 → Major supporting role
    // order > 5 → Minor / cameo
    episode_count: number;
    media_type: "movie";     // media_type: "tv" | "movie";



    genre_ids: number[];
    character: string;
    poster_path: string;
    backdrop_path: string;
}

export type ActorDetails = {
    id: number
    name: string;
    biography: string;
    birthday: string;
    imdb_id: string;
    known_for_department: string;
    place_of_birth: string;
    profile_path: string;

    combined_credits: {
        cast: KnownFor[]
    }
}