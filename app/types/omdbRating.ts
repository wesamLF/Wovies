export interface OmdbRating {
    Source: "Internet Movie Database" | "Rotten Tomatoes" | "Metacritic";
    Value: string; // e.g. "7.8/10", "93%", "79/100"
}