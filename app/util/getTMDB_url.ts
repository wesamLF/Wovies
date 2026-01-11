import { getGenreId } from "./getGenre";



export function getMoviesTMDB_url(query: string, currentPage: string, genreId: number | undefined) {

    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const search_URL = `${TMDB_BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query.trim())}&language=en-US&&page=${currentPage}`
    const genre_URL = `${TMDB_BASE_URL}/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genreId}&language=en-US&page=${currentPage}&sort_by=popularity.desc`
    const popular_URL = `${TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&&page=${currentPage}`

    if (query == "" && genreId == undefined) {
        return popular_URL
    } else if (query !== "" && genreId == undefined || query !== "" && genreId !== undefined) {
        return search_URL
    } else if (query == "" && genreId !== undefined) {
        return genre_URL
    } else {
        return popular_URL
    }



}





export function getActorsTMDB_url(query: string, currentPage: string) {

    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    const search_URL = `${TMDB_BASE_URL}/search/person?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query.trim())}&page=${currentPage}`
    const popular_URL = `${TMDB_BASE_URL}/person/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${currentPage}`

    if (query == "") {
        return popular_URL
    } else if (query !== "") {
        return search_URL
    } else {
        return popular_URL
    }




}




