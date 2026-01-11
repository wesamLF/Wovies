import CastSection from '@/app/components/CastSection';
import ImdpReviews from '@/app/components/ImdpReviews';
import MovieHero from '@/app/components/MovieHero';
import SimilarMovies from '@/app/components/SimilarMovies';
import type { MovieDetails } from '@/app/types/movie';
import { delay } from '@/app/util/delay';

const page = async ({ params }: { params: { movie_id: string } }) => {

    const { movie_id } = await params

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits,videos,images,similar&language=en-US`, {
        cache: "no-store"
    }
    )
    if (!res.ok) {
        throw new Error("Failed to fetch movie")

    }
    const movie: MovieDetails = await res.json() 
    const similar = movie?.similar?.results ?? []


    return (
        <div className="relative ">
            <div className="">
                <MovieHero movie={movie} />
            </div>
            <div className="pb-16 pt-4 ">
                <CastSection cast={movie?.credits?.cast ?? []} />

            </div>
            <div className="">
                <ImdpReviews movie_id={movie?.id } />

            </div>
            <div className=" py-16  ">
                <SimilarMovies similar={similar} />
            </div>

        </div >
    )
}

export default page