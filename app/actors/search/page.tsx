import ActorCard from '@/app/components/ActorCard';
import GridContainer from '@/app/components/GridContainer';
import MovieCard from '@/app/components/MovieCard';
import NotFoundMessage from '@/app/components/NotFoundMessage';
import Pagination from '@/app/components/Pagination';
import type { Actor } from '@/app/types/actors';
import type { Movie } from '@/app/types/movie';
import { getGenreId } from '@/app/util/getGenre';
import { getActorsTMDB_url } from '@/app/util/getTMDB_url';







const searchPage = async ({ searchParams }: { searchParams: { query?: string, page?: string } }) => {


    const params = await searchParams;
    const currentPage = params.page ?? "1";

    const query = params.query ?? "";
    const url = getActorsTMDB_url(query, currentPage)
    console.log(url)

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
    const actors: Actor[] = results

    if (actors.length == 0) {
        return <NotFoundMessage msg={'No Actors found'} />
    }
    let paginationUrl = '/actors/popular?page='
    if (query != "") paginationUrl = `/actors/search?query=${query}&page=`


    return (
        <>
            <GridContainer>

                {actors.map((actor) => (<ActorCard key={actor.id} ActorData={actor} />))}

            </GridContainer>
            <div className=" my-10 flex justify-center ">
                {total_pages !== 1 && <Pagination total_pages={total_pages} currentPage={currentPage} toPage={paginationUrl} />}


            </div>

        </>
    )
}

export default searchPage