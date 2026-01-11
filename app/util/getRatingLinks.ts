import type { OmdbRating } from "../types/omdbRating";


export type ratingUrlsType = {
  imdb: string;
  rottenTomatoes: string
  metacritic: string

}

export function getRatingLinks(imdb_id: string, movieName: string): ratingUrlsType {
  const titleSlug = movieName.toLowerCase().replace(/\s+/g, "-");
  const metacriticMovieName = movieName.toLowerCase()
    .trim()
    .replace(/['!@#$%^&*(),.?":{}|<>]/g, '')
    .replace(/\s+/g, '-');

  const rottenTomatoesMovieName = movieName.toLowerCase()
    .trim()
    .replace(/['!@#$%^&*(),.?":{}|<>]/g, '')
    .replace(/\s+/g, '_');


  return {
    imdb: `https://www.imdb.com/title/${imdb_id}/`,
    rottenTomatoes: `https://www.rottentomatoes.com/m/${rottenTomatoesMovieName}`,
    metacritic: `https://www.metacritic.com/movie/${metacriticMovieName}`
  };
}