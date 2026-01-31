import Link from 'next/link';
import MovieCard from './MovieCard';
import SectionTitle from './SectionTitle';
import type { KnownFor } from '@/app/types/actors';

const KnownForMovies = ({ cast }: { cast: KnownFor[] }) => {
  if (!cast || cast.length === 0) return null;

  let filteredCast = cast
    .filter((c) => c.media_type === 'movie' && c.order === 0 && c.poster_path)
    .slice(0, 10);

  if (filteredCast.length <= 4) {
    filteredCast = cast.filter((c) => c.media_type === 'movie').slice(0, 10);
  }

  if (filteredCast.length === 0) return null;

  return (
    <div className="py-8">
      <SectionTitle title="Known For:" />
      <div className="flex overflow-x-auto gap-4 py-4">
        {filteredCast.map((movie, i) => (
          <div className="w-[200px] min-w-[200px]" key={i}>
            <MovieCard movieData={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnownForMovies;
