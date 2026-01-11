import Link from 'next/link'
import type { Movie } from '../types/movie'
import { getGenreNames } from '../util/getGenre'
import GenreBadge from './GenreBadge'
import type { Actor } from '../types/actors'

const ActorCard = ({ ActorData }: { ActorData: Actor }) => {

    const imgSrc = ActorData?.profile_path ? `https://image.tmdb.org/t/p/w342/${ActorData?.profile_path}` : "/images/poster.jpg"





    return (


        <Link href={`/actor/${ActorData?.id ?? ""}`} className=" block relative shadow-sm  hover:scale-[105%] hover:rotate-1 transitidon duration-300  rounded-2xl overflow-hidden">

            <figure className='w-full aspect-2/3 '>
                <img
                    src={imgSrc}
                    alt="Movie 1"
                    className="w-full h-full object-cover "
                />
            <div className="absolute inset-0  bg-linear-to-t from-black/50 via-black/5 to-black/0  "></div>

                <div className=" absolute bottom-4 left-4   ">

                    <h2 className="text-base-content text-xl font-bold  px-2">
                        {ActorData?.name ?? ""}
                    </h2>

                </div>


            </figure>

        </Link >
    )
}

export default ActorCard