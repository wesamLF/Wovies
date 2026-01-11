import React from 'react'
import type { Cast } from '../types/movie'
import SectionTitle from './SectionTitle'
import ActorCard from './ActorCard'

const CastSection = ({ cast }: { cast: Cast[] }) => {

    if (cast.length == 0) return
    const filteredCast = cast.slice(0, 10)


    return (
        <div className=" ">
            {filteredCast.length != 0 &&
                <div className="">

                    <SectionTitle title='Cast:' />





                    <div className="flex overflow-x-auto gap-4 py-4 " >
                        {filteredCast.map((actor, i) => (
                            <div className="" key={i}>
                                <div className="w-[200px] min-w-[200px]" >
                                    <ActorCard ActorData={actor} />
                                </div>
                                <p className='text-sm text-neutral-content pt-2'>{actor?.character ?? ""}</p>
                            </div>


                        ))}


                    </div>

                </div>
            }



        </div >
    )
}

export default CastSection