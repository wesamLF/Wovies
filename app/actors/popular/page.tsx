import ActorCard from '@/app/components/ActorCard'
import GridContainer from '@/app/components/GridContainer';
import NotFoundMessage from '@/app/components/NotFoundMessage';
import Pagination from '@/app/components/Pagination';
import type { Actor } from '@/app/types/actors'
import { delay } from '@/app/util/delay';

const page = async ({ searchParams }: { searchParams: { page?: string } }) => {

    const params = await searchParams;
    const currentPage = params.page ?? "1";


    const res = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${currentPage}`, { cache: "no-store" })
    if (!res.ok) {
        throw new Error("Failed to fetch movie");
    }
    const data = await res.json()
    const { results } = data
    const total_pages: number = data?.total_pages ?? 1


    const actors: Actor[] = results ?? []

    if (actors.length == 0) {
        return <NotFoundMessage msg={'No Actors found'} />

    }
    return (

        <>
            <GridContainer>

                {actors.map((actor) => (<ActorCard key={actor.id} ActorData={actor} />))}
            </GridContainer>

            <div className=" my-10 flex justify-center ">
                 {total_pages !== 1 &&<Pagination total_pages={total_pages} currentPage={currentPage} toPage={'/actors/popular?page='} />}

            </div>

        </>
    )
}

export default page