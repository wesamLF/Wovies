import GridContainer from '@/app/components/GridContainer';
import MovieCard from '@/app/components/MovieCard';
import NotFoundMessage from '@/app/components/NotFoundMessage';
import Pagination from '@/app/components/Pagination';
import type { Movie } from '@/app/types/movie';

const page = async ({ searchParams }: { searchParams: { page?: string } }) => {


    const params = await searchParams;
    const currentPage = params.page ?? "1";





    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${currentPage}`, {
        cache: "no-store",
    }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch movie");
    }
    const data = await res.json()
    const { results } =  data
    const total_pages: number = data?.total_pages ?? 1

    let movies: Movie[] = results ?? []


    if (movies.length == 0) {
        return <NotFoundMessage msg={'No movies found'} />
    }

    return (
        <>
            <GridContainer>
                {movies.map((movie) => (<MovieCard key={movie.id} movieData={movie} />))}
            </GridContainer>




            <div className=" my-10 flex justify-center ">
                 {total_pages !== 1 && <Pagination total_pages={total_pages} currentPage={currentPage} toPage={'/movies/popular?page='} />}

            </div>
        </>
    )
}

export default page