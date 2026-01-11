"use client"

import { useEffect, useState } from "react"
import SectionTitle from "../components/SectionTitle"
import MovieCard from "../components/MovieCard"

const page = () => {

    const [myFavMovies, setMyFavMovies] = useState<any[]>([])

    useEffect(() => {
        const stored = localStorage.getItem("myfav")
        const favs = stored ? JSON.parse(stored) : []
        setMyFavMovies(favs)
    }, [])


    return (
        <div className="min-h-[60vh] py-12">
            <SectionTitle title={"My Favorites :"} />
            <div className='text-primary pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 '>
                {myFavMovies.map((fav) => (
                    <MovieCard key={fav.id} movieData={{
                        id: fav.id,
                        title: fav.title,
                        poster_path: fav.poster_path,
                        backdrop_path: fav.backdrop_path,
                        genre_ids: []
                    }} />
                ))}



            </div>
        </div>
    )
}

export default page