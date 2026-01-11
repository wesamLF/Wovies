import type { KnownFor } from '../types/actors'
import SectionTitle from './SectionTitle'
import MovieCard from './MovieCard'

const KnownForMovies = ({ cast }: { cast: KnownFor[] }) => {


    if (cast.length == 0) return

    let filteredCast = cast.filter((c) => {
        if (c.media_type == "movie" && c.order == 0 && c.poster_path != null) {
            return c
        }
       
    }
    ).slice(0, 10)
    if (filteredCast.length <= 4) {
        filteredCast = cast.filter((c) => c.media_type == "movie").slice(0, 10)
    }




    return (

        <div className="py-8">
            {filteredCast.length != 0 &&
                <div className="">
                    <SectionTitle title='Known For:' />


                    <div className="flex overflow-x-auto gap-4 py-4">
                        {filteredCast.map((movie, i) => (
                            <div className="w-[200px] min-w-[200px] " key={i}>
                                <MovieCard movieData={movie} />
                            </div>

                        ))}


                    </div>
                </div>
            }



        </div >
    )
}

export default KnownForMovies