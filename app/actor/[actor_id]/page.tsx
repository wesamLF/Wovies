import ActorHero from '@/app/components/ActorHero';
import KnownForMovies from '@/app/components/KnownForMovies';

import type { ActorDetails } from '@/app/types/actors';

const page = async ({ params }: { params: { actor_id: string } }) => {

    const { actor_id } = await params

    const res = await fetch(`https://api.themoviedb.org/3/person/${actor_id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=combined_credits`, {
        cache: "no-store"
    }
    )
    if (!res.ok) {
        throw new Error("No Actor found");
    }

    const actor: ActorDetails = await res.json() 


    return (
        <div className="relative ">
            <div className="py-16 ">
                <ActorHero actor={actor} />
            </div>
            <div className="pt-4">
                <KnownForMovies cast={actor?.combined_credits?.cast ?? []} />

            </div>


        </div >
    )
}

export default page