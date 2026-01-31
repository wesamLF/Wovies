import Link from 'next/link'
import type { Movie } from '../types/movie'
import { getGenreNames } from '../util/getGenre'
import GenreBadge from './GenreBadge'


const MovieCard = ({ movieData }: { movieData: Movie }) => {
  const tmdpImg = movieData.poster_path || movieData.backdrop_path || '';
  const imgSrc = tmdpImg ? `https://image.tmdb.org/t/p/w342${tmdpImg}` : '/images/poster.jpg';
  const genres = getGenreNames(movieData.genre_ids);

  return (
    <Link  href={`/movie/${movieData.id}`} prefetch={false} className="block relative bg-base-100 shadow-sm group rounded-2xl overflow-hidden">
      <figure className="w-full aspect-2/3">
        <img src={imgSrc} alt={movieData.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 opacity-0 bg-linear-to-t from-black/90 via-black/60 to-primary/40 group-hover:opacity-100 transition duration-300"></div>
        <div className="py-6 px-4 absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="absolute top-0 right-0 py-2 px-2 flex flex-wrap justify-end gap-1">
            {genres.map((genre, i) => (
              <GenreBadge key={i} genre={genre} />
            ))}
          </div>
          <h2 className="text-white text-xl font-bold px-2">{movieData.title}</h2>
        </div>
      </figure>
    </Link>
  );
};

export default MovieCard;
