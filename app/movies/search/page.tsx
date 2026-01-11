import GridContainer from '@/app/components/GridContainer';
import MovieCard from '@/app/components/MovieCard';
import NotFoundMessage from '@/app/components/NotFoundMessage';
import Pagination from '@/app/components/Pagination';
import type { Movie } from '@/app/types/movie';
import { getGenreId } from '@/app/util/getGenre';
import { getMoviesTMDB_url } from '@/app/util/getTMDB_url';







const searchPage = async ({ searchParams }: { searchParams: { query?: string, page?: string, genre?: string } }) => {


    const params = await searchParams;
    const currentPage = params?.page ?? "1";
    const query = params?.query ?? "";
    const genre = params?.genre ?? "";

    // tmdp uses a list of genre ids for searching by genre
    const genreId = getGenreId(genre)
    const url = getMoviesTMDB_url(query, currentPage, genreId)


    const res = await fetch(url, {
        cache: "no-store",
    }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch movie");
    }
    const data = await res.json()
    const { results } = data
    const total_pages: number = data?.total_pages ?? 1
    let movies: Movie[] = results ?? []

    



    // filter the searched movies[] by given genre . problem: if we go to -> with query + genre, solution: only show first page 
    if (query !== "" && genre !== "") {
        movies = movies.filter(movie => movie.genre_ids.includes(genreId as number))
    }

    if (movies?.length == 0) {
        return <NotFoundMessage msg={'No movies found'} />
    }
    // discard the genre if we have query
    let paginationUrl = '/movies/popular?page='
    if (genre != "") paginationUrl = `/movies/search?genre=${genre}&page=`
    if (query != "") paginationUrl = `/movies/search?query=${query}&page=`

    return (
        <>
            <GridContainer>
                {movies.map((movie) => (<MovieCard key={movie.id} movieData={movie} />))}


            </GridContainer>

            <div className=" my-10 flex justify-center ">
                {/* if we have both genre and query only show the first page and disable pagination */}
                {(query == "" || genre == "" && total_pages !== 1) && <Pagination total_pages={total_pages} currentPage={currentPage} toPage={paginationUrl} />
                }

            </div>
        </>
    )
}

export default searchPage