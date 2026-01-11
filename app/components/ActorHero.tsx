
import type { ActorDetails } from '../types/actors'
import Imdb_button from './Imdb_button'
import TmdbButton from './TmdbButton'

const ActorHero = ({ actor }: { actor: ActorDetails }) => {

    let imgSrc = "/images/poster.jpg"

    const tmdpImg = actor?.profile_path
    if (tmdpImg) {
        imgSrc = `https://image.tmdb.org/t/p/w780/${tmdpImg}`
    }
    console.log(tmdpImg)
    return (
        <div className="relative ">

            <div className="z-50  flex flex-col lg:flex-row relative" >

                <div className=" flex-1 px-2 sm:px-42 lg:px-0">

                    <figure className='w-full aspect-2/3 rounded-2xl overflow-hidden'>
                        <img
                            src={imgSrc}
                            alt="Movie 1"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                </div >

                <div className=" flex-3 flex flex-col  justify-between px-0 py-8 lg:px-6 lg:py-6 ">
                    <div className=" flex flex-col gap-12">
                        <h2 className=' text-4xl md:text-6xl font-semibold '>{actor?.name ?? ""}</h2>
                        <div className="">
                            <h5 className=' text-xl font-semibold mb-3'>Biography:</h5>
                            <p className='text-lg font-normal max-w-[750px] line-clamp-6'>{actor?.biography ?? ""}</p>
                        </div>
                        <div className="flex text-base flex-wrap ">

                            <span className=''>{actor?.birthday ?? ""}</span>
                            <div className="border-e-3 border-primary rotate-10 mx-4 "></div>
                            <span className=''>{actor?.place_of_birth ?? ""}</span>

                        </div>
                        <div className="flex gap-4">
                            {(actor?.imdb_id && actor?.id )&&
                                <>
                                    <Imdb_button ratting={''} url={`https://www.imdb.com/name/${actor.imdb_id}/`} />
                                    <TmdbButton tmdb_id={actor.id} />
                                </>
                            }

                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default ActorHero