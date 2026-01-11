import type { MovieDetails } from '../types/movie'
import TrailerModal from './TrailerModal'
import WatchProviders from './WatchProviders'
import RatingProviders from './RatingProviders'
import AddToFavBtn from './AddToFavBtn'

const MovieHero = ({ movie }: { movie: MovieDetails }) => {


    let imgSrc = "/images/poster.jpg"

    const tmdpImg = movie?.poster_path !== null || undefined || "" ? movie?.poster_path : movie?.backdrop_path
    if (tmdpImg) {
        imgSrc = `https://image.tmdb.org/t/p/w780/${tmdpImg}`

    }
    return (
        <div className="relative ">
            <div className="z-0 rounded-2xl absolute w-full h-full bg-blued-200  bg-cover bg-center bg-black/50 bg-blend-darken opacity-35" style={{ backgroundImage: `url('${imgSrc}') ` }}></div>

            <div className="z-10  flex flex-col lg:flex-row py-6 lg:py-24 px-4  lg:px-12 relative" >

                <div className="flex-1 px-0 sm:px-16 md:px-42 lg:px-0">



                    <figure className='relative aspect-2/3  rounded-2xl overflow-clip'>
                        <img
                            src={imgSrc}
                            alt="Movie 1"
                            className="w-full h-full object-cover "
                        />
                        <div className="absolute -top-4 -left-1 ">
                            <AddToFavBtn movie={movie} />
                        </div>
                        <div className=" ">
                            <TrailerModal videos={movie?.videos?.results} />
                        </div>
                    </figure>
                </div >

                <div className=" flex-3 px-0 py-8 lg:px-6 lg:py-6 flex flex-col  justify-between">
                    <div className=" flex flex-col gap-12">

                        <h2 className=' text-4xl md:text-6xl font-semibold '>{movie?.title ?? ""}</h2>

                        <div className="flex flex-col gap-8 md:gap-6 ">
                            <div className="flex text-base flex-wrap">
                                {movie?.release_date && <> <span className='pe-4 '>{movie.release_date}</span>
                                    <div className="border-e-3 border-primary  rotate-10"></div>
                                </>
                                }
                                <span className='px-4 '>{movie?.runtime ?? "0"} minutes</span>
                                {movie.genres?.length != 0 && <>
                                    <div className="border-e-3 border-primary rotate-10 mx-4"></div>
                                    {
                                        (movie?.genres) && movie.genres.map((g, i) => <span key={i} className='px-1'>{g.name}</span>)
                                    }
                                </>

                                }
                                <div className="border-e-3 border-primary rotate-10 mx-4 "></div>
                                <span className=' flex justify-center items-center gap-2'>
                                    <div className=" bg-[#F5C518] text-black min-w-5 min-h-5 mask mask-star  "></div>
                                    <span className=''>{movie?.vote_average ?? ""}</span>

                                </span>

                            </div>
                            <p className='text-lg font-normal max-w-[750px] line-clamp-6'>{movie?.overview ?? ""}</p>
                            <div className="flex gap-6 text-neutral-content">
                                <span className="">Country : {movie?.production_countries[0]?.name ? movie.production_countries[0].name : "unknown"}</span>
                                <span className="">Language : {movie?.original_language ? movie?.original_language : "unknown"}</span>
                            </div>
                            <div className="">
                                {(movie?.imdb_id != "" && movie?.imdb_id != undefined) && <RatingProviders imdb_id={movie.imdb_id} movieName={movie?.title ?? ""} />
                                }
                            </div>
                        </div>
                    </div>


                    <div className="mt-10">
                        {movie?.id && <WatchProviders movie_id={movie.id} />}


                    </div>

                </div>

            </div>

        </div >
    )
}

export default MovieHero